import { useState, useEffect } from "react"
const ThemeToggle = ({ dark, setDark }) => {
  const toggler = async () => {
    if (dark !== false) {
      window.document.body.classList.add("dark")
      window.document.body.classList.remove("light")
      localStorage.setItem("theme", dark)
    } else {
      window.document.body.classList.add("light")
      window.document.body.classList.remove("dark")
      localStorage.setItem("theme", dark)
    }
  }
  useEffect(() => {
    toggler()
  }, [dark])
  return (
    <div className="myTheme" onClick={() => setDark(!dark)}>
      {dark !== false ? (
        <img src="/sun.svg" alt="" />
      ) : (
        <img src="/moon.svg" className="moon" alt="" />
      )}
    </div>
  )
}

export default ThemeToggle
