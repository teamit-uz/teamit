import Header from "./Header";
import Footer from "./Footer";
import Snow from "./Snowy";
import SnowDark from "./SnowyDark";

export const ThemeContext = React.createContext();

import React, { useState, useEffect } from "react";

const Layout = ({ children }) => {
  const [dark, setDark] = useState(false);
  const toggler = () => {
    setDark(!dark);
    if (dark === true) {
      window.document.body.classList.add("dark");
      window.document.body.classList.remove("light");
    } else {
      window.document.body.classList.add("light");
      window.document.body.classList.remove("dark");
    }
  };

  // useEffect(() => {
  //   toggler();
  // }, []);

  return (
    <ThemeContext.Provider value={{ dark, toggler }}>
      {dark === true ? <SnowDark style="snow" /> : <Snow style="snow" />}

      <Header></Header>

      <div className="layoutMain">{children}</div>
      <Footer></Footer>
    </ThemeContext.Provider>
  );
};

export default Layout;
