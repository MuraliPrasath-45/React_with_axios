import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("/");

  // activating the tab as per click
  const handleChange = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid px-4 px-lg-5 py-1 justify-content-between">
          {/* through Link tab declaring where to navigate by click */}
          <Link to={"/"} className="navbar-brand d-flex align-items-center">
            <img
              src="/Images/axios1.png"
              alt="axios_logo"
              className="img-fluid nav-logo"
            />
          </Link>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navItems"
            aria-controls="navItems"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse" id="navItems">
            <ul className="navbar-nav me-auto my-2 mb-lg-0 ms-lg-4">
              <li className="nav-item">
                <Link
                  to="/"
                  onClick={() => handleChange("/")}
                  className={`nav-link ${activeTab === "/" ? "active" : ""}`}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/users"
                  onClick={() => handleChange("/users")}
                  className={`nav-link ${
                    activeTab !== "/"
                      ? "active"
                      : ""
                  }`}
                >
                  Modify Users
                </Link>
              </li>
            </ul>

            <Link
              to={"/addUser"}
              onClick={() => handleChange("/addProduct")}
              className="nav-link"
            >
              <button className="btn btn-success">Add User</button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
