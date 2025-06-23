import axios from "axios";
import React, { useState } from "react";
import "./FA.css";

const AddFA = () => {
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
  const [features, setFeatures] = useState([]);// Added state for features
  const [featureInput, setFeatureInput] = useState(""); // Added state to track input for features
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post(`https://luxelane-server-zyhb.onrender.com/footwear_and_accessories`, { discount,image1,image2,image3,image4, name, description, brand,category,colour,op,dp,features/*Send the features as part of the request*/})
      .then((res) => {
        alert("You Have Successfully Posted Footwear & Accessories Product Data");

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
        setFeatures([]); // Reset features array
        setFeatureInput(""); // Reset feature input
        
      })
      .catch((err) => console.log(err));
  };

  const handleAddFeature = () => {
    if (featureInput.trim() !== "") {
      setFeatures((prevFeatures) => [...prevFeatures, featureInput]); // Add the feature to the list
      setFeatureInput(""); // Clear input field after adding
    }
  };
  return (
    <div className="container p-5 addfa">
      <h3 className="text-center text-uppercase mb-4">Add Footwear & Accessories details</h3>
      <div className="row justify-content-center ">
        <div className="col-md-12 col-lg-12 ">
          <form className="container col-9" onSubmit={submitHandler}>
            <div className=" form-floating">
              <input
                type="discount"
                value={discount}
                className="form-control mb-3"
                placeholder="Enter Product Discount"
                onChange={(e) => setDiscount(e.target.value)}
              />
              <label>Enter Product Discount</label>
            </div>
            <div className=" form-floating">
              <input
                type="image_url"
                value={image1}
                className="form-control mb-3"
                placeholder="Enter Product Image1"
                onChange={(e) => setImage1(e.target.value)}
              />
              <label>Enter Product Image_URL1</label>
            </div>
            <div className=" form-floating">
              <input
                type="image_url"
                value={image2}
                className="form-control mb-3"
                placeholder="Enter Product Image2"
                onChange={(e) => setImage2(e.target.value)}
              />
              <label>Enter Product Image_URL2</label>
            </div>
            <div className=" form-floating">
              <input
                type="image_url"
                value={image3}
                className="form-control mb-3"
                placeholder="Enter Product Image3"
                onChange={(e) => setImage3(e.target.value)}
              />
              <label>Enter Product Image_URL3</label>
            </div>
            <div className=" form-floating">
              <input
                type="image_url"
                value={image4}
                className="form-control mb-3"
                placeholder="Enter Product Image4"
                onChange={(e) => setImage4(e.target.value)}
              />
              <label>Enter Product Image_URL4</label>
            </div>
            <div className=" form-floating">
              <input
                type="name"
                value={name}
                className="form-control mb-3 "
                placeholder="Enter Product Name"
                onChange={(e) => setName(e.target.value)}
              />
              <label>Enter Product Name</label>
            </div>
            <div className=" form-floating">
              <input
                type="description"
                value={description}
                className="form-control mb-3 "
                placeholder="Enter Product Description"
                onChange={(e) => setDescription(e.target.value)}
              />
              <label>Enter Product Description</label>
            </div>
            <div className=" form-floating">
              <input
                type="brand"
                value={brand}
                className="form-control mb-3 "
                placeholder="Enter Product Brand"
                onChange={(e) => setBrand(e.target.value)}
              />
              <label>Enter Product Brand</label>
            </div>
            <div className=" form-floating">
              <input
                type="category"
                value={category}
                className="form-control mb-3 "
                placeholder="Enter Product Category"
                onChange={(e) => setCategory(e.target.value)}
              />
              <label>Enter Product Category</label>
            </div>
            <div className=" form-floating">
              <input
                type="colour"
                value={colour}
                className="form-control mb-3 "
                placeholder="Enter Product Colour"
                onChange={(e) => setColour(e.target.value)}
              />
              <label>Enter Product Colour</label>
            </div>
           
            <div className=" form-floating">
              <input
                type="op"
                value={op}
                className="form-control mb-3 "
                placeholder="Enter Product Original Price"
                onChange={(e) => setOP(e.target.value)}
              />
              <label>Enter Product Original Price</label>
            </div>
            <div className=" form-floating">
              <input
                type="dp"
                value={dp}
                className="form-control mb-3 "
                placeholder="Enter Product Discounted Price"
                onChange={(e) => setDP(e.target.value)}
              />
              <label>Enter Product Discounted Price</label>
            </div>
            {/* Features Section */}
            <div className="form-floating mb-3">
              <input
                type="text"
                value={featureInput}
                className="form-control"
                placeholder="Add a product feature"
                onChange={(e) => setFeatureInput(e.target.value)}
              />
              <label>Add a Product Feature</label>
            </div>

            <button
              type="button"
              className="btn btn-primary mb-3"
              onClick={handleAddFeature}
            >
              Add Feature
            </button>

            {/* Displaying Added Features */}
            {features.length > 0 && (
              <div className="mb-3">
                <ul>
                  {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
            <button type="submit" className="form-control">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};



export default AddFA