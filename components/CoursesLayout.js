import styles from "../styles/components/Courses.module.css";
import Button from "./Button";
import Link from "next/link";

const Courses = () => {
  return (
    <div className={`${styles.courses} myPad`} id="courses">
      <div className="title">Kurslarimiz</div>
      <div className={styles.list}>
        <Card link="/courses/1" img="graphic.jpg" />
        <Card link="/courses/2" img="roboto.jpg" />
        <Card link="/courses/2" img="roboto.jpg" />
        <div className={styles.listItem}>
          <a href="/courses/1">
            <img src="/courses.jpg" alt="" />
            <div className={styles.listItem_title}>Web 22Frontend</div>
            <div className={styles.listItem_tags}>
              <span>Javascript</span>
              <span>React</span>
              <span>SASS</span>
            </div>
          </a>
        </div>
        <div className={styles.listItem}>
          <a href="/courses/1">
            <img src="/courses.jpg" alt="" />
            <div className={styles.listItem_title}>Web Backend</div>
            <div className={styles.listItem_tags}>
              <span>Python</span> <span>Django</span>
            </div>
          </a>
        </div>
        <div className={styles.listItem}>
          <a href="/courses/2">
            <img src="/courses.jpg" alt="" />
            <div className={styles.listItem_title}>Video Montaj</div>
            <div className={styles.listItem_tags}>
              <span>After Effects</span>
              <span>PremierPro</span>
            </div>
          </a>
        </div>
        <div className={styles.listItem}>
          <a href="/courses/1">
            <img src="/courses.jpg" alt="" />
            <div className={styles.listItem_title}>SMM va Kopirayting</div>
            <div className={styles.listItem_tags}>
              <span>Facebook</span>
              <span>Instagram</span> <span>Telegram</span>
              <span>TikTok</span>
            </div>
          </a>
        </div>
        <div className={styles.listItem}>
          <a href="/courses/2">
            <img src="/courses.jpg" alt="" />
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
            <img src="/courses.jpg" alt="" />
            <div className={styles.listItem_title}>Ingliz tili</div>
            <div className={styles.listItem_tags}>
              <span>IELTS</span>
              <span>Advanced</span> <span>Intermediate</span>
              <span>Pre-Intermediate</span>
              <span>Beginner</span>
            </div>
          </a>
        </div>
        <div className={styles.listItem}>
          <a href="/courses/2">
            <img src="/courses.jpg" alt="" />
            <div className={styles.listItem_title}>Grafik Dizayni</div>
            <div className={styles.listItem_tags}>
              <span>Adobe Illustrator</span>
              <span>Photoshop</span>
            </div>
          </a>
        </div>
        <div className={styles.listItem}>
          <a href="/courses/2">
            <img src="/courses.jpg" alt="" />
            <div className={styles.listItem_title}>Arxitektura</div>
            <div className={styles.listItem_tags}>
              <span>AutoCAD</span>
              <span>2D</span>
              <span>3D</span>
            </div>
          </a>
        </div>
        <div className={styles.listItem}>
          <a href="/courses/2">
            <img src="/courses.jpg" alt="" />
            <div className={styles.listItem_title}>Grafik Dizayni</div>
            <div className={styles.listItem_tags}>
              <span>Adobe Illustrator</span>
              <span>Photoshop</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

const Card = ({ link, img }) => {
  return (
    <div className={styles.listItem}>
      <Link href={link ?? ""}>
        <img src={`/courses/${img}`} alt="" />
        {/* <div className={styles.listItem_title}>Web 2Frontend</div> */}
        {/* <div className={styles.listItem_tags}>
          <span>Javascript</span>
          <span>React</span>
          <span>SASS</span>
        </div> */}
      </Link>
    </div>
  );
};

export default Courses;
