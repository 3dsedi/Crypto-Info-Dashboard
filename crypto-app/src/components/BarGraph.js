import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


export const BarGraph = ({ top3Cryptos }) => {
//   const labels = top3Cryptos.map((crypto) => crypto.name);
//   const data = top3Cryptos.map((crypto) => crypto.priceUsd);

//   const chartData = {
//     labels: labels,
//     datasets: [
//       {
//         label: 'Crypto Prices',
//         data: data,
//         backgroundColor: 'rgba(75,192,192,0.6)',
//         borderColor: 'rgba(75,192,192,1)',
//         borderWidth: 1,
//       },
//     ],
//   };

//   const chartOptions = {
//     scales: {
//       y: {
//         beginAtZero: true,
//         title: {
//           display: true,
//           text: 'Price (USD)',
//           font: {
//             size: 14,
//           },
//         },
//       },
//     },
//   };
const data = top3Cryptos.map((crypto) => ({
    name: crypto.name,
    priceUsd: parseFloat(crypto.priceUsd),
  }));

  
  return (
    <div className="section">
      <div className="container">
        <h2 className="text-center">Bar Graph</h2>
        <div className="mx-auto" style={{ maxWidth: '600px' }}>
          <BarChart width={600} height={400} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="priceUsd" fill="#8884d8" />
          </BarChart>
        </div>
      </div>
    </div>
  );
};