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
        <div className={styles.mainTitle}>Ofis dasturlari kursi</div>
        <div>
          <span className={styles.bold}>Davomiyligi: 2 oy </span>
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
            Microsoft Word dasturidan foydalanish va unda Ma`lumotnoma,
            Shartnoma blankalari, Firma blankasi, Talabnoma, Tavsifnoma,
            Bayonnoma, Buyruq va boshqa hujjatlarni tayyorlash;
          </li>
          <li>
            Microsoft Excel dasturidan foydalanish va unda har xil jadvallar
            tuzish, Tabel va Hisob fakturalar yasash, Bazalar yasash;
          </li>
          <li>
            Microsoft PowerPoint dasturidan foydalanish va unda prezentatsiyalar
            yaratish.
          </li>
        </ul>

        <div className={styles.img}>
          <img src="/courses/ofis/img1.jpg" alt="front" />
          <span className={styles.imgtag}>O'rgatiladigan dasturlar</span>
        </div>

        <h3 className={styles.title}>Qanday qulayliklar mavjud:</h3>
        <ul>
          <li>
            O’quvchilar darsda kompyuter, internet va tarqatma materiallar bilan
            ta`minlanadi;
          </li>
          <li>Dars nazariya va amaliyot bilan birgalikda olib boriladi; </li>
          <li>
            O`quvchi darsdan tashqari vaqtda ham Coworking zonamizdan
            foydalanishi mumkin.
          </li>
        </ul>

        <div className={styles.img}>
          <img src="/courses/ofis/dars.jpg" alt="dars" />
          <span className={styles.imgtag}>Dars jarayoni</span>
        </div>
        <h3 className={styles.title}>
          Kurs o`quvchiga qanday foyda keltiradi:
        </h3>
        <ul>
          <li> Kompyuter savodxonligi shakllanadi;;</li>
          <li>
           Davlat va xususiy tashkilotlarda eng ko`p qo`llaniladigan dasturlarni o`rganadi;
          </li>
          <li>
           Davlat va xususiy tashkilotlarda ishlash va jamoa bilan muomala madaniyati rivojlanadi;
          </li>
          <li>
         Davlat tilida ish yuritish, ya`ni hujjatlar bilan ishlash ko`nikmasi shakllanadi.
          </li>
        </ul>
        <div className={styles.img}>
          <img src="/courses/ofis/img2.jpg" alt="dars" />
          <span className={styles.imgtag}>Sertifikat</span>
        </div>
        <div className={styles.img}>
          <img src="/courses/ofis/mentor.jpg" alt="mentor" />
          <span className={styles.imgtag}></span>
        </div>
        <div className={styles.img}>
          <img src="/courses/ofis/img3.jpg" alt="dars" />
          <span className={styles.imgtag}></span>
        </div>
        <div>
          <h4 className={styles.italic}>
            Kurs yakunida imtihonni muvaffaqiyatli topshirgan o`quvchilarga
            sertifikat beriladi.
          </h4>
        </div>
        <div>
          <span className={styles.bold}>Narxi: oyiga 200 ming so`m</span>
        </div>
      </div>
    </Layout>
  );
};

export default Course;
