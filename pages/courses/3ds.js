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
        <div className={styles.mainTitle}>3DS Max kursi</div>
        <div>
          <span className={styles.bold}>Davomiyligi: 4 oy </span>
        </div>
        <div>
          <span className={styles.bold}>Haftada 2 kun, 3 soatdan </span>
        </div>
        <div>
          <span className={styles.bold}>
            Guruhga 12 ta o`quvchi qabul qilinadi
          </span>
        </div>

        <h3 className={styles.title}>Kursda nimalar o`rgatiladi:</h3>
        <ul>
          <li>Interyer modellarini yaratish;</li>
          <li>Eksteryer modellarini yaratish;</li>
          <li>Landshaft dizaynini yaratish;</li>
          <li>Tayyor 3d modellar bilan ishlash;</li>
          <li>Yorug'lik va nurlar bilan ishlash;</li>
          <li>3d modellar materiallari bilan ishlash;</li>
          <li>Qo'shimcha pluginlar bilan ishlash;</li>
          <li>Yaratgan modellarni vizualizatsiya qilish;</li>
          <li>Referencelardan foydalanish.</li>
        </ul>

        <div className={styles.img}>
          <img src="/courses/3ds/autopic1.jpg" alt="front" />
          <span className={styles.imgtag}> AutoCAD & 3DS MAX & LUMION 11 Pro</span>
        </div>
        <div className={styles.img}>
          <img src="/courses/3ds/autopic2.jpg" alt="front" />
          <span className={styles.imgtag}> AutoCAD & 3DS MAX & LUMION 11 Pro</span>
        </div>

        <h3 className={styles.title}>Qanday qulayliklar mavjud:</h3>
        <ul>
          <li>
            3DS MAX xonasi kuchli parametrli kompyuterlar bilan jihozlangan;
          </li>
          <li>30% nazariy, 70% amaliy; </li>
          <li> Guruhda networking muhiti yaratiladi; </li>
          <li>Real loyihalar ustida ishlanadi;</li>
          <li>
            O`quvchilar darsdan tashqari vaqtlarda ham markazga kelib
            o`zlarining ustida ishlashlari mumkin.
          </li>
        </ul>
        <div className={styles.img}>
          <img src="/courses/auto/mentor.jpg" alt="mentor" />
          <span className={styles.imgtag}></span>
        </div>
        <div className={styles.img}>
          <img src="/courses/3ds/img2.png" alt="dars" />
          <span className={styles.imgtag}>Mashg'ulot xonasi</span>
        </div>
        <h3 className={styles.title}>
          Kurs o`quvchiga qanday foyda keltiradi:
        </h3>
        <ul>
          <li> Zamonaviy kasblardan birini o`rganadi</li>
          <li>
           O'quvchilar arxitektura asoslaridan xabardor bo'ladi;
          </li>
          <li> Kreativ fikrlash va ijodkorlik qobiliyatlari shakllanadi.</li>
        </ul>

        <div>
          <h4 className={styles.italic}>
            Kurs yakunida imtihonni muvaffaqiyatli topshirgan o`quvchilarga
            sertifikat beriladi.
          </h4>
        </div>
//         <div>
//           <span className={styles.bold}>Narxi: oyiga 400 ming so`m</span>
//         </div>
      </div>
    </Layout>
  );
};

export default Course;
