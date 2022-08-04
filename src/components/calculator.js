import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    const answer = calculate(state, e.target.textContent);
    setState(answer);
  };

  const showAnswer = (e) => {
    setState({ total: e.target.textContent });
  };

  const createDigits = () => {
    const digits = [];

    for (let i = 1; i < 10; i += 1) {
      digits.push(
        <button
          type="button"
          onClick={handleClick}
          key={i}
        >
          {i}
        </button>,
      );
    }
    return digits;
  };

  const { total, next, operation } = state;
  return (
    <div className="calculator">
      <div className="display" onChange={showAnswer}>
        {total}
        {operation}
        {next}
      </div>

      <div className="simpleOperators">
        <button type="button" onClick={handleClick}>AC</button>
        <button type="button" onClick={handleClick}>+/-</button>
        <button type="button" onClick={handleClick}>%</button>
      </div>
      <div className="operators">
        <button type="button" onClick={handleClick}>&#247;</button>
        <button type="button" onClick={handleClick}>x</button>
        <button type="button" onClick={handleClick}>-</button>
        <button type="button" onClick={handleClick}>+</button>
        <button type="button" onClick={handleClick}>=</button>
      </div>

      <div className="digits">
        { createDigits() }
        <button type="button" onClick={handleClick}>0</button>
        <button type="button" onClick={handleClick}>.</button>
      </div>
    </div>
  );
};

export default Calculator; // export Calculator component
