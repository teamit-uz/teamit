import { useState, useEffect } from "react"
import Head from "next/head"
import styles from "../styles/Home.module.css"
import Layout from "../components/Layout"
import Main from "../components/Main"
import About from "../components/About"
import Courses from "../components/Courses"
import Team from "../components/Team"
import Media from "../components/Media"
import Snow from "../components/Snowy"
import SnowDark from "../components/SnowyDark"
export default function Home() {
  let theme
  if (typeof window !== "undefined") {
    theme = localStorage.getItem("theme")
  }
  const [dark, setDark] = useState(theme)
  const toggler = async () => {
    if (!dark) {
      window.document.body.classList.add("dark")
      window.document.body.classList.remove("light")
    } else {
      window.document.body.classList.add("light")
      window.document.body.classList.remove("dark")
    }

    localStorage.setItem("theme", dark)
  }

  useEffect(() => {
    toggler()
  }, [dark])
  return (
    <div className={styles.container}>
      <Head>
        <title>Teamit Academy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!dark ? <Snow style="snow" /> : <SnowDark style="snow" />}
      <Layout dark={dark} setDark={setDark}>
        <Main />
        <About />
        <Courses />
        <Media />
        <Team />
      </Layout>
    </div>
  )
}
