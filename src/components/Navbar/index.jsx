import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const Navbar = () => {
  return (
    <nav className="navbar mt-2 navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand me-2" href="https://mdbgo.com/">
          Etkinlik App
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarButtonsExample"
          aria-controls="navbarButtonsExample"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarButtonsExample">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>

          <div className="d-flex align-items-center">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Anasayfa
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/activities">
                  Aktiviteler
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/last-activities">
                  Geçmiş Aktiviteler
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
