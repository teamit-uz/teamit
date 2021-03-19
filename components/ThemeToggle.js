import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "./Layout";

const ThemeToggle = () => {
  const { dark, toggler } = useContext(ThemeContext);

  return (
    <div className="myTheme" onClick={() => toggler()}>
      {/* {dark === true ? (
        <img src="/sun.svg" className="moon" alt="" />
      ) : (
        <img src="/moon.svg" alt="" />
      )} */}
    </div>
  );
};

export default ThemeToggle;
