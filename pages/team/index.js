import Layout from "../../components/Layout"
import Team from "../../components/TeamLayout"
import Head from "next/head"
const team = () => {
  return (
    <>
      <Head>
        <title>Teamit Academy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Team />
      </Layout>
    </>
  )
}

export default team
