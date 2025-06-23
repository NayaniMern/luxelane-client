import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import "./Kids.css";
import Aos from "aos";
import "aos/dist/aos.css";
import ProductHighlights from "./ProductHighlights";
import buy from "./assets/buy.png";
import { useCart } from "./CartContext";

const KidsDetails = () => {
    const [selectedSize, setSelectedSize] = useState("");
    const { addToCart } = useCart();
  
    const handleAddToCart = () => {
      if (!selectedSize) {
        alert("Please select a size before adding to cart");
        return;
      }
  
      const cartItem = {
        id: kids.id,
        name: kids.name,
        price: kids.dp,
        quantity: count,
        size: selectedSize,
        image: kids.image1,
      };
  
      addToCart(cartItem);
      alert("Added to cart!");
    };
  const { id } = useParams();
  const [kids, setKids] = useState("");
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
      .get(`https://luxelane-server-zyhb.onrender.com/kids/${id}`)
      .then((res) => setKids(res.data));
  });
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const productImages = [kids.image1, kids.image2, kids.image3, kids.image4];

  return (
    <section>
      <section className="kids_background">
        <div className="container-fluid p-0">
          <div className="row text-center">
            <div className="col-lg-12">
              <h1>Kid's Wear</h1>
              <div className="d-flex justify-content-center">
                <h5 className="me-5"><NavLink style={{textDecoration:"none",  color: "inherit"}} to ="/kids">Kids</NavLink> </h5>
                <h6 className="">Kids Product Details</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="product-details">
        <div className="container p-5">
          <div className="row">
            <div className="mb-4">
              <span>
                Home <i className="bi bi-chevron-right"></i> Shop
                <i className="bi bi-chevron-right"></i> Kids
                <i className="bi bi-chevron-right"></i> {kids.category}
              </span>
            </div>
            <div className="col-md-12 col-xl-6">
              <div className="d-flex gap-4 align-items-center ">
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

            <div className=" col-md-12 col-xl-6 px-3 product-details-right">
              <h1>{kids.name}</h1>
              <div className="icons d-flex " style={{ color: "#be8400" }}>
                <i className="bi bi-star-fill me-2"></i>
                <i className="bi bi-star-fill me-2"></i>
                <i className="bi bi-star-fill me-2"></i>
                <i className="bi bi-star-fill me-2"></i>
                <i className="bi bi-star-fill"></i>
              </div>
              <h3>
                Brand:<span>{kids.brand}</span>
              </h3>
              <h5>
                colour:<span>{kids.colour}</span>
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
                   onClick={() => setSelectedSize("XLL")}
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
                  <span className="discount">{kids.discount} off</span>
                  <span className="dp">{kids.dp}</span>
                </div>
                <h5 className="op ">
                  MRP:<span className="mx-2">{kids.op}</span>
                </h5>
              </div>
              <button className="btn btn-dark mt-3" onClick={handleAddToCart}>
                Add to Cart
              </button>
            </div>
          </div>
          <div
            className="container mt-5 p-3"
            style={{ boxShadow: "10px 5px 30px gray" }}
          >
            <div className="row">
              {/* Vertical Pills */}
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
                    <p>{kids.description}</p>
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
                    <div className="row  product">
                      <div className="col-lg-6">
                        <ul className="">
                          <li>
                            Fit: <span>{kids.features?.fit}</span>
                          </li>
                          <li>
                            Material: <span>{kids.features?.material}</span>
                          </li>
                          <li>
                            Sleeve: <span>{kids.features?.sleeve}</span>
                          </li>
                          <li>
                            Collar: <span>{kids.features?.collar}</span>
                          </li>
                          <li>
                            Pattern: <span>{kids.features?.pattern}</span>
                          </li>
                          <li>
                            Occasion: <span>{kids.features?.occasion}</span>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-6">
                        <ul>
                          <li>
                            Length: <span>{kids.features?.length}</span>
                          </li>
                          <li>
                            Closure: <span>{kids.features?.closure}</span>
                          </li>
                          <li>
                            Transparency:
                            <span>{kids.features?.transparency}</span>
                          </li>
                          <li>
                            Stretch: <span>{kids.features?.stretch}</span>
                          </li>
                          <li>
                            Hemline: <span>{kids.features?.hemline}</span>
                          </li>
                          <li>
                            Placket: <span>{kids.features?.placket}</span>
                          </li>
                        </ul>
                      </div>
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
                            <th>Size</th>
                            <th>Height (in)</th>
                            <th>Weight (lbs)</th>
                            <th>Chest (in)</th>
                          </tr>
                        </thead>
                        <tbody className="fs-6 fw-bold">
                          <tr>
                            <td>XS (4-5)</td>
                            <td>39 - 44</td>
                            <td>33 - 42</td>
                            <td>23 - 24</td>
                          </tr>
                          <tr>
                            <td>S (6-7)</td>
                            <td>45 - 50</td>
                            <td>43 - 54</td>
                            <td>25 - 26</td>
                          </tr>
                          <tr>
                            <td>M (8-10)</td>
                            <td>51 - 56</td>
                            <td>55 - 73</td>
                            <td>27 - 28</td>
                          </tr>
                          <tr>
                            <td>L (12-14)</td>
                            <td>57 - 63</td>
                            <td>74 - 100</td>
                            <td>29 - 31</td>
                          </tr>
                          <tr>
                            <td>XL (16)</td>
                            <td>64 - 67</td>
                            <td>101 - 115</td>
                            <td>32 - 33</td>
                          </tr>
                          <tr>
                            <td>XXL (18)</td>
                            <td>68 - 71</td>
                            <td>116 - 130</td>
                            <td>34 - 35</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ProductHighlights />
        </div>
      </section>
    </section>
  );
};

export default KidsDetails;
