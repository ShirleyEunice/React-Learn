import React, { useState } from 'react'

const CharacterCounter = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    const handleText = (e)=>{
        let value = e.target.value;
        setText(value);

        const characterCount = value.replace(/\s/g,"").length;
        {/* /.../ - forward slashes indicate that what's inside is a regular expression.,
            /s - any whitespace character
            g - g stands for Global. Without g, only the first match is replaced. */}
        setCount(characterCount);

    }

  return (
    <div>
        <h1>Character Counter</h1>
        <input 
        type="text"
        value={text}
         onChange={handleText}
         placeholder='Enter text'/>
        <p>Count of character: {count}</p>
    </div>
  )
}

export default CharacterCounter