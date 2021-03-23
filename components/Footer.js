import styles from "../styles/components/Footer.module.css";
import Button from "./Button";
import { ThemeContext } from "./ThemeProvider";

import { useContext } from "react";

const Footer = () => {
  const { dark } = useContext(ThemeContext);

  return (
    <div className={styles.footer} id="contact">
      <div className={styles.footerMain}>
        <div className={styles.list}>
          {dark === true ? (
            <img src="/teamitlogo.png" alt="" />
          ) : (
            <img src="/teamitlogo_blue.png" alt="" />
          )}
        </div>
        <div className={styles.list}>
          <div className={styles.list_title}>Aloqa</div>
          <div className={styles.list_item}>
            <img src="/phone.svg" alt="" /> 99 550 77 99
          </div>

          <div className={styles.list_item}>
            <img src="/location.svg" alt="" />
            Manzil: Jizzax sh. Maishiy xizmat uyi, <br /> <br /> Mo'ljal: "Zokir
            ota" to'yxonasi.
          </div>
        </div>
        <div className={styles.list}>
          <div className={styles.list_title}></div>
          <div className={styles.list_item}>
            <a href="/#about">Biz haqimizda</a>
          </div>
          <div className={styles.list_item}>
            <a href="/#courses">Kurslar</a>
          </div>
          <div className={styles.list_item}>
            <a href="/#media">Media</a>
          </div>
          <div className={styles.list_item}>
            <a href="/#team">Jamoa</a>
          </div>
        </div>
        <div className={styles.list}>
          <div className={styles.list_title}></div>
          <div className={styles.list_item}>
            <a href="/#contact">Vakansiya</a>
          </div>
          <div className={styles.list_item_btn}>
            <Button
              link="https://forms.gle/Y2MjSG9By8sxwd4WA"
              target={"_blank"}
              text="Kurslarga yoziling"
            />
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <div className={styles.copyrightText}>
          <img src="/copyright.svg" alt="" />
          2020. Teamit. Barcha huquqlar himoyalangan
        </div>

        <div className={styles.list_item_sm}>
          <a href="https://t.me/teamit_uz" target="_blank">
            <img src="/about7.svg" alt="" />
          </a>
          <a href="https://www.facebook.com/Teamit.uz/" target="_blank">
            <img src="/about6.svg" alt="" />
          </a>
          <a href="https://www.instagram.com/teamit.uz/" target="_blank">
            <img src="/about8.svg" alt="" />
          </a>
          {/* <a href="https://t.me/teamit_uz" target="_blank">
            <img src="/about9.svg" alt="" />
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
