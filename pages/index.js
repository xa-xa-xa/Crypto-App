import { useState, useEffect } from "react";
import geckoApi from "./api/geckoApi";
import WatchListContextProvider from "../src/watchListContext";

import CoinsList from "../src/components/CoinsList/Coinlist";
import Layout from "../src/components/Layout/Layout";
import SearchBar from "../src/components/SearchBar";
import styles from "../styles/Home.module.scss";
import WatchList from "../src/components/WatchList/WatchList";

const Home = ({ fetchedData }) => {
  const [search, setSearch] = useState("");
  const [openWallet, setOpenWallet] = useState(false);
  const filteredCoins = fetchedData.filter(({ name }) =>
    name.toLowerCase().includes(search.toLowerCase())
  );
  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  function onOpenWallet() {
    setOpenWallet(!openWallet);
  }

  return (
    <WatchListContextProvider>
      <Layout
        className={styles.main_container}
        handleChange={handleChange}
        onOpenWallet={onOpenWallet}
      >
        <WatchList openWallet={openWallet} />
        <CoinsList data={filteredCoins} />
      </Layout>
    </WatchListContextProvider>
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

  console.log("------fetchedData-----------------", fetchedData.data);

  if (!fetchedData) return { notFound: true };
  return { props: { fetchedData } };
};
