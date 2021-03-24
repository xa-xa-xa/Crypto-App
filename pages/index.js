import { useState, useEffect } from "react";
import geckoApi from "./api/geckoApi";

import CoinsList from "../src/components/CoinsList/Coinlist";
import Layout from "../src/components/Layout/Layout";
import SearchBar from "../src/components/SearchBar";
import styles from "../styles/Home.module.scss";

const Home = ({ fetchedData }) => {
  const [search, setSearch] = useState("");
  const filteredCoins = fetchedData.filter(({ name }) =>
    name.toLowerCase().includes(search.toLowerCase())
  );
  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  return (
    <Layout className={styles.main_container}>
      <SearchBar onChange={handleChange} placeholder={"enter coin name"} />
      <CoinsList data={filteredCoins} />
    </Layout>
  );
};
export default Home;

export const getServerSideProps = async () => {
  // const res = await fetch(
  //   "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false"
  // );

  // const fetchedData = await res.json();

  //* Axios variant:
  const res = await geckoApi.get("/markets", {
    params: {
      vs_currency: "usd",
      order: "market_cap_desc",
      per_page: "20",
      page: "1",
      sparkline: "false"
    }
  });

  const fetchedData = await res.data;

  console.log("------fetchedData-----------------",  fetchedData.data);

  if (!fetchedData) return { notFound: true };
  return { props: { fetchedData } };
};
