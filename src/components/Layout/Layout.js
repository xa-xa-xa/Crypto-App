import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import layoutStyles from "./Layout.module.scss";

import { Icon, InlineIcon } from "@iconify/react";
import piggyBankCoin from "@iconify/icons-vaadin/piggy-bank-coin";
import SearchBar from "../SearchBar";

const Layout = ({ children, title = "Crypto App", handleChange, onOpenWallet }) => {


  return (
    <div className={layoutStyles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className={layoutStyles.navbar}>
        <Link href="/" passHref>
          <a className={layoutStyles.home_link}>
            <Icon width="4em" icon={piggyBankCoin} />
            <h1 style={{ marginLeft: "0.5em" }}>{title}</h1>
          </a>
        </Link>
        <SearchBar onChange={handleChange} />
        <button className={layoutStyles.wallet} onClick={onOpenWallet}>
          wallet
        </button>
      </nav>
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
};

export default Layout;
