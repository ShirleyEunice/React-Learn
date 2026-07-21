import React, { useState } from 'react'
import { useEffect } from 'react';

const Timer = () => {
    const [time, setTime] = useState(0);
    const [reset, setReset] = useState(false);

    useEffect(() => {
        if(reset){
            const intervalId = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
      return () => clearInterval(intervalId);
        } 
    }, [reset]);

  const handleStart = () => {
    setReset(true);
  };

  const handleStop = ()=>{
    setReset(false);
  }
  const handleReset = ()=>{
    setTime(0);
    setReset(false);
  }

  return (
    <div>
        <h1>Timer</h1>
        <p>Time: {time}</p>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default Timer