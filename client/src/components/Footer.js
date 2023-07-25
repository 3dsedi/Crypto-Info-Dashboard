import React from 'react';
import './Footer.css'; 

export const Footer = () => {
    return (
        <footer className="footer">
          <div className="container d-flex justify-content-between">
            <div className="left-part">
              <p className="item">Crypto Info</p>
              <p className="item">Created by: Sedigheh Ghazinezam</p>
              <p className="item">Email: 3d.ghazinezam@gmail.com</p>
            </div>
            <div className="right-part">
              <p className="item">
                <a href="https://www.linkedin.com/in/sedigheh-ghazinezam-3753aa7b/" className="link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </p>
              <p className="item">
                <a href="https://github.com/3dsedi" className="link" target="_blank" rel="noopener noreferrer">GitHub</a>
              </p>
              <p className="item">
                <a href="https://3dsedi.github.io/sediportfolio/" className="link" target="_blank" rel="noopener noreferrer">Portfolio</a>
              </p>
            </div>
          </div>
        </footer>
      );
}
