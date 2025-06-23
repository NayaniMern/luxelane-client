import React from "react";
import "./Footer.css";
import mainBanner from "./assets/logo.png";
import pay from "./assets/pay.png";
import visa from "./assets/visa.png";

import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container-fluid footer-container    ">
      <div className="row text-center mx-5">
        <div className="col-md-6 col-lg-4 col-xl-4 address mt-4">
          <h1>
            <img src={mainBanner} alt="error" />
          </h1>

          <div className="mb-3">
            <i className="bi bi-geo-alt"></i>
            <span className="ms-2">
              Skybay Hubtown, Skybay Hubtown, Breach Candy, Mumbai, Maharashtra
              400026, India
            </span>
          </div>
          <div className="mb-3">
            <i className="bi bi-envelope-check-fill"></i>
            <span className="ms-2">luxelane2007@gmail.com</span>
          </div>
          <div className="mb-3">
            <i className="bi bi-telephone-outbound-fill"></i>
            <span className="ms-2"> +91 7805638920</span>
          </div>
          <div className="">
            <h3>Follow Us</h3>
            <span className="me-4 ">
              <i className="bi bi-youtube fs-5"></i>
            </span>
            <span className="me-4 ">
              <i className="bi bi-twitter fs-5"></i>
            </span>
            <span className="me-4">
              <i className="bi bi-instagram fs-5"></i>
            </span>
            <span className="me-4">
              {" "}
              <i className="bi bi-facebook fs-5"></i>
            </span>
            <span className="me-4">
              {" "}
              <i className="bi bi-linkedin fs-5"></i>
            </span>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 col-xl-2 mt-4 links">
          <h1>Links</h1>
          <ul>
            <NavLink to={"/"}>
              <li>Home</li>
            </NavLink>
            <NavLink to={"/about"}>
              <li>About</li>
            </NavLink>
            <NavLink to={"/men"}>
              <li>Men's Wear</li>
            </NavLink>
            <NavLink to={"/women"}>
              <li>Women's Wear</li>
            </NavLink>
            <NavLink to={"/kids"}>
              <li>Kid's Wear</li>
            </NavLink>
            <NavLink to={"/footwear & accessories"}>
              <li>Footwear</li>
            </NavLink>
            <NavLink to={"/footwear & accessories"}>
              <li>Accessories</li>
            </NavLink>

            <NavLink to={"/blog"}>
              <li>Blog</li>
            </NavLink>
            <NavLink to={"/contact"}>
              <li>Contact</li>
            </NavLink>
          </ul>
        </div>
        <div className="col-md-6 col-lg-4 col-xl-2 account mt-4">
          <h1>My account</h1>
          <ul>
            
              <li>Sign in</li>
          
           
              <li>sign up</li>
        
            <li>view cart</li>
            <li>my wishlist</li>
            <li>track my order</li>
            <li>help</li>
          </ul>
        </div>
        <div className="col-md-6 col-lg-4 col-xl-4 mt-4 install">
          <h1>Install App</h1>
          <span>From App Store Or Google Pay</span>

          <img src={pay} className="mt-4" alt="error" />
          <div className="mt-3">
            <span>Secured Payment Gateways</span>
            <img src={visa} className="w-100 h-100" alt="error" />
          </div>
        </div>
      </div>
      <div className="container py-3  footer-container1">
        <div className="row">
          <div className="col-lg-12  d-flex justify-content-center">
            <h5>&copy; Copyright 2025 luxelane. All Rights Reserved.</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
