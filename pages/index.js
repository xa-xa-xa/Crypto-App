import Head from "next/head";
import CoinsList from "../src/components/CoinsList/Coinlist";
import SearchBar from "../src/components/SearchBar";
import styles from "../styles/Home.module.scss";

export default function Home(props) {
  return (
    <div className={styles.main_container}>
      <Head>
        <title>Crypto App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SearchBar />
      <CoinsList data={props.fetchedCoinsData} />

      <footer className={styles.footer}>
        <a
          href="http://www.askrasn.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by AsKrasn
        </a>
      </footer>
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false"
  );
  const fetchedCoinsData = await res.json();

  if (!fetchedCoinsData) return { notFound: true };
  console.log(fetchedCoinsData)
  return { props: {  fetchedCoinsData  } };
};
