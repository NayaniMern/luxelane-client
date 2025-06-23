import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Admin.css";

const ViewBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [des, setDes] = useState("");
  const [date, setDate] = useState("");
  const [user, setUser] = useState("");
  const [description, setDescription] = useState("");
  const [_id, setId] = useState("");
  useEffect(() => {
    axios
      .get(`https://luxelane-server-zyhb.onrender.com/blogs`)

      .then((res) => setBlogs(res.data))
      .catch((err) => console.log(err));
  });
  const deleteBlogs = (blogsId) => {
    axios
      .delete(`https://luxelane-server-zyhb.onrender.com/blogs/${blogsId}`)
      .then(() => alert("Your Selected Blog was Deleted"))
      .catch((err) => console.log(err));
  };
  const getOneRecord = (blogsId) => {
    axios
      .get(`https://luxelane-server-zyhb.onrender.com/blogs/${blogsId}`)
      .then((res) => {
        setImage(res.data.image);
        setName(res.data.name);
        setDes(res.data.des);
        setDate(res.data.date);
        setUser(res.data.user);
        setDescription(res.data.description);
        setId(res.data._id);
      })
      .catch((err) => console.log(err));
  };
  const updateEnq = (e) => {
    e.preventDefault();
    axios
      .put(`https://luxelane-server-zyhb.onrender.com/blogs/${_id}`, {
        _id,
        image,
        name,
        des,
        date,
        user,
        description,
      })
      .then((res) => alert("Blog Updated"))
      .catch((err) => console.log(err));
  };
  return (
    <div className="container    viewblogs">
      <h1 className="text-center mt-5   ">View Blogs</h1>

      <div className="row">
        {blogs.map((blogs, index) => {
          return (
            <div key={index} className=" mb-3 col-lg-4 ">
              <div className="card h-100 ">
                <img src={blogs.image}  className="container p-2" alt="error" />
                <div className="card-body">
                  <h5>{blogs.name}</h5>
                  <p><span>Date:</span> {blogs.date}</p>
                  <p><span>User:</span> {blogs.user}</p>
                  <p><span>Short_des:</span> {blogs.des}</p>
                  <details>
                    <summary><span>Long_des:</span> </summary>
                    <p>{blogs.description}</p>
                  </details>
                  
                </div>
                <div className="d-flex justify-content-center mb-3">
                  <button
                    onClick={() => getOneRecord(blogs._id)}
                    data-bs-target="#update"
                    data-bs-toggle="modal"
                    className="btn btn-primary me-3"
                  >
                    <i className="bi bi-pencil-square"></i>
                  </button>
                  <button
                    onClick={() => deleteBlogs(blogs._id)}
                    className="btn btn-danger"
                  >
                     <i className="bi bi-trash"></i>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="modal fade " id="update" data-bs-backdrop="static">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5>Update Blogs</h5>
              <button data-bs-dismiss="modal" className="btn-close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={updateEnq}>
                <input
                  type="image_url"
                  value={image}
                  className="form-control mb-3"
                  placeholder="Enter Blog Image_URL"
                  onChange={(e) => setImage(e.target.value)}
                />
                <input
                  type="name"
                  value={name}
                  className="form-control mb-3"
                  placeholder="Enter Blog Name"
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="date"
                  value={date}
                  className="form-control mb-3"
                  placeholder="Enter Blog Date"
                  onChange={(e) => setDate(e.target.value)}
                />
                <input
                  type="user"
                  value={user}
                  className="form-control mb-3"
                  placeholder="Enter Blog User"
                  onChange={(e) => setUser(e.target.value)}
                />
                <input
                  type="des"
                  value={des}
                  className="form-control mb-3"
                  placeholder="Enter Blog Short_des"
                  onChange={(e) => setDes(e.target.value)}
                />
                <input
                  type="description"
                  value={description}
                  className="form-control mb-3"
                  placeholder="Enter Blog Long_des"
                  onChange={(e) => setDescription(e.target.value)}
                />
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

export default ViewBlogs;