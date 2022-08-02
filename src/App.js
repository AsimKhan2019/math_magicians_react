function App() {
  const createDigits = () => {
    const digits = [];

    for (let i = 1; i < 10; i += 1) {
      digits.push(
        <button type="button" key={i}>{i}</button>,
      );
    }
    return digits;
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          0
        </div>

        <div className="operators">
          <button type="button">/</button>
          <button type="button">*</button>
          <button type="button">+</button>
          <button type="button">-</button>

          <button type="button">AC</button>
        </div>

        <div className="digits">
          { createDigits() }
          <button type="button">0</button>
          <button type="button">.</button>

          <button type="button">=</button>
        </div>
      </div>

    </div>
  );
}

export default App;
