import Header from "./Header";
import Footer from "./Footer";
import Snow from "./Snowy";
import SnowDark from "./SnowyDark";

import React, { useState, useEffect } from "react";
import { ThemeContext } from "./ThemeProvider";
import { useContext } from "react";

const Layout = ({ children }) => {
  const { dark } = useContext(ThemeContext);
  return (
    <>
      {dark === true ? <SnowDark style="snow" /> : <Snow style="snow" />}
      <Header></Header>
      <div className="layoutMain">{children}</div>
      <Footer></Footer>
    </>
  );
};

export default Layout;
