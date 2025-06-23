import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Posts from "./Posts";
import "./Blog.css";
import Aos from "aos";
import "aos/dist/aos.css";

const BlogDetails = () => {
  const { id } = useParams();
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios
      .get(`https://luxelane-server-zyhb.onrender.com/Blogs/${id}`)
      .then((res) => setBlogs(res.data));
  });
   useEffect(() => {
      Aos.init({ duration: 1000 });
    }, []);
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <section className="">
      <section className="blog_background">
        <div className="container-fluid p-0">
          <div className="row text-center">
            <div className="col-lg-12">
              <h1>Blog Details</h1>
              <div className="d-flex justify-content-center">
                <h5 className="me-5"><NavLink style={{textDecoration:"none",  color: "inherit"}} to ="/blog">Blog</NavLink> </h5>
                <h6 className=""> BlogDetails</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container p-5 blog_details">
        <div className="row overflow-hidden">
          <div className="col-lg-7 ">
            <img src={blogs.image} className="w-100" alt="error" />
            <div className="d-flex">
              <p className="justify-content-start col-6 fs-6 fw-bolder mt-2">
                <i className="bi bi-calendar"></i> {blogs.date}
              </p>
              <span className="text-end col-6 fs-6 fw-bolder mt-2">
                <i className="bi bi-person-fill"></i> {blogs.user}
              </span>
            </div>
            <div data-aos="fade-left">
              <h3>{blogs.name}</h3>
            </div>
            <div data-aos="fade-down">
              <h5>{blogs.des}</h5>
            </div>
            <div>
              <p  data-aos="fade-up">{blogs.description}</p>
              <p>
                Welcome to the Luxelane Blog, your ultimate destination for
                lifestyle inspiration, fashion tips, and creative ideas. Here,
                we share the latest trends in fashion, home decor, wellness, and
                more, offering practical advice to help you live a stylish and
                balanced life. Whether you’re looking for tips to refresh your
                wardrobe, discover sustainable fashion, or personalize your
                living space, our blog has you covered. At Luxelane, we believe
                in elevating everyday life with simple yet stylish solutions.
                Join us as we explore the world of trends, creativity, and
                mindful living. Stay inspired and make every moment luxurious!
              </p>
              <p>
                At Luxelane, we’re passionate about helping you elevate your
                lifestyle through style, creativity, and inspiration. Whether
                you're exploring fresh fashion trends, home decor ideas, or
                innovative ways to embrace new experiences, our blog is your
                destination for all things unique, stylish, and inspiring.
              </p>
            </div>
          </div>
          <Posts />
        </div>
      </section>
    </section>
  );
};

export default BlogDetails;
