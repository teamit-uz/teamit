import styles from "../styles/components/Footer.module.css"
const Footer = () => {
  return (
    <div className={styles.footer} id="contact">
      <div className={styles.footerMain}>
        <div className={styles.list}>
          <img src="/teamitlogo_blue.png" alt="" />
        </div>
        <div className={styles.list}>
          <div className={styles.list_title}>Aloqa</div>
          <div className={styles.list_item}>
            <img src="/phone.svg" alt="" /> +998 90 516 10 80
          </div>
          <div className={styles.list_item}>
            <img src="/phone.svg" alt="" /> +998 93 300 86 07
          </div>
          <div className={styles.list_item}>
            {" "}
            <img src="/location.svg" alt="" />
            Jizzax sh. Maishiy xizmat uyi, "Zokir ota" to'yxonasi.
          </div>
          <div className={styles.list_item_sm}>
            <a href="https://t.me/teamit_uz" target="_blank">
              <img src="/about7.svg" alt="" />
            </a>
            <a href="https://t.me/teamit_uz" target="_blank">
              <img src="/about6.svg" alt="" />
            </a>{" "}
            <a href="https://t.me/teamit_uz" target="_blank">
              <img src="/about8.svg" alt="" />
            </a>{" "}
            <a href="https://t.me/teamit_uz" target="_blank">
              <img src="/about9.svg" alt="" />
            </a>
          </div>
        </div>{" "}
        <div className={styles.list}>
          <div className={styles.list_title}></div>
          <div className={styles.list_title}></div>
          <div className={styles.list_item}>
            {" "}
            <a href="/#about">Biz haqimizda</a>
          </div>
          <div className={styles.list_item}>
            {" "}
            <a href="/#courses">Kurslar</a>
          </div>
          <div className={styles.list_item}>
            <a href="/#media">Media</a>
          </div>
          <div className={styles.list_item}>
            <a href="/#team">Jamoa</a>
          </div>
        </div>{" "}
      </div>
      <div className={styles.copyright}>
        <img src="/copyright.svg" alt="" />
        2020. Teamit mualliflik huquqi. Barcha huquqlar himoyalangan
      </div>
    </div>
  )
}

export default Footer
