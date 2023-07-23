
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Element } from 'react-scroll';
import { CryptoList } from './components/CryptoList';
import { BarGraph } from './components/BarGraph';
import { DonutChart } from './components/DonutChart';
import Navbar from './components/Navbar';



const App = () => {
  const [cryptoList, setCryptoList] = useState([]);
  const [selectedChart, setSelectedChart] = useState('bargraph');


  useEffect(() => {
    axios.get('http://localhost:8000/cryptodata') 
      .then((response) => {
        const data = response.data.data;
        console.log(data)
        setCryptoList(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const sortedCryptoList = cryptoList.sort((a, b) => b.priceUsd - a.priceUsd);
  const top3Cryptos = sortedCryptoList.slice(0, 3);

  const handleChangeChart = (event) => {
    setSelectedChart(event.target.value);
  };
  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <Element name="cryptosSection">
          <CryptoList cryptoList={cryptoList} />
        </Element>
        <div className="row justify-content-center mb-3">
          <div className="col-auto">
            <select className="form-select" value={selectedChart} onChange={handleChangeChart}>
              <option value="bargraph">Bar Graph</option>
              <option value="donutchart">Donut Chart</option>
            </select>
          </div>
        </div>
        <Element name="barGraphSection">
          {selectedChart === 'bargraph' && <BarGraph top3Cryptos={top3Cryptos} />}
        </Element>
        <Element name="donutChartSection">
          {selectedChart === 'donutchart' && <DonutChart cryptoList={cryptoList} />}
        </Element>
      </div>
    </div>
  );
};

export default App;


  // const cryptoList = [
  //   {
  //     name: 'Bitcoin',
  //     priceUsd: '38000.00',
  //     rank: 1,
  //     explorer: 'https://example.com/bitcoin',
  //   },
  //   {
  //     name: 'Ethereum',
  //     priceUsd: '2500.00',
  //     rank: 2,
  //     explorer: 'https://example.com/ethereum',
  //   },
  //   {
  //     name: 'Tether',
  //     priceUsd: '1.0009018353009005',
  //     rank: 3,
  //     explorer: 'https://example.com/ethereum',
  //   },
  //   {
  //     name: 'BNB',
  //     priceUsd: '242.7980418588823',
  //     rank: 4,
  //     explorer: 'https://example.com/ethereum',
  //   },
  //   {
  //     name: 'XRP',
  //     priceUsd: '0.7726737263322052',
  //     rank: 5,
  //     explorer: 'https://example.com/ethereum',
  //   },
  // ];