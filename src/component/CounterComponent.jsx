import React, { useState } from 'react'

const CounterComponent = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = ()=>{
        setCount(previousCount => previousCount + 1);
    }

    const handleDecrement = ()=>{
        if(count <= 0) return;
        setCount(previousCount => previousCount - 1);
    }

    const handleReset = ()=>{
        setCount(0);
    }
  return (
    <div>
      <h1>Count: {count}</h1>
      <div className='flex-1'>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default CounterComponent