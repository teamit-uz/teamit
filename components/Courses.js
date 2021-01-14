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
            <div className={styles.listItem_title}>Video Montaj</div>
            <div className={styles.listItem_tags}>
              <span>After Effects</span>
              <span>PremierPro</span>
            </div>
          </a>
        </div>{" "}
        <div className={styles.listItem}>
          <a href="/courses/1">
            <img src="/courses.jpg" alt="" />{" "}
            <div className={styles.listItem_title}>SMM va Kopirayting</div>
            <div className={styles.listItem_tags}>
              <span>Facebook</span> <span>Youtube</span>
              <span>Instagram</span> <span>Telegram</span>
              <span>TikTok</span>
            </div>
          </a>
        </div>{" "}
        <div className={styles.listItem}>
          <a href="/courses/2">
            <img src="/courses.jpg" alt="" />{" "}
            <div className={styles.listItem_title}>Office Dasturlari</div>
            <div className={styles.listItem_tags}>
              <span>MS Word</span>
              <span>MS Excel</span>
              <span>MS PowerPoint</span>
            </div>
          </a>
        </div>{" "}
        <div className={styles.listItem}>
          <a href="/courses/1">
            <img src="/courses.jpg" alt="" />{" "}
            <div className={styles.listItem_title}>Ingliz tili</div>
            <div className={styles.listItem_tags}>
              <span>IELTS</span>
              <span>Advanced</span> <span>Intermediate</span>
              <span>Pre-Intermediate</span>
              <span>Beginner</span>
            </div>
          </a>
        </div>{" "}
        <div className={styles.listItem}>
          <a href="/courses/2">
            <img src="/courses.jpg" alt="" />{" "}
            <div className={styles.listItem_title}>Grafik Dizayni</div>
            <div className={styles.listItem_tags}>
              <span>Adobe Illustrator</span>
              <span>Photoshop</span>
            </div>
          </a>
        </div>{" "}
        <div className={styles.listItem}>
          <a href="/courses/2">
            <img src="/courses.jpg" alt="" />{" "}
            <div className={styles.listItem_title}>Arxitektura</div>
            <div className={styles.listItem_tags}>
              <span>AutoCAD</span>
              <span>2D</span>
              <span>3D</span>
            </div>
          </a>
        </div>{" "}
        <div className={styles.listItem}>
          <a href="/courses/2">
            <img src="/courses.jpg" alt="" />{" "}
            <div className={styles.listItem_title}>Grafik Dizayni</div>
            <div className={styles.listItem_tags}>
              <span>Adobe Illustrator</span>
              <span>Photoshop</span>
            </div>
          </a>
        </div>{" "}
        <div className={styles.listItem}></div>
      </div>{" "}
      <Button link="courses" text="Batafsil" />
    </div>
  )
}

export default Courses
