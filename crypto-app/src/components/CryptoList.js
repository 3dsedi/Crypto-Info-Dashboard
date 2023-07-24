import React, { useState } from "react";
import "./CryptoList.css"; 
import { Pagination } from "./Pagination";

export const CryptoList = ({ cryptoList }) => {
  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(0);
  const [sortCriteria, setSortCriteria] = useState("ranking"); 

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage);
  };

  const handleSortChange = (event) => {
    setSortCriteria(event.target.value);
  };

  const offset = currentPage * itemsPerPage;

  const sortedCryptos = () => {
    switch (sortCriteria) {
      case "ranking":
        return cryptoList.sort((a, b) => a.rank - b.rank);
      case "priceHighToLow":
        return cryptoList.sort((a, b) => b.priceUsd - a.priceUsd);
      case "priceLowToHigh":
        return cryptoList.sort((a, b) => a.priceUsd - b.priceUsd);
      default:
        return cryptoList;
    }
  };

  const displayedCryptos = sortedCryptos().slice(offset, offset + itemsPerPage);

  return (
    <div className="section">
      <div className="container">
        <h2
          className="text-center mb-4"
          style={{ fontSize: "1.7rem", color: "#5f6062" }}
        >
          List of Cryptocurrencies
        </h2>
        <div className="d-flex justify-content-center mb-3">
        <div className="d-flex align-items-center">
          <label htmlFor="sortCriteria" className="me-2">Sort by:</label>
          <select
            id="sortCriteria"
            className="form-select select-menu" 
            value={sortCriteria}
            onChange={handleSortChange}
          >
            <option value="ranking">Ranking</option>
            <option value="priceHighToLow">Price (High to Low)</option>
            <option value="priceLowToHigh">Price (Low to High)</option>
          </select>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {displayedCryptos.map((crypto, index) => (
            <div key={index} className="col">
              <div
                className="card h-100 shadow d-flex flex-column justify-content-between"
                style={{
                  height: "400px",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
              >
                <div className="card-body">
                  <h3 className="card-title">
                    <span className="fs-3 fw-bold text-success">
                      {crypto.symbol}
                    </span>
                    <br />
                    <span className="fs-6" style={{ color: "#5f6062" }}>
                      {crypto.name}
                    </span>
                  </h3>
                  <p className="card-text mb-1">Price: ${crypto.priceUsd}</p>
                  <p className="card-text mb-1">Rank: {crypto.rank}</p>
                </div>
                <a
                  href={crypto.explorer}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none stretched-link fs-6 p-2"
                  style={{ backgroundColor: "#eae1df" }}
                >
                  More Info
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Pagination
        pageCount={Math.ceil(cryptoList.length / itemsPerPage)}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};
