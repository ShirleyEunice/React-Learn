import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let validationError = {};

    //Email validation
    if(!email.trim()){
        validationError.email = 'Email is Required';
    }

    //Password validation
    if(!password){
        validationError.password = 'Password is Required';
    }else if(password.length < 6){
        validationError.password = 'Password must be atleast 6 characters.'
    }

    if(Object.keys(validationError).length > 0){
        setError(validationError);
        setSuccessMessage("");
        return;
    }

    //success
    setSuccessMessage("Login Successful");
    setError({});

    console.log({
        email, password
    })

    setEmail("");
    setPassword("");
    
  };
  return (
    <div style={{ width: "350px", margin: "30px auto" }}>
      <h2>Login Form</h2>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label>Email</label>
          <br />

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error.email && (
            <p style={{color: "red"}}>{error.email}</p>
          )}
          
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Password</label>
          <br />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error.password && (
            <p style={{color: "red"}}>{error.password}</p>
          )}

          
        </div>

        <button type="submit">Login</button>
      </form>
      {successMessage && (
        <h3 style={{color: "green"}}>{successMessage}</h3>
      )}
      
    </div>
  );
};

export default LoginForm;
