import React, { useState } from 'react';
import './App.css';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  // Helper function to validate inputs
  const validateInputs = () => {
    if (num1 === '' || num2 === '') {
      alert("Please enter both numbers");
      return false;
    }
    return true;
  };

  // Operation Functions
  const handleAddition = () => {
    if (validateInputs()) setResult(parseFloat(num1) + parseFloat(num2));
  };

  const handleSubtraction = () => {
    if (validateInputs()) setResult(parseFloat(num1) - parseFloat(num2));
  };

  const handleMultiplication = () => {
    if (validateInputs()) setResult(parseFloat(num1) * parseFloat(num2));
  };

  const handleDivision = () => {
    if (validateInputs()) {
      if (parseFloat(num2) === 0) {
        setResult("Cannot divide by zero");
      } else {
        setResult(parseFloat(num1) / parseFloat(num2));
      }
    }
  };

  return (
    <div className="app-container">
      <div className="calculator-box">
        <h2>React Calculator</h2>

        <div className="input-group">
          <input
            type="number"
            placeholder="Enter first number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
          />
          <input
            type="number"
            placeholder="Enter second number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
          />
        </div>

        <div className="button-group">
          <button onClick={handleAddition}>+</button>
          <button onClick={handleSubtraction}>-</button>
          <button onClick={handleMultiplication}>×</button>
          <button onClick={handleDivision}>÷</button>
        </div>

        {result !== null && (
          <div className="result-display">
            Result: {result}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;