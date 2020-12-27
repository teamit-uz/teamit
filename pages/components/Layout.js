import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <div className="layoutMain">{children}</div>
      <Footer></Footer>
    </>
  )
}

export default Layout
