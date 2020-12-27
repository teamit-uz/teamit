import styles from "../../styles/components/Courses.module.css"
const Courses = () => {
  return (
    <div className={styles.courses}>
      <div className={styles.title}>Kurslarimiz</div>
      <div className={styles.list}>
        <div className={styles.listItem}>
          <img src="/courses.jpg" alt="" />{" "}
          <div className={styles.listItem_title}>Web dasturlash</div>
          <div className={styles.listItem_tags}>
            <span>JavaScript</span>
            <span>React</span>
          </div>
        </div>{" "}
        <div className={styles.listItem}>
          <img src="/courses.jpg" alt="" />{" "}
          <div className={styles.listItem_title}>Web dasturlash</div>
          <div className={styles.listItem_tags}>
            <span>JavaScript</span>
            <span>React</span>
          </div>
        </div>{" "}
        <div className={styles.listItem}>
          <img src="/courses.jpg" alt="" />{" "}
          <div className={styles.listItem_title}>Web dasturlash</div>
          <div className={styles.listItem_tags}>
            <span>JavaScript</span>
            <span>React</span>
          </div>
        </div>{" "}
        <div className={styles.listItem}>
          <img src="/courses.jpg" alt="" />{" "}
          <div className={styles.listItem_title}>Web dasturlash</div>
          <div className={styles.listItem_tags}>
            <span>JavaScript</span>
            <span>React</span>
          </div>
        </div>{" "}
        <div className={styles.listItem}>
          <img src="/courses.jpg" alt="" />{" "}
          <div className={styles.listItem_title}>Web dasturlash</div>
          <div className={styles.listItem_tags}>
            <span>JavaScript</span>
            <span>React</span>
          </div>
        </div>{" "}
        <div className={styles.listItem}>
          <img src="/courses.jpg" alt="" />{" "}
          <div className={styles.listItem_title}>Web dasturlash</div>
          <div className={styles.listItem_tags}>
            <span>JavaScript</span>
            <span>React</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Courses
