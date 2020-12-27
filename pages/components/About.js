import styles from "../../styles/components/About.module.css"

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.title}>
        Teamit Academyda siz quyidagilarga ega bo'lasiz:
      </div>
      <div className={styles.aboutList}>
        <div className={styles.listItem}>
          <img src="/about1.svg" alt="" />
          <span>
            Komputerlar bilan jihozlangan, qulay va shinam o'quv markazlari
          </span>
        </div>{" "}
        <div className={styles.listItem}>
          <img src="/about2.svg" alt="" />
          <span>Zamonaviy metodlarga asoslangan yuqori sifatli ta'lim</span>
        </div>{" "}
        <div className={styles.listItem}>
          <img src="/about3.svg" alt="" />
          <span>
            Soha mutaxassislarining yopiq seminar va vebinarlariga qatnashish
            imkoniyati
          </span>
        </div>{" "}
        <div className={styles.listItem}>
          <img src="/about4.svg" alt="" />
          <span>
            It dunyosining eng dolzarb mutahasislaridan biri bo'lishga{" "}
          </span>
        </div>{" "}
        <div className={styles.listItem}>
          <img src="/about5.svg" alt="" />
          <span>Amaliyot yoki turli kompaniyalarda ish topishga ko'mak</span>
        </div>{" "}
      </div>
    </div>
  )
}

export default About
