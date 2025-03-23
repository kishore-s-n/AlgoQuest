import React, { useState, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import axios from 'axios';
import Split from 'split.js';
import './CodingPage.css';

const Example = ({ input, output, description }) => {
  return (
    <div className="example">
      <p><b>Input:</b> {input}</p>
      <p><b>Output:</b> {output}</p>
      <p><b>Description:</b> {description}</p>
    </div>
  );
};

const cases = {
  case1: { nums: [1, 2, 2, 3, 3], expected_ans: 3 },
  case2: { nums: [1, 1, 1, 1], expected_ans: 1 },
  case3: { nums: [], expected_ans: 0 },
  case4: { nums: [1, 2, 3, 4, 5], expected_ans: 5 },
};

const CodingPage = () => {
  const [code, setCode] = useState('// Write your code here...');
  const [language, setLanguage] = useState('java');
  const [output, setOutput] = useState('');
  const [selectedCase, setSelectedCase] = useState(null);
  const difficulty = 'Medium';

  const languageOptions = {
    java: 'java',
    python: 'python',
    cpp: 'cpp',
  };

  const getDifficultyClass = (level) => {
    switch (level) {
      case 'Easy': return 'easy';
      case 'Medium': return 'medium';
      case 'Hard': return 'hard';
      default: return '';
    }
  };

  const handleCodeChange = (newCode) => setCode(newCode);

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
    setCode('// Write your code here...');
  };

  const handleExecute = async () => {
    try {
      const response = await axios.post('http://localhost:5000/execute', { code, language });
      setOutput(response.data.output);
    } catch (error) {
      setOutput('Error: Unable to execute code');
    }
  };

  const handleCaseSelect = (caseKey) => {
    setSelectedCase(caseKey);
  };

  useEffect(() => {
    Split(['.left-panel', '.right-panel'], { sizes: [40, 60], minSize: 300, gutterSize: 12, gutterClassName: 'gutter-horizontal' });
    Split(['.code-section', '.test-section'], { direction: 'vertical', sizes: [60, 40], minSize: 100, gutterSize: 12, gutterClassName: 'gutter-vertical' });
  }, []);

  const examples = [
    { input: 'nums = [1,1,2]', output: '[1,2]', description: 'Removes duplicates and returns unique values.' },
    { input: 'nums = [0,0,1,1,1,2,2,3,3,4]', output: '[0,1,2,3,4]', description: 'Handles a larger array with multiple duplicates.' },
    { input: 'nums = [2,7,11,15], target = 9', output: '[0,1]', description: 'Finds two numbers that sum up to the target.' }
  ];

  return (
    <div className="container">
      <div className="split-container">
        <div className="left-panel">
          <div className='title'>
            <h3 className="problem-title">Remove Duplicates from Sorted Array</h3>
            <span className={`difficulty ${getDifficultyClass(difficulty)}`}>{difficulty}</span>
          </div>
          <p className='description'>
            Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Return the number of unique elements in nums.
          </p>
          <div className='examples-section'>
            <h4>Examples:</h4>
            {examples.map((ex, index) => (
              <Example key={index} input={ex.input} output={ex.output} description={ex.description} />
            ))}
          </div>
        </div>

        <div className="right-panel">
          <div className="code-section">
            <div className="header">
              <select onChange={handleLanguageChange} className="language-select">
                {Object.keys(languageOptions).map((lang) => (
                  <option key={lang} value={lang}>{lang.toUpperCase()}</option>
                ))}
              </select>
              <button onClick={handleExecute} className="button-submit">Run Code</button>
            </div>
            <Editor
              height="70vh"
              theme="vs-light"
              language={languageOptions[language]}
              value={code}
              onChange={handleCodeChange}
              options={{
                selectOnLineNumbers: true,
                minimap: { enabled: true },
                cursorBlinking: 'blink',
                cursorStyle: 'line',
              }}
            />
          </div>

          <div className="test-section">
            <div className="header">Output</div>
            {/* <div className="content">
              <pre>{output || 'Output will be displayed here...'}</pre>
            </div> */}
            <div className="case-buttons">
              {Object.keys(cases).map((key) => (
                <button key={key} onClick={() => handleCaseSelect(key)} className="case-btn">
                  {key.toUpperCase()}
                </button>
              ))}
            </div>
            {selectedCase && (
              <div className="case-display">
                <p><b>Input:</b> {JSON.stringify(cases[selectedCase].nums)}</p>
                <p><b>Expected Answer:</b> {cases[selectedCase].expected_ans}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodingPage;