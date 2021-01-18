import styles from "../styles/components/Courses.module.css"
import Button from "./Button"

const Courses = () => {
  return (
    <div className={`${styles.courses} myPad`} id="courses">
      <div className="title">Kurslarimiz</div>
      <div className={styles.list}>
        <div className={styles.listItem}>
          <a href="/courses/1">
            <img src="/courses/course8.jpg" alt="" />
            <div className={styles.listItem_title}>Web Frontend</div>
            <div className={styles.listItem_tags}>
              <span>Javascript</span>
              <span>React</span>
              <span>SASS</span>
            </div>
          </a>
        </div>
        <div className={styles.listItem}>
          <a href="/courses/1">
            <img src="/courses/course7.jpg" alt="" />
            <div className={styles.listItem_title}>Web Backend</div>
            <div className={styles.listItem_tags}>
              <span>Python</span> <span>Django</span>
            </div>
          </a>
        </div>
        <div className={styles.listItem}>
          <a href="/courses/2">
            <img src="/courses/course6.jpg" alt="" />
            <div className={styles.listItem_title}>Video Montaj</div>
            <div className={styles.listItem_tags}>
              <span>After Effects</span>
              <span>Premiere Pro</span>
            </div>
          </a>
        </div>
        <div className={styles.listItem}>
          <a href="/courses/1">
            <img src="/courses/course5.jpg" alt="" />
            <div className={styles.listItem_title}>SMM</div>
            <div className={styles.listItem_tags}>
              <span>Facebook</span> <span>Instagram</span> <span>Telegram</span>
              <span>TikTok</span>
            </div>
          </a>
        </div>
        <div className={styles.listItem}>
          <a href="/courses/2">
            <img src="/courses/course4.jpg" alt="" />
            <div className={styles.listItem_title}>Office Dasturlari</div>
            <div className={styles.listItem_tags}>
              <span>MS Word</span>
              <span>MS Excel</span>
              <span>MS PowerPoint</span>
            </div>
          </a>
        </div>
        <div className={styles.listItem}>
          <a href="/courses/1">
            <img src="/courses/course3.jpg" alt="" />
            <div className={styles.listItem_title}>Ingliz tili</div>
            <div className={styles.listItem_tags}>
              <span>IELTS</span>
            </div>
          </a>
        </div>
        <div className={styles.listItem}>
          <a href="/courses/2">
            <img src="/courses/course2.jpg" alt="" />
            <div className={styles.listItem_title}>Grafik Dizayn</div>
            <div className={styles.listItem_tags}>
              <span>Adobe Illustrator</span>
              <span>Photoshop</span> <span>CorelDRAW</span>
            </div>
          </a>
        </div>
        <div className={styles.listItem}>
          <a href="/courses/2">
            <img src="/courses/course1.jpg" alt="" />
            <div className={styles.listItem_title}>Arxitektura</div>
            <div className={styles.listItem_tags}>
              <span>AutoCAD</span>

              <span>3DS MAX</span>
            </div>
          </a>
        </div>
        <div className={styles.listItem}></div>
      </div>
      <Button link="courses" text="Batafsil" />
    </div>
  )
}

export default Courses
