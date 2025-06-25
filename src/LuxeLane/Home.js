import React, { useEffect } from "react";
import "./Home.css";
import ship from "./assets/h1.png";
import ret from "./assets/h2.jpg";
import payment from "./assets/h3.png";
import gift from "./assets/h4.png";
import support from "./assets/h5.png";
import saving from "./assets/h6.png";
import news from "./assets/newsletter.png";
import f1 from "./assets/f1.jpeg";
import f2 from "./assets/f2.webp";
import f3 from "./assets/f3.jpeg";
import f4 from "./assets/f4.jpeg";
import f5 from "./assets/f5.jpg";
import b1 from "./assets/b2.jpg";
import b2 from "./assets/b5.jpg";
import b3 from "./assets/b3.jpg";
import b4 from "./assets/b1.jpg";
import b5 from "./assets/b4.jpg";
import Brands from "./Brands";
import Testimonials from "./Testimonials";
import Aos from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";
import Lookbook from "./Lookbook";
import Countdown from "./Countdown";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <section
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active background1 ">
            <div className="container " data-aos="zoom-in">
              <h1>Redefine Your Wardrobe: Essential Trends for Every Season</h1>
              <p>
                Stay ahead of the curve with versatile pieces that bring both
                style and comfort to your everyday look.
              </p>
              <NavLink to={"/men"}>
                <button>Shop Now</button>
              </NavLink>
            </div>
          </div>
          <div className="carousel-item background2">
            <div className="container" data-aos="zoom-in">
              <h1>Seasonal Shifts: Transition Your Wardrobe with Style</h1>
              <p>
                From breezy summer dresses to cozy fall layers, learn how to
                seamlessly switch up your look as the seasons change.
              </p>
              <NavLink to={"/women"}>
                <button>Shop Now</button>
              </NavLink>
            </div>
          </div>
          <div className="carousel-item background3">
            <div className="container " data-aos="zoom-in">
              <h1>Playful and Stylish: Trendy Looks for Kids</h1>
              <p>
                From comfy casuals to fun accessories, discover the latest
                trends that let your little ones shine in style.
              </p>
              <NavLink to={"/kids"}>
                <button>Shop Now</button>
              </NavLink>
            </div>
          </div>
          <div className="carousel-item background4">
            <div className="container " data-aos="zoom-in">
              <h1>Walk with Confidence: The Latest Trends in Footwear</h1>
              <p>
                Find your perfect fit with shoes that combine comfort, style,
                and the season’s hottest trends.
              </p>
              <NavLink to={"/footwear & accessories"}>
                <button>Shop Now</button>
              </NavLink>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </section>
      <section className="container p-5 terms-container">
        <div className="row  text-center ">
          <div className="col-md-6 col-lg-4 col-xl-2 mb-3">
            <div className="card ">
              <div className="d-flex justify-content-center">
                <img src={ship} alt="error" />
              </div>
              <h3>Free Shipping</h3>
              <p>For all Orders Over Rs 500</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-2 mb-3">
            <div className="card ">
              <div className="d-flex justify-content-center">
                <img src={ret} alt="error" />
              </div>
              <h3>30 Days Return</h3>
              <p>For an Exchange Product</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-2 mb-3">
            <div className="card ">
              <div className="d-flex justify-content-center">
                <img src={payment} alt="error" />
              </div>
              <h3>Secured Payment</h3>
              <p>Payment Cards Accepted</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-2 mb-3">
            <div className="card">
              <div className="d-flex justify-content-center">
                <img src={gift} alt="error" />
              </div>
              <h3>Special Gifts</h3>
              <p>Our First Product Offer</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-2 mb-3">
            <div className="card ">
              <div className="d-flex justify-content-center">
                <img src={saving} alt="error" />
              </div>
              <h3>Big Savings</h3>
              <p> From Rs 1000</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-2 mb-3">
            <div className="card  ">
              <div className="d-flex justify-content-center">
                <img src={support} alt="error" />
              </div>
              <h3> Support 24/7</h3>
              <p>Contact Us Anytime</p>
            </div>
          </div>
        </div>
      </section>
      <section className="featured-container mb-5 ">
        <div className="container px-5">
          <h1 className="mb-4">Featured Categories</h1>
          <div className="row g-2">
            <div className="col-lg-6 overflow-hidden" data-aos="fade-right">
              <div className="category large-box">
                <div className="zoom-wrapper">
                  <NavLink to={"/women"}>
                    <img src={f1} alt="error" />
                  </NavLink>
                </div>

                <div className="category-title">Women's Fashion</div>
              </div>
            </div>
            <div className="col-lg-6 overflow-hidden">
              <div className="row g-2">
                <div className="col-lg-6" data-aos="fade-up">
                  <div className="category small-box">
                    <div className="zoom-wrapper">
                      <NavLink to={"/men"}>
                        <img src={f2} alt="error" />
                      </NavLink>
                    </div>
                    <div className="category-title">Men's Fashion</div>
                  </div>
                </div>
                <div className="col-lg-6" data-aos="fade-left">
                  <div className="category small-box">
                    <div className="zoom-wrapper">
                      <NavLink to={"/kids"}>
                        <img src={f3} alt="error" />
                      </NavLink>
                    </div>
                    <div className="category-title">Kid's Fashion</div>
                  </div>
                </div>
                <div className="col-lg-6" data-aos="fade-down">
                  <div className="category small-box">
                    <div className="zoom-wrapper">
                      <NavLink to={"/footwear & accessories"}>
                        <img src={f4} alt="error" />
                      </NavLink>
                    </div>
                    <div className="category-title">Footwear</div>
                  </div>
                </div>
                <div className="col-lg-6" data-aos="fade-left">
                  <div className="category small-box">
                    <div className="zoom-wrapper">
                      <NavLink to={"/footwear & accessories"}>
                        <img src={f5} alt="error" />
                      </NavLink>
                    </div>
                    <div className="category-title">Accessories</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Brands />
      <section>
        <div className="container bg-light mb-3 luxe-container py-4 text-center">
          <div className="row">
            <div className="col-lg-6">
              <div className="luxe-star-top">&#9733;</div>
              <h1 className="luxe-heading">The Luxe Drop Starts In…</h1>
             
              <p className="luxe-subtitle">
                Get ready to unlock exclusive deals on fashion’s finest.
              </p>
              <div className="luxe-stars-bottom mb-3" >
                <span>&#10022;</span>
                <span>&#9733;</span>
                <span>&#10022;</span>
              </div>
            </div>
            <div className="col-lg-6 px-5  align-content-center ">

<Countdown/>
            </div>
          </div>
        </div>
      </section>

      <section className="offers-container overflow-hidden">
        <div className="container px-5 mb-5">
          <div className="row">
            <div className="col-lg-6 offer1 mb-2 " data-aos="fade-right">
              <img src={b1} alt="error" />
              <div className="offer1-content">
                <h4>Crazy deals</h4>
                <h2>buy 1 get 1 free</h2>
                <p>the best classic dress is on sale at Luxelane</p>
                <button>Learn more</button>
              </div>
            </div>
            <div
              className="col-lg-6 offer2 overflow-hidden  "
              data-aos="fade-left"
            >
              <img src={b2} alt="error" />
              <div className="offer2-content">
                <h4>spring/summer</h4>
                <h2>upcoming season</h2>
                <p>Classic cuts and modern designs that suit every wardrobe.</p>
                <button>collection</button>
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="col-lg-4  offer3 mt-3 " data-aos="fade-left">
              <img src={b3} className="w-100 h-100" alt="error" />
              <div className="offer3-content">
                <h3>Seasonal sale</h3>
                <h5>Winter collection 50% off</h5>
              </div>
            </div>
            <div className="col-lg-4 offer4  mt-3 " data-aos="flip-left">
              <img src={b4} className="w-100 h-100" alt="error" />
              <div className="offer4-content">
                <h3>new Footwear collection</h3>
                <h5>spring/summer 2025</h5>
              </div>
            </div>
            <div className="col-lg-4 offer5 mt-3 " data-aos="fade-right">
              <img src={b5} className="w-100 h-100" alt="error" />
              <div className="offer5-content">
                <h3>T-shirts</h3>
                <h5>New trendy prints</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Testimonials />
      <Lookbook />
      <section className="newsletter-container container px-5 mb-5">
        <div className="row">
          <div className="col-lg-6">
            <img src={news} className="w-100 h-100" alt="error" />
          </div>
          <div className="col-lg-6 content">
            <h3> Subscribe To Our</h3>
            <h1>Newsletter</h1>
            <p>Start Shopping Right Now</p>
            <div className="d-flex mb-3">
              <input
                type="text"
                placeholder="Enter Your Email Address"
                className="form-control "
              />
              <button type="submit">Submit</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
