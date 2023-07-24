
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Element } from 'react-scroll';
import { CryptoList } from './components/CryptoList';
import { BarGraph } from './components/BarGraph';
import { DonutChart } from './components/DonutChart';
import Navbar from './components/Navbar';
import './App.css'



const App = () => {
  const [cryptoList, setCryptoList] = useState([]);
  const [selectedChart, setSelectedChart] = useState('bargraph');
  const [apiMessage, setApiMessage] = useState('');


  useEffect(() => {
    axios.get('http://localhost:8000/cryptodata') 
      .then((response) => {
        const data = response.data.data;
        setCryptoList(data);
        setApiMessage(response.data.message);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const sortedCryptoList = cryptoList.sort((a, b) => a.rank - b.rank);
  const top10Cryptos = sortedCryptoList.slice(0, 10);

  const handleChangeChart = (event) => {
    setSelectedChart(event.target.value);
  };
  return (
    <div>
      <Navbar />
      {/* <div className="mt-3">
          <p className="text-center">{apiMessage}</p>
        </div> */}
      <div className="container mt-4">
        <Element name="cryptosSection">
          <CryptoList cryptoList={cryptoList} />
        </Element>
        <div className="row justify-content-center mb-3">
  <div className="col-auto">
    <h2 className="text-center mb-4" style={{ fontSize: "2rem", color: "#5f6062" }}>
      Market Capitalization of Top 10 Cryptocurrencies
    </h2>
  </div>
  <div className="col-auto">
    <select
      className="form-select "
      value={selectedChart}
      onChange={handleChangeChart}
    >
      <option value="bargraph">Bar Graph</option>
      <option value="donutchart">Donut Chart</option>
    </select>
  </div>
</div>
        <div className="container"> 
          <Element name="barGraphSection">
            {selectedChart === 'bargraph' && <BarGraph cryptoData={top10Cryptos} />}
          </Element>
          <Element name="donutChartSection">
            {selectedChart === 'donutchart' && <DonutChart cryptoData={top10Cryptos} />}
          </Element>
        </div>
      </div>
    </div>
  );
};

export default App;


  