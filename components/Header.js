import styles from "../styles/components/Header.module.css"
import Link from "next/link"
import { useState, useCallback, useEffect } from "react"

const useMediaQuery = (width) => {
  const [targetReached, setTargetReached] = useState(false)

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true)
    } else {
      setTargetReached(false)
    }
  }, [])

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`)
    media.addListener(updateTarget)

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true)
    }

    return () => media.removeListener(updateTarget)
  }, [])

  return targetReached
}

const Header = () => {
  const isBreakpoint = useMediaQuery(768)

  return (
    <>
      {isBreakpoint ? (
        <div className={styles.headerSm}>
          <img src="/menu.svg" alt="" />
        </div>
      ) : (
        <header className={styles.header}>
          <div className={styles.logo}>
            <img src="/teamitlogo_blue.png" alt="" />
          </div>
          <div className={styles.links}>
            <HeaderLink name="Asosiy" link="/" />
            <HeaderLink name="Kurslar" link="/courses" />
            <HeaderLink name="Media" link="/media" />
            <HeaderLink name="Jamoa" link="/team" />
            <HeaderLink name="Aloqa" link="/#contact" />
          </div>
          <div className={styles.i18n}> Uzb </div>
        </header>
      )}
    </>
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
