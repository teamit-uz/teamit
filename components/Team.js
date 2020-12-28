import styles from "../styles/components/Team.module.css"
import Button from "./Button"
const Team = () => {
  return (
    <div className={styles.team}>
      <div className="title">Jamoa</div>
      <img src="/IMG_9380.JPG" alt="" />
      <Button link="courses" text="Batafsil" />
    </div>
  )
}

export default Team
