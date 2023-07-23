import React from 'react';

export const CryptoList = ({cryptoList}) => {
    return (
        <div className="section">
          <div className="container">
            <h2 className="text-center mb-4">List of Cryptos</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
              {cryptoList.map((crypto, index) => (
                <div key={index} className="col">
                  <div className="card h-100">
                    <div className="card-body">
                      <h3 className="card-title">{crypto.name}</h3>
                      <p className="card-text mb-1">Price: ${crypto.priceUsd}</p>
                      <p className="card-text mb-1">Rank: {crypto.rank}</p>
                      <a
                        href={crypto.explorer}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-decoration-none stretched-link"
                      >
                        More Info
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
};


