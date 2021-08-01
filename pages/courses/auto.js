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
        <div className={styles.mainTitle}>AUTOCAD kursi</div>
        <div>
          <span className={styles.bold}>Davomiyligi: 2 oy </span>
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
          <li>AUTOCAD dasturidan foydalanish;</li>
          <li>Bino loyihasi chizish(Planirovka);</li>
          <li>Binoni fasad qismini chizish;</li>
          <li>Binoni mebelashtirish;</li>
          <li>Binoni 3D ko'rinishini yaratish;</li>
          <li>Binoni qirqimini olish;</li>
          <li>Qurilishga ketadigan mahsulotlar hisobi (Otdelka).</li>
        </ul>

        <div className={styles.img}>
          <img src="/courses/auto/img1.jpg" alt="front" />
          <span className={styles.imgtag}>Binoni fasad qismi chizmasi</span>
        </div>
        <div className={styles.img}>
          <img src="/courses/auto/img2.jpg" alt="front" />
          <span className={styles.imgtag}>Uyning 2D chizmasi</span>
        </div>

        <h3 className={styles.title}>Qanday qulayliklar mavjud:</h3>
        <ul>
          <li>
            Grafik dizayn xonasi kuchli parametrli kompyuterlar bilan
            jihozlangan;
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
          <img src="/courses/auto/img3.jpg" alt="dars" />
          <span className={styles.imgtag}>Dars jarayoni</span>
        </div>
        <h3 className={styles.title}>Kurs o`quvchiga qanday foyda keltiradi:</h3>
        <ul>
          <li> Zamonaviy kasblardan birini o`rganadi;</li>
          <li>
            O'quvchi arxitektura buyicha boshlang'ich tushunchaga ega bo'ladi;
          </li>
          <li>O'rta va kichik loyihalarni chiza oladi;</li>
          <li>Qurilish materiallarini o'lchamlarini o'rganadi;</li>
          <li> Kreativ fikrlash va ijodkorlik qobiliyatlari shakllanadi.</li>
        </ul>

        <div>
          <h4 className={styles.italic}>
            Kurs yakunida imtihonni muvaffaqiyatli topshirgan o`quvchilarga
            sertifikat beriladi.
          </h4>
        </div>
        <div>
          <span className={styles.bold}>Narxi: oyiga 300 ming so`m</span>
        </div>
      </div>
    </Layout>
  );
};

export default Course;
