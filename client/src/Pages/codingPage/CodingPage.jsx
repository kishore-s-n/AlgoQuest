import React, { useState, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import axios from 'axios';
import Split from 'split.js';
import './CodingPage.css';

const CodingPage = () => {
  const [code, setCode] = useState('// Write your code here...');
  const [language, setLanguage] = useState('java');
  const [output, setOutput] = useState('');

  const languageOptions = {
    java: 'java',
    python: 'python',
    cpp: 'cpp',
  };

  const handleCodeChange = (newCode) => {
    setCode(newCode);
  };

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

  useEffect(() => {
    Split(['.left-panel', '.right-panel'], {
      sizes: [40, 60],
      minSize: 300,
      gutterSize: 10,
    });

    Split(['.code-section', '.test-section'], {
      direction: 'vertical',
      sizes: [70, 30],
      minSize: 200,
      gutterSize: 10,
    });
  }, []);

  return (
    <div className="container">
      <div className="split-container">
        {/* Left Panel for Problem Statement */}
        <div className="left-panel">
          <h2>Problem Title</h2>
          <p>
            Given an array of integers, return indices of the two numbers such that they add up to a specific target.
            You may assume that each input would have exactly one solution, and you may not use the same element twice.
          </p>
          <p><b>Example:</b> nums = [2,7,11,15], target = 9 ➡ Output: [0,1]</p>
        </div>

        {/* Right Panel with Code Editor and Output Section */}
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
            <div className="content">
              <pre>{output || 'Output will be displayed here...'}</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodingPage;
