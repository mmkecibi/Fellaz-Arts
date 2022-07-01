<template>
  <div id="app">
1
  <div class="nes-container with-title is-centered">
   <div class="credit-card" >
      <div class="form-header">
        <h1 class="golden-title">{{$t("Payment Type")}}</h1>
      </div>

      <div class="form-body">
       <div class="row">

            <div class="col-md-6">
              <div class="form-group">
                <h2  class="golden-title">{{$t("Card")}} <input type="radio" name="paymenttype" value="Card" aria-label="paymenttype" aria-labelledby="Card"  v-model="paymenttype" /></h2>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <h2  class="golden-title">{{$t("Cash on Delivery")}}<input type="radio" name="paymenttype" value="Cash on Delivery" aria-label="paymenttype" aria-labelledby="Cash on Delivery"  v-model="paymenttype" /></h2>
              </div>
            </div>
            <div class="row">
            <div class="col-md-4">
                <div class="form-group">
                      <button class="pay-with-stripe" @click="goTototalByProvinceStep">{{$t("Previous")}}</button>
                </div>
            </div>

            <div class="col-md-4">
              <div class="form-group">
                  <button class="pay-with-stripe shipping_next " @click="goToCheckOutStep"  :disabled="paymenttype == null">{{$t("Next")}}</button>
              </div>
            </div>
        </div>
      </div>

      </div>
         
      </div>
    </div>
        <!-- Buttons -->

  </div>
</template>
 
<script>
///import { Card, handleCardPayment } from "vue-stripe-elements-plus";


import { mapState, mapGetters } from "vuex";

export default {
  components: {  },
  computed: {
    ...mapState(["cartUIStatus"]),
    ...mapGetters({ cartTotalTX: 'ordertore/cartTotalTax',  cartCount: 'cartstore/cartCount' }),
  },
  mounted() {

  },
  data() {
    return {
          paymenttype:null,
          token:null,
          complete: false,
          stripeOptions: {
            // you can configure that cc element. I liked the default, but you can
            // see https://stripe.com/docs/stripe.js#element-options for details
          },
          stripeEmail: "",
          error: "",
          stripe: null,
          loading: false,
          elements: null,
          iscardvalid:false,
    };
  },
  methods: {    
     async  goTototalByProvinceStep() {
           this.$store.commit("orderstore/setpaymenttype", this.paymenttype);
            this.$store.commit("cartstore/updateCartUI", "totalbyprovince");;
    },
      async  goToCheckOutStep() {
         this.$store.commit("orderstore/setpaymenttype", this.paymenttype);
         this.$store.commit("cartstore/updateCartUI", "checkout");
    },
  }
};
</script> 
 
<style lang="scss" scoped>
input,
button {
  width: 100%;
}

button {
  margin-top: 20px;
}

.payment {
  margin-top: 20px;
}

.stripe-card {
  margin-top: 10px;
  width: 100%;
  border: 1px solid #ccc;
  padding: 5px 10px;
}

.stripe-card.complete {
  border-color: green;
}

/* Global */

* {
  box-sizing : border-box;
}

body,
html {
  height     : 100%;
  min-height : 100%;
}

body {
  margin           : 0;
  background-color : #e7e7e7;
  font-family      : 'Roboto',
                     sans-serif;
}

/* Credit Card */

.credit-card {
  width            : 360px;
  height           : 280px !important;
  margin           : 60px auto 0;
  border           : 1px solid #ddd;
  border-radius    : 6px;
  background-color : #fff;
  box-shadow       : 1px 2px 3px 0px rgba(0,0,0,0.10);
}

.form-header {
  height        : 28%;
  padding       : 20px 30px 0;
  border-bottom : 1px solid #E1E8EE;
}

.form-body {
  height  : 340px;
  padding : 30px 30px 20px;
  margin-bottom:358px;
}

@media screen and (max-width: 770px) {
    .form-body {
      height  : 340px;
      padding : 30px 30px 20px;
      margin-bottom:358px;
    }
}


/* Title */

.title {
  margin    : 0;
  color: #88B04B;
  font-size : 28px;
    font-family: "Nunito Sans", "Helvetica Neue", sans-serif;
}

/* Common */

.card-number,
.cvv-input input,
.month select,
.paypal-btn,
.proceed-btn,
.year select {
  height : 42px;
}

.card-number,
.month select,
.year select {
  font-size   : 14px;
  font-weight : 100;
  line-height : 14px;
}

.card-number,
.cvv-details,
.cvv-input input,
.month select,
.year select {
  color   : #86939e;
  opacity : .7;
}

/* Card Number */

.card-number {
  width         : 100%;
  margin-bottom : 20px;
  padding-left  : 20px;
  border        : 2px solid #e1e8ee;
  border-radius : 6px;
}

/* Date Field */

.month select,
.year select {
  -moz-appearance     : none;
  -webkit-appearance  : none;
  width               : 145px;
  margin-bottom       : 20px;
  padding-left        : 20px;
  border              : 2px solid #e1e8ee;
  border-radius       : 6px;

  background-position : 85% 50%;
}

.month select {
  float : left;
}

.year select {
  float : right;
}

/* Card Verification Field */

.cvv-input input {
  width         : 145px;
  float         : left;
  padding-left  : 20px;
  border        : 2px solid #e1e8ee;
  border-radius : 6px;
  background    : #fff;
}

.cvv-details {
  float         : right;
  margin-bottom : 20px;
  font-size     : 12px;
  font-weight   : 300;
  line-height   : 16px;
}

.cvv-details p {
  margin-top : 6px;
}

/* Buttons Section */

.paypal-btn,
.proceed-btn {
  cursor: pointer;
  width         : 100%;
  border-color  : transparent;
  border-radius : 6px;
  font-size     : 16px;
}

.proceed-btn {
  margin-bottom : 10px;
  background    : #7dc855;
}

.paypal-btn a,
.proceed-btn a {
  text-decoration : none;
  cursor          : pointer;
}

.proceed-btn a {
  color : #fff;
}

.paypal-btn a {
  color : rgba(242, 242, 242, 0.7);
}

.paypal-btn {
  padding-right : 95px;

}





/****************** Spinner ***************/
@-webkit-keyframes spinner-border {
    to {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg)
    }
}

@keyframes spinner-border {
    to {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg)
    }
}

.spinner-border {
    display: inline-block;
    width: 2rem;
    height: 2rem;
    vertical-align: text-bottom;
    border: .25em solid currentColor;
    border-right-color: transparent;
    border-radius: 50%;
    -webkit-animation: spinner-border .75s linear infinite;
    animation: spinner-border .75s linear infinite
}

.spinner-border-sm {
    width: 1rem;
    height: 1rem;
    border-width: .2em
}

@-webkit-keyframes spinner-grow {
    0% {
        -webkit-transform: scale(0);
        transform: scale(0)
    }

    50% {
        opacity: 1
    }
}

@keyframes spinner-grow {
    0% {
        -webkit-transform: scale(0);
        transform: scale(0)
    }

    50% {
        opacity: 1
    }
}

.spinner-grow {
    display: inline-block;
    width: 2rem;
    height: 2rem;
    vertical-align: text-bottom;
    background-color: currentColor;
    border-radius: 50%;
    opacity: 0;
    -webkit-animation: spinner-grow .75s linear infinite;
    animation: spinner-grow .75s linear infinite
}

.spinner-grow-sm {
    width: 1rem;
    height: 1rem
}


/*********************************************/
</style> 