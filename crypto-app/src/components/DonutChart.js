import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

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

export const DonutChart = ({ cryptoData }) => {
  if (!cryptoData || cryptoData.length === 0) {
    return (
      <div className="section">
        <div className="container">
          <h2 className="text-center">Donut Chart</h2>
          <p className="text-center">No data available</p>
        </div>
      </div>
    );
  }

  const sortedCryptoData = cryptoData.slice().sort((a, b) => parseFloat(b.marketCapUsd) - parseFloat(a.marketCapUsd));
  const top10Cryptos = sortedCryptoData.slice(0, 10);

  const data = top10Cryptos.map((crypto) => ({ name: crypto.name, value: parseFloat(crypto.marketCapUsd) }));
  const COLORS = ['#FF6384', '#36A2EB', '#FFCE56', '#66CC99', '#FF9933', '#FF8C42', '#00BFFF', '#20B2AA', '#9932CC', '#F08080'];
  const leftPadding = 25;

  return (
    <div className="section">
      <div className="container">
        <div className="d-flex justify-content-center">
          <div style={{ maxWidth: '600px', padding: `${leftPadding}px` }}>
            <PieChart width={500} height={500}>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={100}
                outerRadius={160}
                fill="#8884d8"
                paddingAngle={5}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={formatCurrency} />
              <Legend layout="vertical" align="right" verticalAlign="middle" />
            </PieChart>
          </div>
        </div>
      </div>
    </div>
  );
};
