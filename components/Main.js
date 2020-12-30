import styles from "../styles/components/Main.module.css"
import Button from "./Button"
const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.mainTitle}>
        <div>Zamonaviy kasblarni biz bilan o'rganing!</div>{" "}
        <Button link="#about" text="Kurslarga yoziling" />
      </div>
      <div className={styles.mainImage}>
        <img src="/main.svg" alt="" />
      </div>
    </div>
  )
}

export default Main
