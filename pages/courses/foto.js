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
        <div className={styles.mainTitle}>Professional fotografiya</div>
        <div>
          <span className={styles.bold}>Davomiyligi: 2 oy </span>
        </div>
        <div>
          <span className={styles.bold}>Haftada 3 kun, 1 soatdan </span>
        </div>
        <div>
          <span className={styles.bold}>
            Guruhga 5 ta o`quvchi qabul qilinadi
          </span>
        </div>

         <h3 className={styles.title}>Kursda nimalar o`rgatiladi:</h3>
        <ul>
          <li> Fotografiya sohasiga oid barcha yo'nalishlar;</li>
          <li>Wedding fotografiya;</li>
          <li>Portret fotografiya;</li>
          <li>Model fotografiya;</li>
          <li>Reklama fotografiyasi;</li>
          <li>Fotoapparatni to'g'ri ishlatish;</li>
          <li>Foto rakurslar.</li>
        </ul>

        <div className={styles.img}>
          <img src="/courses/foto/img1.jpg" alt="front" />
          <span className={styles.imgtag}></span>
        </div>

         <h3 className={styles.title}>Qanday qulayliklar mavjud:</h3>
        <ul>
          <li>
            O'quvchilar darsda kompyuter, internet va kerakli jihozlar bilan
            taminlanadi;
          </li>
          <li> 50% nazariya, 50% amaliyot; </li>
        </ul>

        <div className={styles.img}>
          <img src="/courses/foto/mentor.jpg" alt="mentor" />
          <span className={styles.imgtag}></span>
        </div>

         <h3 className={styles.title}>Kurs o`quvchiga qanday foyda keltiradi:</h3>
        <ul>
          <li> Fotografiya sohasi haqida kerakli tushunchaga ega bo'ladi;</li>
          <li> Fotografiya sohasidan pul ishlashni o'rganadi;</li>
          <li>O'quvchining dunyoqarashi kengayadi . </li>
    
        </ul>
         <div className={styles.img}>
          <img src="/courses/foto/img2.jpg" alt="" />
          <span className={styles.imgtag}></span>
        </div>
        <div>
          <h4 className={styles.italic}>
          Kurs yakunida imtihonni muvaffaqiyatli topshirgan o`quvchilarga sertifikat beriladi.
          </h4>
        </div>
        <div>
          <span className={styles.bold}>Narxi: oyiga 400 ming so`m</span>
        </div>
      </div>
    </Layout>
  );
};

export default Course;
