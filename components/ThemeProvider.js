import React, { useState, useEffect } from "react";

export const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(false);
  const toggler = () => {
    setDark(!dark);
    if (dark === false) {
      window.document.body.classList.add("dark");
      window.document.body.classList.remove("light");
    } else {
      window.document.body.classList.add("light");
      window.document.body.classList.remove("dark");
    }
  };

  useEffect(() => {
    toggler();
  }, [setDark]);

  return (
    <ThemeContext.Provider value={{ dark, toggler }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
