import React, { useState, useEffect } from "react";
import axios from "axios";
import { Element } from "react-scroll";
import { CryptoList } from "./components/CryptoList";
import { BarGraph } from "./components/BarGraph";
import { DonutChart } from "./components/DonutChart";
import Navbar from "./components/Navbar";
import "./App.css";
import { Loading } from "./components/Loading";
import { Footer } from "./components/Footer";

const App = () => {
  const [cryptoList, setCryptoList] = useState([]);
  const [selectedChart, setSelectedChart] = useState("bargraph");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:8000/cryptodata")
      .then((response) => {
        const data = response.data.data;
        setCryptoList(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
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
      <div className="container mt-4">
        <Element name="summarySection" className="my-4">
          <h2
            className="text-center mb-4 "
            style={{ fontSize: "2rem", color: "#5f6062" }}
          >
            Welcome to Cryptocurrency Information!
          </h2>
          <p
            className="text-center mb-4"
            style={{ fontSize: "1.2rem", color: "#5f6062" }}
          >
            Here, you can explore the list of all cryptocurrencies and sort them
            by price from high to low or low to high. Additionally, you can
            compare the market capitalization of the top 10 highest ranking
            cryptocurrencies in USD.
          </p>
        </Element>
        {loading ? (
          <Loading />
        ) : (
          <>
            <hr style={{ borderTop: "2.5px solid #999", margin: "3rem 0" }} />
            <Element name="cryptosSection">
              <CryptoList cryptoList={cryptoList} />
            </Element>

            <hr style={{ borderTop: "2.5px solid #999", margin: "3rem 0" }} />
            <div className="row justify-content-center mb-3">
              <div className="col-auto">
                <h2
                  className="text-center mb-4"
                  style={{
                    fontSize: "1.7rem",
                    color: "#5f6062",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    height: "3rem",
                    wordWrap: "break-word",
                  }}
                >
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
                {selectedChart === "bargraph" && (
                  <BarGraph cryptoData={top10Cryptos} />
                )}
              </Element>
              <Element name="donutChartSection">
                {selectedChart === "donutchart" && (
                  <DonutChart cryptoData={top10Cryptos} />
                )}
              </Element>
            </div>
          </>
        )}
      </div>
      <hr style={{ borderTop: "2.5px solid #999", margin: "3rem 0" }} />
      <Footer />
    </div>
  );
};

export default App;
