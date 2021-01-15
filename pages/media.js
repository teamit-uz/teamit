import Layout from "../components/Layout"

import MediaLayout from "../components/MediaLayout"

import Head from "next/head"
const media = () => {
  return (
    <>
      <Head>
        <title>Teamit Academy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <MediaLayout />
      </Layout>
    </>
  )
}

export default media
