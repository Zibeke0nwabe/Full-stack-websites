// src/components/Html/Html.js
import React, { useState } from 'react';
import LessonSection from './LessonSection';
import CodingSection from './CodingSection';
import ResultsSection from './ResultsSection';
import TestSection from './TestSection'; // Import the TestSection component
import '../../App.css'; // Importing App.css


const Html = () => {
  const [code, setCode] = useState("");
  const [sectionIndex, setSectionIndex] = useState(0);
  const [showTest, setShowTest] = useState(false); // New state to show/hide the test

  const handleNextSection = () => {
    if (sectionIndex < 14) { // Assuming there are 15 sections (0-14)
      setSectionIndex(prevIndex => prevIndex + 1);
      setCode(""); // Clear the code state
    }
  };

  const handleSkipToTest = () => {
    setShowTest(true); // Show the test when the button is clicked
  };

  const handleBackToLessons = () => {
    setShowTest(false); // Hide the test and go back to lessons
  };

  return (
    <div className="flex flex-col items-center p-4">
      {!showTest ? (
        <main className="flex flex-row w-full pt-6 justify-between">
          <>
            <LessonSection sectionIndex={sectionIndex} />
            <CodingSection onCodeChange={setCode} />
            <ResultsSection code={code} clear={sectionIndex === 14} /> {/* Pass `clear` prop */}
          </>
        </main>
      ) : (
        <TestSection />
        
      )}
      <div className="button-container mt-4 flex justify-end space-x-4">
        {!showTest ? (
          <>
            <button
              className="skip-to-test-button bg-black text-white py-2 px-4 rounded"
              onClick={handleSkipToTest}
            >
              Skip to Test
            </button>
            <button
              className="next-button bg-yellow-500 text-white py-2 px-4 rounded"
              onClick={handleNextSection}
              disabled={sectionIndex === 14} // Disable 'Next' button on the last section
            >
              Next
            </button>
          </>
        ) : (
          <button
            className="back-to-lessons-button bg-gray-700 text-white py-2 px-4 rounded"
            onClick={handleBackToLessons}
          >
            Back to Lessons
          </button>
        )}
      </div>
      
    </div>
  );
};

export default Html;