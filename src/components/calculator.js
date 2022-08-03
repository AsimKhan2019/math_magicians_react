import React, { Component } from 'react';

class Calculator extends Component {
  render() {
    // reference as a js object
    const createDigits = () => {
      const digits = [];

      for (let i = 1; i < 10; i += 1) {
        digits.push(
          <button
            type="button"
            key={i}
          >
            {i}
          </button>,
        );
      }
      return digits;
    };

    return (
      <div className="calculator">
        <div className="display">
          0
        </div>

        <div className="simpleOperators">
          <button type="button">AC</button>
          <button type="button">+/-</button>
          <button type="button">%</button>
        </div>
        <div className="operators">
          <button type="button">/</button>
          <button type="button">*</button>
          <button type="button">+</button>
          <button type="button">-</button>
          <button type="button">=</button>
        </div>

        <div className="digits">
          { createDigits() }
          <button type="button">0</button>
          <button type="button">.</button>
        </div>
      </div>
    );
  }
}

export default Calculator; // export Calculator component
