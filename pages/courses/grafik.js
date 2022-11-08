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
        <div className={styles.mainTitle}>Grafik dizayn kursi</div>
        <div>
          <span className={styles.bold}>Davomiyligi: 6 oy </span>
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
          <li> Branding (Logotip dizayn va brendbuk tayyorlash);</li>
          <li>SMM dizayn (Ijtimoiy tarmoqlar uchun post dizayn tayyorlash);</li>
          <li>
            Poligrafiya dizayni (Bannerlar, billboard, vizitka, taklifnoma va
            h.k.);
          </li>
          <li>Qadoqlash dizayni (Mahsulot qadoq dizayni).</li>
        </ul>

        <div className={styles.img}>
          <img src="/courses/grafik/img1.jpg" alt="front" />
          <span className={styles.imgtag}>
            Teamit Academy uchun namuna brending ko'rinishi
          </span>
        </div>
        <div className={styles.img}>
          <img src="/courses/grafik/smm.jpg" alt="smm" />
          <span className={styles.imgtag}>
            Teamit Academy uchun SMM dizaynlar
          </span>
        </div>
        <div className={styles.img}>
          <img src="/courses/grafik/poli.jpg" alt="poligraphy" />
          <span className={styles.imgtag}>Billboard dizayn</span>
        </div>
        <div className={styles.img}>
          <img src="/courses/grafik/qadoq.jpg" alt="qadoq" />
          <span className={styles.imgtag}>Mahsulot qadoq dizayni</span>
        </div>
         <h3 className={styles.title}>Qaysi grafik dasturlar o'rgatiladi:</h3>
        <ul>
          <li>Adobe Photoshop</li>
          <li>Adobe Illustrator</li>
          <li>Adobe InDesign</li>
          <li>CorelDRAW</li>
        </ul>
        <div className={styles.img}>
          <img src="/courses/grafik/dastur.jpg" alt="dastur" />
          <span className={styles.imgtag}>Grafik dasturlar</span>
        </div>
         <h3 className={styles.title}>Qanday qulayliklar mavjud:</h3>
        <ul>
          <li>
            Grafik dizayn xonasi kuchli parametrli kompyuterlar bilan
            jihozlangan;
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
          <img src="/courses/grafik/xona.png" alt="dars" />
          <span className={styles.imgtag}>Mashg`ulot xonasi</span>
        </div>
        <div className={styles.img}>
          <img src="/courses/grafik/mentor.jpg" alt="mentor" />
          <span className={styles.imgtag}></span>
        </div>
        <div className={styles.img}>
          <img src="/courses/grafik/dars.png" alt="dars" />
          <span className={styles.imgtag}>Dars jarayoni</span>
        </div>
         <h3 className={styles.title}>Kurs o`quvchiga qanday foyda keltiradi:</h3>
        <ul>
          <li> Zamonaviy kasblardan birini o`rganadi;</li>
          <li> Yuqori saviyadagi estetik did sohibiga aylanadi;</li>
          <li>Kreativ fikrlash va ijodkorlik qobiliyatlari shakllanadi; </li>
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

      </div>
    </Layout>
  );
};

export default Course;
