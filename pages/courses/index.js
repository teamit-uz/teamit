import Layout from "../../components/Layout"
import CoursesLayout from "../../components/CoursesLayout"

import Head from "next/head"
const Course = () => {
  return (
    <>
      <Head>
        <title>Teamit Academy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <CoursesLayout />
      </Layout>
    </>
  )
}

export default Course
