import React, { useState } from 'react'

const PasswordToggle = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");
  return (
    <div>
        <h1>Password Toggle</h1>
        <input 
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={(e)=> setPassword(e.target.value)}
         />
         <label htmlFor="">
            <input 
        type="checkbox"
        checked={showPassword}
        onChange={(e)=> setShowPassword(e.target.checked)} />{showPassword ? "Hide Password" : "Show Password"}
         </label>
        
    </div>
  )
}

export default PasswordToggle