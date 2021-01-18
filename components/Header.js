import styles from "../styles/components/Header.module.css"
import Link from "next/link"
import { useState, useCallback, useEffect } from "react"
import ThemeToggle from "./ThemeToggle"

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

const Header = ({ dark, setDark }) => {
  const isBreakpoint = useMediaQuery(768)
  const [open, setOpen] = useState(false)
  return (
    <>
      {isBreakpoint ? (
        <div>
          <div className={styles.logoSm}>
            <Link href="/">
              <a onClick={() => setOpen(!open)}>
                {dark === false ? (
                  <img src="/teamitlogo.png" alt="" />
                ) : (
                  <img src="/teamitlogo_blue.png" alt="" />
                )}
              </a>
            </Link>
          </div>
          <div className={styles.headerSm} onClick={() => setOpen(!open)}>
            {open ? (
              <img src="/close.svg" alt="" />
            ) : (
              <img src="/menu.svg" alt="" />
            )}
          </div>
          {open && (
            <div className={styles.headerSmMenu}>
              <div>
                <ThemeToggle dark={dark} setDark={setDark} />
              </div>

              <HeaderLinkSm
                name="Asosiy"
                link="/"
                open={open}
                setOpen={setOpen}
              />
              <HeaderLinkSm
                name="Kurslar"
                link="/#courses"
                open={open}
                setOpen={setOpen}
              />
              <HeaderLinkSm
                name="Media"
                link="/#media"
                open={open}
                setOpen={setOpen}
              />
              <HeaderLinkSm
                name="Jamoa"
                link="/#team"
                open={open}
                setOpen={setOpen}
              />
              <HeaderLinkSm
                name="Aloqa"
                link="/#contact"
                open={open}
                setOpen={setOpen}
              />
            </div>
          )}
        </div>
      ) : (
        <header className={`${styles.header} myPad`}>
          <div className={styles.logo}>
            <Link href="/">
              <a>
                {dark === false ? (
                  <img src="/teamitlogo.png" alt="" />
                ) : (
                  <img src="/teamitlogo_blue.png" alt="" />
                )}
              </a>
            </Link>
          </div>
          <div className={styles.links}>
            <HeaderLink name="Asosiy" link="/" />
            <HeaderLink name="Kurslar" link="/#courses" />
            <HeaderLink name="Media" link="/#media" />
            <HeaderLink name="Jamoa" link="/#team" />
            <HeaderLink name="Aloqa" link="/#contact" />
          </div>
          <div className={styles.i18n}>
            <ThemeToggle dark={dark} setDark={setDark} />
          </div>
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
const HeaderLinkSm = ({ name, link, open, setOpen }) => {
  return (
    <Link href={link}>
      <a className={styles.headerSmMenu_item} onClick={() => setOpen(!open)}>
        {name}
      </a>
    </Link>
  )
}

export default Header
