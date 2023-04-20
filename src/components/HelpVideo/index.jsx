import { useState, useEffect } from "react";
import axios from "axios";
import Container from "../../common/Container";

const TICKERS = ["SOL", "BTC", "BNB", "ETH", "ARB", "MATIC", "DOGE", "XRP", "ADA", "OKB", "APT"];

const HelpVideo = () => {

  const [tickerData, setTickerData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const requests = TICKERS.map((ticker) =>
        axios.get(
          `https://min-api.cryptocompare.com/data/v2/histohour?fsym=${ticker}&tsym=USD&limit=2`
        )
      );
      const responses = await Promise.all(requests);
      const data = {};
      responses.forEach((response, index) => {
        const ticker = TICKERS[index];
        const close = response.data.Data.Data[1].close;
        const prevClose = response.data.Data.Data[0].close;
        data[ticker] = { close, prevClose };
      });
      setTickerData(data);
    };
    fetchData();
    const interval = setInterval(fetchData, 10000); // update every 10 seconds
    return () => clearInterval(interval);
  }, []);

  const getArrow = (close, prevClose) => {
    if (close > prevClose) {
      return <span style={{ color: "green" }}>⬈</span>;
    } else if (close < prevClose) {
      return <span style={{ color: "red" }}>⬊</span>;
    } else {
      return null;
    }
  };

  const tickerText = TICKERS.map((ticker) => {
    const { close, prevClose } = tickerData[ticker] || {};
    const color = close > prevClose ? "green" : "red";
    const tickers =`${ticker}:`;
    const text = ` ${close || "-"} |`;
    return (
      <span key={ticker} style={{ marginRight: "1rem", color }}>
        {tickers} {getArrow(close, prevClose)} {text}
      </span>
    );
  });

  return (
  <section className="video section-spacing dark:bg-black">
  <Container>
  <marquee>{tickerText}</marquee>;
  </Container>
  </section>
  );
};

export default HelpVideo;
