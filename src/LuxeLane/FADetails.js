import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import "./FA.css";
import Aos from "aos";
import "aos/dist/aos.css";
import buy from "./assets/buy.png";
import { useCart } from "./CartContext";


const FADetails = () => {
  const [selectedSize, setSelectedSize] = useState("");
      const { addToCart } = useCart();
    
      const handleAddToCart = () => {
        if (!selectedSize) {
          alert("Please select a size before adding to cart");
          return;
        }
    
        const cartItem = {
          id: fa.id,
          name: fa.name,
          price: fa.dp,
          quantity: count,
          size: selectedSize,
          image: fa.image1,
        };
    
        addToCart(cartItem);
         console.log("Adding to cart:", cartItem)
        alert("Added to cart!");
      };
  const { id } = useParams();
  const [fa, setFA] = useState("");
  const [currentImage, setCurrentImage] = useState(0);
  const [count, setCount] = useState(1);
  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const increment = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    axios
      .get(`https://luxelane-server-zyhb.onrender.com/footwear_and_accessories/${id}`)
      .then((res) => setFA(res.data));
  });
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const productImages = [fa.image1, fa.image2, fa.image3, fa.image4];

  return (
    <section>
      <section className="kids_background">
        <div className="container-fluid p-0">
          <div className="row text-center">
            <div className="col-lg-12">
              <h1>Products</h1>
              <div className="d-flex justify-content-center">
                <h5 className="me-5"><NavLink style={{textDecoration:"none",  color: "inherit"}} to ="/footwear & accessories">Footwear & Accessories</NavLink> </h5>
                <h6 className="">Footwear & Accessories Product Details</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="product-details">
        <div className="container p-5">
          <div className="row overflow-hidden">
            <div className="mb-4">
              <span>
                Home <i className="bi bi-chevron-right"></i> Shop
                <i className="bi bi-chevron-right"></i> Footwear & Accessories
                <i className="bi bi-chevron-right"></i> {fa.category}
              </span>
            </div>
            <div className="col-md-12 col-xl-6">
              <div className="d-flex gap-4  align-items-center ">
                <div className="d-flex flex-column gap-4 thumbnail">
                  {productImages.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      width={100}
                      height={100}
                      className="object-fit-cover"
                      alt="error"
                      onMouseOver={(e) => setCurrentImage(index)}
                      style={{
                        cursor: "pointer",
                        border:
                          currentImage === index ? "2px solid #000" : "none",
                      }}
                    />
                  ))}
                </div>

                <img
                  src={productImages[currentImage]}
                  alt="Main Product"
                  className="main-img"
                />
              </div>
            </div>

            <div className=" col-md-12 col-xl-6 px-4   product-details-right">
              <h1>{fa.name}</h1>
              <div className="icons d-flex " style={{ color: "#be8400" }}>
                <i className="bi bi-star-fill me-2"></i>
                <i className="bi bi-star-fill me-2"></i>
                <i className="bi bi-star-fill me-2"></i>
                <i className="bi bi-star-fill me-2"></i>
                <i className="bi bi-star-fill"></i>
              </div>
              <h3>
                Brand:<span>{fa.brand}</span>
              </h3>
              <h5>
                colour:<span>{fa.colour}</span>
              </h5>
            <h2 className="d-flex mt-3 gap-2 flex-wrap">
                <button
                  className="btn border text-center"
                  style={{
                    backgroundColor: "#f8d7da",
                    color: "#000",
                 
                    width: "50px",
                    height: "50px",
                  }}
                  type="button"
                   onClick={() => setSelectedSize("XS")}
                >
                  XS
                </button>

                <button
                  className="btn border text-center"
                  style={{
                    backgroundColor: "#d1ecf1",
                    color: "#000",
               
                    width: "50px",
                    height: "50px",
                  }}
                  type="button"
                  onClick={() => setSelectedSize("S")}
                >
                  S
                </button>

                <button
                  className="btn border text-center"
                  style={{
                    backgroundColor: "#d4edda",
                    color: "#000",
                 
                    width: "50px",
                    height: "50px",
                  }}
                  type="button"
                  onClick={() => setSelectedSize("M")}
                >
                  M
                </button>

                <button
                  className="btn border text-center"
                  style={{
                    backgroundColor: "#fff3cd",
                    color: "#000",
                   
                    width: "50px",
                    height: "50px",
                  }}
                  type="button"
                   onClick={() => setSelectedSize("L")}
                >
                  L
                </button>

                <button
                  className="btn border text-center"
                  style={{
                    backgroundColor: "#cce5ff",
                    color: "#000",
                 
                    width: "50px",
                    height: "50px",
                  }}
                  type="button"
                   onClick={() => setSelectedSize("XL")}
                >
                  XL
                </button>

                <button
                  className="btn border text-center"
                  style={{
                    backgroundColor: "#e2e3e5",
                    color: "#000",
                   
                    width: "50px",
                    height: "50px",
                  }}
                  type="button"
                  onClick={() => setSelectedSize("XXL")}
                >
                  XXL
                </button>
              </h2>

              <div className="mx-5">
                <button
                  className="py-2 fs-5  fw-bolder px-3 rounded"
                  style={{ background: "gray" }}
                  onClick={decrement}
                >
                  -
                </button>
                <span className="py-4 fs-5 px-6 rounded-lg mx-4">{count}</span>
                <button
                  className="py-2 fs-5  fw-bolder  px-3 rounded"
                  style={{ background: "gray" }}
                  onClick={increment}
                >
                  +
                </button>
              </div>
              <div className="price">
                <div className="d-flex">
                  <span className="discount">{fa.discount} off</span>
                  <span className="dp">{fa.dp}</span>
                </div>
                <h5 className="op ">
                  MRP:<span className="">{fa.op}</span>
                </h5>
              </div>
             <button className="btn btn-dark mt-3" onClick={handleAddToCart}>Add to cart</button>
            </div>
          </div>
          <div
            className="container mt-5 p-3"
            style={{ boxShadow: "10px 5px 30px gray" }}
          >
            <div className="row">
          
              <div className="col-md-3">
                <div
                  className="nav flex-column nav-pills me-3"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <button
                    className="nav-link active"
                    id="v-pills-desc-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-desc"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-desc"
                    aria-selected="true"
                  >
                    Product Description
                  </button>
                  <button
                    className="nav-link"
                    id="v-pills-features-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-features"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-features"
                    aria-selected="false"
                  >
                    Product Features
                  </button>
                  <button
                    className="nav-link"
                    id="v-pills-confidence-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-confidence"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-confidence"
                    aria-selected="false"
                  >
                    Shop With Confidence
                  </button>
                  <button
                    className="nav-link"
                    id="v-pills-guide-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-guide"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-guide"
                    aria-selected="false"
                  >
                    Size Guide
                  </button>
                </div>
              </div>

              <div className="col-md-9">
                <div className="tab-content" id="v-pills-tabContent">
              
                  <div
                    className="tab-pane fade product-dec  show active"
                    id="v-pills-desc"
                    role="tabpanel"
                    aria-labelledby="v-pills-desc-tab"
                  >
                    <p>{fa.description}</p>
                    <p className="mt-3">
                      Lux Lane Clothing blends modern sophistication with
                      timeless elegance, offering high-quality, fashion-forward
                      pieces for the style-conscious. Known for minimalist
                      designs and premium materials, each collection reflects
                      effortless luxury. From tailored essentials to chic
                      statement pieces, Lux Lane empowers confidence through
                      refined style and attention to detail in every garment.
                    </p>
                  </div>

                
                  <div
                    className="tab-pane fade"
                    id="v-pills-features"
                    role="tabpanel"
                    aria-labelledby="v-pills-features-tab"
                  >
                    <div className="product">
                      <ol>
                        {fa.features &&
                          fa.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                      </ol>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade product-dec"
                    id="v-pills-confidence"
                    role="tabpanel"
                    aria-labelledby="v-pills-confidence-tab"
                  >
                    <div className="row mt-5">
                      <div className="col-lg-7">
                        <ul>
                          <li>
                            <i className="bi bi-arrow-repeat"></i> 30 days
                            exchange & replacement only
                          </li>
                          <li>
                            <i className="bi bi-cash"></i> Pay on delivery
                          </li>
                          <li>
                            <i className="bi bi-award"></i> Top brand
                          </li>
                          <li>
                            <i className="bi bi-truck"></i> Free delivery
                          </li>
                          <li>
                            <i className="bi bi-shield-lock"></i> Secure
                            transaction
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-4">
                        <img
                          src={buy}
                          className="w-100 h-75"
                          alt="buy with confidence"
                        />
                      </div>
                    </div>
                  </div>

             
                  <div
                    className="tab-pane fade"
                    id="v-pills-guide"
                    role="tabpanel"
                    aria-labelledby="v-pills-guide-tab"
                  >
                    <div className="table-responsive mb-5">
                      <table className="table table-light text-center">
                        <thead>
                          <tr className="fs-5">
                            <th>Item</th>
                            <th>Size</th>
                            <th>Measurements</th>
                          </tr>
                        </thead>
                        <tbody className="fs-6 fw-bold">
                         
                          <tr>
                            <td rowSpan="6">
                              <strong>Sunglasses</strong>
                            </td>
                            <td>XS</td>
                            <td>Frame Width: 120mm - 125mm</td>
                          </tr>
                          <tr>
                            <td>S</td>
                            <td>Frame Width: 126mm - 130mm</td>
                          </tr>
                          <tr>
                            <td>M</td>
                            <td>Frame Width: 131mm - 135mm</td>
                          </tr>
                          <tr>
                            <td>L</td>
                            <td>Frame Width: 136mm - 140mm</td>
                          </tr>
                          <tr>
                            <td>XL</td>
                            <td>Frame Width: 141mm - 145mm</td>
                          </tr>
                          <tr>
                            <td>XXL</td>
                            <td>Frame Width: 146mm - 150mm</td>
                          </tr>

                       
                          <tr>
                            <td rowSpan="6">
                              <strong>Footwear</strong>
                            </td>
                            <td>XS (5)</td>
                            <td>Length: 8.5 inches / 21.5 cm</td>
                          </tr>
                          <tr>
                            <td>S (6)</td>
                            <td>Length: 9.0 inches / 23 cm</td>
                          </tr>
                          <tr>
                            <td>M (7)</td>
                            <td>Length: 9.5 inches / 24 cm</td>
                          </tr>
                          <tr>
                            <td>L (8)</td>
                            <td>Length: 10.0 inches / 25.5 cm</td>
                          </tr>
                          <tr>
                            <td>XL (9)</td>
                            <td>Length: 10.5 inches / 26.5 cm</td>
                          </tr>
                          <tr>
                            <td>XXL (10)</td>
                            <td>Length: 11.0 inches / 28 cm</td>
                          </tr>

                       
                          <tr>
                            <td rowSpan="6">
                              <strong>Belts</strong>
                            </td>
                            <td>XS</td>
                            <td>Waist: 28 - 30 inches</td>
                          </tr>
                          <tr>
                            <td>S</td>
                            <td>Waist: 30 - 32 inches</td>
                          </tr>
                          <tr>
                            <td>M</td>
                            <td>Waist: 32 - 34 inches</td>
                          </tr>
                          <tr>
                            <td>L</td>
                            <td>Waist: 34 - 36 inches</td>
                          </tr>
                          <tr>
                            <td>XL</td>
                            <td>Waist: 36 - 38 inches</td>
                          </tr>
                          <tr>
                            <td>XXL</td>
                            <td>Waist: 38 - 40 inches</td>
                          </tr>

                          
                          <tr>
                            <td rowSpan="6">
                              <strong>Hats</strong>
                            </td>
                            <td>XS</td>
                            <td>Head Circumference: 20 - 21 inches</td>
                          </tr>
                          <tr>
                            <td>S</td>
                            <td>Head Circumference: 21 - 22 inches</td>
                          </tr>
                          <tr>
                            <td>M</td>
                            <td>Head Circumference: 22 - 23 inches</td>
                          </tr>
                          <tr>
                            <td>L</td>
                            <td>Head Circumference: 23 - 24 inches</td>
                          </tr>
                          <tr>
                            <td>XL</td>
                            <td>Head Circumference: 24 - 25 inches</td>
                          </tr>
                          <tr>
                            <td>XXL</td>
                            <td>Head Circumference: 25 - 26 inches</td>
                          </tr>

                      
                          
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row overflow-hidden">
            <div className="product-highlights container mt-4">
              <h2 className="mb-4 fw-bold">✨ Product Highlights</h2>

              <div className="mb-4" data-aos="fade-up">
                <h5>
                  <i className="bi bi-check-circle me-2 text-primary"></i>
                  All-Day Comfort
                </h5>
                <p>
                  Cushioned soles and breathable linings offer long-lasting
                  comfort for all-day wear, whether traveling, running errands,
                  or simply enjoying a leisurely stroll without any discomfort
                  or irritation.
                </p>
              </div>

              <div className="mb-4" data-aos="fade-up">
                <h5>
                  <i className="bi bi-airplane-engines me-2 text-info"></i>
                  Travel-Friendly Design
                </h5>
                <p>
                  Lightweight and compact footwear_and_accessories are specially
                  designed to fit easily into your luggage, saving space and
                  making travel more convenient and enjoyable without the
                  bulkiness.
                </p>
              </div>

              <div className="mb-4" data-aos="fade-up">
                <h5>
                  <i className="bi bi-shield-lock me-2 text-danger"></i>
                  Anti-Skid Grip
                </h5>
                <p>
                  Features enhanced traction soles to provide superior grip on
                  wet or uneven surfaces, ensuring you move confidently, whether
                  on slippery streets or rocky terrains, preventing slips or
                  falls.
                </p>
              </div>

              <div className="mb-4" data-aos="fade-up">
                <h5>
                  <i className="bi bi-gear me-2 text-secondary"></i>Durable
                  Build
                </h5>
                <p>
                  Made with high-quality materials that resist wear and tear,
                  these shoes and accessories are built to last, handling rugged
                  conditions and long-term use effortlessly without losing their
                  integrity.
                </p>
              </div>

              <div className="mb-4" data-aos="fade-up">
                <h5>
                  <i className="bi bi-droplet me-2 text-primary"></i>
                  Water-Resistant
                </h5>
                <p>
                  The water-repellent treatment ensures that your footwear and
                  accessories stay dry and comfortable during rainy days or
                  water-related activities, preventing discomfort and keeping
                  you stylish even in wet conditions.
                </p>
              </div>

              <div className="mb-4" data-aos="fade-up">
                <h5>
                  <i className="bi bi-star me-2 text-success"></i>Stylish
                  Functionality
                </h5>
                <p>
                  Combining modern, fashion-forward designs with practical,
                  functional features, these accessories and footwear make a
                  statement while providing the convenience you need for every
                  day and outdoor adventures.
                </p>
              </div>

              <div className="mb-4" data-aos="fade-up">
                <h5>
                  <i className="bi bi-droplet-half me-2 text-warning"></i>
                  Moisture Management
                </h5>
                <p>
                  With moisture-wicking properties and quick-dry fabrics, our
                  footwear_and_accessories help keep your feet cool and dry,
                  preventing discomfort, moisture buildup, and unpleasant odors
                  during active use and exercises.
                </p>
              </div>

              <div className="mb-4" data-aos="fade-up">
                <h5>
                  <i className="bi bi-arrow-right-circle me-2 text-info"></i>
                  Adjustable Fit
                </h5>
                <p>
                  Designed with stretch panels, straps, and flexible materials,
                  these products ensure a secure, customizable fit that
                  accommodates various foot shapes for maximum comfort and
                  support all day long.
                </p>
              </div>
            </div>
          </div>
         
        </div>
      </section>
    </section>
  );
};

export default FADetails;
