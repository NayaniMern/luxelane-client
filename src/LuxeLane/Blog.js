import React, { useEffect, useState } from "react";
import "./Blog.css";
import Aos from "aos";
import "aos/dist/aos.css";


import axios from "axios";
import { NavLink } from "react-router-dom";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios
      .get(`https://luxelane-server-zyhb.onrender.com/blogs`)
      .then((res) => setBlogs(res.data))
      .catch((err) => console.log(err));
  });
   useEffect(() => {
      Aos.init({ duration: 1000 });
    }, []);
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
   
  return (
    <section className="blog-container">
      <section className="blog_background">
        <div className="container-fluid p-0">
          <div className="row text-center">
            <div className="col-lg-12">
              <h1>Blogs</h1>
              <div className="d-flex justify-content-center">
                <h5 className="me-5"><NavLink style={{textDecoration:"none",  color: "inherit"}} to ="/">Home</NavLink> </h5>
                <h6 className="">Blog</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container  blogs-container   ">
        <h1 className="my-5">Our Blogs</h1>
        <div className="row overflow-hidden ">
          {blogs.map((blog, index) => {
            return (
              <div
                key={index}
                className="service-data col-md-6 col-lg-3 col-xl-4 mb-3 " data-aos="fade-up-left"
              >
                <div className="card  bg-transparent w-100 h-100 shadow">
                  
                    <img
                      src={blog.image}
                      className="container p-2  "
                      alt="error"
                    />
               

                  <div className="card-body">
                    <div className="d-flex">
                      <p className="justify-content-start col-6 fs-6 fw-bolder">
                        <i className="bi bi-calendar"></i> {blog.date}
                      </p>
                      <span className="text-end col-6 fs-6 fw-bolder">
                        <i className="bi bi-person-fill"></i> {blog.user}
                      </span>
                    </div>

                    <h3 className="mb-3">{blog.name}</h3>

                    <p>{blog.des}</p>
                    <NavLink to={`/blogDetails/${blog._id}`}>
                    <span className="fs-5">Read More</span>
                    </NavLink>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      
    </section>
  );
};

export default Blog;
