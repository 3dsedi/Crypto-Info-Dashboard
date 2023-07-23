import React from 'react'
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';


export const DonutChart = ({ cryptoList }) => {
  const sortedCryptoList = cryptoList.slice().sort((a, b) => parseFloat(b.priceUsd) - parseFloat(a.priceUsd));
  const top5Cryptos = sortedCryptoList.slice(0, 5);
  const data = top5Cryptos.map((crypto) => ({ name: crypto.name, value: parseFloat(crypto.priceUsd) }));
  const COLORS = ['#FF6384', '#36A2EB', '#FFCE56', '#66CC99', '#FF9933'];
  const leftPadding = 25;

  return (
    <div className="section">
      <div className="container">
        <h2 className="text-center">Donut Chart</h2>
        <div className="d-flex justify-content-center"> {/* Center the chart */}
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
              <Tooltip />
              <Legend layout="vertical" align="right" verticalAlign="middle" />
            </PieChart>
          </div>
        </div>
      </div>
    </div>
  );
}
