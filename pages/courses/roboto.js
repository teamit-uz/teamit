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
        <div className={styles.mainTitle}>Robototexnika kursi</div>
        <div>
          <span className={styles.bold}>Davomiyligi: 6 oy </span>
        </div>
        <div>
          <span className={styles.bold}>Haftada 3 kun, 2 soatdan </span>
        </div>
        <div>
          <span className={styles.bold}>
            Guruhga 10 ta o`quvchi qabul qilinadi
          </span>
        </div>

        <h3 className={styles.title}>Kursda nimalar o`rgatiladi:</h3>
        <ul>
          <li>
            C++ dasturlash tili (basic), Arduino va Raspberry Pi platformalari;
          </li>
          <li> Elektronika, mexanika va sxemotexnika asoslari.</li>
        </ul>

        <div className={styles.img}>
          <img src="/courses/roboto/img1.jpg" alt="front" />
          <span className={styles.imgtag}>Dars jarayoni</span>
        </div>
        <h3 className={styles.title}>Qanday qulayliklar mavjud:</h3>
        <ul>
          <li>
            O’quvchilar darsda kompyuter, internet va kerakli jihozlar bilan
            ta’minlanadi;
          </li>
          <li> 20 % nazariya, 80% amalyot;</li>
          <li>
            O`quvchilar darsdan tashqari vaqtlarda ham markazga kelib
            o`zlarining ustida ishlashlari mumkin;
          </li>
          <li>
            Boshqa o’quv markazlari bilan do’stona musobaqa va ko’rgazmalar
            tashkil etiladi;
          </li>
          <li>
            Musobaqalarda o`rin olgan o`quvchilarimiz esdalik sovg’alar bilan
            taqdirlanadi.
          </li>
        </ul>
        <div className={styles.img}>
          <img src="/courses/roboto/mentor.jpg" alt="mentor" />
          <span className={styles.imgtag}></span>
        </div>
        <div className={styles.img}>
          <img src="/courses/roboto/img2.jpg" alt="dars" />
          <span className={styles.imgtag}>Mashg`ulot xonasi</span>
        </div>
        <h3 className={styles.title}>
          Kurs o`quvchiga qanday foyda keltiradi:
        </h3>
        <ul>
          <li> Elektr sohasi haqida kerakli tushunchaga ega bo`ladi;</li>
          <li>Kompyuterdan samarali foydalanishni o'rganadi;</li>
          <li>
            O’quvchining mantiqiy fikrlashi rivojlanadi va dunyoqarashi
            kengayadi.
          </li>
        </ul>
        <div>
          <h4 className={styles.italic}>
            Kurs yakunida imtihonni muvaffaqiyatli topshirgan o`quvchilarga
            sertifikat beriladi.
          </h4>
        </div>
//         <div>
//           <span className={styles.bold}>Narxi: oyiga 250 ming so`m</span>
//         </div>
      </div>
    </Layout>
  );
};

export default Course;
