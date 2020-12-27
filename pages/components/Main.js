import styles from "../../styles/components/Main.module.css"

const Main = () => {
  return (
    <div className={styles.main}>
      <div>
        <div className="">Zamonaviy kasblarni biz bilan o'rganing</div>{" "}
        <button>Olg'a</button>
      </div>
      <div className={styles.mainImage}>
        <img src="/main.svg" alt="" />
      </div>
    </div>
  )
}

export default Main
