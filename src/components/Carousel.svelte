<style>
  /*--------------------------------------------------------------
# Intro Section
--------------------------------------------------------------*/

  #intro {
    width: 100%;
    height: 60vh;
    position: relative;
    background: url("../img/intro-carousel/1.jpg") no-repeat;
    background-size: cover;
  }

  #intro .intro-content {
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    text-align: center;
  }

  #intro .intro-content h2 {
    color: #0c2e8a;
    margin-bottom: 30px;
    font-size: 64px;
    font-weight: 700;
  }

  #intro .intro-content h2 span {
    color: #50d8af;
    text-decoration: underline;
  }

  #intro .intro-content .btn-get-started,
  #intro .intro-content .btn-projects {
    font-family: "Raleway", sans-serif;
    font-size: 15px;
    font-weight: bold;
    letter-spacing: 1px;
    display: inline-block;
    padding: 10px 32px;
    border-radius: 2px;
    transition: 0.5s;
    margin: 10px;
    color: #fff;
  }

  #intro .intro-content .btn-get-started {
    background: #0c2e8a;
    border: 2px solid #0c2e8a;
  }

  #intro .intro-content .btn-get-started:hover {
    background: none;
    color: #0c2e8a;
  }

  #intro .intro-content .btn-projects {
    background: #50d8af;
    border: 2px solid #50d8af;
  }

  #intro .intro-content .btn-projects:hover {
    background: none;
    color: #50d8af;
  }

  #intro #intro-carousel {
    z-index: 8;
  }

  #intro #intro-carousel::before {
    content: "";
    background-color: rgba(255, 255, 255, 0.7);
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 7;
  }

  #intro #intro-carousel .item {
    width: 100%;
    height: 60vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    transition-property: opacity;
  }
</style>

<!--==========================
    Intro Section
  ============================-->

<section id="intro">

  <div class="intro-content">
    <h2>
      Zamonaviy kasblarni
      <br />
      <span>biz</span>
      bilan egallang!
    </h2>
    <div>
      <a href="#about" class="btn-get-started scrollto">Boshlang</a>
      <a href="#portfolio" class="btn-projects scrollto">Bizning loyihalar</a>
    </div>
  </div>

  <div id="intro-carousel" class="owl-carousel">
    <div
      class="item"
      style="background-image: url('img/intro-carousel/1.jpg');" />
    <div
      class="item"
      style="background-image: url('img/intro-carousel/2.jpg');" />
    <div
      class="item"
      style="background-image: url('img/intro-carousel/3.jpg');" />
    <div
      class="item"
      style="background-image: url('img/intro-carousel/4.jpg');" />
    <div
      class="item"
      style="background-image: url('img/intro-carousel/5.jpg');" />
  </div>

</section>
<!-- #intro -->
