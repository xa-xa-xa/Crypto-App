import styles from "./Coin.module.scss";
import Link from "next/link";

const Coin = ({
  id,
  image,
  marketCap,
  name,
  price,
  priceChange24,
  symbol,
  volume
}) => (
  <Link
   
   
   
   
    href={`/coin/${id}`}
    // as={`/coin/${id}`}
  >
    <div className={styles.coin_container}>
      <section className={styles.image}>
        <img src={image} alt={name} />
      </section>
      <section className={styles.name}>
        <h3>
          {name} ({symbol})
        </h3>
      </section>
      <section className={styles.price}>
        {price.toLocaleString("en-US", {
          style: "currency",
          currency: "USD"
        })}
      </section>
      <section
        className={priceChange24 > 0 ? styles.price_up : styles.price_down}
      >
        {priceChange24 < 0
          ? priceChange24.toFixed(2)
          : "+" + priceChange24.toFixed(2)}
        %
      </section>
      <section className={styles.m_capital}>
        {marketCap
          .toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
          })
          .slice(0, -3)}
      </section>
      <section className={styles.m_volume}>
        {volume
          .toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
          })
          .slice(0, -3)}
      </section>
    </div>
  </Link>
);

export default Coin;
