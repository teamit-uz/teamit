import styles from "../styles/components/Team.module.css"
import Button from "./Button"
const Team = () => {
  return (
    <div className={`${styles.team} myPad`} id="team">
      <div className="title">Biz Teamit Jamoasi!</div>
      {/* <div className={styles.team_text}>Teamit Jamoasi </div> */}
      <img src="/IMG_9380.JPG" alt="" />
      <Button link="team" text="Batafsil" />
    </div>
  )
}

export default Team
