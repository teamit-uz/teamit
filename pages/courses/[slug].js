import { useRouter } from "next/router"
import Layout from "../../components/Layout"
import styles from "../../styles/components/Courses.module.css"
const courses = ["a", "b", "c"]

const Course = () => {
  const router = useRouter()
  const { slug } = router.query
  return (
    <Layout>
      <div className={styles.slug}>
        <img src="/construct.jpg" alt="" />
      </div>
    </Layout>
  )
}

export default Course
