<template> 
    <header class="header">
             <span style="font-size: 48px;color: #4e28d9; margin-bottom:8%">3D ARTS</span>
        <div>

          <nuxt-link class="carttotal"  :to="localePath('/cart')"><div  v-if="cartCount > 0"></div>  {{ cartCount }}</nuxt-link>

               <a v-if="!isAuth" href="#" @click="signout">
              <span class="menu-text">{{ $t("Hello") }}!</span>
              </a>
               <a v-if="!isAuth" href="/Signin">
              <span class="menu-text">{{ $t("Login") }}</span>
              </a>

               <a v-if="isAuth" href="#" @click="signout">
              <span class="menu-text">{{ $t("Hello") }}, {{ user.firstname }}!</span>
              </a>

               <a v-if="isAuth" href="#" @click="signout">
              <span class="menu-text">{{ $t("Logout") }}</span>
              </a>
    </div>
    <nav>
      <!-- Header Inner -->
      <div class="header-inner">
        <div class="">
          <div class="inner">
            <div class="topnav" id="myTopnav">

              <a  v-if="isAuth && isAdmin" href="#news">
                      <span data-app class="menu-text">
                                    <v-menu >
                                      <template v-slot:activator="{ attrs, on }">
                                        <v-btn
                                          :color="colors[0]"
                                          class="white--text ma-5"
                                          v-bind="attrs"
                                          v-on="on"
                                        >
                                        {{ $t("Admin") }}
                                        </v-btn>
                                      </template>

                                      <v-list>
                                        <v-list-item><nuxt-link :to="localePath('/ManageProduct/Category')">{{$t('Category')}}</nuxt-link> </v-list-item>
                                        <v-list-item><nuxt-link :to="localePath('/ManageProduct/Product')">{{$t('Product')}}</nuxt-link> </v-list-item>
                                        <v-list-item><nuxt-link :to="localePath('/ManageProduct/Order')">{{$t('Order')}}</nuxt-link> </v-list-item>
                                        <v-list-item><nuxt-link :to="localePath('/ManageClient/Client')">{{$t('Client')}}</nuxt-link> </v-list-item>
                                        <v-list-item><nuxt-link :to="localePath('/ManageProduct/Taxe')">{{$t('Taxe')}}</nuxt-link> </v-list-item>
                                        <v-list-item><nuxt-link :to="localePath('/calevents')">{{$t('Taxe')}}</nuxt-link> </v-list-item>                                        
                                      </v-list>
                                    </v-menu>
                      </span>
              </a>
              <nuxt-link :to="localePath('/')"><span class="menu-text">{{ $t("Home") }}</span></nuxt-link> 
              <nuxt-link :to="localePath('/all')"><span class="menu-text">{{ $t("Products") }}</span></nuxt-link> 
              <nuxt-link
                v-for="locale in showLocales"
                :key="locale.code"
                :to="switchLocalePath(locale.code)"
                ><span v-if="locale.code === 'en'" class="menu-text">{{ $t("English") }}</span>
                <span v-if="locale.code === 'fr'" class="menu-text">{{ $t("French") }}</span>
                <span v-if="locale.code === 'ar'" class="menu-text">{{ $t("Arabe") }}</span>
              </nuxt-link>

              <a href="javascript:void(0);" class="icon" @click="navbarmenu()">
                <i class="fa fa-bars"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!--/ End Header Inner -->
 
    </nav>

  </header>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data: () => ({
    token: null,
    istoken:false,
    btns: [
      ['Admin', '0'],
    ],
    colors: ['deep-purple accent-4', 'error', 'teal darken-1'],
    items: [{"path":"/ManageProduct/Category","name":"Category","id":0},
            {"path":"/ManageProduct/Product","name":"Product","id":1},
            {"path":"/ManageProduct/Order","name":"Order","id":2},
            {"path":"/ManageClient/Client","name":"Client","id":3},
            {"path":"/ManageProduct/Taxe","name":"Taxe","id":4}],
  }),
  computed: {
    ...mapGetters({ 
                      cartCount: 'cartstore/cartCount',
                      user: "auth/authUser",
                      isAuth: "auth/isAuthenticated",
                      isAdmin: "auth/isAdmin",
                      userAuthority: "auth/userAuthority",
                  }),
    showLocales () {
      return this.$i18n.locales.filter(locale => locale.code !== this.$i18n.locale)
    }
  },
  methods: {
    switchLocalePathCallback(code) {
              console.log(' ++++++******** code local -------------------- ', this.$i18n.locale)
      let langPath = this.switchLocalePath(code),
          path = langPath
      if(langPath == this.$nuxt.$route.path ) {
        path = this.$i18n.defaultLocale != code ? '/'+langPath : '/'
              console.log(' ******** code local -------------------- ', this.$i18n.locale)
             // this.$store.dispatch("auth/setlangInSession",this.$i18n.locale).then(() => {
      // });
      localStorage.setItem("language", path);
      }
      return path
    },
    signout: function () {
      this.$store.dispatch("auth/logout").then(() => {
        this.$router.push(localePath('/Signin'));
      });
    },
    refreshNav(){
      alert("La zwiwo")
    },

  logout() {
      $(".shopping-cart").hide("slow");
      this.$store.dispatch("auth/logout").then(() => {
        this.$router.push(localePath('/Signin'));
      });
    },

    closeMenu() {
      this.isActive = false;
    },
    hideNav() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollPosition < 0) return;
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) return;
      this.showNavbar = currentScrollPosition < this.lastScrollPosition;
      this.lastScrollPosition = currentScrollPosition;
      setTimeout(this.closeMenu, 250);
    },
    deleteAgentFromCart(index) {
      this.$store.dispatch("user/clientcart/deleteFromCart", index);
    },
    navbarmenu() {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    },

  },
  mounted() {
var  code =localStorage.getItem("language")
this.switchLocalePath(code)
  },
};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 40px 40px 0;
}

nav {
  display: flex;
  width: 80vw;
  margin-top: 30px;
  justify-content: center;
  align-items: center;
  /*border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;*/
  padding: 8px 0;
  ul {
    padding-left: 0;
    li {
      display: inline;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      font-size: 13px;
      padding: 0 20px;
      border-left: 1px solid #ddd;
      border-right: 1px solid #ddd;
      position: relative;
      a {
        color: #4e28d9;
        &:hover {
          color: #4e28d9;
        }
      }
    }
  }
}

.carttotal {
  position: absolute;
  border-radius: 1000px;
  background: #4e28d9;
  color: white;
  font-size: 10px;
  right: 58%;
  width: 4%;
  text-align: center;
  height: 25px;
  font-size: 10px;
  padding: 6px 5px;
  font-weight: bold;
}
@media screen and (max-width: 1524px) {
  h1 {
    margin: 0;
  }
  nav ul li {
    padding: 0 5px !important;
    border-left: none !important;
    border-right: none !important;
  }
 .carttotal {  right: 60%;  width: 6%;}
}
@media screen and (max-width: 980px) {
  h1 {
    margin: 0;
  }
  nav ul li {
    padding: 0 5px !important;
    border-left: none !important;
    border-right: none !important;
  }
   .carttotal {  right: 68%;width: 8%;}
}
@media screen and (max-width: 600px) {
.carttotal {
    right: 71%;
    width: 12%;
  }
}



.v-btn--is-elevated {
   box-shadow: 0px 0px 0px -2px rgb(0 0 0 / 20%), 0px 0px 0px 0px rgb(0 0 0 / 14%), 0px 0px 0px 0px rgb(0 0 0 / 12%); 
}

.btn {
  color: #fff;
  padding: 13px 25px;
  font-size: 14px;
  text-transform: capitalize;
  font-weight: 500;
  background: #38308b;
  position: relative;
  box-shadow: none;
  display: inline-block;
  transition: all 0.4s ease;
  transform: perspective(1px) translateZ(0);
  border: none;
  border-radius: 0;
  border-radius: 4px;
}

.card-image {
  width: 20%;
  height: 80px;
  color: #18181d;
  font-size: 12px;
  text-align: center;
  list-style-type: none;
}
.card-image:hover {
  cursor: pointer;
  opacity: 0.8;
}
/******************  Cart  */
$main-color: #38308b;
$light-text: #abb0be;

.col-xl,
.col-xl-auto,
.col-xl-12,
.col-xl-11,
.col-xl-10,
.col-xl-9,
.col-xl-8,
.col-xl-7,
.col-xl-6,
.col-xl-5,
.col-xl-4,
.col-xl-3,
.col-xl-2,
.col-xl-1,
.col-lg,
.col-lg-auto,
.col-lg-12,
.col-lg-11,
.col-lg-10,
.col-lg-9,
.col-lg-8,
.col-lg-7,
.col-lg-6,
.col-lg-5,
.col-lg-4,
.col-lg-3,
.col-lg-2,
.col-lg-1,
.col-md,
.col-md-auto,
.col-md-12,
.col-md-11,
.col-md-10,
.col-md-9,
.col-md-8,
.col-md-7,
.col-md-6,
.col-md-5,
.col-md-4,
.col-md-3,
.col-md-2,
.col-md-1,
.col-sm,
.col-sm-auto,
.col-sm-12,
.col-sm-11,
.col-sm-10,
.col-sm-9,
.col-sm-8,
.col-sm-7,
.col-sm-6,
.col-sm-5,
.col-sm-4,
.col-sm-3,
.col-sm-2,
.col-sm-1,
.col,
.col-auto,
.col-12,
.col-11,
.col-10,
.col-9,
.col-8,
.col-7,
.col-6,
.col-5,
.col-4,
.col-3,
.col-2,
.col-1 * {
  width: 100%;
  padding: 12px !important;
}

@media only screen and (min-width: 600px) {
  .col-xl,
  .col-xl-auto,
  .col-xl-12,
  .col-xl-11,
  .col-xl-10,
  .col-xl-9,
  .col-xl-8,
  .col-xl-7,
  .col-xl-6,
  .col-xl-5,
  .col-xl-4,
  .col-xl-3,
  .col-xl-2,
  .col-xl-1,
  .col-lg,
  .col-lg-auto,
  .col-lg-12,
  .col-lg-11,
  .col-lg-10,
  .col-lg-9,
  .col-lg-8,
  .col-lg-7,
  .col-lg-6,
  .col-lg-5,
  .col-lg-4,
  .col-lg-3,
  .col-lg-2,
  .col-lg-1,
  .col-md,
  .col-md-auto,
  .col-md-12,
  .col-md-11,
  .col-md-10,
  .col-md-9,
  .col-md-8,
  .col-md-7,
  .col-md-6,
  .col-md-5,
  .col-md-4,
  .col-md-3,
  .col-md-2,
  .col-md-1,
  .col-sm,
  .col-sm-auto,
  .col-sm-12,
  .col-sm-11,
  .col-sm-10,
  .col-sm-9,
  .col-sm-8,
  .col-sm-7,
  .col-sm-6,
  .col-sm-5,
  .col-sm-4,
  .col-sm-3,
  .col-sm-2,
  .col-sm-1,
  .col,
  .col-auto,
  .col-12,
  .col-11,
  .col-10,
  .col-9,
  .col-8,
  .col-7,
  .col-6,
  .col-5,
  .col-4,
  .col-3,
  .col-2,
  .col-1 * {
    width: 100%;
    padding: 28px !important;
  }

  .avalibbtn {
    max-width: 80%;
    max-height: 50px;
    border: none;
  }
  .avalibpic {
    border: none;
    color: #18181d;
    cursor: pointer;
    font-size: 18px;
    text-align: center;
    outline: none;
  }
  .miniCart {
    position: relative;
    width: 40px;
    margin: 0 auto;
  }
  .miniCart span {
    position: absolute;
    background: #38308b;
    font-size: 10px;
    color: #fff;
    padding: 1px 5px;
    border-radius: 20px;
    right: 28px;
    top: 4px;
  }
  .columncart {
    position: relative;
    display: block;
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 1;
    padding: 0.75rem;
    width: 100%;
  }
  .columncartinfo.is-one-quarter {
    float: left;
    flex: none;
    width: 50%;
  }
  .columncartpic.is-one-quarter {
    float: right;
    flex: none;
    width: 50%;
  }

  .scroll {
    width: 348px;
    height: 380px;
    overflow: scroll;
  }
  .deletecart {
    color: #ffff;
    text-align: center;
    outline: none;
    cursor: pointer;
    float: right;
    font-size: 18px;
    margin-right: 18px;
  }
  .avalib {
    max-width: 100%;
    max-height: 80px;
    color: #18181d;
    font-size: 12px;
    text-align: center;
    list-style-type: none;
    margin-left: 28px;
    margin-right: 18px;
  }

  .lookforagentstitle {
    font-size: 48px;
    color: rgb(12, 2, 2);
    font-weight: 300;
  }

  .button.is-danger.is-inverted.is-outlined {
    background-color: rgb(17, 16, 16);
    border-color: rgb(17, 16, 16);
    color: rgb(233, 221, 221);
    -webkit-appearance: none;
    align-items: center;
    border: 1px solid transparent;
    border-radius: 4px;
    box-shadow: none;
    display: inline-flex;
    font-size: 1rem;
    height: 2.25em;
    justify-content: flex-start;
    line-height: 1.5;
    padding-bottom: calc(0.375em - 1px);
    padding-left: calc(0.625em - 1px);
    padding-right: calc(0.625em - 1px);
    padding-top: calc(0.375em - 1px);
    position: relative;
    vertical-align: top;
  }
  .is-size-4 {
    font-size: 0.8rem !important;
    color: white;
  }
  .navbar {
    transition: transform 200ms ease-out;
    background-color: #ffffff;
    &.is-transformed {
      transform: translate3d(0, -100%, 0);
    }
  }

  .full-page-takeover-header {
    background-color: #ffffff;
    align-items: center;
  }
  .brand-title {
    font-size: 35px;
    font-weight: bold;
  }
  .navbar-brand {
    padding-right: 30px;
  }
  .avatar {
    margin-right: 5px;
  }

  .navbar[data-v-fc235a22] {
    transition: transform 200ms ease-out;
    background-color: #ffffff;
  }

  .badge {
    background-color: #5d588b;
    border-radius: 10px;
    color: white;
    display: inline-block;
    font-size: 12px;
    line-height: 1;
    padding: 3px 7px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
  }

  .login_container {
    /*  background-color: rgb(0, 0, 0); */
    color: rgb(250, 246, 246);
    border-radius: 1px;
    width: 100%;
    padding: 2px;
    margin-right: auto;
    margin-left: auto;
    line-height: 18px;
  }

  .cart_container {
    position: absolute;
    border-radius: 6px;
    width: 100%;
  }

  .shopping-cart-header {
    border-color: rgb(15, 15, 14);
  }
  .shopping-cart {
    top: -58px;
    right: 88px;
    margin: 20px 0;
    float: right;
    background: #5850b6;
    width: 320px;
    position: relative;
    border-radius: 3px;
    padding: 20px;
    z-index: 18;
    .shopping-cart-header {
      border-bottom: 1px solid #e8e8e8;
      padding-bottom: 15px;
      .shopping-cart-total {
        float: right;
      }
      .close-shopping-cart {
        float: right;
        color: white;
        cursor: pointer;
      }
    }

    .shopping-cart:after {
      bottom: 100%;
      left: 89%;
      border: solid transparent;
      content: " ";
      height: 0;
      width: 0;
      position: absolute;
      pointer-events: none;
      border-bottom-color: white;
      border-width: 8px;
      margin-left: -8px;
    }

    .shopping-cart-items {
      padding-top: 20px;

      li {
        margin-bottom: 18px;
      }

      img {
        float: left;
        margin-right: 10px;
      }

      .item-name {
        color: #ffffff;
      }

      .item-price {
        color: #ffffff;
        margin-right: 8px;
      }

      .item-quantity {
        font-size: 14px;
        color: #ffffff;
      }
    }
  }

  .cart-icon {
    color: #ffffff;
    font-size: 24px;
    margin-right: 7px;
    float: left;
  }

  .button {
    background: rgb(102, 48, 128);
    color: white;
    text-align: center;
    padding: 12px;
    text-decoration: none;
    display: block;
    border-radius: 3px;
    font-size: 16px;
    margin: 25px 0 15px 0;

    &:hover {
      background: lighten($main-color, 3%);
    }
  }

  .clearfix:after {
    content: "";
    display: table;
    clear: both;
  }
  .mybtncart {
    color: #fff;

    font-size: 14px;
    text-transform: capitalize;
    font-weight: 500;
    background: #38308b;
    position: relative;
    box-shadow: none;
    display: inline-block;
    transition: all 0.4s ease;
    transform: perspective(1px) translateZ(0);
    border: none;
    border-radius: 0;
    border-radius: 4px;
  }
  .mybtnfind {
    color: #fff;

    font-size: 14px;
    text-transform: capitalize;
    font-weight: 500;
    background: #38308b;
    position: relative;
    box-shadow: none;
    display: inline-block;
    transition: all 0.4s ease;
    transform: perspective(1px) translateZ(0);
    border: none;
    border-radius: 0;
    border-radius: 4px;
  }
}

@media only screen and (max-width: 600px) {
  .col-xl,
  .col-xl-auto,
  .col-xl-12,
  .col-xl-11,
  .col-xl-10,
  .col-xl-9,
  .col-xl-8,
  .col-xl-7,
  .col-xl-6,
  .col-xl-5,
  .col-xl-4,
  .col-xl-3,
  .col-xl-2,
  .col-xl-1,
  .col-lg,
  .col-lg-auto,
  .col-lg-12,
  .col-lg-11,
  .col-lg-10,
  .col-lg-9,
  .col-lg-8,
  .col-lg-7,
  .col-lg-6,
  .col-lg-5,
  .col-lg-4,
  .col-lg-3,
  .col-lg-2,
  .col-lg-1,
  .col-md,
  .col-md-auto,
  .col-md-12,
  .col-md-11,
  .col-md-10,
  .col-md-9,
  .col-md-8,
  .col-md-7,
  .col-md-6,
  .col-md-5,
  .col-md-4,
  .col-md-3,
  .col-md-2,
  .col-md-1,
  .col-sm,
  .col-sm-auto,
  .col-sm-12,
  .col-sm-11,
  .col-sm-10,
  .col-sm-9,
  .col-sm-8,
  .col-sm-7,
  .col-sm-6,
  .col-sm-5,
  .col-sm-4,
  .col-sm-3,
  .col-sm-2,
  .col-sm-1,
  .col,
  .col-auto,
  .col-12,
  .col-11,
  .col-10,
  .col-9,
  .col-8,
  .col-7,
  .col-6,
  .col-5,
  .col-4,
  .col-3,
  .col-2,
  .col-1 * {
    width: 100%;
    padding: 8px !important;
  }

  .header .top-contact li {
    margin-right: 1px;
    color: #4e28d9;
  }


  .container_firstheader {
    width: 100%;
    padding: 2px;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 25px;
    background-color: #030000;
  }
  .login_container {
    color: white;
  }
  .mybtncart {
    color: #fff;

    font-size: 14px;
    text-transform: capitalize;
    font-weight: 500;
    background: #38308b;
    position: relative;
    box-shadow: none;
    display: inline-block;
    transition: all 0.4s ease;
    transform: perspective(1px) translateZ(0);
    border: none;
    border-radius: 0;
    border-radius: 4px;
  }
  .mybtnfind {
    font-size: 14px;
    text-transform: capitalize;
    font-weight: 500;
    background: #38308b;
    position: relative;
    box-shadow: none;
    display: inline-block;
    transition: all 0.4s ease;
    transform: perspective(1px) translateZ(0);
    border: none;
    border-radius: 0;
    border-radius: 4px;
  }
  .badge {
    background-color: #5d588b;
    border-radius: 10px;
    color: white;
    display: inline-block;
    font-size: 12px;
    line-height: 1;
    padding: 3px 7px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
  }

  .btn {
    display: inline-block;
    color: #ffffff;
    text-align: center;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: 0.35rem 0.1rem;
    font-size: 8px;
    line-height: 1.5;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }

  .cart_container {
    background-color: rgb(226, 235, 230);
  }
  .shopping-cart-header {
    border-color: rgb(15, 15, 14);
  }
  .shopping-cart {
    position: absolute;
    top: -28px;
    right: 58px;
    margin: 20px 0;
    float: right;
    background: #38308b;
    width: 320px;
    position: relative;
    border-radius: 3px;
    padding: 20px;
    z-index: 18;
    .shopping-cart-header {
      border-bottom: 1px solid #e8e8e8;
      padding-bottom: 15px;

      .shopping-cart-total {
        float: right;
      }
    }
    .close-shopping-cart {
      float: right;
      color: white;
      cursor: pointer;
    }
    .shopping-cart-items {
      padding-top: 20px;
      li {
        margin-bottom: 18px;
      }

      img {
        float: left;
        margin-right: 12px;
      }

      .item-name {
        display: block;
        padding-top: 10px;
        font-size: 16px;
        color: white;
      }

      .item-price {
        color: white;
        margin-right: 8px;
      }

      .item-quantity {
        color: white;
      }
    }
  }

  .shopping-cart:after {
    bottom: 100%;
    left: 89%;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-bottom-color: white;
    border-width: 8px;
    margin-left: -8px;
  }

  .cart-icon {
    color: #ffffff;
    font-size: 24px;
    margin-right: 7px;
    float: left;
  }

  .button {
    background: rgb(102, 48, 128);
    color: white;
    text-align: center;
    padding: 12px;
    text-decoration: none;
    display: block;
    border-radius: 3px;
    font-size: 16px;
    margin: 25px 0 15px 0;

    &:hover {
      background: lighten($main-color, 3%);
    }
  }

  .clearfix:after {
    content: "";
    display: table;
    clear: both;
  }

  .button.is-danger.is-inverted.is-outlined {
    background-color: #ffffff;
    border-color: #ffffff;
    color: rgb(233, 221, 221);
  }

  .is-size-4 {
    font-size: 0.8rem !important;
    color: white;
  }
  .navbar-burger {
    color: #38308b;
    cursor: pointer;
    display: block;
    height: 5rem;
    position: relative;
    width: 5rem;
    margin-left: auto;
  }
  .lookforagentstitle[data-v-fc235a22] {
    font-size: 24px;
    color: #0c0202;
    font-weight: 300;
  }
}

/****************** */

.topnav {
  overflow: hidden;
  background-color: #ffffff;
  margin-right: 5px;
}

.topnav a {
  float: left;
  display: block;
  color: #4e28d9;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 18px;
}

.topnav a:hover {
  background-color: #ffffff;
  color: black;
}

.topnav a.active {
  background-color: #4caf50;
  color: white;
}

.topnav .icon {
  display: none;
}
.menu-text {
  font-size: 15px;
  margin-left: 5px;
  color: #4e28d9;
  transition: all 0.4s ease;
  background: none;
  padding: 4px 10px;
}

.theme--light.v-btn {
    color: #4e28d9;
}

.menu-text:hover {
  font-size: 12px;
  color: #38308b;
}
@media screen and (max-width: 600px) {
  .menu-text {
    font-size: 12px;
    margin-left: 5px;
    color: #4e28d9;
    transition: all 0.4s ease;
    background: none;
    padding: 4px 10px;
  }
  .menu-text:hover {
    font-size: 8px;
    color: #38308b;
  }
  .topnav a:not(:first-child) {
    display: none;
  }
  .topnav a.icon {
    float: right;
    display: block;
  }

  .topnav.responsive {
    position: relative;
  }
  .topnav.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
  .deletecart {
    color: #ffff;
    text-align: center;
    outline: none;
    cursor: pointer;
    float: right;
    font-size: 18px;
    margin-right: 18px;
  }
}









</style>