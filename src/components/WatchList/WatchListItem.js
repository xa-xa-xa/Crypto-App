import React from "react";
import wCoinStyle from "./WatchListItem.module.scss";

const WatchListItem = ({ coin }) => {
  const { name, current_price } = coin;
  console.log(coin, name);

  return (
    <li className={wCoinStyle.container}>
      <h2 className={wCoinStyle.name}>
        <img src={coin.image} alt={coin.name} /> {coin.name}
      </h2>
      <br />
      <h4 className={wCoinStyle.money}>
        You have: <span></span>"dollar amount" in{" "}
        <span>"coin amount"{coin.symbol}</span>
      </h4>
      <br />
      <div className={wCoinStyle.price}>
        current price: <span>${coin.current_price.toLocaleString()}</span>
      </div>
      <div className={wCoinStyle.price_change}>
        change in last 24 hrs:{" "}
        <span>${coin.price_change_24h.toLocaleString()}</span>
      </div>
      <div className={wCoinStyle.price_change_percent}>
        change in last 24h: <span>{coin.price_change_percentage_24h}%</span>
      </div>
    </li>
  );
};

export default WatchListItem;
