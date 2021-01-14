import Layout from "../components/Layout"

import MediaLayout from "../components/MediaLayout"

import { useState, useEffect } from "react"
import Snow from "../components/Snowy"
import SnowDark from "../components/SnowyDark"
import Head from "next/head"
const media = () => {
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
    <>
      <Head>
        <title>Teamit Academy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!dark ? <Snow style="snow" /> : <SnowDark style="snow" />}
      <Layout dark={dark} setDark={setDark}>
        <MediaLayout />
      </Layout>
    </>
  )
}

export default media
