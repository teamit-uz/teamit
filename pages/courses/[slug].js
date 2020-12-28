import { useRouter } from "next/router"
import Layout from "../../components/Layout"
const courses = ["a", "b", "c"]

const Course = () => {
  const router = useRouter()
  const { slug } = router.query
  return <Layout>{courses[slug]}</Layout>
}

export default Course
