import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Myinfo from './components/Myinfo';
import FeaturedProjects from './components/FeaturedProjects';
import Services from './components/Services';
import Footer from './components/Footer';
import ProjectDetails from './components/ProjectDetails';


const projects = [
  {
    id: '1',
    title: 'Esgela',
    description: 'An interactive web development learning platform in progress.',
    detailedDescription: 'Esgela is a platform designed to teach and assess web development skills. It features course selection, interactive coding environments, testing, and certification. The project includes secure user authentication and is built using React, Node.js, Express, MongoDB, and TailwindCSS.',
    image: 'images/esgela3.png',
    tools: ['ReactJS', 'Node.js', 'Express', 'MongoDB', 'TailwindCSS'],
    website: 'https://github.com/Onwabe23/React-Projects/tree/main/FULL%20STACK%20ESGELA',
    github: 'https://github.com/Onwabe23/React-Projects/tree/main/FULL%20STACK%20ESGELA',
    experience: 'Developing Esgela has been a significant learning journey for me. Working on this project has allowed me to turn an abstract idea into a functional reality. Through this process, I’ve gained valuable experience in React and other technologies, which has greatly enhanced my development skills. The project has also taught me the importance of thorough research and the iterative process of software development.',
    challenges: 'One of the key challenges was integrating AceEditor into the application. It required in-depth research to understand its features and how to effectively implement it within my project. I had to explore various resources and documentation to get a grasp on integrating this tool, which involved a steep learning curve but ultimately contributed to my growth as a developer.',
    codeSnippet: 'import React from \'react\';\nimport AceEditor from "react-ace";\nimport "ace-builds/src-noconflict/mode-javascript";\nimport "ace-builds/src-noconflict/theme-monokai";\n\nconst CodeEditor = ({ value, onChange }) => {\n  return (\n    <AceEditor\n      mode="javascript"\n      theme="monokai"\n      name="code_editor"\n      value={value}\n      onChange={onChange}\n      editorProps={{ $blockScrolling: true }}\n      setOptions={{ useWorker: false }}\n      width="100%"\n      height="400px"\n    />\n  );\n};\n\nexport default CodeEditor;',
    codeImage: 'images/esgela2.png',
  },
  {
    "id": "2",
    "title": "Student Application Management System",
    "description": "An online application system for student submissions and secure login.",
    "detailedDescription": "This platform allows users to submit forms, receive a unique student number, and log in securely. It includes dynamic content rendering with EJS and is built using Node.js, Express, MongoDB, and TailwindCSS. Additionally, the system features an admin section where authorized administrators can log in securely to access and manage all student data. This includes viewing student usernames, tracking submission details, and reviewing uploaded files such as ID copies and certificates.",
    "image": "images/apply1.png",
    "tools": ["Node.js", "Express", "MongoDB", "EJS", "TailwindCSS"],
    "website": "https://www.esgela.onrender.com/",
    "github": "https://github.com/Onwabe23/esgela/tree/main/esgela",
    "experience": "This project marked my first full-stack website development. It provided me with hands-on experience in connecting frontend and backend technologies, utilizing EJS to dynamically render content, and applying my foundational skills in HTML, CSS, JavaScript, and Tailwind CSS.",
    "challenges": "Connecting the backend with the frontend was initially challenging. I overcame this by learning and implementing EJS for dynamic content rendering, which was a significant learning step that eventually led me to explore React for more advanced frontend development.",
    "motivationForReact": "React’s component-based architecture, declarative syntax, efficient updates, and rich ecosystem motivated me to learn it. I wanted a more powerful and flexible solution for building interactive UIs, which I successfully applied in my next project, Esgela.",
    "codeSnippet": "const express = require(\"express\");\nconst app = express();\napp.set(\"view engine\", \"ejs\");\napp.get(\"/\", (req, res) => {\n  res.render(\"index\");\n});\napp.listen(3000);\n",
    "codeImage": "images/apply2.png"
},  
  {
    "id": "3",
    "title": "PSJ Tour Guider",
    "description": "A website created for a client to showcase tours in Port St. Johns.",
    "detailedDescription": "The PSJ Tour Guider website features an engaging hero section, detailed service descriptions, an interactive gallery, a portfolio section showcasing previous tours, a FAQ section, and a contact form. It was built using React and styled with TailwindCSS. The site also includes a feature for receiving emails via Nodemailer.",
    "image": "images/mrGu.png",
    "tools": ["ReactJS", "TailwindCSS", "Nodemailer"],
    "website": "https://gugu-ba8e9.web.app",  
    "github": "https://github.com/Onwabe23/React-Projects/tree/main/gugu-tour-guide",  
    "experience": "Working on the PSJ Tour Guider website taught me not only about coding but also how to work closely with a client. Converting a client's idea into an impressive website with limited instructions was a valuable experience. I learned how to manage client expectations and deliver a product that exceeded their vision. Additionally, integrating Nodemailer for email functionality was a new skill I acquired during this project.",
    "challenges": "One of the main challenges was working with limited instructions from the client. It required creative problem-solving to produce an impressive final product. Another challenge was integrating Nodemailer to handle email functionalities, which was a new experience for me. Despite these challenges, the project was rewarding and contributed significantly to my growth as a developer.",
    "codeSnippet":`
              import React from 'react';
              import { FaWhatsapp, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
              import Navbar from './Navbar';

              const HeroSection = () => {
                return (
                  <div
                    className="relative bg-cover bg-center h-screen"
                    style={{ backgroundImage: "url('/image24.jpg')" }}
                  >
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-75"></div>
                    {/* Navbar Component */}
                    <Navbar />
                    {/* Hero Content */}
`,  
    "codeImage": "images/mrGu2.png"  
  },

  {
    id: '4',
    title: 'Football Fixture Generator App',
    description: 'A web application for managing sports tournaments and leagues.',
    detailedDescription: 'This application is designed for creating and managing sports tournaments and leagues. It features data persistence using LocalStorage and includes functionalities for scheduling games. The frontend is built using HTML, CSS, and JavaScript.',
    image: 'images/ball.png',
    tools: ['HTML', 'CSS', 'JavaScript', 'LocalStorage'],
    website: 'https://fixtureapp-e3601.web.app/',
    challenges: 'What was challenging about this website was implementing the team pair function and align every game with time',
    github: 'https://github.com/Onwabe23/HTML-CSS-JAVASCRIPT-altogether/tree/main/Football%20Fixture%20Maker',
    experience: 'This project was a significant learning experience where I applied my knowledge of JavaScript, HTML, and CSS to build a web application. It helped me understand how to connect frontend elements with JavaScript to create a dynamic user interface.',
    learningResources: 'I would like to thank Supersimpledev for their practical lessons and exercises, which were extremely helpful in my learning process. Additionally, Codecademy’s free version and Supersimpledev’s YouTube channel provided valuable insights and practical knowledge.',
    codeSnippet: `
          function createTournament() {
          var tournamentName = prompt("Enter the name of the tournament:");
          var numberOfTeams = prompt("Enter the number of teams:");
          var teamNames = [];
          for (var i = 0; i < numberOfTeams; i++) {
              var teamName = prompt("Enter team " + (i + 1) + " name:");
              teamNames.push(teamName);
          }

          var pairings = generatePairings(teamNames);
          sessionStorage.setItem('tournamentName', tournamentName);
          sessionStorage.setItem('pairings', JSON.stringify(pairings));
          window.location.href = 'pairings.html';
      }

      function generatePairings(teams) {
          var pairings = [];
          for (var i = 0; i < teams.length; i += 2) {
              if (i + 1 < teams.length) {
                  pairings.push(teams[i] + " vs " + teams[i + 1]);
              } else {
                  pairings.push(teams[i] + " has no opponent.");
              }
          }
          return pairings;
      }
    `,
    codeImage: 'images/ball2.png',
  },
  {
    "id": "5",
    "title": "Image Protector",
    "description": "A tool for securely storing and downloading images.",
    "detailedDescription": "Image Protector is a web application that allows users to upload, securely store, and download images. The app leverages LocalStorage for data management, ensuring that images are stored on the user's device with ease of access and retrieval. Built with HTML, CSS, and JavaScript, the application features a user-friendly interface that makes managing images simple and efficient.",
    "image": "images/save.png",
    "tools": ["HTML", "CSS", "JavaScript"],
    "website": "https://arpanet-45562.web.app/",
    "github": "https://github.com/Onwabe23/HTML-CSS-JAVASCRIPT-altogether/tree/main/ImageSaver",
    "experience": "This project enhanced my understanding of LocalStorage and how it can be used to manage data in web applications. I also learned how to create a secure environment for file management using HTML, CSS, and JavaScript.",
    "challenges": "One of the key challenges was ensuring the secure storage of images and providing a seamless download experience for users.",
    "learningResources": "Supersimpledev’s tutorials and Codecademy's resources were instrumental in helping me understand the nuances of web development and secure data storage.",
    "codeSnippet": `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Home</title>
          <link rel="stylesheet" href="styles.css">
          <link rel="stylesheet" href="homestyle.css">
      </head>
      <body>
      <div class="container">
          <main>
              <div class="para">
                  <h1>It's not just Images, <span>It's memories</span> <br/>that are worth to be saved and protected.</h1>
              </div>
              <p>Create an account and save your memories</p>
            <a href="login.html"><button class="home-btn">Get Started</button></a>
          </main>
          <div class="content1">
              <h1>About Images</h1>
          </div>
      </div>
      </body>
      </html>
    `,
    "codeImage": "images/save.png"
  }
  

];

const App = () => {
  return (
    <Router>
      <div className="font-sans">
        <Navbar />
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Hero />
                <About />
                <Myinfo/>
                <FeaturedProjects projects={projects} />
                <Services />
                <Footer />
              </>
            } 
          />
          <Route 
            path="/project/:id" 
            element={<ProjectDetails projects={projects} />} 
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;