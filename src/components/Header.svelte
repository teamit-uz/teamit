<script>
  export let segment;
  segment = segment;
</script>

<style>
  /*--------------------------------------------------------------
# Top Bar
--------------------------------------------------------------*/

  #topbar {
    background: #fff;
    padding: 10px 0;
    border-bottom: 1px solid #eee;
    font-size: 14px;
  }

  #topbar .contact-info a {
    line-height: 1;
    color: #555;
  }

  #topbar .contact-info a:hover {
    color: #50d8af;
  }

  #topbar .contact-info i {
    color: #50d8af;
    padding: 4px;
  }

  #topbar .contact-info .fa-phone {
    padding-left: 20px;
    margin-left: 20px;
    border-left: 1px solid #e9e9e9;
  }

  #topbar .social-links a {
    color: #555;
    padding: 4px 12px;
    display: inline-block;
    line-height: 1px;
    border-left: 1px solid #e9e9e9;
  }

  #topbar .social-links a:hover {
    color: #50d8af;
  }

  #topbar .social-links a:first-child {
    border-left: 0;
  }

/*--------------------------------------------------------------
# Header
--------------------------------------------------------------*/

#header {
  padding: 20px 0;
  height: 84px;
  transition: all 0.5s;
  z-index: 997;
  background: #fff;
  box-shadow: 0px 6px 9px 0px rgba(0, 0, 0, 0.06);
}


#header #logo h1 a {
  color: #0c2e8a;
  line-height: 1;
  display: inline-block;
}


#header #logo img {
  padding: 0;
  margin: 0;
}

</style>

<!--==========================
    Top Bar
  ============================-->
<section id="topbar" class="d-none d-lg-block">
  <div class="container clearfix">
    <div class="contact-info float-left">
      <i class="fa fa-telegram" />
      <a href="https://t.me/teamit_uz">@teamit_uz</a>
      <i class="fa fa-phone" />
      +99890 516 10 80
    </div>
    <div class="social-links float-right">
      <a href="https://www.facebook.com/Teamit.uz/" class="facebook">
        <i class="fa fa-facebook" />
      </a>
      <a href="https://www.instagram.com/teamit.uz/" class="instagram">
        <i class="fa fa-instagram" />
      </a>
      <a
        href="https://www.linkedin.com/company/teamit-academy/"
        class="linkedin">
        <i class="fa fa-linkedin" />
      </a>
    </div>
  </div>
</section>

<!--==========================
    Header
  ============================-->
<header id="header">
  <div class="container">

    <div id="logo" class="pull-left">
      <!-- <h1><a href="#body" class="scrollto">Team<span>it</span></a></h1> -->
      <!-- Uncomment below if you prefer to use an image logo -->
      <a href="#body">
        <img src="img/teamit_logo.png" alt="" title="" />
      </a>
    </div>

    <nav id="nav-menu-container">
      <ul class="nav-menu">
        <li class="menu-active">
          <a href="#body">Asosiy</a>
        </li>
        <li>
          <a href="#about">Biz haqimizda</a>
        </li>
        <li class="menu-has-children">
          <a href="#services">Kurslar</a>
          <ul>
            <li>
              <a href="#services">Dasturlash</a>
            </li>
            <li>
              <a href="#services">Grafik dizayni</a>
            </li>
            <li>
              <a href="#services">SMM va kopirayting</a>
            </li>
            <li>
              <a href="#services">3D loyihalash</a>
            </li>
            <li>
              <a href="#services">Ofis dasturlari</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#portfolio">Media</a>
        </li>
        <li>
          <a href="#team">Jamoa</a>
        </li>
        <li>
          <a href="#contact">Aloqa</a>
        </li>
      </ul>
    </nav>
    <!-- #nav-menu-container -->
  </div>
</header>
<!-- #header -->
