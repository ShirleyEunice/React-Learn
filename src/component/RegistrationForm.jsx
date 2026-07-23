import React, { useState } from 'react'

const RegistrationForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState({});
    const [successMessage, setSuccessMessage] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();

        let validationError = {};

        //Name
        if(!name.trim()){
            validationError.name = "Name is required.";
        }

        //Email
        if(!email.trim()){
            validationError.email = "Email is required";
        }

        //Password
        if(!password ){
            validationError.password = "Password is required";
        }else if(password.length < 8){
            validationError.password = "Password must be atleast 8 characters."
        }else if(password.length > 20){
            validationError.password = "Password must not exceed 20 characters."
        }else if(!/[A-Z]/.test(password)){
            validationError.password = "Password must contain at least one uppercase letter"
        }else if(!/[a-z]/.test(password)){
            validationError.password = "Password must contain at least one lowercase letter"
        }else if(!/[0-9]/.test(password)){
            validationError.password = "Password must contain at least one number"
        }else if(!/[!@#$%^&*(),.?":{}|<>]/.test(password)){
            validationError.password = "Password must contain at least one special character."
        }else if(/\s/.test(password)){
            validationError.password = "Password must not contain spaces."
        }

         if(!confirmPassword ){
            validationError.confirmPassword = "Confirm Password is required";
        }else if(confirmPassword.length < 6){
            validationError.confirmPassword = "Confirm Password must be atleast 6 characters."
        }

        if(password && confirmPassword && password !== confirmPassword){
            validationError.confirmPassword = "Password should be same."
        }

        //Error
        if(Object.keys(validationError).length > 0){
            setError(validationError);
            setSuccessMessage("");
            return;
        }

        //success
        setSuccessMessage("Registration is successful");
        setError({});

        setName("");
        setEmail("")
        setPassword("");
        setConfirmPassword("");
    }

  return (
    <div style={{ width: "350px", margin: "30px auto" }}>
      <h2>Registration Form</h2>
      <form action="" onSubmit={handleSubmit}>
        <div style={{marginBottom: "15px"}}>
          <label htmlFor="">Name</label>
          <br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {error.name && (
            <p style={{color:"red"}}>{error.name}</p>
          )}
        </div>

        <div style={{marginBottom: "15px"}}>
          <label htmlFor="">Email</label>
          <br />
          <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {error.email && (
            <p style={{color:"red"}}>{error.email}</p>
          )}
        </div>
        

        <div style={{marginBottom: "15px"}}>
          <label htmlFor="">Password</label>
          <br />
          <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error.password && (
            <p style={{color:"red"}}>{error.password}</p>
          )}
        </div>

        <div style={{marginBottom: "15px"}}>
          <label htmlFor="">Confirm Password</label>
          <br />
          <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {error.confirmPassword && (
            <p style={{color:"red"}}>{error.confirmPassword}</p>
          )}
        </div>
        
        <button type='submit'>Submit</button>
      </form>
      {
        successMessage && (
            <p style={{color: "green"}}>{successMessage}</p>
        )
      }
    </div>
  );
}

export default RegistrationForm