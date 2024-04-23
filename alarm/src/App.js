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
        const newSec = parseInt(sec) + 1;
        if (newSec === 60) {
          setSecVal('00'); 
          setMinVal(min => {
            const newMin = parseInt(min) + 1;
            if (newMin === 60) {
              setMinVal('00'); 
              setHourVal(hour => (hour === '23' ? '00' : ('0' + (parseInt(hour) + 1)).slice(-2)));
            } else {
              return ('0' + newMin).slice(-2);
            }
          });
        } else {
          return ('0' + newSec).slice(-2);
        }
      });
    }, 1000);
  
    setIntervalId(id); 
  };
  

  const handleStartClick = () => {
    if (!intervalId) {
      startTimer();
    }
  };

  const stopTimer = () => {
    clearInterval(intervalId); 
    setIntervalId(null); 
  };

  const resetTimer = () => {
    stopTimer();
    setHourVal('00'); 
    setMinVal('00'); 
    setSecVal('00'); 
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
