import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Admin.css";

const ViewKids = () => {
  const [kids, setKids] = useState([]);


  const [_id, setId] = useState("");
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
  

  useEffect(() => {
    axios
      .get("https://luxelane-server-zyhb.onrender.com/kids")
      .then((res) => setKids(res.data))
      .catch((err) => console.log(err));
  });

  const deleteKid = (kidsid) => {
    axios
      .delete(`https://luxelane-server-zyhb.onrender.com/kids/${kidsid}`)
      .then(() => alert("Product deleted."))
      .catch((err) => console.log(err));
  };

  const getOneRecord = (kidsid) => {
    axios
      .get(`https://luxelane-server-zyhb.onrender.com/kids/${kidsid}`)
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

        setFit(res.data.features.fit);
        setMaterial(res.data.features.material);
        setSleeve(res.data.features.sleeve);
        setCollar(res.data.features.collar);
        setPattern(res.data.features.pattern);
        setOccasion(res.data.features.occasion);
        setLength(res.data.features.length);
        setClosure(res.data.features.closure);
        setTransparency(res.data.features.transparency);
        setStretch(res.data.features.stretch);
        setHemline(res.data.features.hemline);
        setPlacket(res.data.features.placket);
      })
      .catch((err) => console.log(err));
  };

  const updateKid = (e) => {
    e.preventDefault();
    axios
      .put(`https://luxelane-server-zyhb.onrender.com/kids/${_id}`, {
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
          placket,
          
        },
      })
      .then(() => alert("Product updated."))
      .catch((err) => console.log(err));
  };

  return (
    <div className="container viewkids">
      <h3 className="text-center my-4">View Kids' Clothing Details</h3>
      <table className="table table-bordered table-responsive text-center">
        <thead>
          <tr>
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
            <th>Fit</th>
            <th>Material</th>
            <th>Sleeve</th>
            <th>Collar</th>
            <th>Pattern</th>
            <th>Occasion</th>
            <th>Length</th>
            <th>Closure</th>
            <th>Transparency</th>
            <th>Stretch</th>
            <th>Hemline</th>
            <th>Placket</th>
           
           
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {kids.map((kid, index) => (
            <tr key={index}>
              <td><img src={kid.image1} className="w-100 h-100" alt="img1" /></td>
              <td><img src={kid.image2} className="w-100 h-100" alt="img2" /></td>
              <td><img src={kid.image3} className="w-100 h-100" alt="img3" /></td>
              <td><img src={kid.image4} className="w-100 h-100" alt="img4" /></td>
              <td>{kid.name}</td>
              <td>{kid.description}</td>
              <td>{kid.brand}</td>
              <td>{kid.category}</td>
              <td>{kid.colour}</td>
              <td>{kid.op}</td>
              <td>{kid.discount}</td>
              <td>{kid.dp}</td>
              <td>{kid.features?.fit}</td>
              <td>{kid.features?.material}</td>
              <td>{kid.features?.sleeve}</td>
              <td>{kid.features?.collar}</td>
              <td>{kid.features?.pattern}</td>
              <td>{kid.features?.occasion}</td>
              <td>{kid.features?.length}</td>
              <td>{kid.features?.closure}</td>
              <td>{kid.features?.transparency}</td>
              <td>{kid.features?.stretch}</td>
              <td>{kid.features?.hemline}</td>
              <td>{kid.features?.placket}</td>
             
              <td>
                <button
                  onClick={() => getOneRecord(kid._id)}
                  data-bs-toggle="modal"
                  data-bs-target="#update"
                  className="btn btn-primary  mb-2"
                >
                  <i className="bi bi-pencil-square"></i>
                </button>
                <button
                  onClick={() => deleteKid(kid._id)}
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
              <h5>Update Product</h5>
              <button data-bs-dismiss="modal" className="btn-close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={updateKid}>
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
                  type="text"
                  value={op}
                  className="form-control mb-3"
                  placeholder="Enter Product Original Price"
                  onChange={(e) => setOP(e.target.value)}
                />
                <input
                  type="text"
                  value={dp}
                  className="form-control mb-3"
                  placeholder="Enter Product Discounted Price"
                  onChange={(e) => setDP(e.target.value)}
                />
                <h6>Features</h6>
                <input
                  type="text"
                  value={fit}
                  className="form-control mb-3"
                  placeholder="Enter Fit"
                  onChange={(e) => setFit(e.target.value)}
                />
                <input
                  type="text"
                  value={material}
                  className="form-control mb-3"
                  placeholder="Enter Material"
                  onChange={(e) => setMaterial(e.target.value)}
                />
                <input
                  type="text"
                  value={sleeve}
                  className="form-control mb-3"
                  placeholder="Enter Sleeve"
                  onChange={(e) => setSleeve(e.target.value)}
                />
                <input
                  type="text"
                  value={collar}
                  className="form-control mb-3"
                  placeholder="Enter Collar"
                  onChange={(e) => setCollar(e.target.value)}
                />
                <input
                  type="text"
                  value={pattern}
                  className="form-control mb-3"
                  placeholder="Enter Pattern"
                  onChange={(e) => setPattern(e.target.value)}
                />
                <input
                  type="text"
                  value={occasion}
                  className="form-control mb-3"
                  placeholder="Enter Occasion"
                  onChange={(e) => setOccasion(e.target.value)}
                />
                <input
                  type="text"
                  value={length}
                  className="form-control mb-3"
                  placeholder="Enter Length"
                  onChange={(e) => setLength(e.target.value)}
                />
                <input
                  type="text"
                  value={closure}
                  className="form-control mb-3"
                  placeholder="Enter Closure"
                  onChange={(e) => setClosure(e.target.value)}
                />
                <input
                  type="text"
                  value={transparency}
                  className="form-control mb-3"
                  placeholder="Enter Transparency"
                  onChange={(e) => setTransparency(e.target.value)}
                />
                <input
                  type="text"
                  value={stretch}
                  className="form-control mb-3"
                  placeholder="Enter Stretch"
                  onChange={(e) => setStretch(e.target.value)}
                />
                <input
                  type="text"
                  value={hemline}
                  className="form-control mb-3"
                  placeholder="Enter Hemline"
                  onChange={(e) => setHemline(e.target.value)}
                />
                <input
                  type="text"
                  value={placket}
                  className="form-control mb-3"
                  placeholder="Enter Placket"
                  onChange={(e) => setPlacket(e.target.value)}
                />
                <button type="submit" className="btn btn-primary">
                  Update Product
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewKids;
