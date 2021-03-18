import { useState } from "react";
import CoinsList from "../src/components/CoinsList/Coinlist";
import Layout from "../src/components/Layout/Layout";
import SearchBar from "../src/components/SearchBar";
import styles from "../styles/Home.module.scss";

const Home = ({ fetchedCoinsData }) => {
  const [search, setSearch] = useState("");
  const filteredCoins = fetchedCoinsData.filter(
    ({ name }) => name.toLowerCase().includes(search.toLowerCase())
  );
  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  }



  return (
    <Layout className={styles.main_container}>
      <SearchBar onChange={handleChange} placeholder={"enter coin name"} />
      <CoinsList data={filteredCoins} />
      <footer className="flex flex-center_h">
        <a
          href="http://www.askrasn.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by AsKrasn
        </a>
      </footer>
    </Layout>
  );
};
export default Home;

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=500&page=1&sparkline=false"
  );
  const fetchedCoinsData = await res.json();

  if (!fetchedCoinsData) return { notFound: true };
  console.log(fetchedCoinsData);
  return { props: { fetchedCoinsData } };
};
