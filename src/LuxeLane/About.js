import React, { useEffect } from "react";
import "./About.css";
import about from "./assets/about.webp";
import story from "./assets/story.jpg";
import mission from "./assets/mission.png";
import vision from "./assets/vision.jpeg";
import s1 from "./assets/s1.png";
import s2 from "./assets/s2.png";
import s3 from "./assets/s3.png";
import s4 from "./assets/s4.png";
import team1 from "./assets/t1.avif";
import team2 from "./assets/t2.avif";
import team3 from "./assets/t3.avif";
import team4 from "./assets/t4.avif";
import team5 from "./assets/t5.avif";
import team6 from "./assets/t6.avif";
import Aos from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";

const About = () => {
  useEffect(() => {
      Aos.init({ duration: 1000 });
    }, []);
     useEffect(() => {
          window.scrollTo(0, 0);
        }, []);
  return (
    <section className="about-container">
      <section className="about_background">
        <div className="container-fluid p-0">
          <div className="row text-center">
            <div className="col-lg-12">
              <h1>About Us</h1>
              <div className="d-flex justify-content-center">
                <h5 className="me-5"><NavLink style={{textDecoration:"none",  color: "inherit"}} to ="/">Home</NavLink> </h5>
                <h6 className="">About</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="story-content container p-5">
        <div className="row overflow-hidden">
          <div className="col-lg-6" data-aos="fade-right">
            <img src={about} className="w-100 h-100" alt="error" />
          </div>
          <div className="col-lg-6 " data-aos="fade-left">
            <h1>About Us</h1>
            <p>
              At Luxelane, we aim to transform your shopping experience by
              offering a carefully curated selection of premium products that
              cater to those who value quality, elegance, and functionality.
              Whether you're looking for fashionable clothing, stylish
              accessories, home decor, beauty essentials, or lifestyle items,
              each product in our collection is selected to elevate your
              everyday life.
            </p>

            <p>
              Our platform is designed with one simple goal in mind: to provide
              you with access to high-quality, thoughtfully chosen items with
              the convenience of online shopping. In today’s fast-paced world,
              we believe in making premium products easily accessible, offering
              you top-notch choices without compromising on convenience,
              affordability, or style.
            </p>
          </div>
        </div>
      </section>
      <section className="story-content container px-5">
        <div className="row  overflow-hidden">
          <div className="col-lg-6" data-aos="fade-right">
            <h1>How it Begins!</h1>
            <p>
              Luxelane was founded with the belief that every person deserves to
              access high-quality products that align with their unique tastes,
              needs, and lifestyle. What started as a vision to curate a diverse
              collection of premium items quickly grew into a trusted
              destination for discerning shoppers who seek products that add
              value to their lives.
            </p>

            <p>
              As we evolved, we realized that it’s not just about selling
              products—it’s about offering a well-rounded shopping experience
              that prioritizes quality, transparency, and customer satisfaction.
              We set out to bring carefully chosen, dependable, and
              well-designed products from the best manufacturers and artisans
              worldwide to you.
            </p>
          </div>
          <div className="col-lg-6 overflow-hidden" data-aos="fade-left">
            <img src={story} className="w-100 h-100" alt="error" />
          </div>
        </div>
      </section>
      <section className="mv-elementor container p-5  ">
        <div className="row">
          <div className="col-lg-6 mb-3"  data-aos="flip-left">
            <div className="card">
              <div className="d-flex justify-content-center">
                <img src={mission} className="w-50 h-50 mt-3" alt="error" />
              </div>

              <p className="container px-4 py-3">
                At Luxelane, our mission is to provide a seamless shopping
                experience that offers premium, high-quality products to our
                customers. We aim to curate a diverse selection of items that
                enhance everyday living, combining style, practicality, and
                value. By focusing on quality, affordability, and convenience,
                we strive to meet the needs of those who appreciate
                well-designed, reliable products. Our mission is to make
                exceptional products accessible, ensuring that each purchase
                brings lasting satisfaction and joy to our customers.
              </p>
            </div>
          </div>
          <div className="col-lg-6 "  data-aos="flip-right">
            <div className="card">
              <div className="d-flex justify-content-center">
                <img src={vision} className="w-50 h-50 mt-3 " alt="error" />
              </div>
              <p className="container px-4 py-3">
                Our vision is to become the go-to online destination for
                individuals seeking premium products that blend design,
                functionality, and affordability. We aim to build a trusted
                community where our customers can discover high-quality,
                thoughtfully curated items that elevate their lifestyle. By
                maintaining a commitment to sustainability, ethical sourcing,
                and customer satisfaction, we envision Luxelane as a brand that
                not only enhances daily living but also positively impacts the
                world through responsible and mindful choices.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="service-container container px-5">
        <h1>Our Services</h1>
        <p>
          At Luxelane, we are dedicated to delivering an exceptional shopping
          experience. Beyond offering premium products, we provide a range of
          services to ensure your satisfaction and make your shopping journey
          smooth and enjoyable. Our goal is to serve you with ease, efficiency,
          and care, every step of the way.
        </p>
        <div className="row mt-5  overflow-hidden">
          <div className="col-lg-6" data-aos="fade-right">
            <div className="d-flex justify-content-center">
              <img src={s1} className="w-25 h-25 " alt="error" />
            </div>
            <div className="text-center">
              <h3>Personalized Shopping Experience</h3>
              <p className="px-3">
                We understand that every customer is unique, and that’s why we
                offer a personalized shopping experience. From product
                recommendations based on your preferences to tailored style
                suggestions, we aim to make your shopping journey easier and
                more enjoyable.
              </p>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-left">
            <div className="d-flex justify-content-center">
              <img src={s2} className="w-25 h-25 " alt="error" />
            </div>
            <div className="text-center">
              <h3>Exclusive Offers & Loyalty Program</h3>
              <p className="px-3">
                We believe in rewarding our customers. Enjoy exclusive offers,
                discounts, and promotions throughout the year. Plus, our loyalty
                program lets you earn points with each purchase, giving you
                access to even more benefits and rewards.
              </p>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-right">
            <div className="d-flex justify-content-center">
              <img src={s3} className="w-25 h-25 " alt="error" />
            </div>
            <div className="text-center">
              <h3>Sustainability & Ethical Sourcing</h3>
              <p className="px-3">
                We are committed to sustainability. Many of the products we
                offer are ethically sourced and produced with environmentally
                friendly practices. By choosing Luxelane, you're supporting a
                brand that cares about the planet as much as you do.
              </p>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-left">
            <div className="d-flex justify-content-center">
              <img src={s4} className="w-25 h-25 " alt="error" />
            </div>
            <div className="text-center">
              <h3>Fast & Reliable Shipping</h3>
              <p className="px-3">
                We know how important it is to receive your purchases on time.
                Luxelane ensures fast, reliable shipping with timely delivery to
                your doorstep. Our streamlined process is designed for your
                convenience, and we offer multiple shipping options to suit your
                needs.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="container team-elementor   px-5" >
      <div className="row mb-4 justify-content-center  ">
        <h2 className="text-center">Meet Our Team</h2>
        <div className=" col-md-6 col-lg-4 col-xl-3  mb-3 " data-aos="fade-up">
          <div className="card  w-100 h-100   ">
            <div className="card-head  d-flex justify-content-center align-items-center mt-1 ">
              <img src={team4} alt="error" />
            </div>
            <div className="card-body text-center">
              <h1>Ravi Chandra</h1>
              <h3>Founder & CEO</h3>
              <i className="bi bi-facebook fs-4 mx-3"></i>
                <i className="bi bi-instagram fs-4 mx-3"></i>
                <i className="bi bi-twitter fs-4 mx-3"></i>
            </div>
          </div>
        </div>
        <div className=" col-md-6 col-lg-4 col-xl-3  mb-3 " data-aos="fade-up">
          <div className="card bg-light w-100 h-100">
            <div className="card-head  d-flex justify-content-center align-items-center mt-1 ">
              <img src={team2} alt="error" />
            </div>
            <div className="card-body text-center">
              <h1>Sita Lakshmi</h1>
              <h3>Brand Manager</h3>
              <i className="bi bi-facebook fs-4 mx-3"></i>
                <i className="bi bi-instagram fs-4 mx-3"></i>
                <i className="bi bi-twitter fs-4 mx-3"></i>
            </div>
          </div>
        </div>
        <div className=" col-md-6 col-lg-4 col-xl-3 mb-3  " data-aos="fade-up">
          <div className="card bg-light w-100 h-100">
            <div className="card-head  d-flex justify-content-center align-items-center mt-1 ">
              <img src={team3} alt="error" />
            </div>
            <div className="card-body text-center">
              <h1>Kishan Reddy</h1>
              <h3> Social Media Manager</h3>
              <i className="bi bi-facebook fs-4 mx-3"></i>
                <i className="bi bi-instagram fs-4 mx-3"></i>
                <i className="bi bi-twitter fs-4 mx-3"></i>
            </div>
          </div>
        </div>
        <div className=" col-md-6 col-lg-4 col-xl-3  mb-3  " data-aos="fade-up">
          <div className="card bg-light w-100 h-100">
            <div className="card-head  d-flex justify-content-center align-items-center mt-1 ">
              <img src={team1} alt="error" />
            </div>
            <div className="card-body text-center">
              <h1>Akhil Varma</h1>
              <h3>Legal Counsel</h3>
              <i className="bi bi-facebook fs-4 mx-3"></i>
                <i className="bi bi-instagram fs-4 mx-3"></i>
                <i className="bi bi-twitter fs-4 mx-3"></i>
            </div>
          </div>
        </div>
        <div className=" col-md-6 col-lg-4 col-xl-3  mb-3 " data-aos="fade-up">
          <div className="card bg-light w-100 h-100">
            <div className="card-head  d-flex justify-content-center align-items-center mt-1 ">
              <img src={team5} alt="error" />
            </div>
            <div className="card-body text-center">
              <h1>Kiran Prakash</h1>
              <h3>Marketing Director</h3>
              <i className="bi bi-facebook fs-4 mx-3"></i>
                <i className="bi bi-instagram fs-4 mx-3"></i>
                <i className="bi bi-twitter fs-4 mx-3"></i>
            </div>
          </div>
        </div>
        <div className=" col-md-6 col-lg-4 col-xl-3 mb-3   " data-aos="fade-up">
          <div className="card bg-light w-100 h-100">
            <div className="card-head  d-flex justify-content-center align-items-center mt-1 ">
              <img src={team6} alt="error" />
            </div>
            <div className="card-body text-center">
              <h1>Divya Sharma  </h1>
              <h3>Customer Support Lead</h3>
              <i className="bi bi-facebook fs-4 mx-3"></i>
                <i className="bi bi-instagram fs-4 mx-3"></i>
                <i className="bi bi-twitter fs-4 mx-3"></i>
            </div>
          </div>
        </div>
        
      
      </div>
    </section>
    </section>
  );
};

export default About;
