import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Admin.css";

const ViewFA = () => {
  const [fa, setFA] = useState([]);
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
  const [features, setFeatures] = useState([]); // State for features
  const [featureInput, setFeatureInput] = useState(""); // State for input field to add features
  const [_id, setId] = useState("");

  useEffect(() => {
    axios
      .get(`https://luxelane-server-zyhb.onrender.com/footwear_and_accessories`)
      .then((res) => setFA(res.data))
      .catch((err) => console.log(err));
  } );

  const deleteFA = (faId) => {
    axios
      .delete(`https://luxelane-server-zyhb.onrender.com/footwear_and_accessories/${faId}`)
      .then(() => alert("Your Selected Product was Deleted"))
      .catch((err) => console.log(err));
  };

  const getOneRecord = (faId) => {
    axios
      .get(`https://luxelane-server-zyhb.onrender.com/footwear_and_accessories/${faId}`)
      .then((res) => {
        setDiscount(res.data.discount);
        setImage1(res.data.image1);
        setImage2(res.data.image2);
        setImage3(res.data.image3);
        setImage4(res.data.image4);
        setName(res.data.name);
        setDescription(res.data.description);
        setBrand(res.data.brand);
        setCategory(res.data.category);
        setColour(res.data.colour);
        setOP(res.data.op);
        setDP(res.data.dp);
        setId(res.data._id);
        setFeatures(res.data.features || []); // Set the features from the response
      })
      .catch((err) => console.log(err));
  };

  const updateEnq = (e) => {
    e.preventDefault();
    axios
      .put(`https://luxelane-server-zyhb.onrender.com/footwear_and_accessories/${_id}`, {
        _id,
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
        features, // Send the updated features
      })
      .then(() => alert("Product Updated"))
      .catch((err) => console.log(err));
  };

  const handleAddFeature = () => {
    if (featureInput.trim() !== "") {
      setFeatures((prevFeatures) => [...prevFeatures, featureInput]); // Add the feature
      setFeatureInput(""); // Clear the input after adding
    }
  };

  const handleRemoveFeature = (feature) => {
    setFeatures(features.filter((item) => item !== feature)); // Remove a feature from the list
  };

  return (
    <div className="container viewfa">
      <h3 className="text-center mb-5 container mt-3">
        View Footwear & Accessories details
      </h3>
      <table className="table table-bordered">
        <thead>
          <tr className="text-center">
            <th>Image1</th>
            <th>Image2</th>
            <th>Image3</th>
            <th>Image4</th>
            <th>Name</th>
            <th>Description</th>
            <th>Brand</th>
            <th>Category</th>
            <th>Colour</th>
            <th>Original Price</th>
            <th>Discount</th>
            <th>Discounted Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {fa.map((fa, index) => (
            <tr key={index}>
              <td>
                <img
                  src={fa.image1}
                  className="w-100 h-100"
                  alt="error"
                />
              </td>
              <td>
                <img
                  src={fa.image2}
                  className="w-100 h-100"
                  alt="error"
                />
              </td>
              <td>
                <img
                  src={fa.image3}
                  className="w-100 h-100"
                  alt="error"
                />
              </td>
              <td>
                <img
                  src={fa.image4}
                  className="w-100 h-100"
                  alt="error"
                />
              </td>
              <td>{fa.name}</td>
              <td>{fa.description}</td>
              <td>{fa.brand}</td>
              <td>{fa.category}</td>
              <td>{fa.colour}</td>
              <td>{fa.op}</td>
              <td>{fa.discount}</td>
              <td>{fa.dp}</td>
              <td>
                <button
                  onClick={() => getOneRecord(fa._id)}
                  data-bs-target="#update"
                  data-bs-toggle="modal"
                  className="btn btn-primary me-3 mb-2"
                >
                  <i className="bi bi-pencil-square"></i>
                </button>
                <button
                  onClick={() => deleteFA(fa._id)}
                  className="btn btn-danger"
                >
                  <i className="bi bi-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      
      <div className="modal fade" id="update" data-bs-backdrop="static">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5>Update Products</h5>
              <button data-bs-dismiss="modal" className="btn-close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={updateEnq}>
                <input
                  type="text"
                  value={discount}
                  className="form-control mb-3"
                  placeholder="Enter Product Discount"
                  onChange={(e) => setDiscount(e.target.value)}
                />
                <input
                  type="text"
                  value={image1}
                  className="form-control mb-3"
                  placeholder="Enter Product Image1"
                  onChange={(e) => setImage1(e.target.value)}
                />
                <input
                  type="text"
                  value={image2}
                  className="form-control mb-3"
                  placeholder="Enter Product Image2"
                  onChange={(e) => setImage2(e.target.value)}
                />
                <input
                  type="text"
                  value={image3}
                  className="form-control mb-3"
                  placeholder="Enter Product Image3"
                  onChange={(e) => setImage3(e.target.value)}
                />
                <input
                  type="text"
                  value={image4}
                  className="form-control mb-3"
                  placeholder="Enter Product Image4"
                  onChange={(e) => setImage4(e.target.value)}
                />
                <input
                  type="text"
                  value={name}
                  className="form-control mb-3"
                  placeholder="Enter Product Name"
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="text"
                  value={description}
                  className="form-control mb-3"
                  placeholder="Enter Product Description"
                  onChange={(e) => setDescription(e.target.value)}
                />
                <input
                  type="text"
                  value={brand}
                  className="form-control mb-3"
                  placeholder="Enter Product Brand"
                  onChange={(e) => setBrand(e.target.value)}
                />
                <input
                  type="text"
                  value={category}
                  className="form-control mb-3"
                  placeholder="Enter Product Category"
                  onChange={(e) => setCategory(e.target.value)}
                />
                <input
                  type="text"
                  value={colour}
                  className="form-control mb-3"
                  placeholder="Enter Product Colour"
                  onChange={(e) => setColour(e.target.value)}
                />
                <input
                  type="op"
                  value={op}
                  className="form-control mb-3"
                  placeholder="Enter Product Original Price"
                  onChange={(e) => setOP(e.target.value)}
                />
                <input
                  type="dp"
                  value={dp}
                  className="form-control mb-3"
                  placeholder="Enter Product Discounted Price"
                  onChange={(e) => setDP(e.target.value)}
                />

                {/* Feature Input and Add Button */}
                <div className="mb-3">
                  <input
                    type="text"
                    value={featureInput}
                    className="form-control"
                    placeholder="Add Feature"
                    onChange={(e) => setFeatureInput(e.target.value)}
                  />
                  <button
                    type="button"
                    className="btn btn-success mt-2"
                    onClick={handleAddFeature}
                  >
                    Add Feature
                  </button>
                </div>

                {/* Displaying Features */}
                <div className="mb-3">
                  <ul>
                    {features.map((feature, index) => (
                      <li key={index}>
                        {feature}{" "}
                        <button
                          type="button"
                          className="btn btn-danger btn-sm"
                          onClick={() => handleRemoveFeature(feature)}
                        >
                          Remove
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                <button type="submit" className="form-control btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewFA;
