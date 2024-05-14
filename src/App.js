import React, { useState } from 'react';
import './App.css'; // Import CSS for styling

function App() {
  // State to store the clicked number
  const [selectedNumber, setSelectedNumber] = useState(null);

  // Function to handle number click
  const handleNumberClick = (number) => {
    setSelectedNumber(number);
  };

  // Generate times table data
  const generateTimesTable = () => {
    const data = [];
    for (let i = 1; i <= 12; i++) {
      const row = [];
      for (let j = 1; j <= 12; j++) {
        row.push(i * j);
      }
      data.push(row);
    }
    return data;
  };

  // Render the times table grid
  const renderTimesTable = () => {
    const timesTableData = generateTimesTable();
    return (
      <table id="timesTable">
        <tbody>
          {timesTableData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className={cell === selectedNumber ? 'highlight' : ''}
                  onClick={() => handleNumberClick(cell)}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div className="App">
      <h1>Times Table</h1>
      {renderTimesTable()}
    </div>
  );
}

export default App;
