import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div className="container">
          <Link className="navbar-brand" to="cryptosSection" smooth={true} duration={500}style={{ cursor: 'pointer', fontSize: '1.5rem'  }}>Crypto Info</Link>
          <div className="navbar-nav ml-auto">
            <div className="d-flex flex-wrap">
              <Link className="nav-link m-4 " to="cryptosSection" smooth={true} duration={500} style={{ cursor: 'pointer', fontSize: '1rem'  }}>List</Link>
              <Link className="nav-link m-4 " to="barGraphSection" smooth={true} duration={500}style={{ cursor: 'pointer', fontSize: '1rem'  }}>Chart</Link>

              </div>
            </div>
          </div>
        </nav>
      );
};

export default Navbar;
