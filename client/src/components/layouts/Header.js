import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-light">
        <Link className="navbar-brand" to="/">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/explore">
                Explore
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Offers">
                Offers
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signup">
                Profile <span className="sr-only"></span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
