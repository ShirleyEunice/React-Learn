import React, { useState } from 'react'
import UserCard from '../child/UserCard';
const users= {
    name: "Rahul",
    age:25,
    role: "Frontend Developer"
};

const Parent = () => {
    const [message, setMessage] = useState("");

    const handleNotify = (data)=>{
        setMessage(data);
    }
  return (
    <div>
        <h1>Parent Component</h1>
        <p>{message ? `Message: ${message}` : "No message yet."}</p>
        <UserCard name={users.name} age={users.age} role={users.role} onNotify={handleNotify}/>
    </div>
  )
}

export default Parent