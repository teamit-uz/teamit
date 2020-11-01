<script>
 import { onMount } from 'svelte';

  onMount(() => {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", user => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
  });
</script>

<style>
  /*--------------------------------------------------------------
# Sections
--------------------------------------------------------------*/

  /* Sections Header
--------------------------------*/

  .section-header {
    margin-bottom: 30px;
  }

  .section-header h2 {
    font-size: 32px;
    color: #0c2e8a;
    text-transform: uppercase;
    font-weight: 700;
    position: relative;
    padding-bottom: 20px;
  }

  .section-header h2::before {
    content: "";
    position: absolute;
    display: block;
    width: 50px;
    height: 3px;
    background: #50d8af;
    bottom: 0;
    left: 0;
  }

  .section-header p {
    padding: 0;
    margin: 0;
  }

  /* About Section
--------------------------------*/

  #about {
    padding: 60px 0 30px 0;
  }

  #about .about-img {
    overflow: hidden;
  }

  #about .about-img img {
    margin-left: -15px;
    max-width: 100%;
  }

  #about .content h2 {
    color: #0c2e8a;
    font-weight: 700;
    font-size: 36px;
    font-family: "Raleway", sans-serif;
  }

  #about .content h3 {
    color: #555;
    font-weight: 300;
    font-size: 18px;
    line-height: 26px;
    font-style: italic;
  }

  #about .content i {
    font-size: 20px;
    padding-right: 4px;
    color: #50d8af;
  }

  #about .content ul {
    list-style: none;
    padding: 0;
  }

  #about .content ul li {
    padding-bottom: 10px;
  }

  /* Services Section
--------------------------------*/

  #services {
    padding: 30px 0 0 0;
  }

  #services .box {
    padding: 40px;
    margin-bottom: 40px;
    box-shadow: 10px 10px 15px rgba(73, 78, 92, 0.1);
    background: #fff;
    transition: 0.4s;
  }

  #services .box:hover {
    box-shadow: 0px 0px 30px rgba(73, 78, 92, 0.15);
    transform: translateY(-10px);
    -webkit-transform: translateY(-10px);
    -moz-transform: translateY(-10px);
  }

  #services .box .icon {
    float: left;
  }

  #services .box .icon i {
    color: #444;
    font-size: 64px;
    transition: 0.5s;
    line-height: 0;
    margin-top: 34px;
  }

  #services .box .icon i:before {
    background: #0c2e8a;
    background: linear-gradient(45deg, #50d8af 0%, #a3ebd5 100%);
    background-clip: border-box;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  #services .box h4 {
    margin-left: 100px;
    font-weight: 700;
    margin-bottom: 15px;
    font-size: 22px;
  }

  #services .box h4 a {
    color: #444;
  }

  #services .box p {
    font-size: 14px;
    margin-left: 100px;
    margin-bottom: 0;
    line-height: 24px;
  }

  /* Our Portfolio Section
--------------------------------*/

  #portfolio {
    background: #fff;
    padding: 30px 0;
  }

  #portfolio .portfolio-overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 1;
    transition: all ease-in-out 0.4s;
  }

  #portfolio .portfolio-item {
    overflow: hidden;
    position: relative;
    padding: 0;
    vertical-align: middle;
    text-align: center;
  }

  #portfolio .portfolio-item h2 {
    color: #ffffff;
    font-size: 24px;
    margin: 0;
    text-transform: capitalize;
    font-weight: 700;
  }

  #portfolio .portfolio-item img {
    transition: all ease-in-out 0.4s;
    width: 100%;
  }

  #portfolio .portfolio-item:hover img {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  #portfolio .portfolio-item:hover .portfolio-overlay {
    opacity: 1;
    background: rgba(0, 0, 0, 0.7);
  }

  #portfolio .portfolio-info {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  /* Call To Action Section
--------------------------------*/

  #call-to-action {
    background: #081e5b;
    background-size: cover;
    padding: 40px 0;
  }

  #call-to-action .cta-title {
    color: #fff;
    font-size: 28px;
    font-weight: 700;
  }

  #call-to-action .cta-text {
    color: #fff;
  }

  #call-to-action .cta-btn {
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 16px;
    letter-spacing: 1px;
    display: inline-block;
    padding: 8px 26px;
    border-radius: 3px;
    transition: 0.5s;
    margin: 10px;
    border: 3px solid #fff;
    color: #fff;
  }

  #call-to-action .cta-btn:hover {
    background: #50d8af;
    border: 3px solid #50d8af;
  }

  /* Our Team Section
--------------------------------*/

  #team {
    background: #fff;
    padding: 30px 0 0 0;
  }

  #team .member {
    text-align: center;
    margin-bottom: 20px;
  }

  #team .member .pic {
    overflow: hidden;
    text-align: center;
  }

  #team .member .pic img {
    max-width: 100%;
  }

  #team .member .details {
    background: #50d8af;
    color: #fff;
    padding: 15px;
    border-radius: 0 0 3px 3px;
  }

  #team .member h4 {
    font-weight: 700;
    margin-bottom: 2px;
    font-size: 18px;
  }

  #team .member span {
    font-style: italic;
    display: block;
    font-size: 13px;
  }

  #team .member .social {
    margin-top: 5px;
  }

  #team .member .social a {
    color: #fff;
  }

  #team .member .social i {
    font-size: 16px;
    margin: 0 2px;
  }

  /* Contact Section
--------------------------------*/

  #contact {
    padding: 30px 0;
  }

  #contact .contact-info {
    margin-bottom: 20px;
    text-align: center;
  }

  #contact .contact-info i {
    font-size: 48px;
    display: inline-block;
    margin-bottom: 10px;
    color: #50d8af;
  }

  #contact .contact-info address,
  #contact .contact-info p {
    margin-bottom: 0;
    color: #000;
  }

  #contact .contact-info h3 {
    font-size: 18px;
    margin-bottom: 15px;
    font-weight: bold;
    text-transform: uppercase;
    color: #999;
  }

  #contact .contact-info a {
    color: #000;
  }

  #contact .contact-info a:hover {
    color: #50d8af;
  }

  #contact .contact-address,
  #contact .contact-phone,
  #contact .contact-email {
    margin-bottom: 20px;
  }
  /* 
#contact #google-map {
  height: 290px;
  margin-bottom: 20px;
}

#contact .form #sendmessage {
  color: #50d8af;
  border: 1px solid #50d8af;
  display: none;
  text-align: center;
  padding: 15px;
  font-weight: 600;
  margin-bottom: 15px;
}

#contact .form #errormessage {
  color: red;
  display: none;
  border: 1px solid red;
  text-align: center;
  padding: 15px;
  font-weight: 600;
  margin-bottom: 15px;
}

#contact .form #sendmessage.show,
#contact .form #errormessage.show,
#contact .form .show {
  display: block;
}

#contact .form .validation {
  color: red;
  display: none;
  margin: 0 0 20px;
  font-weight: 400;
  font-size: 13px;
}

#contact .form input,
#contact .form textarea {
  padding: 10px 14px;
  border-radius: 0;
  box-shadow: none;
  font-size: 15px;
}

#contact .form button[type="submit"] {
  background: #50d8af;
  border: 0;
  border-radius: 3px;
  padding: 10px 30px;
  color: #fff;
  transition: 0.4s;
  cursor: pointer;
}

#contact .form button[type="submit"]:hover {
  background: #2dc899;
} */
</style>

<svelte:head>
  <title>Teamit Academy</title>
  <script src="https://identity.netlify.com/v1/netlify-identity-widget.js">

  </script>
</svelte:head>

<!--==========================
      About Section
    ============================-->
<section id="about" class="wow fadeInUp">
  <div class="container">
    <div class="row">
      <div class="col-lg-6 about-img">
        <img src="img/about-img.jpg" alt="" />
      </div>

      <div class="col-lg-6 content">
        <h2>Teamit Academy'da siz quyidagilarga ega bo'lasiz:</h2>
        <h3>O'quv kurslari davomida:</h3>
        <ul>
          <li>
            <i class="ion-android-checkmark-circle" />
            Kompyuterlar bilan jihozlangan, qulay va shinam o'quv xonalari
          </li>
          <li>
            <i class="ion-android-checkmark-circle" />
            Zamonaviy metodlarga asoslangan yuqori sifatli ta'lim
          </li>
          <li>
            <i class="ion-android-checkmark-circle" />
            Soha mutaxasislarining yopiq seminar va vebinarlarida qatnashish
            imkoniyati
          </li>
        </ul>
        <h3>O'quv kurslari yakunida:</h3>
        <ul>
          <li>
            <i class="ion-android-checkmark-circle" />
            IT dunyosining eng dolzarb mutaxassisliklaridan biriga
          </li>
          <li>
            <i class="ion-android-checkmark-circle" />
            Amaliyot yoki turli kompaniyalarda ish topishda ko'mak
          </li>
        </ul>

      </div>
    </div>

  </div>
</section>
<!-- #about -->

<!--==========================
      Cources Section
    ============================-->
<section id="services">
  <div class="container">
    <div class="section-header">
      <h2>Kurslar</h2>
      <p>
        Sizning qiziqishingiz, qobilyatingiz va imkoniyatlaringizga mos, eng
        rivojlangan va talabi yuqori bo'lgan kurslardan birini tanlang.
      </p>
    </div>

    <div class="row">

      <div class="col-lg-6">
        <div class="box wow fadeInLeft">
          <div class="icon">
            <i class="fa fa-laptop" />
          </div>
          <h4 class="title">
            <a href=".">WEB DASTURLASH</a>
          </h4>
          <p class="description">
            Web dasturlash asoslari kursimizda siz Javascript dasturlash tili va
            HTML5, CSS saytning ko'rinishini tayyorlashni o'rganasiz. Bizda
            yana, Python dasturlash tili, Django va ReactJS frameworklar
            bo'yicha ham kurslar mavjud.
          </p>
        </div>
      </div>

      <div class="col-lg-6">
        <div class="box wow fadeInRight">
          <div class="icon">
            <i class="fa fa-pencil-square-o" />
          </div>
          <h4 class="title">
            <a href=".">GRAFIK DIZAYNI</a>
          </h4>
          <p class="description">
            Grafik dizayni kurslarimizda Adobe Illustrator, Photoshop
            dasturlarida ishlash va grafik dizayni asoslari o'rgatiladi. Kurs
            davomida logotip'lar, korxonalar uchun style va brandbook'lar
            tayyorlashni o'rganishingiz mumkin.
          </p>
        </div>
      </div>

      <div class="col-lg-6">
        <div class="box wow fadeInLeft" data-wow-delay="0.2s">
          <div class="icon">
            <i class="fa fa-file-video-o" />
          </div>
          <h4 class="title">
            <a href=".">VIDEO MONTAJ</a>
          </h4>
          <p class="description">
            Kursimiz davomida siz video'lar bilan ishlashni, ularni After
            Effects va PremierPro dasturlari orqali tahrir qilishni, effect'lar
            berish, kichik reklama roliklari tayyorlash, ovozli va grafikalardan
            foydalanib qisqa roliklar tayyorlashni o'rganasiz.
          </p>
        </div>
      </div>

      <div class="col-lg-6">
        <div class="box wow fadeInRight" data-wow-delay="0.2s">
          <div class="icon">
            <i class="fa fa-file-text-o" />
          </div>
          <h4 class="title">
            <a href=".">SMM VA KOPIRAYTING</a>
          </h4>
          <p class="description">
            Kursimiz davomida ma'lum bir brendni bugungi kunda aktual bo'lgan
            ijtimoiy tarmoqlar orqali reklama qilish va brendning ommaviyligini
            ta'minlash bilan birga, o'sha brendga hos bo'lgan mahsulotlar
            sotuvini ta'minlash kabi ko'nikmalarni o'rganasiz.
          </p>
        </div>
      </div>

      <div class="col-lg-6">
        <div class="box wow fadeInRight" data-wow-delay="0.2s">
          <div class="icon">
            <i class="fa fa-cube" />
          </div>
          <h4 class="title">
            <a href=".">ARXITEKTURA</a>
          </h4>
          <p class="description">
            AutoCAD dasturidan foydalanish va va turli sohalarda 2 yoki 3
            o'lchamli loyihalar tayyorlashni kurs davomida o'raganasiz.
          </p>
        </div>
      </div>

      <div class="col-lg-6">
        <div class="box wow fadeInRight" data-wow-delay="0.2s">
          <div class="icon">
            <i class="fa fa-file-word-o" />
          </div>
          <h4 class="title">
            <a href=".">OFFICE DASTURLARI</a>
          </h4>
          <p class="description">
            Kursimiz davomida, dunyo standardiga aylangan, MS OFFICE dasturlari:
            Word, Excel, PowerPoint kabi dasturlarni mukammal o'rganasiz.
          </p>
        </div>
      </div>

      <div class="col-lg-6">
        <div class="box wow fadeInRight" data-wow-delay="0.2s">
          <div class="icon">
            <i class="fa fa-language" />
          </div>
          <h4 class="title">
            <a href=".">IELTS VA INGLIZ TILI</a>
          </h4>
          <p class="description">
            IELTS va Ingliz tili abituriyent kurslari. Haftada 4 kunlik dars.
            Maxsus mock'lar va speaking club'larni o'z ichiga oladi.
            O'qituvchilar Ahmadjon Zokirov 8.0, Jamshid Zokirov 7.5. Yana
            qo'shimchasiga 7/24 online va offline maslahat va ko'mak.
          </p>
        </div>
      </div>

      <div class="col-lg-6">
        <div class="box wow fadeInRight" data-wow-delay="0.2s">
          <div class="icon">
            <i class="fa fa-language" />
          </div>
          <h4 class="title">
            <a href=".">Bolalar uchun dasturlash</a>
          </h4>
          <p class="description">
            4-9 sinflarga mo'ljallangan Scratch dasturi yordamida siz qiziqarli
            o'yinlar va animatsiyalar yaratishni o'rganasiz! Shu bilan sizda
            mantiqiy fikrlash qobilyati rivojlanib, dasturlash olamiga kirib
            kelishingiz oson va maroqli kechadi!
          </p>
        </div>
      </div>

    </div>

  </div>
</section>
<!-- #cources -->

<!--==========================
      Our Portfolio Section
    ============================-->
<section id="portfolio" class="wow fadeInUp">
  <div class="container">
    <div class="section-header">
      <h2>Media</h2>
      <p>Foto lavhalar</p>
    </div>
  </div>

  <div class="container-fluid">
    <div class="row no-gutters">

      <div class="col-lg-3 col-md-4">
        <div class="portfolio-item wow fadeInUp">
          <a href="img/portfolio/1.jpg" class="portfolio-popup">
            <img src="img/portfolio/1.jpg" alt="" />
            <div class="portfolio-overlay">
              <div class="portfolio-info" />
            </div>
          </a>
        </div>
      </div>

      <div class="col-lg-3 col-md-4">
        <div class="portfolio-item wow fadeInUp">
          <a href="img/portfolio/2.jpg" class="portfolio-popup">
            <img src="img/portfolio/2.jpg" alt="" />
            <div class="portfolio-overlay">
              <div class="portfolio-info" />
            </div>
          </a>
        </div>
      </div>

      <div class="col-lg-3 col-md-4">
        <div class="portfolio-item wow fadeInUp">
          <a href="img/portfolio/3.jpg" class="portfolio-popup">
            <img src="img/portfolio/3.jpg" alt="" />
            <div class="portfolio-overlay">
              <div class="portfolio-info" />
            </div>
          </a>
        </div>
      </div>

      <div class="col-lg-3 col-md-4">
        <div class="portfolio-item wow fadeInUp">
          <a href="img/portfolio/4.jpg" class="portfolio-popup">
            <img src="img/portfolio/4.jpg" alt="" />
            <div class="portfolio-overlay">
              <div class="portfolio-info" />
            </div>
          </a>
        </div>
      </div>

    </div>

  </div>
</section>
<!-- #portfolio -->

<!--==========================
      Call To Action Section
    ============================-->
<section id="call-to-action" class="wow fadeInUp">
  <div class="container">
    <div class="row">
      <div class="col-lg-9 text-center text-lg-left">
        <h3 class="cta-title">
          Hoziroq kurslarimizga yoziling va zamonaviy kasbga ega bo'ling
        </h3>
        <p class="cta-text">
          Birinchi darsda qatnashish bepul. Birinchi darsga kirib, dars sifatini
          kuzatib kurslarga yozilishingiz mumkin. Ro'yxatdan o'tish talab
          etiladi.
        </p>
      </div>
      <div class="col-lg-3 cta-btn-container text-center">
        <a class="cta-btn align-middle" href=".">Ro'yxatdan o'tish</a>
      </div>
    </div>

  </div>
</section>
<!-- #call-to-action -->

<!--==========================
      Our Team Section
    ============================-->
<section id="team" class="wow fadeInUp">
  <div class="container">
    <div class="section-header">
      <h2>Bizning jamoa</h2>
    </div>
    <div class="row">
      <div class="col-lg-3 col-md-6">
        <div class="member">
          <div class="pic">
            <img src="img/team-1.jpg" alt="" />
          </div>
          <div class="details">
            <h4>Sardor Isroilov</h4>
            <span>Bosh ijrochi direktor</span>
            <div class="social">
              <a href="https://t.me/teamit_uz">
                <i class="fa fa-telegram" />
              </a>
              <a href="https://www.facebook.com/sardor.isroilov1">
                <i class="fa fa-facebook" />
              </a>
              <!-- <a href="."><i class="fa fa-google-plus"></i></a> -->
              <!-- <a href="."><i class="fa fa-linkedin"></i></a> -->
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-3 col-md-6">
        <div class="member">
          <div class="pic">
            <img src="img/team-2.jpg" alt="" />
          </div>
          <div class="details">
            <h4>Azamatbek</h4>
            <span>Katta dasturchi</span>
            <div class="social">
              <a href="https://t.me/azmtbek">
                <i class="fa fa-telegram" />
              </a>
              <a href="https://www.facebook.com/azamatbek.mamarajabov">
                <i class="fa fa-facebook" />
              </a>
              <!-- <a href="."><i class="fa fa-google-plus"></i></a>
                  <a href="."><i class="fa fa-linkedin"></i></a> -->
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-3 col-md-6">
        <div class="member">
          <div class="pic">
            <img src="img/team-3.jpg" alt="" />
          </div>
          <div class="details">
            <h4>Javlon Ravshanov</h4>
            <span>Grafik dizayneri</span>
            <div class="social">
              <a href="https://t.me/javlonravshanov">
                <i class="fa fa-telegram" />
              </a>
              <a href="https://t.me/JR_portfolio">
                <i class="fa fa-telegram" />
              </a>
              <!-- <a href="."><i class="fa fa-facebook"></i></a>
                  <a href="."><i class="fa fa-linkedin"></i></a> -->
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-3 col-md-6">
        <div class="member">
          <div class="pic">
            <img src="img/team-4.jpg" alt="" />
          </div>
          <div class="details">
            <h4>Farrux Abrorkulov</h4>
            <span>SMM menejeri</span>
            <div class="social">
              <a href="https://t.me/bek_aliboyevich">
                <i class="fa fa-telegram" />
              </a>
              <!-- <a href="."><i class="fa fa-facebook"></i></a> -->
              <!-- <a href="."><i class="fa fa-linkedin"></i></a> -->
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-3 col-md-6">
        <div class="member">
          <div class="pic">
            <img src="img/team-5.jpg" alt="" />
          </div>
          <div class="details">
            <h4>Javohir Mahkamov</h4>
            <span>Grafik dizayneri</span>
            <div class="social">
              <a href="https://t.me/JavohirMahkamov">
                <i class="fa fa-telegram" />
              </a>
              <a href="https://www.facebook.com/Javohirbek.de">
                <i class="fa fa-facebook" />
              </a>
              <!-- <a href="."><i class="fa fa-linkedin"></i></a> -->
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-3 col-md-6">
        <div class="member">
          <div class="pic">
            <img src="img/team-6.jpg" alt="" />
          </div>
          <div class="details">
            <h4>Alimardon</h4>
            <span>"Motion" dizayneri</span>
            <div class="social">
              <a href="https://t.me/Real_tr1">
                <i class="fa fa-telegram" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-3 col-md-6">
        <div class="member">
          <div class="pic">
            <img src="img/team-7.jpg" alt="" />
          </div>
          <div class="details">
            <h4>Ahmadjon Zokirov</h4>
            <span>IELTS o'qituvchisi</span>
            <div class="social">
              <a href="https://t.me/Online_royxat_english">
                <i class="fa fa-telegram" />
              </a>
              <a
                href="https://www.facebook.com/groups/443392879018332/user/100035723953921/">
                <i class="fa fa-facebook" />
              </a>
              <!-- <a href="."><i class="fa fa-linkedin"></i></a> -->
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-3 col-md-6">
        <div class="member">
          <div class="pic">
            <img src="img/team-8.jpg" alt="" />
          </div>
          <div class="details">
            <h4>Jamshid Zokirov</h4>
            <span>IELTS o'qituvchisi</span>
            <div class="social">
              <a href="https://t.me/Online_royxat_english">
                <i class="fa fa-telegram" />
              </a>
              <!-- <a href="."><i class="fa fa-facebook"></i></a> -->
              <!-- <a href="."><i class="fa fa-linkedin"></i></a> -->
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
<!-- #team -->

<!--==========================
      Contact Section
    ============================-->
<section id="contact" class="wow fadeInUp">
  <div class="container">
    <div class="section-header">
      <h2>Bog'lanish</h2>
      <!-- <p>Sed tamen tempor magna labore dolore dolor sint tempor duis magna elit veniam aliqua esse amet veniam enim export quid quid veniam aliqua eram noster malis nulla duis fugiat culpa esse aute nulla ipsum velit export irure minim illum fore</p> -->
    </div>

    <div class="row contact-info">

      <div class="col-md-4">
        <div class="contact-address">
          <i class="ion-ios-location-outline" />
          <h3>Manzil</h3>
          <address>Jizzax sh. Sh.Rashidov shoh ko'chasi 43.</address>
          <address>Mo'ljal: Jizzax sh. Xalq banki ro'parasida</address>
        </div>
      </div>

      <div class="col-md-4">
        <div class="contact-phone">
          <i class="ion-ios-telephone-outline" />
          <h3>Telefon raqamlar</h3>
          <p>
            <a href="tel:+998905161080">+99890 516-10-80</a>
          </p>
          <p>
            <a href="tel:+998933008607">+99893 300-86-07</a>
          </p>
        </div>
      </div>

      <div class="col-md-4">
        <div class="contact-email">
          <i class="ion-ios-email-outline" />
          <h3>Telegram</h3>
          <p>
            <a href="https://t.me/teamit_uz">@teamit_uz</a>
          </p>
          <p>
            <a href="https://t.me/Online_royxat_english">
              @Online_royxat_english
            </a>
          </p>

        </div>
      </div>

    </div>
  </div>

</section>
<!-- #contact -->
