import styles from "../styles/components/Courses.module.css"
import Button from "./Button"

const Courses = () => {
  return (
    <div className={`${styles.courses} myPad`} id="courses">
      <div className="title">Kurslarimiz</div>
      <div className={styles.list}>
        <div className={styles.listItem}>
          <a href="/courses/1">
            <img src="/courses.jpg" alt="" />{" "}
            <div className={styles.listItem_title}>Web dasturlash</div>
            <div className={styles.listItem_tags}>
              <span>JavaScript</span>
              <span>React</span> <span>JavaScript</span>
              <span>React</span> <span>JavaScript</span>
              <span>React</span>
            </div>
          </a>
        </div>{" "}
        <div className={styles.listItem}>
          <a href="/courses/2">
            <img src="/courses.jpg" alt="" />{" "}
            <div className={styles.listItem_title}>Web dasturlash</div>
            <div className={styles.listItem_tags}>
              <span>JavaScript</span>
              <span>React</span>
            </div>
          </a>
        </div>{" "}
        <div className={styles.listItem}>
          <a href="/courses/1">
            <img src="/courses.jpg" alt="" />{" "}
            <div className={styles.listItem_title}>Web dasturlash</div>
            <div className={styles.listItem_tags}>
              <span>JavaScript</span>
              <span>React</span> <span>JavaScript</span>
              <span>React</span> <span>JavaScript</span>
              <span>React</span>
            </div>
          </a>
        </div>{" "}
        <div className={styles.listItem}>
          <a href="/courses/2">
            <img src="/courses.jpg" alt="" />{" "}
            <div className={styles.listItem_title}>Web dasturlash</div>
            <div className={styles.listItem_tags}>
              <span>JavaScript</span>
              <span>React</span>
            </div>
          </a>
        </div>{" "}
        <div className={styles.listItem}>
          <a href="/courses/1">
            <img src="/courses.jpg" alt="" />{" "}
            <div className={styles.listItem_title}>Web dasturlash</div>
            <div className={styles.listItem_tags}>
              <span>JavaScript</span>
              <span>React</span> <span>JavaScript</span>
              <span>React</span> <span>JavaScript</span>
              <span>React</span>
            </div>
          </a>
        </div>{" "}
        <div className={styles.listItem}>
          <a href="/courses/2">
            <img src="/courses.jpg" alt="" />{" "}
            <div className={styles.listItem_title}>Web dasturlash</div>
            <div className={styles.listItem_tags}>
              <span>JavaScript</span>
              <span>React</span>
            </div>
          </a>
        </div>{" "}
      </div>{" "}
      <Button link="courses" text="Batafsil" />
    </div>
  )
}

export default Courses
