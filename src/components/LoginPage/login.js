import React, { useState } from "react";
import ReactDOM from "react-dom";
import { loginUser } from "../../actions/user_action";
import "./style.css";

function LoginPage() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    console.log(uname.value);
    console.log(pass.value);

    const dataToSubmit={
     email:uname.value,
      password:pass.value
    }

    // Find user login info
    //const userData = database.find((user) => user.username === uname.value);
   loginUser(dataToSubmit)
   .then(response => {
    if (response.payload.loginSuccess) {
      window.localStorage.setItem('userId', response.payload.userId);
        window.localStorage.setItem('name', response.payload.name);
      window.location.href = "/";
    } else {
      alert('Check out your Account or Password again')
    }
   }) 
   
   .catch(err => {
     alert('Check out your Account or Password again')
     setTimeout(() => {
       alert("")
     }, 3000);
   });
   

    // Compare user info
    // if (userData) {
    //   if (userData.password !== pass.value) {
    //     // Invalid password
    //     setErrorMessages({ name: "pass", message: errors.pass });
    //   } else {
    //     setIsSubmitted(true);
    //   }
    // } else {
    //   // Username not found
    //   setErrorMessages({ name: "uname", message: errors.uname });
    // }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}

export default LoginPage;