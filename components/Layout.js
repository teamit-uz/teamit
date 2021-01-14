import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children, dark, setDark }) => {
  return (
    <>
      <Header dark={dark} setDark={setDark}></Header>
      <div className="layoutMain">{children}</div>
      <Footer dark={dark}></Footer>
    </>
  )
}

export default Layout
