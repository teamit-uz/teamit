import styles from "../styles/components/Media.module.css"
import Button from "./Button"
const MediaLayout = () => {
  return (
    <div className={`${styles.media} myPad`} id="media">
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
        <div className={styles.listItem}>
          <img src="media/photo_10.jpg" alt="" />
        </div>
        <div className={styles.listItem}>
          <img src="media/photo_9.jpg" alt="" />
        </div>
        <div className={styles.listItem}>
          <img src="media/photo_8.jpg" alt="" />
        </div>
        <div className={styles.listItem}>
          <img src="media/photo_11.jpg" alt="" />
        </div>
        <div className={styles.listItem}>
          <img src="media/photo_12.jpg" alt="" />
        </div>
        <div className={styles.listItem}>
          <img src="media/photo_13.jpg" alt="" />
        </div>
        <div className={styles.listItem}>
          <img src="media/photo_14.jpg" alt="" />
        </div>
        <div className={styles.listItem}>
          <img src="media/photo_15.jpg" alt="" />
        </div>
        <div className={styles.listItem}>
          <img src="media/photo_16.jpg" alt="" />
        </div>{" "}
        <div className={styles.listItem}>
          <img src="media/photo_17.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default MediaLayout
