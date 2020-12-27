import styles from "../../styles/components/Footer.module.css"
const Footer = () => {
  return (
    <div className={styles.footer}>
      <img src="/teamitlogo_blue.png" alt="" />
      <div className={styles.list}>
        <div className={styles.list_title}>Sayt Kartasi</div>
        <div className={styles.list_item}>a</div>
        <div className={styles.list_item}>x</div>
        <div className={styles.list_item}>z</div>
        <div className={styles.list_item}>q</div>
      </div>{" "}
      <div className={styles.list}>
        <div className={styles.list_title}>Aloqa</div>
        <div className={styles.list_item}>a</div>
        <div className={styles.list_item}>x</div>
        <div className={styles.list_item}>z</div>
        <div className={styles.list_item}>q</div>
      </div>{" "}
      <div className={styles.list}>
        <div className={styles.list_title}>Ijtimoiy tarmoqlarimiz</div>
        <div className={styles.list_item}>a</div>
        <div className={styles.list_item}>x</div>
        <div className={styles.list_item}>z</div>
        <div className={styles.list_item}>q</div>
      </div>
    </div>
  )
}

export default Footer
