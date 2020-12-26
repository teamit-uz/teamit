import styles from "../../styles/components/Header.module.css"
import Link from "next/link"
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/teamitlogo_blue.png" alt="" />
      </div>
      <div className={styles.links}>
        <HeaderLink name="Asosiy" link="/" />
        <HeaderLink name="Kurslar" link="/kurslar" />
        <HeaderLink name="Media" link="/media" />
        <HeaderLink name="Jamoa" link="/jamoa" />
        <HeaderLink name="Aloqa" link="/aloqa" />
      </div>
      <div className={styles.i18n}> Uzb </div>
    </header>
  )
}

const HeaderLink = ({ name, link }) => {
  return (
    <Link href={link}>
      <a className={styles.link}>{name}</a>
    </Link>
  )
}

export default Header
