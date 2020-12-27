import styles from "../../styles/components/Media.module.css"
const Media = () => {
  return (
    <div className={styles.media}>
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
    </div>
  )
}

export default Media
