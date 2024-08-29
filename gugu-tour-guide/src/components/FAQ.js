import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const FAQ = () => {
  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  const faqs = [
    {
      question: 'What tours do you offer?',
      answer: 'We offer a variety of tours including nature walks, cultural experiences, and historical site visits in Port St. Johns.',
    },
    {
      question: 'How can I book a tour?',
      answer: 'You can book a tour by contacting us via phone or email, or by filling out the contact form on our website.',
    },
    {
      question: 'What are the payment options?',
      answer: 'We accept payments via credit card, bank transfer, and cash.',
    },
    {
      question: 'Are tours available year-round?',
      answer: 'Yes, our tours are available year-round, but we recommend booking in advance during peak seasons.',
    },
    {
      question: 'Do you offer custom tour packages?',
      answer: 'Yes, we can create custom tour packages tailored to your interests and schedule.',
    },
    {
      question: 'Is transportation provided?',
      answer: 'Transportation can be arranged for an additional fee. Please contact us for more details.',
    },
  ];

  return (
    <section id="faq" className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="max-w-4xl mx-auto"> {/* Increased width by changing max-w-3xl to max-w-4xl */}
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 border-b border-gray-300">
              <button
                onClick={() => toggle(index)}
                className="w-full text-left text-lg font-medium text-gray-900 bg-white py-4 px-6 focus:outline-none flex justify-between items-center">
                {faq.question}
                <FontAwesomeIcon 
                  icon={open === index ? faChevronUp : faChevronDown} 
                  className="text-gray-700"
                />
              </button>
              {open === index && (
                <div className="py-4 px-6 bg-white">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;