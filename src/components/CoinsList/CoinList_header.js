import styles from "../CoinsList/CoinList_header.module.scss";

const CoinListHeader = () => (
  <div className={styles.header_container}>
    <section className={styles.image}> </section>
    <section className={styles.name}>Name</section>
    <section className={styles.price}>Price</section>
    <section className={styles.price_change}>Change</section>
    <section className={styles.m_capital}>Market Capital</section>
    <section className={styles.m_volume}>Market Volume</section>
  </div>
);

export default CoinListHeader;
