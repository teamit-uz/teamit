import { useRouter } from "next/router"
import Layout from "../../components/Layout"
const teams = ["a", "b", "c"]

const Team = () => {
  const router = useRouter()
  const { slug } = router.query
  return <Layout>{teams[slug]}</Layout>
}

export default Team
