<template>
  <div>
         <!--     < class="hero-slider" v-for="item in sliders" :key="item.id" >
        <div class="single-slider"     :style="{ backgroundImage: 'url(\'' + item.photo[0] + '\')' }">   -->

 <!-- 
  <v-carousel hide-delimiters>
    <v-carousel-item
      v-for="(item,i) in sliders"
      :key="i"
      :src="item.photo[0]"
    ></v-carousel-item>
  </v-carousel>
-->



    <!-- Slider Area -->
    <section class="slider">
  <div class="hero-slider  " >


        <div class="single-slider"     :style="{ backgroundImage: 'url(img/sliders/slider1.jpg)' }">

          <div class="container">
            <div class="row">
              <div class="col-lg-7">
                <div class="text">
                  <h1>
                    We Provide <span>Security</span> Services That You Can
                    <span>Trust!</span>
                  </h1>
                  <p>
                  vdsdfvsdfvsdfvda advcdavda adcvdav
                  </p>
                  <div class="button">
                    <nuxt-link to="/search/agent" class="btn">
                      <i class="fa fa-search"></i> {{ $t("Find An Agent") }}
                    </nuxt-link>
                    <a href="#" class="btn primary">{{ $t("About Us") }}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- End Single Slider -->

        <div class="single-slider"     :style="{ backgroundImage: 'url(img/sliders/slider2.jpg)' }">

          <div class="container">
            <div class="row">
              <div class="col-lg-7">
                <div class="text">
                  <h1>
                    We Provide <span>Security</span> Services That You Can
                    <span>Trust!</span>
                  </h1>
                  <p>
                  vdsdfvsdfvsdfvda advcdavda adcvdav
                  </p>
                  <div class="button">
                    <nuxt-link to="/search/agent" class="btn">
                      <i class="fa fa-search  editicon"></i> {{ $t("Find An Agent") }}
                    </nuxt-link>
                    <a href="#" class="btn primary">{{ $t("About Us") }}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- End Single Slider -->

        <div class="single-slider"     :style="{ backgroundImage: 'url(img/sliders/slider3.jpg)' }">

          <div class="container">
            <div class="row">
              <div class="col-lg-7">
                <div class="text">
                  <h1>
                    {{ $t("We Provide") }} <span>{{ $t("Security") }}</span> {{ $t("Services That You Can") }}
                    <span>{{ $t("Trust") }}!</span>
                  </h1>
                  <p>
                  vdsdfvsdfvsdfvda advcdavda adcvdav
                  </p>
                  <div class="button">
                    <nuxt-link to="/search/agent" class="btn">
                      <i class="fa fa-search  editicon"></i> {{ $t("Find An Agent") }}
                    </nuxt-link>
                    <a href="#" class="btn primary">{{ $t("About Us") }}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- End Single Slider -->

      </div>
    </section>
    <!--/ End Slider Area -->

    <app-textlockup />
    <app-sales-boxes />
    <app-textlockup>
      <template v-slot:img>
        <img src="/bag.jpg" alt="bag" />
      </template>
      <template v-slot:new>50%</template>
      <template v-slot:sale>{{ $t("Storewide Sale") }}</template>
      <template v-slot:collection>{{ $t("Summer") }}</template>
      <template v-slot:details>{{ $t("All accessories") }}</template>
    </app-textlockup>
    <app-featured-products />
  </div>
</template>

<script>
import AppTextlockup from "~/components/AppTextlockup.vue";
import AppSalesBoxes from "~/components/AppSalesBoxes.vue";
import AppFeaturedProducts from "~/components/AppFeaturedProducts.vue";
import ToolsjqueryMixin from "~/mixins/ToolsjqueryMixin";
import ToolsmenuNavMixin from "~/mixins/ToolsmenuNavMixin";
export default {
    data() {
    return {

    };
  },
  mixins: [ToolsjqueryMixin, ToolsmenuNavMixin],
  components: {
    AppTextlockup,
    AppSalesBoxes,
    AppFeaturedProducts
  },


  methods: {

  },

  created(){      

  },

  mounted: function () {


    /* =====================================
Template Name: 	Mediplus.
Author Name: Naimur Rahman
Website: http://wpthemesgrid.com/
Description: Mediplus - Doctor HTML Template.
Version:	1.1
========================================*/
    /*=======================================
[Start Activation Code]
=========================================
* Sticky Header JS
* Search JS
* Mobile Menu JS
* Hero Slider JS
* Testimonial Slider JS
* Portfolio Slider JS
* Clients Slider JS
* Single Portfolio Slider JS
* Accordion JS
* Nice Select JS
* Date Picker JS
* Counter Up JS
* Checkbox JS
* Right Bar JS
* Video Popup JS
* Wow JS
* Scroll Up JS
* Animate Scroll JS
* Stellar JS
* Google Maps JS
* Preloader JS
=========================================
[End Activation Code]
=========================================*/
    (function ($) {
      "use strict";
      $(document).on("ready", function () {
        jQuery(window).on("scroll", function () {
          if ($(this).scrollTop() > 200) {
            $("#header .header-inner").addClass("sticky");
          } else {
            $("#header .header-inner").removeClass("sticky");
          }
        });

        /*====================================
    Sticky Header JS
  ======================================*/
        jQuery(window).on("scroll", function () {
          if ($(this).scrollTop() > 100) {
            $(".header").addClass("sticky");
          } else {
            $(".header").removeClass("sticky");
          }
        });

        $(".pro-features .get-pro").on("click", function () {
          $(".pro-features").toggleClass("active");
        });

        /*====================================
    Search JS
  ======================================*/
        $(".search a").on("click", function () {
          $(".search-top").toggleClass("active");
        });

        /*====================================
    Mobile Menu
  ======================================*/
        $(".menu").slicknav({
          prependTo: ".mobile-nav",
          duration: 300,
          closeOnClick: true,
        });

        /*===============================
    Hero Slider JS   here    wiwo
  =================================*/
        $(".hero-slider").owlCarousel({
          loop: true,
          autoplay: true,
          smartSpeed: 500,
          autoplayTimeout: 3500,
          singleItem: true,
          autoplayHoverPause: true,
          items: 1,
          nav: true,
          navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>',
          ],
          dots: false,
        });

        /*===============================
    Testimonial Slider JS
  =================================*/
        $(".testimonial-slider").owlCarousel({
          items: 3,
          autoplay: true,
          autoplayTimeout: 4500,
          smartSpeed: 300,
          autoplayHoverPause: true,
          loop: true,
          merge: true,
          nav: false,
          dots: true,
          responsive: {
            1: {
              items: 1,
            },
            300: {
              items: 1,
            },
            480: {
              items: 1,
            },
            768: {
              items: 2,
            },
            1170: {
              items: 3,
            },
          },
        });

        /*===============================
    Portfolio Slider JS
  =================================*/
        $(".portfolio-slider").owlCarousel({
          autoplay: true,
          autoplayTimeout: 4000,
          margin: 15,
          smartSpeed: 300,
          autoplayHoverPause: true,
          loop: true,
          nav: true,
          dots: false,
          responsive: {
            300: {
              items: 1,
            },
            480: {
              items: 2,
            },
            768: {
              items: 2,
            },
            1170: {
              items: 4,
            },
          },
        });

        /*=====================================
    Counter Up JS
  ======================================*/
        $(".counter").counterUp({
          delay: 20,
          time: 2000,
        });

        /*===============================
    Clients Slider JS
  =================================*/
        $(".clients-slider").owlCarousel({
          items: 5,
          autoplay: true,
          autoplayTimeout: 3500,
          margin: 15,
          smartSpeed: 400,
          autoplayHoverPause: true,
          loop: true,
          nav: false,
          dots: false,
          responsive: {
            300: {
              items: 1,
            },
            480: {
              items: 2,
            },
            768: {
              items: 3,
            },
            1170: {
              items: 5,
            },
          },
        });

        /*====================================
    Single Portfolio Slider JS
  ======================================*/
        $(".pf-details-slider").owlCarousel({
          items: 1,
          autoplay: false,
          autoplayTimeout: 5000,
          smartSpeed: 400,
          autoplayHoverPause: true,
          loop: true,
          merge: true,
          nav: true,
          dots: false,
          navText: [
            '<i class="icofont-rounded-left"></i>',
            '<i class="icofont-rounded-right"></i>',
          ],
        });

        /*===================
    Accordion JS
  =====================*/
        $(".accordion > li:eq(0) a").addClass("active").next().slideDown();
        $(".accordion a").on("click", function (j) {
          var dropDown = $(this).closest("li").find("p");
          $(this).closest(".accordion").find("p").not(dropDown).slideUp(300);
          if ($(this).hasClass("active")) {
            $(this).removeClass("active");
          } else {
            $(this).closest(".accordion").find("a.active").removeClass("active");
            $(this).addClass("active");
          }
          dropDown.stop(false, true).slideToggle(300);
          j.preventDefault();
        });

        /*====================================
    Nice Select JS
  ======================================*/
        $("select").niceSelect();

        /*===============================
    Checkbox JS
  =================================*/
        $('input[type="checkbox"]').change(function () {
          if ($(this).is(":checked")) {
            $(this).parent("label").addClass("checked");
          } else {
            $(this).parent("label").removeClass("checked");
          }
        });

        /*===============================
    Right Bar JS
  =================================*/
        $(".right-bar .bar").on("click", function () {
          $(".sidebar-menu").addClass("active");
        });
        $(".sidebar-menu .cross").on("click", function () {
          $(".sidebar-menu").removeClass("active");
        });

        /*=====================
    Video Popup JS
  =======================*/
        $(".video-popup").magnificPopup({
          type: "video",
        });

        /*===================
    Scroll Up JS
  =====================*/
        $.scrollUp({
          scrollText: '<span><i class="fa fa-angle-up"></i></span>',
          easingType: "easeInOutExpo",
          scrollSpeed: 900,
          animation: "fade",
        });

        /*=======================
    Animate Scroll JS
  =========================*/
        $(".scroll").on("click", function (e) {
          var anchor = $(this);
          $("html, body")
            .stop()
            .animate(
              {
                scrollTop: $(anchor.attr("href")).offset().top - 100,
              },
              1000
            );
          e.preventDefault();
        });
      });

      /*====================
  Preloader JS
======================*/
      $(window).on("load", function () {
        $(".preloader").addClass("preloader-deactivate");
      });
    })(jQuery);

    $(".preloader").addClass("preloader-deactivate");
  },
};


</script>

<style scoped lang="scss">
.test {
  margin: 3vh;
}

main {
  width: 75vw;
}


.slider .owl-carousel .owl-nav div {
  height: 50px;
  width: 50px;
  line-height: 50px;
  text-align: center;
  background: #38308b;
  color: #fff;
  font-size: 26px;
  position: absolute;
  margin: 0;
  transition: all 0.4s ease;
  padding: 0;
  border-radius: 50%;
}

.owl-theme .owl-nav [class*="owl-"] {
  color: #fff;
  font-size: 14px;
  margin: 5px;
  padding: 4px 7px;
  background: #d6d6d6;
  display: inline-block;
  cursor: pointer;
  border-radius: 3px;
}

.owl-carousel .owl-nav .owl-prev,
.owl-carousel .owl-nav .owl-next,
.owl-carousel .owl-dot {
  cursor: pointer;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}


.card-image:hover {
  cursor: pointer;
  opacity: 0.9;
}
.price-box {
  text-align: right;
  .price {
    color: gray;
    font-size: 16px;
    text-decoration: line-through;
  }
  .disc-price {
    font-size: 21px;
    font-weight: bold;
  }
}

.hero-body {
  position: relative;
}
.hero-img {
  opacity: 0.8;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
.user-avatar {
  display: inline-block;
}
.is-black {
  background-color: black;
}
.title {
  font-weight: bold;
  font-size: 45px;
}
.subtitle {
  /*font-weight: bold;*/
  font-size: 25px;
}
.author-name {
  font-size: 20px;
  font-weight: bold;
}
// hero

// Home page
.links {
  padding-top: 15px;
}

#my-strictly-unique-vue-upload-multiple-image {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.avatarpics {
  margin-top: -70px;
  padding-bottom: 20px;
}
.avatarpics img {
  height: 288px;
  width: 158px;
  margin-top: 88px;
  padding: 5px;
  background: #fff;
  border-radius: 10%;
  -webkit-box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
}

.columns {
  margin-left: 40%;
  /* margin-right: -0.75rem; */
  margin-top: -0.75rem;
}

.slider1 {
  background-image: url("/img/slider.jpg");
}
.slider2 {
  background-image: url("/img/slider2.jpg");
}
.slider3 {
  background-image: url("/img/slider3.jpg");
}
.imagescontainer {
  margin-left: 18%;
}
/***********  sttepper end **********************/
@media (max-width: 767px) {
  .columns {
    margin-left: 20%;
    /* margin-right: -0.75rem; */
    margin-top: -0.75rem;
  }
}
/***********  sttepper end **********************/
@media (max-width: 600px) {
  .columns {
    margin-left: 0%;
    /* margin-right: -0.75rem; */
    margin-top: -0.75rem;
  }
}

.icon-arrow {
  mask: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 284.929 284.929'><path d='M282.082,76.511l-14.274-14.273c-1.902-1.906-4.093-2.856-6.57-2.856c-2.471,0-4.661,0.95-6.563,2.856L142.466,174.441		L30.262,62.241c-1.903-1.906-4.093-2.856-6.567-2.856c-2.475,0-4.665,0.95-6.567,2.856L2.856,76.515C0.95,78.417,0,80.607,0,83.082c0,2.473,0.953,4.663,2.856,6.565l133.043,133.046c1.902,1.903,4.093,2.854,6.567,2.854s4.661-0.951,6.562-2.854L282.082,89.647c1.902-1.903,2.847-4.093,2.847-6.565C284.929,80.607,283.984,78.417,282.082,76.511z'/></svg>");
}
i {
  vertical-align: middle;
  display: inline-block;
  background-repeat: no-repeat;
}

html,
body {
  margin: 0;
  width: 100%;
  height: 100%;
  font-size: 14px;
  font-family: "Roboto", sans-serif;
}
* {
  box-sizing: border-box;
}
body {
  background-color: #fafbfc;
  padding-top: 113px;
  overflow-x: hidden;
  &.display_menu {
    overflow-y: hidden;
  }
}
ul {
  padding: 0;
  margin: 0;
}
li {
  list-style: none;
}
.wrap {
  max-width: 1024px;
  min-width: 320px;
}
header {
  display: flex;
  z-index: 1;
  padding: 10px 0;
  background-color: #ffffff;
  position: fixed;
  width: 100%;
  top: 0;
  justify-content: center;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  transition: 0.33s;
}
header .wrap {
  padding: 0 2%;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}
header img {
  width: 100px;
}
header #menu {
  display: flex;
  flex-direction: row;
}
header #menu li {
  position: relative;
  user-select: none;
  margin-left: 20px;
  i {
    width: 12px;
    height: 12px;
    background-color: #3e3a37;
  }
  a {
    color: #3e3a37;
    cursor: pointer;
    font-size: 1.15em;
    border: none;
    border-bottom: 2px solid #ffffff;
    transition: 0.15s;
    background: none;
    &:hover {
      border-bottom-color: #41b883;
      color: #41b883;
      i {
        background-color: #41b883;
      }
    }
  }
}
header .drop_menu {
  position: absolute;
  display: block;
  top: 149%;
  transform: scaleY(0);
  width: auto;
  transform-origin: top;
  background-color: #ffffff;
  transition: 0.25s;
  padding-bottom: 10px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  a {
    margin-left: 20px;
    display: block;
    transition: 0.45s;
    opacity: 0;
    margin-right: 20px;
    padding: 10px 0 0 0;
  }
}

header .drop_menu.display {
  transform: scaleY(1);
  a {
    opacity: 1;
  }
}
header #hamburger {
  cursor: pointer;
  border-radius: 50%;
  position: absolute;
  left: 3%;
  top: 30px;
  display: none;
  transform: translateY(-50%);
}
header #hamburger span {
  height: 2px;
  margin-top: 5px;
  margin-bottom: 5px;
  background-color: #3e3a37;
  display: block;
  transition: 0.33s;
  &:nth-child(1) {
    width: 12px;
  }
  &:nth-child(2) {
    width: 24px;
  }
  &:nth-child(3) {
    width: 12px;
  }
}
.display_menu header #hamburger {
  span:nth-child(1) {
    transform: rotate(45deg) translate(2px, 1px);
  }
  span:nth-child(2) {
    transform: rotate(-45deg);
  }
  span:nth-child(3) {
    transform: rotate(45deg) translate(6px, -9px);
  }
}
#background {
  content: "";
  display: block;
  width: 100vw;
  height: 200vh;
  padding: 5%;
  background-color: #41b883;
  h3 {
    margin: 0;
    margin-bottom: 1%;
    font-size: 1.5em;
    text-align: center;
    color: #ffffff;
    i {
      width: 13px;
      height: 20px;
      background-color: #ffffff;
    }
  }
  button {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
    padding: 5px 10px;
    font-size: 1.3em;
    border: none;
    background-color: #435466;
    color: #ffffff;
  }
}
#loader {
  display: block;
  width: 50px;
  height: 50px;
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 3;
  margin-left: -25px;
  margin-top: -25px;
  animation: spin 1s infinite linear;
  span {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    border-width: 0px 0px 10px 10px;
    border-style: solid;
    border-color: transparent;
    &:nth-child(0) {
      border-left-color: #41b883;
    }
    &:nth-child(1) {
      transform: rotate(-40deg);
      border-left-color: #41b883;
    }
    &:nth-child(2) {
      transform: rotate(-80deg);
      border-left-color: #41b883;
    }
    &:nth-child(3) {
      transform: rotate(-130deg);
      border-left-color: #435466;
    }
    &:nth-child(4) {
      transform: rotate(-170deg);
      border-left-color: #435466;
    }
    &:nth-child(5) {
      transform: rotate(-210deg);
      border-left-color: #435466;
    }
    &:nth-child(6) {
      transform: rotate(-250deg);
      border-left-color: #3e3a37;
    }
    &:nth-child(7) {
      transform: rotate(-280deg);
      border-left-color: #3e3a37;
    }
    &:nth-child(8) {
      transform: rotate(-320deg);
      border-left-color: #3e3a37;
    }
    &:nth-child(9) {
      transform: rotate(-360deg);
      border-left-color: #41b883;
    }
  }
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
}
#overlay {
  display: block;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  background-color: #3e3a37;
  opacity: 0.5;
}
@media screen and (max-width: 660px) {
  body {
    padding-top: 70px;
  }
  header .wrap {
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0;
  }
  header img {
    width: 50px;
  }
  header #hamburger {
    display: block;
  }
  header #menu {
    width: 100%;
    display: block;
    height: 0;
    transform-origin: 50% 0;
    transition: 0.33s ease;
    flex-direction: column;
  }
  .display_menu header #menu {
    height: calc(100vh - 64px);
    li {
      height: calc((100vh - 113px) / 8);
      border-bottom: 1px solid #dad9d7;
      transition: 0.25s ease;
      opacity: 1;
      display: block;
      a {
      }
    }
  }
  header #menu li {
    height: 0;
    opacity: 0;
    margin-left: 0;
    transition: 0.25s ease;
    a {
      left: 0;
      line-height: calc((100vh - 113px) / 8);
      padding-left: 20px;
      border: none;
      height: 100%;
      width: 100%;
      display: block;
      &:hover {
        color: #ffffff;
        background-color: #41b883;
        i {
          background-color: #ffffff;
        }
      }
    }
    i {
      position: absolute;
      right: 20px;
      top: 50%;
      transform: translateY(-50%);
      background-color: #3e3a37;
    }
  }
  header .drop_menu {
    top: calc((100vh - 113px) / 8);
    box-shadow: none;
    left: 0;
    padding-bottom: 0;
    width: 100%;
    a {
      width: 100%;
      padding: 0 !important;
      padding-left: 40px !important;
      margin: 0;
      border-bottom: 1px solid #dad9d7 !important;
    }
  }
}
@media screen and(max-width: 660px) and(max-height: 500px) {
  .display_menu header {
    max-height: 100vh;
    overflow-y: scroll;
  }
  .display_menu header #menu {
    li {
      height: calc((100vh - 113px) / 4);
    }
  }
  header #menu li {
    a {
      line-height: calc((100vh - 113px) / 4);
    }
  }
  header .drop_menu {
    top: calc((100vh - 113px) / 4);
  }
}
i {
  vertical-align: middle;
  display: inline-block;
  background-repeat: no-repeat;
}

/***** Responsive */
/* =====================================
Template Name: 	Mediplus.
Author Name: Naimur Rahman
Website: http://wpthemesgrid.com/
Description: Mediplus - Doctor HTML Template.
Version:	1.1
========================================*/
/* Tablet Screen */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  /* Header Sticky */
  .section {
    padding: 70px 0px;
  }
  .section-title {
    margin-bottom: 35px;
    padding: 0px 80px;
  }
  .section-title h2 {
    font-size: 25px;
    margin-bottom: 12px;
  }
  .section-title p {
    font-size: 13px;
  }
  .btn {
    padding: 11px 20px;
    font-weight: 400;
    font-size: 13px;
  }
  .breadcrumbs {
    padding: 60px 0;
  }
  .breadcrumbs h2 {
    font-size: 32px;
    font-weight: 600;
  }
  .breadcrumbs .bread-list {
    margin-top: 5px;
  }
  .breadcrumbs ul li a {
    font-size: 14px;
    font-weight: 400;
  }
  .pagination {
    margin: 30px 0 0 0;
  }
  #scrollUp {
    bottom: 55px;
  }
  .header .top-link li a {
    font-size: 13px;
  }
  .header .top-contact li a {
    font-size: 13px;
  }
  .header .top-contact li {
    display: inline-block;
    margin-right: 25px;
    color: #2c2d3f;
    font-size: 13px;
  }
  .header .header-inner .get-quote {
    margin-top: 12px;
    display: none;
    margin: 0;
  }
  .header .nav li a {
    font-size: 13px;
    font-weight: 500;
    padding: 20px 4px;
  }
  .header .nav li .dropdown {
    width: 200px;
    left: -20px;
    top: 65px;
  }
  .header .nav li .dropdown li a {
    padding: 10px 15px;
    font-size: 13px;
  }
  .header .search-form {
    top: 64px;
  }
  .header .search-form input {
    width: 260px;
    height: 45px;
    line-height: 45px;
  }
  .header .search-form button {
    height: 45px;
    line-height: 45px;
  }
  .header.style2 .single-widget {
    margin-right: 18px;
    padding-left: 36px;
  }
  .header.style2 .get-quote .btn {
    color: #fff;
    padding: 10px 18px;
    font-size: 12px;
  }
  .header.style2 .single-widget.button {
    margin: 0;
    padding: 0;
  }
  .header.style2 .single-widget h4 {
    font-size: 13px;
    font-weight: 500;
  }
  .header.style2 .single-widget p {
    margin-bottom: 0;
    text-transform: capitalize;
    font-size: 13px;
  }
  .header.style2 .single-widget i {
    top: 50%;
    height: 25px;
    width: 25px;
    line-height: 25px;
    font-size: 13px;
    margin-top: -12.5px;
  }
  .header.style2 .right-bar {
    padding-top: 15px;
  }
  .slider .single-slider {
    height: 380px;
  }
  .schedule {
    background: #fff;
    margin: 0;
    padding: 0;
    height: auto;
    padding: 70px 0;
    border-bottom: 1px solid #eee;
  }
  .schedule .schedule-inner {
    transform: none;
  }
  .schedule .single-schedule.last {
    margin-top: 30px;
  }
  .slider .single-slider {
    position: relative;
  }
  .slider .single-slider:before {
    position: absolute;
    content: "";
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background: #fff;
    opacity: 0.5;
  }
  .slider .single-slider h1 {
    font-size: 28px;
    font-weight: 600;
    line-height: 35px;
  }
  .slider .single-slider .text {
    margin-top: 80px;
  }
  .slider.index2 .single-slider .text {
    margin-top: 80px;
  }
  .slider .owl-carousel .owl-nav div {
    height: 40px;
    width: 40px;
    line-height: 40px;
    border-radius: 4px;
  }
  .Feautes.index2 {
    padding-top: 70px;
  }
  .Feautes .single-features::before {
    display: none;
  }
  .Feautes .single-features {
    text-align: center;
    position: relative;
    padding: 10px 155px;
    margin: 10px 0;
  }
  .fun-facts.section {
    padding: 70px 0;
  }
  .fun-facts .single-fun {
    margin: 20px 0;
  }
  .why-choose .choose-right {
    height: 350px;
    margin-top: 30px;
  }
  .services .single-service h4 {
    margin-bottom: 12px;
  }
  .services-details-img h2 {
    font-size: 24px;
  }
  .service-details-inner-left {
    height: 400px;
    margin-bottom: 30px;
  }
  .service-details-inner {
    width: 100%;
    margin: 0;
  }
  .service-details-inner h2 {
    font-size: 24px;
  }
  .appointment .appointment-image {
    margin-top: 20px;
  }
  .call-action .content {
    padding: 0;
    padding: 70px 0;
  }
  .call-action .content h2 {
    font-size: 28px;
    line-height: 40px;
  }
  .services .single-service {
    margin: 15px 0;
  }
  .testimonials {
    padding-bottom: 100px;
  }
  .testimonials .owl-dots {
    transform: translateX(-18%);
  }
  .departments .department-tab .nav li {
    margin-right: 30px;
  }
  .departments .department-tab .nav li a {
    color: #fff;
    margin-top: 0px;
    padding: 0 3px 12px 3px;
  }
  .departments .department-tab .nav li a i {
    font-size: 38px;
  }
  .departments .department-tab .nav li .first {
    padding-top: 6px;
    font-size: 14px;
  }
  .departments .department-tab .nav li .second {
    font-size: 13px;
    font-weight: 400;
    color: #868686;
    margin-top: 0px;
  }
  .departments .department-tab .tab-pane .department-left h3 {
    font-size: 22px;
    padding-bottom: 12px;
    margin-bottom: 20px;
  }
  .departments .department-tab .tab-pane .department-left .p1 {
    margin-bottom: 12px;
  }
  .departments .department-tab .tab-pane .department-left p {
    margin-bottom: 15px;
  }
  .departments .department-right {
    margin-top: 30px;
  }

  .departments .department-right img {
    height: 100%;
    width: 100%;
  }
  .appointment.single-page {
    padding: 70px 0;
  }
  .appointment.single-page .work-hour {
    margin-top: 30px;
  }
  .blog .single-news {
    margin: 15px 0;
  }
  .news-single .single-main {
    margin-top: 0;
  }
  .newsletter .subscribe-text {
    text-align: center;
    margin-bottom: 25px;
  }
  .newsletter .subscribe-form {
    text-align: center;
  }
  .contact-us #myMap {
    height: 400px;
  }
  .contact-us .contact-us-form h2 {
    font-size: 28px;
  }
  .contact-us .single-info {
    margin: 10px 0;
  }
  .about-image {
    height: 400px;
  }
  .about-content h2 {
    line-height: 32px;
    font-size: 25px;
  }
  .about-content {
    padding-bottom: 0;
  }
  .our-mission-content {
    margin-left: 50px;
    padding-top: 0px;
  }
  .our-mission-content h2 {
    line-height: 32px;
    font-size: 25px;
  }
  .our-mission-image {
    height: 400px;
  }
  .doctor-details-area .doctor-details-right {
    padding-left: 0;
    padding-top: 40px;
  }
  .doctor-details-item .doctor-name .name {
    font-size: 24px;
  }
  .doctor-details-item .doctor-name .deg {
    font-size: 19px;
    margin: 5px 0 5px 0;
  }
  .doctor-details-item .doctor-name .degree {
    font-size: 14px;
  }
  .login .login-left {
    height: 400px;
  }
  .register .register-left {
    height: 400px;
  }
  .pf-details .date ul li {
    margin-right: 25px;
    font-size: 13px;
  }
  .pf-details .body-text h3 {
    font-size: 24px;
    font-weight: 600;
    color: #333;
    margin-top: 30px;
  }
  .doctor-calendar-table table thead tr th {
    font-size: 14px;
  }
  .doctor-calendar-table table tbody tr td h3 {
    font-size: 14px;
  }
  .doctor-calendar-table table tbody tr td span.time {
    font-size: 14px;
  }
  .footer .single-footer {
    margin: 20px 0;
  }
  .footer .single-footer h2 {
    padding-bottom: 20px;
  }
  .footer .footer-top {
    padding: 65px 0px;
  }
}
/* Mobile Screen */
@media only screen and (max-width: 767px) {
  .header.sticky {
  }
  .header.sticky .header-bottom {
    position: absolute;
    z-index: 999;
    top: initial;
    left: 0;
    bottom: initial;
  }
  .header .header-inner {
    width: 100%;
    z-index: 333;
    position: absolute;
    position: relative;
    padding-bottom: 20px;
    background: #fff;
  }
  .slicknav_menu {
    display: block;
  }
  .slicknav_menu {
    display: block;
    background: transparent;
    padding: 0;
  }
  .slicknav_btn {
    background: transparent;
    padding: 0;
    margin-top: -30px;
  }
  .slicknav_menu .slicknav_icon-bar {
    box-shadow: none;
  }
  .slicknav_menu {
    display: block;
  }
  .slicknav_menu {
    display: block;
    background: transparent;
    padding: 0;
  }
  .slicknav_btn {
    background: transparent;
    padding: 0;
    margin-top: 28px;
  }
  .slicknav_menu .slicknav_icon-bar {
    box-shadow: none;
  }
  .slicknav_nav {
    clear: both;
    color: #2c2d3f;
    margin: 0;
    font-size: 0.875em;
    background: transparent;
  }
  .slicknav_nav li {
  }
  .slicknav_nav li a {
    color: #2c2d3f;
    transition: all 0.4s ease;
    background: none;
    padding: 4px 10px;
  }
  .slicknav_nav .slicknav_item a,
  .slicknav_nav .slicknav_parent-link a {
    padding: 0 10px;
    background: transparent;
  }
  .slicknav_nav li a i {
    display: none;
    margin: 0;
  }
  .slicknav_nav li:hover a {
    color: #38308b;
  }
  .slicknav_nav li .dropdown li a {
    color: #2c2d3f;
    background: transparent;
  }
  .slicknav_nav li .dropdown li a:hover {
    color: #38308b;
  }
  .slicknav_nav li .slicknav_item {
    background: transparent;
  }
  .slicknav_nav .slicknav_row,
  .slicknav_nav a {
    padding: 0;
    margin: 0;
    padding: 6px 0;
    font-weight: 400;
  }
  .slicknav_menu .slicknav_icon-bar {
    background-color: #38308b;
    box-shadow: none;
    text-shadow: none;
  }
  .slicknav_nav .slicknav_arrow {
    color: #2c2d3f;
  }
  .slicknav_nav li:hover .slicknav_arrow {
    color: #38308b;
  }
  .slicknav_menu .slicknav_icon-bar {
    display: block;
    width: 25px;
    height: 3px;
    -webkit-border-radius: 1px;
    -moz-border-radius: 1px;
    border-radius: 1px;
    -webkit-box-shadow: 0 1px 0 rgba(0, 0, 0, 0.25);
    -moz-box-shadow: 0 1px 0 rgba(0, 0, 0, 0.25);
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.25);
  }
  .header .main-menu {
    display: none;
  }
  .header .widget-main {
    float: right;
    display: none;
  }
  .header.style2 .slicknav_btn {
    margin-top: 18px;
  }
  .header .slicknav_nav {
    margin-top: 65px;
  }
  .header.style2 .slicknav_nav {
    margin-top: 60px;
  }
  .header.style2 .header-inner {
    display: none;
  }
  .header.style2 .main-menu {
    display: none;
  }
  .header .header-inner .get-quote {
    margin: 0;
    padding: 0;
  }
  .header .header-inner .get-quote .btn {
    color: #fff;
    display: none;
    margin: 0;
    padding: 0;
  }
  .section {
    padding: 50px 0px;
  }
  .section-title {
    margin-bottom: 30px;
    padding: 0px 20px;
  }
  .section-title h2 {
    font-size: 22px;
    margin-bottom: 10px;
  }
  .section-title p {
    font-size: 13px;
  }

  .breadcrumbs {
    padding: 60px 0;
  }
  .breadcrumbs h2 {
    font-size: 32px;
    font-weight: 600;
  }
  .breadcrumbs .bread-list {
    margin-top: 10px;
  }
  .breadcrumbs ul li {
    font-size: 14px;
    font-weight: 400;
  }
  .breadcrumbs ul li a {
    font-size: 14px;
    font-weight: 400;
  }
  .btn {
    padding: 11px 20px;
    font-weight: 400;
    font-size: 13px;
  }
  .header .top-link {
    float: none;
    text-align: center;
    margin-bottom: 10px;
  }
  .header .top-contact {
    float: none;
    text-align: center;
  }
  .slider .single-slider {
    height: 380px;
  }
  .schedule {
    background: #fff;
    margin: 0;
    padding: 0;
    height: auto;
    padding: 50px 0;
    border-bottom: 1px solid #eee;
  }
  .schedule .schedule-inner {
    transform: none;
  }
  .schedule .single-schedule {
    margin: 15px 0;
  }
  .slider .single-slider {
    position: relative;
  }
  .slider .single-slider:before {
    position: absolute;
    content: "";
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background: #fff;
    opacity: 0.5;
  }
  .slider .single-slider h1 {
    font-size: 28px;
    font-weight: 600;
    line-height: 35px;
  }
  .slider .single-slider .text {
    margin-top: 80px;
  }
  .slider.index2 .single-slider .text {
    margin-top: 80px;
  }
  .slider .owl-carousel .owl-nav div {
    height: 40px;
    width: 40px;
    line-height: 40px;
    border-radius: 4px;
  }
  .Feautes.index2 {
    padding-top: 50px;
  }
  .Feautes .single-features .signle-icon i {
    font-size: 42px;
    left: 50%;
    margin-left: -40px;
    height: 80px;
    width: 80px;
    line-height: 80px;
  }
  .Feautes .single-features::before {
    display: none;
  }
  .Feautes .single-features {
    text-align: center;
    position: relative;
    padding: 0px;
    margin: 15px 0;
  }
  .Feautes .single-features h3 {
    padding-top: 105px;
    font-size: 20px;
  }
  .fun-facts.section {
    padding: 70px 0;
  }
  .fun-facts .single-fun {
    margin: 0;
    margin: 15px 0;
    position: relative;
  }
  .fun-facts .single-fun {
    margin: 35px 0;
    padding-top: 60px;
    text-align: center;
  }
  .fun-facts .single-fun i {
    left: 50%;
    margin-left: -35px;
    top: 0;
    position: absolute;
  }
  .fun-facts .single-fun .content {
    padding: 0;
  }
  .why-choose .choose-right {
    height: 350px;
    margin-top: 30px;
  }
  .call-action .content {
    padding: 0;
    padding: 70px 0;
  }
  .call-action .content h2 {
    font-size: 28px;
    line-height: 40px;
  }
  .appointment .appointment-image {
    margin-top: 20px;
  }
  .services .single-service {
    margin: 20px 0;
  }
  .services .single-service h4 {
    margin-bottom: 15px;
  }
  .services .single-service h4 {
    margin-bottom: 10px;
  }
  .services-details-img h2 {
    font-size: 22px;
  }
  .service-details-inner-left {
    height: 300px;
    margin-bottom: 20px;
  }
  .service-details-inner {
    width: 100%;
    margin: 0;
  }
  .services-details-img {
    margin-bottom: 30px;
  }
  .service-details-inner h2 {
    font-size: 24px;
  }
  .testimonials {
    padding-bottom: 100px;
  }
  .testimonials .owl-dots {
    transform: translateX(-18%);
  }
  .departments .department-tab .nav li {
    margin: 0px 10px;
  }
  .departments .department-tab .nav li a {
    color: #fff;
    margin-top: 10px;
    padding: 0 3px 12px 3px;
  }
  .departments .department-tab .nav li a i {
    font-size: 38px;
  }
  .departments .department-tab .nav li .first {
    padding-top: 6px;
    font-size: 14px;
  }
  .departments .department-tab .nav li .second {
    font-size: 13px;
    font-weight: 400;
    color: #868686;
    margin-top: 0px;
  }
  .departments .department-tab .tab-pane .department-left h3 {
    font-size: 22px;
    padding-bottom: 12px;
    margin-bottom: 20px;
  }
  .departments .department-tab .tab-pane .department-left .p1 {
    margin-bottom: 12px;
  }
  .departments .department-tab .tab-pane .department-left p {
    margin-bottom: 15px;
  }
  .departments .department-right {
    margin-top: 30px;
  }

  .departments .department-right img {
    height: 100%;
    width: 100%;
  }
  .appointment.single-page {
    padding: 50px 0;
  }
  .appointment.single-page .work-hour {
    margin-top: 30px;
  }
  .blog .single-news {
    margin: 15px 0;
  }
  .news-single .single-main {
    margin-top: 0px;
  }
  .news-single .single-main {
    padding: 15px;
  }
  .news-single .news-title {
    font-size: 20px;
    font-weight: 500;
  }
  .news-single .news-title a {
    font-size: 20px;
    font-weight: 500;
  }
  .news-single .meta-right {
    float: none;
    display: inline-block;
    margin-top: -6px;
    margin-left: 56px;
    float: left;
  }
  .news-single .image-gallery .single-image {
    margin: 10px 0;
  }
  .news-single .image-gallery {
    margin-bottom: 10px;
  }
  .news-single .social-share li {
    float: left;
    display: inline-block;
    margin: 5px;
  }
  .news-single .prev-next {
    float: none;
    text-align: center;
    display: inline-block;
  }
  .news-single .prev-next li {
    margin-top: 10px;
  }
  .news-single .single-comments.left .main {
    margin-left: 0px;
  }
  .news-single .single-comments .main {
    padding-left: 100px;
    position: relative;
    margin-left: 100px;
    margin: 0;
  }
  .news-single .single-comments .body {
    float: none;
    width: 100%;
  }
  .news-single .single-comments img {
    position: absolute;
    left: 0;
    top: 0;
  }
  .news-single .blog-comments {
    padding: 15px;
  }
  .news-single .comments-form {
    padding: 15px;
  }
  .main-sidebar .single-widget {
    padding: 20px;
  }
  .newsletter .subscribe-text {
    text-align: center;
    margin-bottom: 25px;
  }
  .newsletter .subscribe-form {
    text-align: center;
  }
  .newsletter .common-input {
    height: 50px;
    width: 100%;
    margin: 0;
  }
  .newsletter .btn {
    height: 50px;
    line-height: 50px;
    width: 100%;
    margin: 0;
    margin-top: 14px;
  }
  .error-page .error-inner h1 {
    font-size: 80px;
  }
  .error-page .error-inner h1 span {
    font-size: 17px;
  }
  .error-page .search-form input {
    width: 100%;
    display: block;
  }
  .error-page .search-form .btn {
    top: 0;
    width: 100%;
    display: block;
    margin-top: 15px;
  }
  .mail-seccess .success-inner h1 {
    font-size: 80px;
  }
  .mail-seccess .success-inner h1 span {
    font-size: 17px;
  }
  .about-image {
    height: 300px;
  }
  .about-content h2 {
    line-height: 32px;
    font-size: 20px;
  }
  .about-content {
    padding-bottom: 0;
    width: 100%;
    padding: 0;
    padding: 35px;
  }
  .our-mission-content {
    padding-bottom: 0;
    width: 100%;
    padding: 0;
    padding: 35px;
  }
  .our-mission-content h2 {
    line-height: 32px;
    font-size: 25px;
  }
  .our-mission-image {
    height: 300px;
  }
  .contact-us #myMap {
    height: 300px;
  }
  .contact-us .contact-us-form h2 {
    font-size: 25px;
  }
  .contact-us .single-info {
    margin: 10px 0;
  }
  .contact-us .contact-us-form {
    padding: 30px 30px;
  }
  .doctor-details-area .doctor-details-right {
    padding-left: 0;
    padding-top: 30px;
  }
  .doctor-details-item .doctor-details-contact {
    padding: 30px;
  }
  .doctor-details-item .doctor-name .name {
    font-size: 20px;
  }
  .doctor-details-item .doctor-name .deg {
    font-size: 18px;
    margin: 5px 0 5px 0;
  }
  .doctor-details-item .doctor-name .degree {
    font-size: 14px;
  }
  .doctor-details-item .doctor-details-biography h3 {
    font-size: 20px;
    margin-bottom: 20px;
    margin-top: 20px;
  }
  .doctor-details-area .doctor-details-left .social li {
    display: inline-block;
    margin-right: 5px;
  }
  .doctor-details-item .doctor-details-contact h3 {
    margin-bottom: 20px;
  }
  .doctor-details-item .doctor-details-work h3 {
    font-size: 20px;
    margin-top: 25px;
    margin-bottom: 20px;
  }
  .login .login-left {
    height: 300px;
  }
  .login .form .btn {
    height: 50px;
    line-height: 50px;
    padding: 0;
    padding: 0px 20px;
  }
  .login .form {
    margin-top: -25px;
  }
  .register .register-left {
    height: 300px;
  }
  .register .form .btn {
    height: 50px;
    line-height: 50px;
    padding: 0;
    padding: 0px 20px;
  }
  .register .form {
    margin-top: -25px;
  }
  .contact-us .form .btn {
    height: 50px;
    line-height: 50px;
    padding: 0;
    padding: 0px 20px;
  }
  .contact-us .form {
    margin-top: -25px;
  }
  .pf-details .date ul li {
    margin-right: 25px;
    font-size: 13px;
  }
  .pf-details .date ul li {
    margin-right: 25px;
    font-size: 13px;
    display: block;
    text-align: left;
    margin-bottom: 8px;
  }
  .pf-details .date ul li:last-child {
    margin-bottom: 0;
  }
  .pf-details .body-text h3 {
    font-size: 22px;
    font-weight: 600;
    color: #333;
    margin-top: 30px;
  }
  .pf-details .image-slider .owl-nav {
    display: none;
  }
  .doctor-calendar-table table thead tr th {
    font-size: 14px;
  }
  .doctor-calendar-table table tbody tr td h3 {
    font-size: 14px;
  }
  .doctor-calendar-table table tbody tr td span.time {
    font-size: 14px;
  }
  .footer .single-footer {
    margin: 15px 0;
  }
  .footer .single-footer h2 {
    padding-bottom: 20px;
    margin-bottom: 20px;
  }
  .footer .footer-top {
    padding: 50px 0px 60px 0;
  }
  .footer .single-footer.f-link ul {
    margin-bottom: 12px;
  }
  .footer .single-footer.f-link ul li a {
    display: inline-block;
  }
  .footer .copyright {
    padding: 20px 0;
  }
}
/* Mobile Screen */
@media only screen and (max-width: 450px) {
  .section {
    padding: 50px 0px;
  }
  .section-title {
    margin-bottom: 30px;
    padding: 0px 20px;
  }
  .section-title h2 {
    font-size: 22px;
    margin-bottom: 10px;
  }
  .section-title p {
    font-size: 13px;
  }
  .btn {
    padding: 11px 20px;
    font-weight: 400;
    font-size: 13px;
  }
  .header .top-link {
    float: none;
    text-align: center;
    margin-bottom: 10px;
  }
  .header .top-contact {
    float: none;
    text-align: center;
  }
  .slider .single-slider {
    height: 380px;
  }
  .schedule {
    background: #fff;
    margin: 0;
    padding: 0;
    height: auto;
    padding: 50px 0;
    border-bottom: 1px solid #eee;
  }
  .schedule .schedule-inner {
    transform: none;
  }
  .schedule .single-schedule {
    margin: 15px 0;
  }
  .slider .single-slider {
    position: relative;
  }
  .slider .single-slider:before {
    position: absolute;
    content: "";
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background: #fff;
    opacity: 0.5;
  }
  .slider .single-slider h1 {
    font-size: 20px;
    font-weight: 600;
    line-height: 25px;
  }
  .slider .single-slider p {
    font-size: 13px;
  }
  .slider .single-slider .text {
    margin-top: 20px;
  }
  .slider .single-slider .button .btn {
    margin: 0;
    width: 100%;
    margin-bottom: 10px;
  }
  .slider .single-slider .button .btn:last-child {
    margin-bottom: 0;
  }
  .slider .owl-carousel .owl-nav {
    display: none;
  }
  .Feautes .single-features .signle-icon i {
    font-size: 42px;
    left: 50%;
    margin-left: -40px;
    height: 80px;
    width: 80px;
    line-height: 80px;
  }
  .Feautes .single-features::before {
    display: none;
  }
  .Feautes .single-features {
    text-align: center;
    position: relative;
    padding: 0px;
    margin: 15px 0;
  }
  .Feautes .single-features h3 {
    padding-top: 105px;
    font-size: 20px;
  }
  .fun-facts.section {
    padding: 70px 0;
  }
  .fun-facts .single-fun {
    margin: 0;
    margin: 15px 0;
    position: relative;
  }
  .fun-facts .single-fun {
    margin: 35px 0;
    padding-top: 60px;
    text-align: center;
  }
  .fun-facts .single-fun i {
    left: 50%;
    margin-left: -35px;
    top: 0;
    position: absolute;
  }
  .fun-facts .single-fun .content {
    padding: 0;
  }
  .why-choose .choose-right {
    height: 350px;
    margin-top: 30px;
  }
  .call-action .content {
    padding: 0;
    padding: 70px 0;
  }
  .call-action .content h2 {
    font-size: 28px;
    line-height: 40px;
  }
  .services .single-service {
    margin: 20px 0;
  }
  .services .single-service h4 {
    margin-bottom: 15px;
  }
  .services-details-img blockquote {
    padding: 25px;
  }
  .services-details-img blockquote i {
    display: none;
  }
  .testimonials {
    padding-bottom: 100px;
  }
  .testimonials .owl-dots {
    transform: translateX(-18%);
  }
  .departments .department-tab .nav li {
    margin: 0px 10px;
  }
  .departments .department-tab .nav li a {
    color: #fff;
    margin-top: 10px;
    padding: 0 3px 12px 3px;
  }
  .departments .department-tab .nav li a i {
    font-size: 38px;
  }
  .departments .department-tab .nav li .first {
    padding-top: 6px;
    font-size: 14px;
  }
  .departments .department-tab .nav li .second {
    font-size: 13px;
    font-weight: 400;
    color: #868686;
    margin-top: 0px;
  }
  .departments .department-tab .tab-pane .department-left h3 {
    font-size: 22px;
    padding-bottom: 12px;
    margin-bottom: 20px;
  }
  .departments .department-tab .tab-pane .department-left .p1 {
    margin-bottom: 12px;
  }
  .departments .department-tab .tab-pane .department-left p {
    margin-bottom: 15px;
  }
  .departments .department-right {
    margin-top: 30px;
  }

  .departments .department-right img {
    height: 100%;
    width: 100%;
  }
  .appointment.single-page .appointment-inner {
    padding: 25px;
  }
  .blog .single-news {
    margin: 15px 0;
  }
  .newsletter .subscribe-text {
    text-align: center;
    margin-bottom: 25px;
  }
  .newsletter .subscribe-form {
    text-align: center;
  }
  .our-mission-content {
    padding-top: 0;
  }
  .our-vision-area {
    padding-bottom: 45px;
  }
  .our-mission-content ul li {
    -ms-flex: 0 0 50%;
    -webkit-box-flex: 100%;
    flex: 100%;
    max-width: 100%;
    margin: 5px 0;
  }
  .login .login-form {
    padding: 30px 30px;
  }
  .login .login-form h2 {
    font-size: 26px;
  }
  .login .login-form .lost-pass {
    margin-left: 0;
    display: block;
    margin-top: -10px;
  }
  .login .form .btn {
    height: 50px;
    line-height: 50px;
    padding: 0;
    padding: 0px 20px;
  }
  .register .register-form {
    padding: 30px 30px;
  }
  .register .register-form h2 {
    font-size: 26px;
  }
  .register .register-form .terms {
    margin: 0;
    display: block;
    margin-top: -10px;
  }
  .register .form .btn {
    height: 50px;
    line-height: 50px;
    padding: 0;
    padding: 0px 20px;
  }
  .contact-us .form .btn {
    height: 50px;
    line-height: 50px;
    padding: 0;
    padding: 0px 20px;
  }
  .footer .single-footer {
    margin: 20px 0;
  }
  .footer .single-footer h2 {
    padding-bottom: 20px;
  }
  .footer .footer-top {
    padding: 65px 0px;
  }
}
/*************** */
</style>

