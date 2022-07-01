<template>
  <header  class="navbar is-fixed-top is-transparent is-spaced" >

    <div class="container">
      <div class="navbar-brand is-family-secondary">
  <span class="twelve">
  <h1>FELLAZ<em>-arts</em></h1>
</span>

        <a :aria-expanded="isActive" :class="{ 'is-active': isActive }" role="button" class="navbar-burger" aria-label="menu" data-target="collapse" @click="isActive = !isActive" >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>
      <div id="collapse" :class="{ 'is-active': isActive }" class="navbar-menu is-paddingless" >
        <nav class="navbar-end">
         <nuxt-link class="carttotal"  :to="localePath('/cart')"><div  v-if="cartCount > 0"></div>  <i class="fa fa-shopping-cart " aria-hidden="true"></i> {{ cartCount }}</nuxt-link>
          <nuxt-link to="/" class="navbar-item">Contact us</nuxt-link>
          <nuxt-link to="/blog" class="navbar-item">About</nuxt-link>

          <div class="buttons">
            <!-- If Authenticated -->
            <template v-if="isAuth">
              <div class="m-r-sm m-b-sm">
                Welcome   {{userAuthority}} {{user.email}}!
              </div>


              <!-- If Admin -->

              <a class="button is-primary" @click="logout">
                Logout
              </a>
              <figure class=" avatar ">
                <img class="is-rounded" src="https://upload.wikimedia.org/wikipedia/commons/6/67/User_Avatar.png">
              </figure>
            </template>
            <template v-else>
              <nuxt-link :to="localePath('/Signup')">{{ $t("Signup Here") }} </nuxt-link>

            </template>
          </div>

        </nav>
      </div>
    </div>
  </header>

</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      isActive: false,
      showNavbar: false,
      lastScrollPosition: 0
    }
  },
   mounted() {
    this.$nextTick(() => {
     /* window.addEventListener('resize', throttle(this.closeMenu, 500))
      window.addEventListener('scroll', throttle(this.hideNav, 250))*/
    })
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.closeMenu)
    window.removeEventListener('scroll', this.hideNav)
  },


  computed: {
    ...mapGetters({ 
                      cartCount: 'cartstore/cartCount',
                      user: "auth/authUser",
                      isAuth: "auth/isAuthenticated",
                      isAdmin: "auth/isAdmin",
                      userAuthority: "auth/userAuthority",
                  }),
  },
  methods: {
    logout() {
            this.$store.dispatch("auth/logout").then(() => {
              this.$router.push(localePath('/Signin'));
            });
    },

    closeMenu() {
      this.isActive = false
    },
    hideNav() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop
      if (currentScrollPosition < 0) return
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) return
      this.showNavbar = currentScrollPosition < this.lastScrollPosition
      this.lastScrollPosition = currentScrollPosition
      setTimeout(this.closeMenu, 250)
    }
  }
}
</script>

<style lang="scss" scoped>

a, a:active, a:visited {
    color: #f4f3f9 !important;
    text-decoration: none;
    transition: 0.3s all ease;
}

.carttotal {
  position: absolute;
  border-radius: 1000px;
  background: #4e28d9;
  color: white;
  font-size: 10px;
  right: 31%;
  width: 4%;
  text-align: center;
  height: 38px;
  font-size: 18px;
  padding: 6px 5px;
  font-weight: bold;
}
div.container {
     margin-left: 5% !important; 
     margin-right: 8% !important;  
}
.twelve h1 {
  font-size:26px; font-weight:700;  letter-spacing:1px; text-transform:uppercase; width:160px; text-align:center; margin:auto; white-space:nowrap; padding-bottom:13px;
}
.twelve h1:before {
    background-color: #c50000;
    content: '';
    display: block;
    height: 8px;
    width: 100px;
    margin-bottom: 5px;
}
.twelve h1:after {
    background-color: #c50000;
    content: '';
    display: block;

  right:0; bottom:0;
    height: 8px;
    width: 78px;
    margin-top: 0.18em;
    margin-left: 65%;
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
      color:white
    }
  .navbar {
    transition: transform 200ms ease-out;
    background-color: #021a2c;
    &.is-transformed {
      transform: translate3d(0, -100%, 0);
    }
  }

  .full-page-takeover-header {
    background-color: #198fec;
    display: flex;
    height: 60px;
    align-items: center;
    padding: 40px 0;
}
  .brand-title {
    font-size: 35px;
    font-weight: bold;
  }
  .navbar-brand {
    padding-right: 30px;
  }
  .avatar {
    float:right;
    margin-right: 5px;
  }

  .avatar img {
    margin-top: 50%;
    margin-left: 118%;
    height: 58px;
    width: 58px;
    padding: 2px;
    background: #fff;
    border-radius: 50%;
    box-shadow: 0 2px 3px rgb(10 10 10 / 10%), 0 0 0 1px rgb(10 10 10 / 10%);
}
  @media only screen and (max-width: 600px) {
    .button.is-danger.is-inverted.is-outlined {
        background-color: rgb(17, 16, 16);
        border-color: rgb(17, 16, 16);
        color: rgb(233, 221, 221);
    }
    .buttons{
      margin-bottom:1%;
      margin-top:8%;
      margin-right:18%;
      margin-left:2%;
    }
    .container{
          background-color: #021a2c;
    }
    .is-size-4 {
    font-size: 0.8rem !important;
    color:white
    }
    .navbar-burger {
      color: #4bacff;
      cursor: pointer;
      display: block;
      height: 5rem;
      position: relative;
      width: 5rem;
      margin-left: auto;
  }
}
</style>