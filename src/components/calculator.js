import React, { Component } from 'react';
import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
    this.showAnswer = this.showAnswer.bind(this);
  }

  handleClick = (e) => {
    const answer = calculate(this.state, e.target.textContent);
    this.setState(answer);
  };

  showAnswer = (e) => {
    this.setState({ total: e.target.textContent });
  };

  render() {
    // reference as a js object
    const createDigits = () => {
      const digits = [];

      for (let i = 1; i < 10; i += 1) {
        digits.push(
          <button
            type="button"
            onClick={this.handleClick}
            key={i}
          >
            {i}
          </button>,
        );
      }
      return digits;
    };

    const { total, next, operation } = this.state;
    return (
      <div className="calculator">
        <div className="display" onChange={this.showAnswer}>
          {total}
          {operation}
          {next}
        </div>

        <div className="simpleOperators">
          <button type="button" onClick={this.handleClick}>AC</button>
          <button type="button" onClick={this.handleClick}>+/-</button>
          <button type="button" onClick={this.handleClick}>%</button>
        </div>
        <div className="operators">
          <button type="button" onClick={this.handleClick}>&#247;</button>
          <button type="button" onClick={this.handleClick}>x</button>
          <button type="button" onClick={this.handleClick}>-</button>
          <button type="button" onClick={this.handleClick}>+</button>
          <button type="button" onClick={this.handleClick}>=</button>
        </div>

        <div className="digits">
          { createDigits() }
          <button type="button" onClick={this.handleClick}>0</button>
          <button type="button" onClick={this.handleClick}>.</button>
        </div>
      </div>
    );
  }
}

export default Calculator; // export Calculator component
