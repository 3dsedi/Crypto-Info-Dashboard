import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const formatCurrency = (value) => {
  if (value >= 1e9) {
    return (value / 1e9).toFixed(2) + 'B';
  } else if (value >= 1e6) {
    return (value / 1e6).toFixed(2) + 'M';
  } else if (value >= 1e3) {
    return (value / 1e3).toFixed(2) + 'K';
  }
  return value;
};

export const BarGraph = ({ cryptoData }) => {
  
  if (!cryptoData || cryptoData.length === 0) {
    return (
      <div className="section">
        <div className="container">
          <h2 className="text-center">Bar Graph</h2>
          <p className="text-center">No data available</p>
        </div>
      </div>
    );
  }
  const data = cryptoData.map((crypto) => ({
    name: crypto.symbol,
    marketCap: parseFloat(crypto.marketCapUsd),
  }));

  return (
    <div className="section ">
      <div className="container ">
    
        <div className="d-flex justify-content-center "> 
          <BarChart width={800} height={400} data={data} margin={{ left: 50 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" tick={{ fontSize: 12 }} />
            <YAxis tickFormatter={formatCurrency} />
            <Tooltip formatter={formatCurrency} />
            <Legend />
            <Bar dataKey="marketCap" fill="#8884d8" />
          </BarChart>
        </div>
      </div>
    </div>
  );
};
