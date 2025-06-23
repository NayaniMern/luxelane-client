import axios from "axios";
import React, { useState } from "react";

const SendEnquiry = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
     const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const mobileError = document.getElementById("mobileError");
    const messageError = document.getElementById("messageError");

    const alphaExp = /^[a-zA-Z ]+$/;
    const mailExp = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    const numExp = /^[0-9]+$/;
    const mssgExp = /^[a-zA-Z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?\s]*$/; 

    let isValid = true;

    // Name validation
    if (name === "") {
      nameError.textContent = "*Name is required";
      isValid = false;
    } else {
      if (name.match(alphaExp)) {
        nameError.textContent = "";
      } else {
        nameError.textContent = "*Name must contain only letters";
        isValid = false;
      }
    }

    // Email validation
    if (email === "") {
      emailError.textContent = "*Please Enter Email Address";
      isValid = false;
    } else {
      if (email.match(mailExp)) {
        emailError.textContent = "";
      } else {
        emailError.textContent = "*Please Enter Valid Email ID";
        isValid = false;
      }
    }

    // Mobile number validation
    if (mobile === "") {
      mobileError.textContent = "*Please Enter Mobile Number";
      isValid = false;
    } else {
      if (mobile.match(numExp)) {
        if (mobile.length === 10) {
          mobileError.textContent = "";
        } else {
          mobileError.textContent = "*Mobile Number should be 10 digits";
          isValid = false;
        }
      } else {
        mobileError.textContent = "*Mobile Number should be Only Numbers";
        isValid = false;
      }
    }

    // Message validation
    if (message === "") {
      messageError.textContent = "*Please Enter Message";
      isValid = false;
    } else {
      if (message.match(mssgExp)) {
        messageError.textContent = "";
      } else {
        messageError.textContent = "*Message contains invalid characters";
        isValid = false;
      }
    }

    if (isValid) {
    axios
      .post("https://luxelane-server-zyhb.onrender.com/enquiries", { name, mobile, email, message })
      .then((res) =>{ alert("Your Enquiry Sent");
        setName("");
        setMobile("");
       
        setEmail("");
        setMessage("");
        
      })
      .catch((err) => {
          console.error(err);
          alert("There was an error sending your enquiry.");
        });
    }
  };
  return (
    <div className="container contact-cont p-2 ">
      <h2 className="fs-2 fw-bold text-capitalize text-center mb-3">Send us message</h2>
      <div className="row">
        <div className="col-lg-12">
          
          <form onSubmit={submitHandler}>
            <div className=" d-flex row ">
              <div className="col-6 form-floating">
                <input
                  type="name"
                  value={name}
                  placeholder="Full Name"
                  className="form-control me-3"
                  onChange={(e) => setName(e.target.value)}
                />
                <label className="ms-2">Full Name</label>
                <span id="nameError" style={{ color: "red" }}></span>
              </div>
              <div className="col-6 form-floating">
                <input
                  type="mobile"
                  value={mobile}
                  placeholder="Phone Number"
                  className="form-control "
                  onChange={(e) => setMobile(e.target.value)}
                />
                <label className="ms-2">Phone Number</label>
                <span id="mobileError" style={{ color: "red" }}></span>
              </div>
            </div>
            <div className="form-floating">
              <input
                name="email"
                value={email}
                placeholder="Email Address"
                className="form-control mt-3"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Email Address</label>
              <span id="emailError" style={{ color: "red" }}></span>
            </div>
 <div>
            <textarea
              name="message"
              value={message}
              placeholder="Enter Your Message Here...."
              className="form-control mt-3"
              rows={5}
              onChange={(e) => setMessage(e.target.value)}

            ></textarea>
              <span id="messageError" style={{ color: "red" }}></span>
             </div>
            
            <div className="d-flex justify-content-center">
            <button type="submit " className="mt-3 ">
              Send Message
            </button>
            </div>
           
          </form>
        </div>
      </div>
    </div>
  );
};

export default SendEnquiry;


