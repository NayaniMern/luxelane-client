import React, { useEffect } from "react";
import "./Contact.css";
import c1 from "./assets/c1.png";
import c2 from "./assets/c2.png";
import c3 from "./assets/c3.webp";
import c4 from "./assets/c4.png";
import c5 from "./assets/c5.png";
import c6 from "./assets/c6.png";
import SendEnquiry from "./SendEnquiry";
import Aos from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";

const Contact = () => {
   useEffect(() => {
        Aos.init({ duration: 1000 });
      }, []);
      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <section className="contact-container">
      <section className="contact_background">
        <div className="container-fluid p-0">
          <div className="row text-center ">
            <div className="col-lg-12">
              <h1>Contact Us</h1>
              <div className="d-flex justify-content-center">
                <h5 className="me-5"><NavLink style={{textDecoration:"none",  color: "inherit"}} to ="/">Home</NavLink> </h5>
                <h6 className=""> Contact</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="account-container">
        <div className="container p-5">
          <p>
            We’re here to help! If you have any questions, concerns, or need
            assistance with your order, don’t hesitate to get in touch with our
            team. Whether you need support, have a product inquiry, or want to
            share feedback, we’re committed to providing the best possible
            experience for our customers. You can reach us through our contact
            form, via email, or by phone.
          </p>
          <div className="container">
            <div className="row overflow-hidden ">
              <div className="col-md-6 col-lg-4">
                <div className="account-elementor d-flex ">
                  <img src={c1} alt="error" />
                  <div className="account-content">
                    <h1>Your Orders</h1>
                    <h5>Track Your Orders</h5>
                    <h5>Edit or Cancel Orders</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 ">
                <div className="account-elementor d-flex">
                  <img src={c2} alt="error" />
                  <div className="account-content">
                    <h1>Returns and Refunds</h1>
                    <h5>Return or Exchange Orders</h5>
                    <h5>Print Return Bills</h5>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 ">
                <div className="account-elementor d-flex">
                  <img src={c3} alt="error" />
                  <div className="account-content">
                    <h1>Manage Address</h1>
                    <h5>Update your Address</h5>
                    <h5>Edit or Delete your Address</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="account-elementor d-flex">
                  <img src={c4} alt="error" />
                  <div className="account-content">
                    <h1>Account Settings</h1>
                    <h5>Manage your Account</h5>
                    <h5>Manage or Delete your Account</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 ">
                <div className="account-elementor d-flex">
                  <img src={c5} alt="error" />
                  <div className="account-content ">
                    <h1>Your Order</h1>
                    <h5>Track Your Orders</h5>
                    <h5>Edit or Cancel Orders</h5>
                  </div>
                </div>
              </div>
              <div className=" col-md-6 col-lg-4   ">
                <div className="account-elementor d-flex">
                  <img src={c6} alt="error" />
                  <div className="account-content">
                    <h1>Digital Services</h1>
                    <h5>Device Help and Support</h5>
                    <h5>Troubleshoot your Issues</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="enquiry-container container p-5">
        <div className="row overflow-hidden">
          <div className="col-lg-6" data-aos="fade-left">
            <h3 className="fs-2 fw-bold text-capitalize text-center mb-4">
              Get In Touch
            </h3>
            <div className="enquiry-container-content px-2 ">
              <h5>
                <span>
                  <i class="bi bi-geo-alt"></i>
                </span>
                Skybay Hubtown, Skybay Hubtown, Breach Candy, Mumbai,
                Maharashtra 400026, India
              </h5>
              <h5>
                <span>
                  <i class="bi bi-envelope"></i>
                </span>
                luxelane2007@gmail.com
              </h5>
              <h5>
                <span>
                  <i class="bi bi-telephone-fill"></i>
                </span>
                +91 7805638920
              </h5>
              <h5>
                <span>
                  <i class="bi bi-clock"></i>
                </span>
                Working Hours: Mon - Sat : 9AM - 6PM
              </h5>
              <h5>
                Follow Us :<i className="bi bi-facebook fs-4 mx-2"></i>
                <i className="bi bi-instagram fs-4 mx-2"></i>
                <i className="bi bi-twitter fs-4 mx-2"></i>
              </h5>
            </div>
          </div>
          <div className="col-lg-6 formEnquiry" data-aos="fade-right">
            <SendEnquiry />
          </div>
        </div>
      </section>
      <section className="container px-5 mb-5  ">
        <div className="row">
          <div className="col-lg-12 map  p-1">
           
            <iframe
            title="Google Map showing Hubtown Skybay, Mumbai location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.009960667036!2d72.8061591!3d18.975167499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce782428eec1%3A0x3ca35834ea0a3802!2sHubtown%20Skybay%2C%20Breach%20Candy%2C%20Cumballa%20Hill%2C%20Mumbai%2C%20Maharashtra%20400026!5e0!3m2!1sen!2sin!4v1741238078586!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowfullscreen="yes"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Contact;
