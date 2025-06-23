import React, { useContext, useEffect, useState } from "react";
import mainBanner from "./assets/logo.png";
import { NavLink } from "react-router-dom";
import { loginStatus } from "../App";
import axios from "axios";
import { useCart } from "./CartContext";

const Header = () => {
  const { cartItems } = useCart();
  const [token, setToken] = useContext(loginStatus);
  const [user, setUser] = useState({});

  useEffect(() => {
    if (token) {
      axios
        .get("https://luxelane-server-zyhb.onrender.com/", {
          headers: {
            "x-token": token,
          },
        })
        .then((res) => {
          setUser(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setUser({});
    }
  }, [token]);

  const handleLogout = () => {
    setToken("");
    localStorage.removeItem("token");
    setUser({});
  };

  return (
    <header className="container-fluid p-0">
      <nav className="navbar navbar-expand-lg  bg-light">
        <div className="container-fluid ">
          <div className=" text-center">
            <NavLink className="navbar-brand" to="/">
              <img src={mainBanner} alt="error" />
            </NavLink>
          </div>

          <div
            className="sidebar offcanvas offcanvas-end text-center"
            tabIndex={-1}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header ">
              <img src={mainBanner} alt="error" />
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>

            <div className="offcanvas-body  text-center  ">
              <ul className="navbar-nav  ">
                <li className="nav-item  ">
                  <NavLink className="nav-link " to="/" aria-current="page">
                    Home
                    <span className="visually-hidden">(current)</span>
                  </NavLink>
                </li>
                <li className="nav-item  ">
                  <NavLink className="nav-link" to="/about">
                    About
                  </NavLink>
                </li>
                <li className="nav-item dropdown text-center">
                  <NavLink
                    className="nav-link dropdown-toggle"
                    to="/user"
                    id="dropdownId"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Shop
                  </NavLink>
                  <div
                    className="dropdown-menu text-center mt-3  "
                    aria-labelledby="dropdownId"
                  >
                    <NavLink className="dropdown-item" to="/men">
                      Men
                    </NavLink>
                    <NavLink className="dropdown-item" to="/women">
                      Women
                    </NavLink>
                    <NavLink className="dropdown-item" to="/kids">
                      Kids
                    </NavLink>
                    <NavLink
                      className="dropdown-item"
                      to="/footwear & accessories"
                    >
                      Footwear & Accessories
                    </NavLink>
                  </div>
                </li>

                <li className="nav-item   ">
                  <NavLink className="nav-link" to="/blog">
                    Blog
                  </NavLink>
                </li>
                <li className="nav-item  ">
                  <NavLink className="nav-link" to="/contact">
                    Contact
                  </NavLink>
                </li>
                
              </ul>
              <div className="dropdown fs-3 mx-auto text-center  ">
                  {token && user.username ? (
                    <div className="nav-link  d-flex icon">
                      <i className="bi bi-person-fill "></i>
                      <div className="fs-5">{user.username}</div>
                      
                      <button
                        onClick={handleLogout}
                        className="btn btn-sm btn-outline-danger p-1 fs-5 ms-2"
                      >
                        Logout
                      </button>
                    </div>
                  ) : (
                    <NavLink className="nav-link icon " to="/userlogin">
                      <i className="bi bi-person-fill "></i>
                    </NavLink>
                  )}
                </div>
            </div>
          </div>

          <div className=" text-center header-right" >
            <div className="d-flex ">
              <NavLink
                to="/cart"
                className="cart  position-relative"
                style={{ color: "blue" }}
              >
                <i className="bi bi-cart fs-3">
                  <span className="position-absolute top-0 badge rounded-pill bg-danger">
                    {cartItems.length}
                  </span>
                </i>
              </NavLink>
            </div>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
