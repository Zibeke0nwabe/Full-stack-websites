require('dotenv').config();
const express = require('express');
const path = require('path');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('Database connected successfully'))
  .catch(err => console.error('Database connection error:', err));

// User Schema
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fullName: { type: String, required: true },
  verificationCode: { type: String },
  codeExpires: { type: Date },
  isVerified: { type: Boolean, default: false },
  profileImage: { type: String, default: '/user.png' },
  language: { type: String, default: 'English' },
  customLanguage: { type: String },
  resetToken: { type: String },
  resetTokenExpires: { type: Date }
});

const User = mongoose.model('users', userSchema);

// Post Schema
const postSchema = new mongoose.Schema({
  question: { type: String, required: true },
  user: { type: String, required: true },
  comments: [{ text: String, date: { type: Date, default: Date.now } }],
  likes: { type: Number, default: 0 }
});

const Post = mongoose.model('posts', postSchema);

// Email setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../esgela/build')));

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../esgela/build', 'index.html'));
});

// Registration route
app.post('/register', async (req, res) => {
  const { email, password, fullName } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashedPassword, fullName });
    await user.save();

    const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
    const codeExpires = Date.now() + 3600000; // 1 hour

    user.verificationCode = verificationCode;
    user.codeExpires = codeExpires;
    await user.save();

    // Send verification email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Verify your email',
      text: `Your verification code is ${verificationCode}`
    };

    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        console.log('Error sending email:', error);
        return res.status(500).json({ message: 'Error sending verification email' });
      }
      res.status(200).json({ message: 'Registration successful. Please check your email to verify your account.' });
    });

  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Error registering user' });
  }
});

// Verification route
app.post('/verification', async (req, res) => {
  const { email, verificationCode } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    if (user.isVerified) {
      return res.status(400).json({ message: 'User is already verified' });
    }

    if (user.verificationCode !== verificationCode || Date.now() > user.codeExpires) {
      return res.status(400).json({ message: 'Invalid or expired verification code' });
    }

    user.isVerified = true;
    user.verificationCode = undefined;
    user.codeExpires = undefined;
    await user.save();

    res.status(200).json({ message: 'Email successfully verified' });
  } catch (error) {
    console.error('Verification error:', error);
    res.status(500).json({ message: 'Error verifying code' });
  }
});

// Login route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || !user.isVerified) {
      return res.status(400).json({ message: 'Invalid email or user not verified' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Error logging in' });
  }
});

// Request password reset code
app.post('/verify', async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    const resetToken = crypto.randomBytes(20).toString('hex');
    const resetTokenExpires = Date.now() + 3600000; // 1 hour

    user.resetToken = resetToken;
    user.resetTokenExpires = resetTokenExpires;
    await user.save();

    // Send reset code email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Password Reset Request',
      text: `Your password reset token is ${resetToken}`
    };

    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        console.log('Error sending email:', error);
        return res.status(500).json({ message: 'Error sending reset code' });
      }
      res.status(200).json({ message: 'Reset code sent to your email' });
    });

  } catch (error) {
    console.error('Password reset error:', error);
    res.status(500).json({ message: 'Error requesting password reset' });
  }
});

// Verify reset code
app.post('/verify-code', async (req, res) => {
  const { email, verificationCode } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    if (user.resetToken !== verificationCode || Date.now() > user.resetTokenExpires) {
      return res.status(400).json({ message: 'Invalid or expired reset code' });
    }

    res.status(200).json({ message: 'Code verified successfully' });
  } catch (error) {
    console.error('Verification code error:', error);
    res.status(500).json({ message: 'Error verifying code' });
  }
});

// Reset password
app.post('/reset-password', async (req, res) => {
  const { email, verificationCode, newPassword } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    if (user.resetToken !== verificationCode || Date.now() > user.resetTokenExpires) {
      return res.status(400).json({ message: 'Invalid or expired reset code' });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    user.resetToken = undefined;
    user.resetTokenExpires = undefined;
    await user.save();

    res.status(200).json({ message: 'Password reset successful' });
  } catch (error) {
    console.error('Reset password error:', error);
    res.status(500).json({ message: 'Error resetting password' });
  }
});

// Fetch all posts
app.get('/support', async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ message: 'Error fetching posts' });
  }
});

// Add a new post
app.post('/support', async (req, res) => {
  const { question, user } = req.body;

  try {
    const post = new Post({ question, user });
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    console.error('Error adding post:', error);
    res.status(500).json({ message: 'Error adding post' });
  }
});

// Add a comment to a post
app.post('/support/comments/:postId', async (req, res) => {
  const { comment } = req.body;
  const { postId } = req.params;

  try {
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    post.comments.push({ text: comment });
    await post.save();

    res.status(200).json(post);
  } catch (error) {
    console.error('Error adding comment:', error);
    res.status(500).json({ message: 'Error adding comment' });
  }
});

// User profile route
app.get('/profile', async (req, res) => {
  const { userId } = req.query;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error('Error fetching profile:', error);
    res.status(500).json({ message: 'Error fetching profile' });
  }
});

// Update profile route
app.post('/profile/update', async (req, res) => {
  // This is where you would implement authentication
  // For now, let's assume the userId is passed as a query parameter
  const { userId } = req.query;
  const { fullName, profileImage, language, customLanguage } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.fullName = fullName || user.fullName;
    user.profileImage = profileImage || user.profileImage;
    user.language = language || user.language;
    user.customLanguage = customLanguage || user.customLanguage;
    await user.save();

    res.status(200).json({ message: 'Profile updated successfully' });
  } catch (error) {
    console.error('Error updating profile:', error);
    res.status(500).json({ message: 'Error updating profile' });
  }
});

app.listen(3000, () => {
  console.log(`Server running on port ${PORT}`);
});