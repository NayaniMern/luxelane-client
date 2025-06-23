



import React, { useState } from "react";
import signupimage from "./assets/signup.jpg";
import { NavLink } from "react-router-dom";
import axios from "axios";

const UserSignup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const usernameError = document.getElementById("usernameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError = document.getElementById("confirmPasswordError");
    const termsError = document.getElementById("termsError");

    const alphaExp = /^[a-zA-Z ]+$/;
    const mailExp = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
     const passwordExp = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-={}:'"\\|,.<>/?]).{8,}$/;
 

    let isValid = true;

    // Username validation
    if (username === "") {
      usernameError.textContent = "*Username is required";
      isValid = false;
    } else if (!alphaExp.test(username)) {
      usernameError.textContent = "*Username must contain only letters";
      isValid = false;
    } else {
      usernameError.textContent = "";
    }

    // Email validation
    if (email === "") {
      emailError.textContent = "*Email is required";
      isValid = false;
    } else if (!mailExp.test(email)) {
      emailError.textContent = "*Invalid email format";
      isValid = false;
    } else {
      emailError.textContent = "";
    }

    // Password validation
     if (password === "") {
      passwordError.textContent = "*Password is required";
      isValid = false;
    } else if (!password.match(passwordExp)) {
      passwordError.textContent =
        "*Password must be at least 8 characters, include one uppercase letter and one special character";
      isValid = false;
    } else {
      passwordError.textContent = "";
    }

    // Confirm password validation
    if (confirmPassword === "") {
      confirmPasswordError.textContent = "*Confirm password is required";
      isValid = false;
    } else if (confirmPassword !== password) {
      confirmPasswordError.textContent = "*Passwords do not match";
      isValid = false;
    } else {
      confirmPasswordError.textContent = "";
    }

    // Terms checkbox validation
    if (!agree) {
      termsError.textContent = "*Please agree to the terms";
      isValid = false;
    } else {
      termsError.textContent = "";
    }

    // Final submission
    if (isValid) {
      axios
        .post("https://luxelane-server-zyhb.onrender.com/usersignup", {
          username,
          email,
          password,
          confirmPassword
        })
        .then((res) => {
          alert("Signup successful!");
          setUsername("");
          setEmail("");
          setPassword("");
          setConfirmPassword("");
          setAgree(false);
        })
        .catch((err) => {
          alert("Email Already Exists!.");
          setUsername("");
          setEmail("");
          setPassword("");
          setConfirmPassword("");
          setAgree(false);
          console.error(err);
        });
    }
  };

  
  return (
    <div className="container p-5  ">
      <div className="row   signup-container">
        <div className="col-lg-5 container p-3 ">
          <img src={signupimage} className="w-100 h-100" alt="error" />
        </div>
        <div className=" container p-4 col-lg-7 text-center main ">
          <h1>SignUp</h1>
          
          <form onSubmit={handleSubmit} className="container p-5">
            <div className="form-floating mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label>Username</label>
              <span id="usernameError" style={{ color: "red" }}></span>
            </div>

            <div className="form-floating mb-2">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Email</label>
              <span id="emailError" style={{ color: "red" }}></span>
            </div>

            <div className="form-floating mb-2">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label>Password</label>
              <span id="passwordError" style={{ color: "red" }}></span>
            </div>

            <div className="form-floating mb-2">
              <input
                type="password"
                className="form-control"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <label>Confirm Password</label>
              <span id="confirmPasswordError" style={{ color: "red" }}></span>
            </div>

            <div className="d-flex align-items-center mb-2">
              <input
                type="checkbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
              />
              <p className="mx-2 mb-0">I Agree to the Terms & Conditions</p>
            </div>
            <span id="termsError" style={{ color: "red" }}></span>

            <button className="form-control">SignUp</button>
            <p className="d-flex justify-content-center mt-3">
              Already Have an Account?
              <NavLink to={"/userlogin"} className="text-decoration-none">
              <h5 style={{ color: "#8a3071" }} className="fs-5 mx-1 fw-bold">
                Login Now!
              </h5>
              </NavLink>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserSignup;