import { useEffect, useState, useContext } from "react";
import { watchListContext } from "../../watchListContext";
import geckoApi from "../../../pages/api/geckoApi";
import Loader from "../Loader/Loader";
import WatchListItem from "./WatchListItem";
import wListStyles from "./WatchList.module.scss";

const WatchList = ({ openWallet }) => {
  const watchList = useContext(watchListContext);
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchedData = async () => {
      console.log("fetching", openWallet);
      setLoading(true);
      const res = await geckoApi.get("/markets/", {
        params: {
          vs_currency: "usd",
          ids: watchList.join(",")
        }
      });
      const data = res.data;
      if (data) {
        setLoading(false);
        setCoins(data);
      }
    };
    if (openWallet) fetchedData();
    return () => {};
  }, [openWallet]);
  console.log("openWallet:", openWallet);
  /// RENDER
  return openWallet ? (
    <div className={wListStyles.container}>
      <h1>Total in your wallet: $"amount"</h1>
      <ul>
        {loading && <Loader />}
        {coins &&
          coins.map((coin) => <WatchListItem coin={coin} key={coin.name} />)}
      </ul>
    </div>
  ) : null;
};

export default WatchList;
