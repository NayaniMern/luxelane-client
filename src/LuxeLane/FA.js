import React, { useEffect, useState } from "react";
import axios from "axios";
import "./FA.css"; 
import v from "./assets/v.avif";
import no from "./assets/no.avif";
import { NavLink } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const FA = () => {
  const [fa, setFA] = useState([]);
  const [filteredFA, setFilteredFA] = useState([]);
  const [filters, setFilters] = useState({

    category: "",
    dpMin: "",
    dpMax: "",
    sort: "",
  });

  useEffect(() => {
    axios
      .get("https://luxelane-server-zyhb.onrender.com/footwear_and_accessories")
      .then((res) => {
        setFA(res.data);
        setFilteredFA(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const parsePrice = (price) => {
    return parseFloat(price.replace(/[\u20B9,]/g, ""));
  };

  useEffect(() => {
    let filtered = fa.filter((item) => {
      return (
       
        (!filters.category || item.category === filters.category) &&
        (!filters.dpMin || parsePrice(item.dp) >= parseFloat(filters.dpMin)) &&
        (!filters.dpMax || parsePrice(item.dp) <= parseFloat(filters.dpMax))
      );
    });

    if (filters.sort === "lowToHigh") {
      filtered.sort((a, b) => parsePrice(a.dp) - parsePrice(b.dp));
    } else if (filters.sort === "highToLow") {
      filtered.sort((a, b) => parsePrice(b.dp) - parsePrice(a.dp));
    }

    setFilteredFA(filtered);
  }, [filters, fa]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section className="fa-container">
      <section className="fa_background">
        <div className="container-fluid p-0">
          <div className="row text-center">
            <div className="col-lg-12">
              <h1>Footwear & Accessories</h1>
              <div className="d-flex justify-content-center">
                <h5 className="me-5"><NavLink style={{textDecoration:"none",  color: "inherit"}} to ="/">Home</NavLink></h5>
                <h6>Footwear & Accessories</h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container p-4 FA-container">
        <h1 className="mb-5">Shop Footwear & Accessories</h1>

        <div className="row">
          {/* Sidebar for filters */}
          <div className="col-md-3">
            <div className="side-bar">
              <h3>Filter</h3>

              

             

              <div className="filter-group">
                <label>Category</label>
                <select
                  name="category"
                  value={filters.category}
                  onChange={handleFilterChange}
                >
                  <option value="">All Categories</option>
                  <option value="Sunglasses">Sunglasses</option>
                  <option value="Footwear">Footwear</option>
                  <option value="Belts">Belts</option>
                  <option value="Hats">Hats</option>
                   <option value="Wallets">Wallets</option>
                 
                </select>
              </div>

              <div className="filter-group">
                <label>Price Range</label>
                <div className="d-flex">
                  <input
                    type="number"
                    name="dpMin"
                    value={filters.dpMin}
                    onChange={handleFilterChange}
                    placeholder="Min Price"
                    className="me-2"
                  />
                  <input
                    type="number"
                    name="dpMax"
                    value={filters.dpMax}
                    onChange={handleFilterChange}
                    placeholder="Max Price"
                  />
                </div>
              </div>

              <div className="filter-group">
                <label>Sort by Price</label>
                <select
                  name="sort"
                  value={filters.sort}
                  onChange={handleFilterChange}
                >
                  <option value="">Select</option>
                  <option value="lowToHigh">Low to High</option>
                  <option value="highToLow">High to Low</option>
                </select>
              </div>
            </div>
          </div>

         
          <div className="col-md-9">
            <div className="row">
              {filteredFA.length > 0 ? (
                filteredFA.map((item, index) => {

                return(
                  <div
                    key={index}
                    className="col-md-6 col-lg-4 col-xl-4 mb-3"
                    data-aos="fade-up"
                  >
                    <div className="card bg-transparent w-100 h-100 shadow main">
                      <div className="zoom-wrapper">
                        <img
                          src={item.image1}
                          className="container p-2 w-100 h-100"
                          alt="product"
                        />
                      </div>
                      <i className="bi bi-heart"></i>
                      <p>{item.discount}</p>

                      <div className="card-body">
                        <h2 className="mb-3">{item.name}</h2>
                        <h5>{item.brand}</h5>
                        <div className="d-flex justify-content-between">
                          <div>
                            <span className="ms-2">{item.dp}</span>
                            <span className="ms-3 op">{item.op}</span>
                          </div>
                          <NavLink to={`/FADetails/${item._id}`}>
                            <img src={v} alt="view" />
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                )})
              ) : (
                <div className="text-center mt-5">
                  <img src={no} className="w-50 h-75" alt="no results" />
                  <h4 className="mt-3">No Matching Items Found</h4>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default FA;
