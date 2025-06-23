import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import "./Men.css";
import Aos from "aos";
import "aos/dist/aos.css";
import ProductHighlights from "./ProductHighlights";
import buy from "./assets/buy.png";
import { useCart } from "./CartContext";

const MenDetails = () => {
  const [selectedSize, setSelectedSize] = useState("");
const { addToCart } = useCart();
  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size before adding to cart");
      return;
    }

    const cartItem = {
      id: men.id,
      name: men.name,
      price: men.dp,
      quantity: count,
      size: selectedSize,
      image: men.image1,
    };

    addToCart(cartItem);
    alert("Added to cart!");
  };

  const { id } = useParams();
  const [men, setMen] = useState("");
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
      .get(`https://luxelane-server-zyhb.onrender.com/mens/${id}`)
      .then((res) => setMen(res.data));
  });
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const productImages = [men.image1, men.image2, men.image3, men.image4];

  return (
    <section>
      <section className="men_background">
        <div className="container-fluid p-0">
          <div className="row text-center">
            <div className="col-lg-12">
              <h1>Men's Wear</h1>
              <div className="d-flex justify-content-center">
                <h5 className="me-5"><NavLink style={{textDecoration:"none",  color: "inherit"}} to ="/men">Men</NavLink> </h5>
                <h6 className="">Men's Product Details</h6>
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
                <i className="bi bi-chevron-right"></i> Men
                <i className="bi bi-chevron-right"></i> {men.category}
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
              <h1>{men.name}</h1>
              <div className="icons d-flex " style={{ color: "#be8400" }}>
                <i className="bi bi-star-fill me-2"></i>
                <i className="bi bi-star-fill me-2"></i>
                <i className="bi bi-star-fill me-2"></i>
                <i className="bi bi-star-fill me-2"></i>
                <i className="bi bi-star-fill"></i>
              </div>
              <h3>
                Brand:<span>{men.brand}</span>{" "}
              </h3>
              <h5>
                colour:<span>{men.colour}</span>
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
                  <span className="discount">{men.discount} off</span>
                  <span className="dp">{men.dp}</span>
                </div>
                <h5 className="op ">
                  MRP:<span className="mx-2">{men.op}</span>
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
                    <p>{men.description}</p>
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
                            Fit: <span>{men.features?.fit}</span>
                          </li>
                          <li>
                            Material: <span>{men.features?.material}</span>
                          </li>
                          <li>
                            Sleeve: <span>{men.features?.sleeve}</span>
                          </li>
                          <li>
                            Collar: <span>{men.features?.collar}</span>
                          </li>
                          <li>
                            Pattern: <span>{men.features?.pattern}</span>
                          </li>
                          <li>
                            Occasion: <span>{men.features?.occasion}</span>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-6">
                        <ul>
                          <li>
                            Length: <span>{men.features?.length}</span>
                          </li>
                          <li>
                            Closure: <span>{men.features?.closure}</span>
                          </li>
                          <li>
                            Transparency:{" "}
                            <span>{men.features?.transparency}</span>
                          </li>
                          <li>
                            Stretch: <span>{men.features?.stretch}</span>
                          </li>
                          <li>
                            Hemline: <span>{men.features?.hemline}</span>
                          </li>
                          <li>
                            Placket: <span>{men.features?.placket}</span>
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
                            <th>Chest (in)</th>
                            <th>Waist (in)</th>
                            <th>Hip (in)</th>
                          </tr>
                        </thead>
                        <tbody className="fs-6 fw-bold">
                          <tr>
                            <td>XS</td>
                            <td>33 - 34</td>
                            <td>27 - 28</td>
                            <td>33 - 34</td>
                          </tr>
                          <tr>
                            <td>S</td>
                            <td>35 - 37</td>
                            <td>29 - 31</td>
                            <td>35 - 37</td>
                          </tr>
                          <tr>
                            <td>M</td>
                            <td>38 - 40</td>
                            <td>32 - 34</td>
                            <td>38 - 40</td>
                          </tr>
                          <tr>
                            <td>L</td>
                            <td>41 - 43</td>
                            <td>35 - 37</td>
                            <td>41 - 43</td>
                          </tr>
                          <tr>
                            <td>XL</td>
                            <td>44 - 46</td>
                            <td>38 - 40</td>
                            <td>44 - 46</td>
                          </tr>
                          <tr>
                            <td>XXL</td>
                            <td>48 - 50</td>
                            <td>42 - 44</td>
                            <td>48 - 50</td>
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

export default MenDetails;
