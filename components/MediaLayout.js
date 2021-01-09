import styles from "../styles/components/Media.module.css"
import Button from "./Button"
const MediaLayout = () => {
  return (
    <div className={styles.media} id="media">
      <div className="title">Media</div>
      <div className={styles.list}>
        <div className={styles.listItem}>
          <div>
            <img src="IMG_9410.JPG" alt="" />
          </div>
        </div>
        <div className={styles.listItem}>
          <div>
            <img src="IMG_9410.JPG" alt="" />
          </div>
        </div>
        <div className={styles.listItem}>
          <div>
            <img src="IMG_9410.JPG" alt="" />
          </div>
        </div>
        <div className={styles.listItem}>
          <div>
            <img src="IMG_9410.JPG" alt="" />
          </div>
        </div>
        <div className={styles.listItem}>
          <div>
            <img src="IMG_9410.JPG" alt="" />
          </div>
        </div>
        <div className={styles.listItem}>
          <div>
            <img src="IMG_9410.JPG" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MediaLayout
