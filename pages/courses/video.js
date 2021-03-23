import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import styles from "../../styles/components/CoursePage.module.css";
import CoursesPage from "../../components/CoursesPage";
const courses = ["a", "b", "c"];

const Course = () => {
  const router = useRouter();
  // const { slug } = router.query;
  return (
    <Layout>
      <div className={`${styles.container} myPad`}>
        <div className={styles.mainTitle}>Video montaj kursi</div>
        <div>
          <span className={styles.bold}>Davomiyligi: 4 oy </span>
        </div>
        <div>
          <span className={styles.bold}>Haftada 3 kun, 2 soatdan </span>
        </div>
        <div>
          <span className={styles.bold}>
            Guruhga 12 ta o`quvchi qabul qilinadi
          </span>
        </div>

        <h3 className={styles.title}>Kursda nimalar o`rgatiladi:</h3>
        <ul>
          <li> Video montaj asoslari;</li>
          <li>Dasturlar bilan tanishish;</li>
          <li>Ovozlar bilan ishlash ;</li>
          <li>Effektlar bilan ishlash;</li>
          <li>Plaginlar bilan ishlash;</li>
          <li>Mahsulotni render qilish.</li>
        </ul>

        <h3 className={styles.title}>Qaysi grafik dasturlar o'rgatiladi:</h3>
        <ul>
          <li>Adobe Premiere Pro</li>
          <li>Adobe After Effects</li>
          <li>Adobe Media Encoder</li>
        </ul>
        <div className={styles.img}>
          <img src="/courses/video/img1.jpg" alt="dastur" />
          <span className={styles.imgtag}>O'rgatiladigan dasturlar</span>
        </div>
        <h3 className={styles.title}>Qanday qulayliklar mavjud:</h3>
        <ul>
          <li>
            Darsni professional video montaj ustasi, Creative Studio asoschisi
            o'tadi;
          </li>
          <li>
            Video xonasi kuchli parametrli kompyuterlar bilan jihozlangan;
          </li>
          <li> 30% nazariy, 70% amaliy; </li>
          <li>Guruhda networking muhiti yaratiladi;</li>
          <li>Real loyihalar ustida ishlanadi;</li>
          <li>Faol o`quvchilar rag`batlantiriladi;</li>
          <li>
            O`quvchilar darsdan tashqari vaqtlarda ham markazga kelib
            o`zlarining ustida ishlashlari mumkin.
          </li>
        </ul>

        <div className={styles.img}>
          <img src="/courses/video/xona.png" alt="dars" />
          <span className={styles.imgtag}>Mashg'ulot xonasi</span>
        </div>
        <div className={styles.img}>
          <img src="/courses/video/mentor.jpg" alt="mentor" />
          <span className={styles.imgtag}></span>
        </div>

        <h3 className={styles.title}>
          Kurs o`quvchiga qanday foyda keltiradi:
        </h3>
        <ul>
          <li> Zamonaviy kasblardan birini o`rganadi;</li>
          <li> O'quvchilar video montaj asoslaridan xabardor bo'ladi;</li>
          <li>Har xil animatsiyalar yaratish qobiliyatiga ega bo'ladi; </li>
          <li>Kreativ fikrlash va ijodkorlik qobiliyatlari shakllanadi;</li>
          <li>
            Sohani mukammal o`rgangan bitiruvchilarimizga ish topishida yordam
            beriladi.
          </li>
        </ul>
        <div>
          <h4 className={styles.italic}>
            Kurs yakunida imtihonni muvaffaqiyatli topshirgan o`quvchilarga
            sertifikat beriladi.
          </h4>
        </div>
        <div>
          <span className={styles.bold}>Narxi: oyiga 250 ming so`m</span>
        </div>
      </div>
    </Layout>
  );
};

export default Course;
