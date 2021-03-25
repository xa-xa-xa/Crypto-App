import { createContext, useState } from "react";

export const watchListContext = createContext();

const WatchListContextProvider = (props) => {
  const [watchList, setWatchList] = useState([
    "bitcoin",
    "ethereum",
    "litecoin",
    "polkadot"
  ]);
  return (
    <watchListContext.Provider value={watchList}>
      {props.children}
    </watchListContext.Provider>
  );
};

export default WatchListContextProvider;
