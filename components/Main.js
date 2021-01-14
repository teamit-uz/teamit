import styles from "../styles/components/Main.module.css"
import Button from "./Button"
const Main = () => {
  return (
    <div className={`${styles.main} myPad`}>
      <div className={styles.mainTitle}>
        <div>Zamonaviy kasblarni biz bilan o'rganing!</div>{" "}
        <Button
          link="https://forms.gle/Y2MjSG9By8sxwd4WA"
          target={"_blank"}
          text="Kurslarga yoziling"
        />
      </div>
      <div className={styles.mainImage}>
        <img src="/main.svg" alt="" />
      </div>
    </div>
  )
}

export default Main
