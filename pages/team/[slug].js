import { useRouter } from "next/router"
import Layout from "../../components/Layout"
import styles from "../../styles/components/Team.module.css"
const teams = ["a", "b", "c"]

const Team = () => {
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

export default Team
