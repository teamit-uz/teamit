import styles from "../styles/components/Footer.module.css"
const Footer = () => {
  return (
    <div className={styles.footer} id="contact">
      <img src="/teamitlogo_blue.png" alt="" />
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
      <div className={styles.list}>
        <div className={styles.list_title}>Sayt Kartasi</div>
        <div className={styles.list_item}>a</div>
        <div className={styles.list_item}>x</div>
        <div className={styles.list_item}>z</div>
        <div className={styles.list_item}>q</div>
      </div>{" "}
      <div className={styles.copyright}>2020 copy</div>
    </div>
  )
}

export default Footer
