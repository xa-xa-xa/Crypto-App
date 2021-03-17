import Coin from "../Coin/index";
import styles from "./CoinList.module.scss";

const CoinsList = ({ data }) => (
  <div className={styles.coin_list_container}>
    {data.map((coin) => (
      <Coin
        key={coin.id}
        name={coin.name}
        id={coin.id}
        price={coin.current_price}
        symbol={coin.symbol}
        marketCap={coin.market_cap}
        volume={coin.total_volume}
        image={coin.image}
        priceChange24={coin.price_change_percentage_24h}
      />
    ))}
  </div>
);
export default CoinsList;
