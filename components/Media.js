import styles from "../styles/components/Media.module.css"
import Button from "./Button"
const Media = () => {
  return (
    <div className={`${styles.media} myPad`} id="media">
      <div className="title">Media</div>
      <div className={styles.list}>
        <div className={styles.listItem}>
          <img src="IMG_9410.JPG" alt="" />
        </div>
        <div className={styles.listItem}>
          <img src="IMG_9410.JPG" alt="" />
        </div>
        <div className={styles.listItem}>
          <img src="IMG_9410.JPG" alt="" />
        </div>
        <div className={styles.listItem}>
          <img src="IMG_9410.JPG" alt="" />
        </div>
        <div className={styles.listItem}>
          <img src="IMG_9410.JPG" alt="" />
        </div>
        <div className={styles.listItem}>
          <img src="IMG_9410.JPG" alt="" />
        </div>
      </div>
      <Button link="media" text="Batafsil" />
    </div>
  )
}

export default Media
