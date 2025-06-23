import React, { useEffect, useState } from "react";
import axios from "axios";
import v from "./assets/v.avif";
import no from "./assets/no.avif";
import "./Women.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";

const Women = () => {
  const [women, setWomen] = useState([]);
  const [filteredWomen, setFilteredWomen] = useState([]);
  const [filters, setFilters] = useState({
   colour: [],
    brand: [],
    category: [],
    priceRanges:[],
    sort: "",
  });

  useEffect(() => {
    axios
      .get(`https://luxelane-server-zyhb.onrender.com/womens`)
      .then((res) => {
        setWomen(res.data);
        setFilteredWomen(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

 // Function to get unique values for a filter key from tours data
   const getUnique = (key) => {
     const values = women.map((item) => item[key]); // get all values for key
     const uniqueValues = [...new Set(values)]; // remove duplicates
     return uniqueValues.filter(Boolean); // remove empty values
   };
 
     // Get unique filter lists dynamically
   const colours = getUnique("colour");
   const brands = getUnique("brand");
   const categories = getUnique("category");
 
     // Parsing price (removes ₹ and commas, converts to number)
   const parsePrice = (price) => {
     if (!price || typeof price !== "string") return 0;
     return parseFloat(price.replace(/[\u20B9,]/g, ""));
   };
 
 
    // Filter logic
   useEffect(() => {
     let filtered = women.filter((item) => {
       const matchColour =
         filters.colour.length === 0 ||
         filters.colour.includes(item.colour);
       const matchBrand =
         filters.brand.length === 0 ||
         filters.brand.includes(item.brand);
       const matchCategory =
         filters.category.length === 0 || filters.category.includes(item.category);
       const matchMin =
         !filters.dpMin ||
         parsePrice(item.dp) >= parseFloat(filters.dpMin);
       const matchMax =
         !filters.dpMax ||
         parsePrice(item.dp) <= parseFloat(filters.dpMax);
 
       return (
         matchBrand && matchCategory && matchColour && matchMin && matchMax
       );
     });
 
     if (filters.sort === "lowToHigh") {
       filtered.sort((a, b) => parsePrice(a.dp) - parsePrice(b.dp));
     } else if (filters.sort === "highToLow") {
       filtered.sort((a, b) => parsePrice(b.dp) - parsePrice(a.dp));
     }
 
     setFilteredWomen(filtered);
   }, [filters, women]);
 
 
 // Checkbox change handler
   const handleCheckboxChange = (e) => {
     const name = e.target.name;
     const value = e.target.value;
     const checked = e.target.checked;
 
     let updatedValues = filters[name];
 
     if (checked) {
       updatedValues = [...updatedValues, value];
     } else {
       updatedValues = updatedValues.filter((item) => item !== value);
     }
 
     setFilters({
       ...filters,
       [name]: updatedValues,
     });
   }
 
     // Input change handler for price and sort
   const handleInputChange = (e) => {
     const { name, value } = e.target;
     setFilters((prev) => ({
       ...prev,
       [name]: value,
     }));
   };
  return (
    <section className="women-container">
      <section className="women_background">
        <div className="container-fluid p-0">
          <div className="row text-center overflow-hidden">
            <div className="col-lg-12">
              <h1>Women's Wear</h1>
              <div className="d-flex justify-content-center">
                <h5 className="me-5"><NavLink style={{textDecoration:"none",  color: "inherit"}} to ="/">Home</NavLink></h5>
                <h6>Women</h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container p-4 womens-container">
        <h1 className="mb-5">Women's Fashion</h1>
        <div className="row">
          <div className="col-md-3">
            <div className="side-bar">
              <h3>Filter</h3>
                <div className="accordion" id="accordionExample">
              
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                   Colour
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#accordinonExample"
                >
                  <div className="accordion-body">
                    <div className="filter-group">
                      {colours.map((colour) => (
                        <div key={colour}>
                          <input
                            type="checkbox"
                            name="colour"
                            value={colour}
                            onChange={handleCheckboxChange}
                            checked={filters.colour.includes(colour)}
                          />
                          <label className="ms-2">{colour}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

             
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Category 
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <div className="filter-group">
                      {categories.map((category) => (
                        <div key={category}>
                          <input
                            type="checkbox"
                            name="category"
                            value={category}
                            onChange={handleCheckboxChange}
                            checked={filters.category.includes(category)}
                          />
                          <label className="ms-2">{category}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Tour Type */}
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Brand 
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <div className="filter-group">
                      {brands.map((brand) => (
                        <div key={brand}>
                          <input
                            type="checkbox"
                            name="brand"
                            value={brand}
                            onChange={handleCheckboxChange}
                            checked={filters.brand.includes(brand)}
                          />
                          <label className="ms-2">{brand}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Price Range */}
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsePrice"
                    aria-expanded="false"
                    aria-controls="collapsePrice"
                  >
                    Price Range 
                  </button>
                </h2>
                <div
                  id="collapsePrice"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <div className="filter-group">
                      <div className="d-flex">
                        <input
                          type="number"
                          name="dpMin"
                          value={filters.dpMin}
                          onChange={handleInputChange}
                          placeholder="Min Price"
                          className="me-2 form-control"
                        />
                        <input
                          type="number"
                          name="dpMax"
                          value={filters.dpMax}
                          onChange={handleInputChange}
                          placeholder="Max Price"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="filter-group">
            <select
              name="sort"
              value={filters.sort}
              onChange={handleInputChange}
              className="p-2"
            >
              <option value="">Select Sort Order</option>
              <option value="lowToHigh">Low to High</option>
              <option value="highToLow">High to Low</option>
            </select>
          </div>

            {/* Clear All Filters Button OUTSIDE the accordion */}
            <div className="mt-3 d-grid">
              <button
                className="btn btn-secondary"
                onClick={() =>
                  setFilters({
                    colour: [],
                    category: [],
                    brand: [],
                    dpMin: "",
                    dpMax: "",
                    sort: "",
                  })
                }
              >
                Clear All Filters
              </button>
            </div>
            </div>
          </div>

          <div className="col-md-9">
            <div className="row">
              {filteredWomen.length > 0 ? (
                filteredWomen.map((item, index) => {
                  return(
                  <div
                    key={index}
                    className="col-md-6 col-lg-4 col-xl-4 mb-3"
                    data-aos="fade-up-right"
                  >
                    <div className="card bg-transparent w-100 h-100 shadow main">
                      <div className="zoom-wrapper">
                        <img src={item.image1} className="container p-2 w-100 h-100" alt="product" />
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
                          <NavLink to={`/womenDetails/${item._id}`}>
                            <img src={v} alt="view" />
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
)})
              ) : (
                <div className="text-center mt-5">
                  <img src={no} className="w-50 h-75" alt="not found" />
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

export default Women;
