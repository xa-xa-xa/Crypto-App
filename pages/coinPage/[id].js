import Layout from "../../src/components/Layout/Layout";
import coinStyles from "./coin.module.scss";

const CoinDetails = ({ coin }) => {
  console.log(coin);
  function createDescriptionMarkup() {
    return { __html: coin.description.en };
  }
  return (
    <Layout>
      <div className={coinStyles.container}>
        <div className={coinStyles.card}>
          <h1>
            {coin.name} <img src={coin.image.large} alt={coin.id} />
          </h1>
          <h2>
            {`Current price:
          ${coin.market_data.current_price.usd
            .toLocaleString("en-US", {
              style: "currency",
              currency: "USD"
            })
            .slice(0, -3)} 
          `}
            <span>
              Price change:{" "}
              <span
                className={
                  coin.market_data.price_change_24h < 0 ? coinStyles.red : null
                }
              >
                {coin.market_data.price_change_24h.toLocaleString("en-IN", {
                  maximumSignificantDigits: 5
                })}
                $
              </span>{" "}
              in last 24hrs
            </span>
          </h2>
          <h3>You have $"amount" invested in {coin.name}</h3>
          <h3>General info:</h3>
          <div
            className={coinStyles.description}
            dangerouslySetInnerHTML={createDescriptionMarkup()}
          />
          <section className={coinStyles.details}>
            <ul>
              {coin.country_origin && (
                <li>
                  <span>Country of origin:</span> {coin.country_origin}
                </li>
              )}
              {coin.genesis_date && (
                <li>
                  <span>Created:</span> {coin.genesis_date}
                </li>
              )}
            </ul>
          </section>
          <section className={coinStyles.details}>
            <h3>Market info:</h3>
            <ul>
              <li>
                <span>Market capital rank:</span> {coin.market_cap_rank}
              </li>
              <li>
                <span>Total volume:</span> $
                {coin.market_data.total_volume.usd.toLocaleString()}
              </li>
              <li>
                <span>Circulating supply:</span>{" "}
                {coin.market_data.circulating_supply.toLocaleString()}(
                {coin.symbol})
              </li>
              <li>
                <span>Liquidity score:</span> {coin.liquidity_score}
              </li>
              <li>
                <span>Last updated:</span>{" "}
                {new Date(coin.market_data.last_updated).toLocaleString()}
              </li>
              <li>
                <span>Currency page: </span>
                <a
                  href={coin.links.homepage[0]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {coin.links.homepage[0]}
                </a>
              </li>
            </ul>
          </section>
        </div>
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
