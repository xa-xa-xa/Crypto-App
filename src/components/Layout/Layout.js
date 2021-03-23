import Head from "next/head";
import Link from "next/link";
import layoutStyles from "./Layout.module.scss";

import { Icon, InlineIcon } from "@iconify/react";
import piggyBankCoin from "@iconify/icons-vaadin/piggy-bank-coin";

const Layout = ({ children, title = "Crypto App" }) => (
  <div className={layoutStyles.container}>
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <header className={layoutStyles.header}>
      <Link href="/" passHref>
        <a className={layoutStyles.home_link}>
          <Icon width="4em" icon={piggyBankCoin} />
          <h1 style={{ marginLeft: "0.5em" }}>{title}</h1>
        </a>
      </Link>
    </header>
    <main>{children}</main>
    <footer className={layoutStyles.footer}>
      Made with love by{" "}
      <a
        href="http://www.askrasn.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        AsKrasn
      </a>
    </footer>
  </div>
);

export default Layout;
