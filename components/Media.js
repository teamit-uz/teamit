import styles from "../styles/components/Media.module.css"
import Button from "./Button"
const Media = () => {
  return (
    <div className={`myPad ${styles.media} `} id="media">
      <div className={styles.aboutBG}></div>
      <div className="title">Media</div>
      <div className={styles.list}>
        <div className={styles.listItem}>
          <img src="media/photo_1.jpg" alt="" />
        </div>
        <div className={styles.listItem}>
          <img src="media/photo_9.jpg" alt="" />
        </div>
        <div className={styles.listItem}>
          <img src="media/photo_3.jpg" alt="" />
        </div>
        <div className={styles.listItem}>
          <img src="media/photo_4.jpg" alt="" />
        </div>
        <div className={styles.listItem}>
          <img src="media/photo_5.jpg" alt="" />
        </div>
        <div className={styles.listItem}>
          <img src="media/photo_6.jpg" alt="" />
        </div>
      </div>
      <Button link="media" text="Batafsil" />
    </div>
  )
}

export default Media
