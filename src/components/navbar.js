import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import logo from '../media/Vision Subsea Color.png'


const Navbar = () => {

  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 10) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  window.addEventListener("scroll", changeNavbarColor);

  const updateColor = colorChange ? "bg-light" : "";
  const updateTextColor = colorChange ? "text-black-50" : "text-white";

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top navbar-light ${updateColor}`}
    >
      <div className="container-fluid">
        <div className="navbar-brand">
          <img src={logo} alt="Vision Subsea logo" style={{ width: "150px" }} />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item h3">
              <Link to="/" className={`nav-link ${updateTextColor}`}>
                Home
              </Link>
            </li>
            <li className="nav-item h3">
            <Link to="/about" className={`nav-link ${updateTextColor}`}>
                About
              </Link>
            </li>
            <li className="nav-item dropdown h3">
              <a
                className={`nav-link dropdown-toggle ${updateTextColor}`}
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li className="h4">
                  <Link className="dropdown-item" to="/waterTank">
                    Water Tank
                  </Link>
                </li>
                <li className="h4">
                  <Link className="dropdown-item" to="/nearshoreMooring">
                    Nearshore Moorings
                  </Link>
                </li>
                <li className="h4">
                  <Link className="dropdown-item" to="/assetInfrastructure">
                    Asset and Infrastructure
                  </Link>
                </li>
                <li className="h4">
                  <Link className="dropdown-item" to="/marineResponse">
                    Marine Casuality Response
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item h3">
              <Link to="/sonarImaging" className={`nav-link ${updateTextColor}`}>
                Sonar Imaging
              </Link>
            </li>
            <li className="nav-item h3">
              <Link to="/consulting" className={`nav-link ${updateTextColor}`}>
                Consulting
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;