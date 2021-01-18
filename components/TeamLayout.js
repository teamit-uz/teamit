import styles from "../styles/components/Team.module.css"
import Button from "./Button"
const TeamLayout = () => {
  return (
    <>
      <div className={`${styles.team} myPad`} id="team">
        <div className="title">Biz Teamit Jamoasi!</div>
        <img src="/teamit.jpg" alt="" />
      </div>
      <div className={`${styles.list} myPad`}>
        <div className={styles.listItem}>
          <img src="/team/SarvarIsroilov.jpg" alt="" />
          <div className={styles.listItem_name}>Sardor Isroilov</div>
          <div className={styles.listItem_title}>Bosh direktor</div>
        </div>
        <div className={styles.listItem}>
          <img src="/team/AbbosMirzayev.jpg" alt="" />
          <div className={styles.listItem_name}>Abbos Mirzayev</div>
          <div className={styles.listItem_title}>3DS MAX</div>
        </div>
        <div className={styles.listItem}>
          <img src="/team/SunnatMamirov.jpg" alt="" />
          <div className={styles.listItem_name}>Sunnat Mamirov</div>
          <div className={styles.listItem_title}>Professional fotografiya</div>
        </div>{" "}
        <div className={styles.listItem}>
          <img src="/team/XurshidArzikulov.jpg" alt="" />
          <div className={styles.listItem_name}>Xurshid Arzikulov</div>
          <div className={styles.listItem_title}>Ofis dasturlar</div>
        </div>
        <div className={styles.listItem}>
          <img src="/team/DilshodToshtemirov.jpg" alt="" />
          <div className={styles.listItem_name}>Dilshod Toshtemirov</div>
          <div className={styles.listItem_title}>Robototexnika</div>
        </div>
        <div className={styles.listItem}>
          <img src="/team/ShaxriyorXudoyorov.jpg" alt="" />
          <div className={styles.listItem_name}>Shaxriyor Xudoyorov</div>
          <div className={styles.listItem_title}>Frontend </div>
        </div>{" "}
        <div className={styles.listItem}>
          <img src="/team/AlimardonJabbarov.jpg" alt="" />
          <div className={styles.listItem_name}>Alimardon Jabbarov</div>
          <div className={styles.listItem_title}>Grafik dizayn</div>
        </div>
        <div className={styles.listItem}>
          <img src="/team/BekzodBuyukov.jpg" alt="" />
          <div className={styles.listItem_name}>Bekzod Buyukov</div>
          <div className={styles.listItem_title}>Backend</div>
        </div>
        <div className={styles.listItem}>
          <img src="/team/HusanovShahzod.jpg" alt="" />
          <div className={styles.listItem_name}>Shahzod Husanov</div>
          <div className={styles.listItem_title}>AutoCAD </div>
        </div>{" "}
        <div className={styles.listItem}>
          <img src="/team/AhmadjonZoirov.jpg" alt="" />
          <div className={styles.listItem_name}>Ahmadjon Zoirov</div>
          <div className={styles.listItem_title}>IELTS </div>
        </div>{" "}
        <div className={styles.listItem}>
          <img src="/team/JavlonRavshanov.jpg" alt="" />
          <div className={styles.listItem_name}>Javlon Ravshanov</div>
          <div className={styles.listItem_title}>Grafik dizayn</div>
        </div>
      </div>
    </>
  )
}

export default TeamLayout
