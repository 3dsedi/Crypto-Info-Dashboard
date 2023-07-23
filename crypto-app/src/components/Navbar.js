import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="cryptosSection" smooth={true} duration={500}style={{ cursor: 'pointer' }}>Crypt Info</Link>
          <div className="navbar-nav ml-auto">
            <div className="d-flex flex-wrap">
              <Link className="nav-link m-4 " to="cryptosSection" smooth={true} duration={500} style={{ cursor: 'pointer' }}>List</Link>
              <Link className="nav-link m-4 " to="barGraphSection" smooth={true} duration={500}style={{ cursor: 'pointer' }}>Chart</Link>

              </div>
            </div>
          </div>
        </nav>
      );
};

export default Navbar;
