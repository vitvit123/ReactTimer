import './App.css';
import React, { useState } from 'react';

function App() {
  const [houVal, setHourVal] = useState('00');
  const [minVal, setMinVal] = useState('00');
  const [secVal, setSecVal] = useState('00');
  const [intervalId, setIntervalId] = useState(null); // State variable to store the interval ID

  const startTimer = () => {
    const id = setInterval(() => {
      setSecVal(sec => {
        if (sec === 59) {
          setMinVal(min => {
            if (min === 59) {
              setHourVal(hour => (hour === '23' ? '00' : ('0' + (parseInt(hour) + 1)).slice(-2)));
              return '00';
            } else {
              return ('0' + (parseInt(min) + 1)).slice(-2);
            }
          });
          return '00';
        } else {
          return ('0' + (parseInt(sec) + 1)).slice(-2);
        }
      });
    }, 1000);

    setIntervalId(id); // Store the interval ID in state
  };

  const handleStartClick = () => {
    if (!intervalId) { // Check if the interval is not already running
      startTimer();
    }
  };

  const stopTimer = () => {
    clearInterval(intervalId); // Clear the interval using the stored interval ID
    setIntervalId(null); // Reset the interval ID in state
  };

  const resetTimer = () => {
    stopTimer(); // Stop the timer if it's running
    setHourVal('00'); // Reset hours to '00'
    setMinVal('00'); // Reset minutes to '00'
    setSecVal('00'); // Reset seconds to '00'
  };

  return (
    <div className='container'>
      <center>
        <div className='button'>
          <button id='btnStart' onClick={handleStartClick}>Start</button>
          <button id='btnStop' onClick={stopTimer}>Stop</button>
          <button id='btnReset' onClick={resetTimer}>Reset</button>
        </div>

        <div className='ContainTimer'>
          <div id='HourContain'>
            <span id='HouVal'>{houVal}</span>
            <p>hrs</p>
          </div>
          <div>:</div>
          <div id='MinuteContain'>
            <span id='MinVal'>{minVal}</span>
            <p>min</p>
          </div>
          <div>:</div>
          <div id='SecondContain'>  
            <span id='SecVal'>{secVal}</span>
            <p>sec</p>
          </div>
        </div>
      </center>
    </div>
  );
}

export default App;
