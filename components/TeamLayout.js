import styles from "../styles/components/Team.module.css"
import Button from "./Button"
const TeamLayout = () => {
  return (
    <>
      <div className={`${styles.team} myPad`} id="team">
        <div className="title">Biz Teamit Jamoasi!</div>
        {/* <div className={styles.team_text}>Teamit Jamoasi </div> */}
        <img src="/IMG_9380.JPG" alt="" />
      </div>
      <div className={`${styles.list} myPad`}>
        <div className={styles.listItem}>
          <img src="/team/SarvarIsroilov.jpg" alt="" />
          <div className={styles.listItem_name}>Sarvar Isroilov</div>
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
          <div className={styles.listItem_title}>Professional Fotografiya</div>
        </div>{" "}
        <div className={styles.listItem}>
          <img src="/team/XurshidArzikulov.jpg" alt="" />
          <div className={styles.listItem_name}>Xurshid Arzikulov</div>
          <div className={styles.listItem_title}>Ofis Programs Instructor</div>
        </div>
        <div className={styles.listItem}>
          <img src="/team/DilshodToshtemirov.jpg" alt="" />
          <div className={styles.listItem_name}>Dilshod Toshtemirov</div>
          <div className={styles.listItem_title}>Robototexnika</div>
        </div>
        <div className={styles.listItem}>
          <img src="/team/ShaxriyorXudoyorov.jpg" alt="" />
          <div className={styles.listItem_name}>Shaxriyor Xudoyorov</div>
          <div className={styles.listItem_title}>Frontend Developer</div>
        </div>{" "}
        <div className={styles.listItem}>
          <img src="/team/AlimardonJabbarov.jpg" alt="" />
          <div className={styles.listItem_name}>Alimardon Jabbarov</div>
          <div className={styles.listItem_title}>Graphic Designer</div>
        </div>
        <div className={styles.listItem}>
          <img src="/team/BekzodBuyukov.jpg" alt="" />
          <div className={styles.listItem_name}>Bekzod Buyukov</div>
          <div className={styles.listItem_title}>Backend Developer</div>
        </div>
        <div className={styles.listItem}>
          <img src="/team/HusanovShahzod.jpg" alt="" />
          <div className={styles.listItem_name}>Shahzod Husanov</div>
          <div className={styles.listItem_title}>AutoCAD Instructor</div>
        </div>{" "}
        <div className={styles.listItem}>
          <img src="/team/AhmadjonZoirov.jpg" alt="" />
          <div className={styles.listItem_name}>Ahmadjon Zoirov</div>
          <div className={styles.listItem_title}>IELTS Instructor</div>
        </div>{" "}
        <div className={styles.listItem}>
          <img src="/team/JavlonRavshanov.jpg" alt="" />
          <div className={styles.listItem_name}>Javlon Ravshanov</div>
          <div className={styles.listItem_title}>Graphic Designer</div>
        </div>
      </div>
    </>
  )
}

export default TeamLayout
