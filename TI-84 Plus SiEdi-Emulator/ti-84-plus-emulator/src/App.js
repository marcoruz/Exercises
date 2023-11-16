import React, { useState } from 'react';
import './App.css';
import * as math from 'mathjs';


function App() {
  const [input, setInput] = useState(''); // Zustand für die Eingabe
  const [result, setResult] = useState(''); // Zustand für das Ergebnis

  const handleButtonPress = (value) => {
    setInput((prevInput) => prevInput + value); // Fügt den angeklickten Wert zur Eingabe hinzu
  };

  const handleClear = () => {
    setInput(''); // Löschen der Eingabe
    setResult(''); // Lösche das Ergebnis
  };

  const handleCalculate = () => {
    try {
      setResult(math.evaluate(input).toString());   // Ergebnis der Eingabe berechnen
    } catch (error) {
      setResult('Error');  // Bei Fehler setze das Ergebnis auf "Error"
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleCalculate();
    }
  };

  return (
    <div className="calculator">
      <div className="Eingabe">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button className="clear-button" onClick={handleClear}>
          C 
        </button>
      </div>    {/* Eingabebuttons*/}
      <div className="buttons">
        <button onClick={() => handleButtonPress('7')}>7</button>
        <button onClick={() => handleButtonPress('8')}>8</button>
        <button onClick={() => handleButtonPress('9')}>9</button>
        <button onClick={() => handleButtonPress('+')}>+</button>

        <button onClick={() => handleButtonPress('4')}>4</button>
        <button onClick={() => handleButtonPress('5')}>5</button>
        <button onClick={() => handleButtonPress('6')}>6</button>
        <button onClick={() => handleButtonPress('-')}>-</button>

        <button onClick={() => handleButtonPress('1')}>1</button>
        <button onClick={() => handleButtonPress('2')}>2</button>
        <button onClick={() => handleButtonPress('3')}>3</button>
        <button onClick={() => handleButtonPress('*')}>*</button>

        <button onClick={() => handleButtonPress('0')}>0</button>
        <button onClick={() => handleButtonPress('.')}>.</button>
        <button onClick={handleCalculate}>=</button> {/* Gleichheits-Button zum Berechnen */}
        <button onClick={() => handleButtonPress('/')}>/</button>
        </div>
      <div className="result">{result}</div> {/* Anzeigefeld für das Ergebnis */}
    </div>
  );
}

export default App;