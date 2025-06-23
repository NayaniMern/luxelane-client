import axios from "axios";
import React, { useState } from "react";
import "./Blog.css";

const AddBlog = () => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [des, setDes] = useState("");
  const [date, setDate] = useState("");
  const [user, setUser] = useState("");
  const [description, setDescription] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post(`https://luxelane-server-zyhb.onrender.com/blogs`, {
        image,
        name,
        des,
        date,
        user,
        description,
      })
      .then((res) => {
        alert("You Have Sucessfully Posted Blog Data");
        setImage("");
        setName("");
        setDes("");
        setDate("");
        setUser("");
        setDescription("");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container mt-5  addblog">
      <h1 className="text-center mb-5">Add Blogs</h1>
      <div className="row justify-content-center ">
        <div className="col-md-12 col-lg-12 ">
          <form className="container   col-8" onSubmit={submitHandler}>
            <div className=" form-floating">
              <input
                type="image_url"
                value={image}
                className="form-control mb-3"
                placeholder="Enter Blog Image"
                onChange={(e) => setImage(e.target.value)}
              />
              <label>Enter Blog Image_URL</label>
            </div>
            <div className=" form-floating">
              <input
                type="name"
                value={name}
                className="form-control mb-3 "
                placeholder="Enter Blog Name"
                onChange={(e) => setName(e.target.value)}
              />
              <label>Enter Blog Name</label>
            </div>
            <div className=" form-floating">
              <input
                type="des"
                value={des}
                className="form-control mb-3 "
                placeholder="Enter Blog Short_Description"
                onChange={(e) => setDes(e.target.value)}
              />
              <label>Enter Blog Short_Description</label>
            </div>
            <div className=" form-floating">
              <input
                type="user"
                value={user}
                className="form-control mb-3 "
                placeholder="Enter Blog User"
                onChange={(e) => setUser(e.target.value)}
              />
              <label>Enter Blog User</label>
            </div>
            <div className=" form-floating">
              <input
                type="date"
                value={date}
                className="form-control mb-3 "
                placeholder="Enter Blog Date"
                onChange={(e) => setDate(e.target.value)}
              />
              <label>Enter Blog Date</label>
            </div>
            <div className=" form-floating">
              <input
                type="description"
                value={description}
                className="form-control mb-3 "
                placeholder="Enter Blog Long_Description"
                onChange={(e) => setDescription(e.target.value)}
              />
              <label>Enter Blog Long_Description</label>
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

export default AddBlog;
