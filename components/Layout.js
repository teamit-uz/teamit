import Header from "./Header";
import Footer from "./Footer";
import Snow from "./Snowy";
import SnowDark from "./SnowyDark";

import React, { useState, useEffect } from "react";
import { ThemeContext } from "./ThemeProvider";
import { useContext } from "react";
// import ScrollToTop from "react-scroll-to-top";

import Head from "next/head";

const Layout = ({ children }) => {
  const { dark } = useContext(ThemeContext);
  return (
    <>
      <Head>
        <title>Teamit Academy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {dark === true ? <SnowDark style="snow" /> : <Snow style="snow" />}
      <Header></Header>
      <div className="layoutMain">{children}</div>
      <Footer></Footer>
      {/* <ScrollToTop smooth component={<img src="./up.svg" width="30" />} /> */}
    </>
  );
};

export default Layout;
