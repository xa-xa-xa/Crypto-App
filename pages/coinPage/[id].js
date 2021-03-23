import Layout from "../../src/components/Layout/Layout";
import coinStyles from "./coin.module.scss";

const CoinDetails = ({ coin }) => {
  // c - is for  individual crypto currency data
  console.log(coin);
  return (
    <Layout>
      <div className={coinStyles.container}>
        <h2>{coin.name}</h2>
        <img src={coin.image.large} alt={coin.id} />
        <p className={coinStyles.description}>{coin.description.en}</p>
        <section>
          <h4>General info:</h4>
          <div>Liquidity score: {coin.liquidity_score}</div>
          <div>Market capital rank: {coin.market_cap_rank}</div>
          <div>country_origin: {coin.country_origin}</div>
          <div>Created: {coin.genesis_date}</div>
          <div>
            Currency page:{" "}
            <a
              href={coin.links.homepage[0]}
              target="_blank"
              rel="noopener noreferrer"
            >
              {coin.links.homepage[0]}
            </a>
          </div>
        </section>
        <section>
          <h4>Market info:</h4>
          <div>Liquidity score: {coin.liquidity_score}</div>
          <div>Market capital rank: {coin.market_cap_rank}</div>
          <div>country_origin: {coin.country_origin}</div>
          <div>Created: {coin.genesis_date}</div>
          <div>
            Currency page:{" "}
            <a
              href={coin.links.homepage[0]}
              target="_blank"
              rel="noopener noreferrer"
            >
              {coin.links.homepage[0]}
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export const getServerSideProps = async (ctx) => {
  const { id } = ctx.query;
  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
  const coin = await res.json();

  return coin ? { props: { coin } } : { notFound: true };
};

export default CoinDetails;
