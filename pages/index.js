import Head from "next/head"
import styles from "../styles/Home.module.css"
import Layout from "../components/Layout"
import Main from "../components/Main"
import About from "../components/About"
import Courses from "../components/Courses"
import Team from "../components/Team"
import Media from "../components/Media"
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Teamit</title>
        <link rel="icon" href="/teamit.ico" />
      </Head>
      <Layout>
        <Main />
        <About />
        <Courses />
        <Media />
        <Team />
      </Layout>
    </div>
  )
}
