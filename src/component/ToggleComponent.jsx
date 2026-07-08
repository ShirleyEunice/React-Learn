import React, { useState } from 'react'

const ToggleComponent = () => {
    const [status, setStatus] = useState(false);

    const handleToggle = ()=>{
        setStatus(setPrev => !setPrev);
    }
  return (
    <div>
        <h1>Status: {status ? "Off" : "On"}</h1>
        <button onClick={handleToggle}>{status ? "Turn On" : "Turn Off"}</button>
    </div>
  )
}

export default ToggleComponent