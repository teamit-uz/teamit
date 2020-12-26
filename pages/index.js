import Head from "next/head"
import styles from "../styles/Home.module.css"
import Layout from "./components/Layout"
import Main from "./components/Main"
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Teamit</title>
        <link rel="icon" href="/teamit.ico" />
      </Head>
      <Layout>
        <Main />
      </Layout>
    </div>
  )
}
