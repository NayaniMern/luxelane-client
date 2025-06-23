import axios from "axios";
import React, { useState } from "react";
import "./Kids.css";

const AddKids = () => {
  const [discount, setDiscount] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [colour, setColour] = useState("");
  const [op, setOP] = useState("");
  const [dp, setDP] = useState("");

  const [fit, setFit] = useState("");
  const [material, setMaterial] = useState("");
  const [sleeve, setSleeve] = useState("");
  const [collar, setCollar] = useState("");
  const [pattern, setPattern] = useState("");
  const [occasion, setOccasion] = useState("");
  const [length, setLength] = useState("");
  const [closure, setClosure] = useState("");
  const [transparency, setTransparency] = useState("");
  const [stretch, setStretch] = useState("");
  const [hemline, setHemline] = useState("");
  const [placket, setPlacket] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post(`https://luxelane-server-zyhb.onrender.com/kids`, {
        discount,
        image1,
        image2,
        image3,
        image4,
        name,
        description,
        brand,
        category,
        colour,
        op,
        dp,
        features: {
          fit,
          material,
          sleeve,
          collar,
          pattern,
          occasion,
          length,
          closure,
          transparency,
          stretch,
          hemline,
          placket
        }
      })
      .then((res) => {
        alert("You Have Successfully Posted Kids' Product Data");

     
        setDiscount("");
        setImage1("");
        setImage2("");
        setImage3("");
        setImage4("");
        setName("");
        setDescription("");
        setBrand("");
        setCategory("");
        setColour("");
        setOP("");
        setDP("");
        setFit("");
        setMaterial("");
        setSleeve("");
        setCollar("");
        setPattern("");
        setOccasion("");
        setLength("");
        setClosure("");
        setTransparency("");
        setStretch("");
        setHemline("");
        setPlacket("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container p-5 addkids">
      <h3 className="text-center text-uppercase mb-4">Add Kids' wear details</h3>
      <div className="row justify-content-center">
        <div className="col-md-12 col-lg-12">
          <form className="container col-9" onSubmit={submitHandler}>
            <div className="form-floating">
              <input
                type="DISCOUNT"
                value={discount}
                className="form-control mb-3"
                placeholder="Enter Product Discount"
                onChange={(e) => setDiscount(e.target.value)}
              />
              <label>Enter Product Discount</label>
            </div>
            <div className="form-floating">
              <input
                type="image_url"
                value={image1}
                className="form-control mb-3"
                placeholder="Enter Product Image1"
                onChange={(e) => setImage1(e.target.value)}
              />
              <label>Enter Product Image_URL1</label>
            </div>
            <div className="form-floating">
              <input
                type="image_url"
                value={image2}
                className="form-control mb-3"
                placeholder="Enter Product Image2"
                onChange={(e) => setImage2(e.target.value)}
              />
              <label>Enter Product Image_URL2</label>
            </div>
            <div className="form-floating">
              <input
                type="image_url"
                value={image3}
                className="form-control mb-3"
                placeholder="Enter Product Image3"
                onChange={(e) => setImage3(e.target.value)}
              />
              <label>Enter Product Image_URL3</label>
            </div>
            <div className="form-floating">
              <input
                type="image_url"
                value={image4}
                className="form-control mb-3"
                placeholder="Enter Product Image4"
                onChange={(e) => setImage4(e.target.value)}
              />
              <label>Enter Product Image_URL4</label>
            </div>
            <div className="form-floating">
              <input
                type="name"
                value={name}
                className="form-control mb-3"
                placeholder="Enter Product Name"
                onChange={(e) => setName(e.target.value)}
              />
              <label>Enter Product Name</label>
            </div>
            <div className="form-floating">
              <input
                type="description"
                value={description}
                className="form-control mb-3"
                placeholder="Enter Product Description"
                onChange={(e) => setDescription(e.target.value)}
              />
              <label>Enter Product Description</label>
            </div>
            <div className="form-floating">
              <input
                type="brand"
                value={brand}
                className="form-control mb-3"
                placeholder="Enter Product Brand"
                onChange={(e) => setBrand(e.target.value)}
              />
              <label>Enter Product Brand</label>
            </div>
            <div className="form-floating">
              <input
                type="category"
                value={category}
                className="form-control mb-3"
                placeholder="Enter Product Category"
                onChange={(e) => setCategory(e.target.value)}
              />
              <label>Enter Product Category</label>
            </div>
            <div className="form-floating">
              <input
                type="colour"
                value={colour}
                className="form-control mb-3"
                placeholder="Enter Product Colour"
                onChange={(e) => setColour(e.target.value)}
              />
              <label>Enter Product Colour</label>
            </div>
            <div className="form-floating">
              <input
                type="op"
                value={op}
                className="form-control mb-3"
                placeholder="Enter Product Original Price"
                onChange={(e) => setOP(e.target.value)}
              />
              <label>Enter Product Original Price</label>
            </div>
            <div className="form-floating">
              <input
                type="dp"
                value={dp}
                className="form-control mb-3"
                placeholder="Enter Product Discounted Price"
                onChange={(e) => setDP(e.target.value)}
              />
              <label>Enter Product Discounted Price</label>
            </div>
            {/* Features Section */}
            <div className="form-floating">
              <input
                type="text"
                value={fit}
                className="form-control mb-3"
                placeholder="Enter Product Fit"
                onChange={(e) => setFit(e.target.value)}
              />
              <label>Enter Product Fit</label>
            </div>
            <div className="form-floating">
              <input
                type="text"
                value={material}
                className="form-control mb-3"
                placeholder="Enter Product Material"
                onChange={(e) => setMaterial(e.target.value)}
              />
              <label>Enter Product Material</label>
            </div>
            <div className="form-floating">
              <input
                type="text"
                value={sleeve}
                className="form-control mb-3"
                placeholder="Enter Product Sleeve"
                onChange={(e) => setSleeve(e.target.value)}
              />
              <label>Enter Product Sleeve</label>
            </div>
            <div className="form-floating">
              <input
                type="text"
                value={collar}
                className="form-control mb-3"
                placeholder="Enter Product Collar"
                onChange={(e) => setCollar(e.target.value)}
              />
              <label>Enter Product Collar</label>
            </div>
            <div className="form-floating">
              <input
                type="text"
                value={pattern}
                className="form-control mb-3"
                placeholder="Enter Product Pattern"
                onChange={(e) => setPattern(e.target.value)}
              />
              <label>Enter Product Pattern</label>
            </div>
            <div className="form-floating">
              <input
                type="text"
                value={occasion}
                className="form-control mb-3"
                placeholder="Enter Product Occasion"
                onChange={(e) => setOccasion(e.target.value)}
              />
              <label>Enter Product Occasion</label>
            </div>
            <div className="form-floating">
              <input
                type="text"
                value={length}
                className="form-control mb-3"
                placeholder="Enter Product Length"
                onChange={(e) => setLength(e.target.value)}
              />
              <label>Enter Product Length</label>
            </div>
            <div className="form-floating">
              <input
                type="text"
                value={closure}
                className="form-control mb-3"
                placeholder="Enter Product Closure"
                onChange={(e) => setClosure(e.target.value)}
              />
              <label>Enter Product Closure</label>
            </div>
            <div className="form-floating">
              <input
                type="text"
                value={transparency}
                className="form-control mb-3"
                placeholder="Enter Product Transparency"
                onChange={(e) => setTransparency(e.target.value)}
              />
              <label>Enter Product Transparency</label>
            </div>
            <div className="form-floating">
              <input
                type="text"
                value={stretch}
                className="form-control mb-3"
                placeholder="Enter Product Stretch"
                onChange={(e) => setStretch(e.target.value)}
              />
              <label>Enter Product Stretch</label>
            </div>
            <div className="form-floating">
              <input
                type="text"
                value={hemline}
                className="form-control mb-3"
                placeholder="Enter Product Hemline"
                onChange={(e) => setHemline(e.target.value)}
              />
              <label>Enter Product Hemline</label>
            </div>
            <div className="form-floating">
              <input
                type="text"
                value={placket}
                className="form-control mb-3"
                placeholder="Enter Product Placket"
                onChange={(e) => setPlacket(e.target.value)}
              />
              <label>Enter Product Placket</label>
            </div>

            <button type="submit" className="form-control">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddKids;
