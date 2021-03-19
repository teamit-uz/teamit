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
        <div className={styles.mainTitle}>Web dasturlash kursi</div>
        <div>
          <span className={styles.bold}>Davomiyligi:6 oy </span>
        </div>
        <div>
          <span className={styles.bold}>Haftada 3 kun, 2 soatdan </span>
        </div>
        <div>
          <span className={styles.bold}>
            Guruhga 12 ta o`quvchi qabul qilinadi
          </span>
        </div>

        <h3>Kursda nimalar o`rgatiladi:</h3>
        <ul>
          <li> Frontend: Html, Css, Bootstrap, Javascript, React JS;</li>
          <li> Backend: Node Js, Mongo DB, Express,Git.</li>
        </ul>
        <div className={styles.img}>
          <img src="/courses/web/front.jpg" alt="front" />
          <span className={styles.imgtag}>Frontend</span>
        </div>
        <div className={styles.img}>
          <img src="/courses/web/back.jpg" alt="front" />
          <span className={styles.imgtag}>Backend</span>
        </div>
        <h3>Qanday qulayliklar mavjud:</h3>
        <ul>
          <li> O`quvchilar dars mobaynida NOUTBUK bilan ta`minlanadi;</li>
          <li> Guruhda networking muhiti yaratiladi;</li>
          <li>
            Har bir guruh uchun Telegramda alohida guruh yaratiladi. Unda
            o`quvchilar va mentor o`rtasida doimiy muloqot yo`lga qo`yiladi,
            o`zaro tajriba almashiladi, murakkab muammolarni hal qilishda
            bir-birlariga yordam berishadi;{" "}
          </li>
          <li>
            {" "}
            Barcha darslarni mentor videoga yozadi. Darsdan qolib ketgan yoki uy
            vazifalarini bajarishda qiynalgan o`quvchi videodarslardan
            foydalanib mavzuni o`zlashtirishiga imkon beradi;
          </li>
          <li>
            Har oy test olinadi eng yaxshi natijaga erishgan o`quvchilarga oylik
            to`lovdan chegirma qilinadi;
          </li>
          <li>
            O`quvchi darsdan tashqari vaqtlarda ham markazga kelib o`z ustida
            ishlashi mumkin.
          </li>
        </ul>
        <div className={styles.img}>
          <img src="/courses/web/mentor.jpg" alt="mentor" />
          <span className={styles.imgtag}></span>
        </div>
        <div className={styles.img}>
          <img src="/courses/web/img1.jpg" alt="dars" />
          <span className={styles.imgtag}>Dars jarayoni</span>
        </div>
        <h3>Kurs o`quvchiga qanday foyda keltiradi:</h3>
        <ul>
          <li> Talab yuqori bo`lgan kasblardan birini o`rganadi;</li>
          <li>
            Zamonaviy texnologiya mahsulotlaridan oqilona foydalanish malakasi
            shakllanadi;
          </li>
          <li>Kreativ fikrlash va ijodkorlik qobiliyatlari rivojlanadi; </li>
          <li>
            Mantiqiy fikrlashi yuqori, vaqtdan unumli foydalanadigan shaxsga
            aylanadi;
          </li>
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
