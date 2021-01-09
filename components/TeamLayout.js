import styles from "../styles/components/Team.module.css"
import Button from "./Button"
const TeamLayout = () => {
  return (
    <>
      <div className={styles.team} id="team">
        <div className="title">Biz Teamit Jamoasi!</div>
        {/* <div className={styles.team_text}>Teamit Jamoasi </div> */}
        <img src="/IMG_9380.JPG" alt="" />
      </div>
      <div className={styles.list}>
        <a href="/team/1">
          <div className={styles.listItem}>
            <img src="/masalanda.jpg" alt="" />
            {/* <div className={styles.listItem_name}>Javlon Mamataliyev</div>
          <div className={styles.listItem_title}>Graphic Designer</div> */}
          </div>
        </a>
        <a href="/team/2">
          <div className={styles.listItem}>
            <img src="/masalanda.jpg" alt="" />
            {/* <div className={styles.listItem_name}>Javlon Mamataliyev</div>
          <div className={styles.listItem_title}>Graphic Designer</div> */}
          </div>
        </a>
        <div className={styles.listItem}>
          <img src="/masalanda.jpg" alt="" />
          {/* <div className={styles.listItem_name}>Javlon Mamataliyev</div>
          <div className={styles.listItem_title}>Graphic Designer</div> */}
        </div>
      </div>
    </>
  )
}

export default TeamLayout
