<template>
  <div id="app">

    <div v-if="cartUIStatus === 'idle'" class="payment">

      <small class="card-error">{{error}}</small>
<!--       <button
        class="pay-with-stripe button"
        :disabled="!complete || !stripeEmail || loading"
      >Pay with credit card</button> -->
    </div>

  <div class="nes-container with-title is-centered">
   <form class="credit-card" @submit.prevent="handleSubmit">
      <div class="form-header">
        <h4 class="title">{{ $t("Credit card detail") }}</h4>
      </div>

      <div class="form-body">
        <!-- Card Number -->
        <input type="text" class="card-number" placeholder="Full Name">
        <!-- Card Number -->
            <input
              placeholder="Email"
              type="email"
              name="email"
              v-model="stripeEmail"
              id="email_field"
              class="card-number"
            />

          <div class="nes-field">
            <label for="email_field">{{ $t("Credit Card") }} </label>
            <div id="stripe-element-mount-point" class="nes-input" />
          </div>

        <!-- Buttons -->

        <button type="submit" class="proceed-btn"  :disabled="false"  > {{ $t("Proceed") }} 
         <span v-if="loading" id="spinnercomplete" class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>

        </button>
      </div>
         
      </form>
    </div>
         <button class="pay-with-stripe" @click="goToPaymentTypeStep">{{ $t("Previous") }}</button>
  </div>
</template>
 
<script>
///import { Card, handleCardPayment } from "vue-stripe-elements-plus";


import { mapState, mapGetters } from "vuex";

export default {
  data() {
    return {

          token:null,
          complete: false,
          stripeOptions: {
          },
          stripeEmail: "",
          error: "",
          stripe: null,
          loading: false,
          elements: null,
          iscardvalid:false,
          
          l_cart:[],
          cartItems:[],
          orderdata:{
            userId :null,
            paymentType:null,
            totalAmount:this,
            totalAmountttx:null,
            order_id:null,
            cartItems:[],
            paymentstatus:null,   
         }
    };
  },
  components: {  },
  computed: {
    ...mapState(["cartUIStatus"]),
    ...mapGetters({ getcartTotal: 'orderstore/getcartTotal', getcartTotalTX: 'orderstore/getcartTotalTax',  cartCount: 'cartstore/cartCount',  getpaymenttype: 'orderstore/getpaymenttype' }),
    ...mapGetters({ 
            cartCount: 'cartstore/cartCount',                    
            user: "auth/authUser",
            isAuth: "auth/isAuthenticated",
            isAdmin: "auth/isAdmin",
            userAuthority: "auth/userAuthority",
        }),
  },
  created() {
       
  },
 async mounted()  {
         await  this.$store
            .dispatch("cartstore/fetchCartByClientId",this.user.id).then((cart)=>{
                  this.l_cart = [... cart];
            });

       this.cartItems = [];
       this.l_cart.forEach(item => {
       let  cartobj = {};
            cartobj.name = item.productName;
            cartobj.price = item.productPrice;
            cartobj.discount = item.productDiscount;
            cartobj.quantity = item.productQuantity
            cartobj.size = item.size
            cartobj.weight = item.weight
            cartobj.color_extraprice = item.color_extraprice
            cartobj.id = item.productId
            cartobj.productphotoid = item.productphotoid
            console.log('tag   cartobj  ', cartobj)
        this.cartItems.push(cartobj);
      });


        let ordernumber = (new Date()).getTime() + Math.trunc(365 * Math.random());
        this.orderdata = {};
        this.orderdata.userId = this.user.id;
        this.orderdata.paymentType = this.getpaymenttype;
        this.orderdata.totalAmount = this.getcartTotal;
        this.orderdata.totalAmountttx = this.getcartTotalTX;
        this.orderdata.cartItems = this.cartItems;   
        this.orderdata.order_id = ordernumber;     

      if(this.getpaymenttype !== 'Card'){
          this.orderdata.paymentstatus = "Web_Cash"
          await this.$store.dispatch("orderstore/createOrderWeb",this.orderdata); 

          this.$store.commit("orderstore/setordernumber", ordernumber);
          this.$store.commit("cartstore/updateCartUI", "success");
      }else{
                
                this.token = localStorage.getItem('token');
                const ELEMENT_TYPE = "card";

                this.stripe =  Stripe("pk_test_51Iyjy5EgszZ86rG6wHOvkjcadeO4ZyCI7fWtjtbvCsw9YssrsRmHtReF29DE67tGMkjAjvN3IaXfiUfiweHMcpMR0099lhh9OL");
                this.elements = this.stripe.elements();
                const element = this.elements.create('card', {
                                                                hidePostalCode: true,
                                                                style: {
                                                                    base: {
                                                                    iconColor: 'red',
                                                                    color: 'red',
                                                                    lineHeight: '40px',
                                                                    fontWeight: 300,
                                                                    fontFamily: 'Helvetica Neue',
                                                                    fontSize: '15px',

                                                                    '::placeholder': {
                                                                        color: '#CFD7E0',
                                                                    },
                                                                    },
                                                                }
                                                                });
                element.mount("#stripe-element-mount-point");
                var vm = this;
                element.on('change', function(event) {
                    if (event.complete) {
                        vm.iscardvalid =  true;
                    } else if (event.error) {
                        vm.iscardvalid  = false;
                    }
                    });
      } 
  },

  methods: {
    signout: function () {
      localStorage.removeItem('token');
      this.token = null;
      this.$router.go();
    },

  async fetchCartWithProductPhotosByClientId(){
        return await  this.$store
            .dispatch("cartstore/fetchCartWithProductPhotosByClientId",this.user.id).then((cart)=>{
                  this.l_cart = [... cart];
            });
    },

    goToPaymentTypeStep(){
        this.$store.commit("cartstore/updateCartUI", "payementtype");
    },
    clearCart() {
      this.complete = false;
      this.$store.commit("cartstore/clearCart");
    },
    async  handleSubmit(event) {
    if (this.loading) return;
      this.loading = true;
      const cardElement = this.elements.getElement("card");
      const { name, email } = Object.fromEntries(
        new FormData(event.target)
      );
      const billingDetails = {
            name,
            email
          };

       try {
       let amountc = 48.58 // Number(this.cartTotalTX);
       let emailc = email;
       const response = await this.$store.dispatch("orderstore/createConfirmCardPayment",{amountc,emailc});  
       const { secret} =  response.data;
       const paymentMethodReq = await this.stripe.createPaymentMethod({
          type: "card",
          card: cardElement,
          billing_details: billingDetails,
        });

       const { error } = await this.stripe.confirmCardPayment(secret, {
          payment_method: paymentMethodReq.paymentMethod.id,
          receipt_email:email
        });
        let paymentMethodid = paymentMethodReq.paymentMethod.id        
        this.loading = false;
       // this.clearCart();


    if(this.getpaymenttype === 'Card'){
      this.orderdata.paymentstatus = "Web_"+secret
      await this.$store.dispatch("orderstore/createOrderWeb",this.orderdata);  
    }
/* await this.$store.dispatch("orderstore/createConfirmCardPayment",{amountc,emailc});  */

        this.$store.commit("cartstore/updateCartUI", "success");

      } catch (error) {
        console.log("error", error); 
        this.loading = false;
      }
    }

  }
};
</script> 


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
  height           : 400px;
  margin           : 60px auto 0;
  border           : 1px solid #ddd;
  border-radius    : 6px;
  background-color : #fff;
  box-shadow       : 1px 2px 3px 0px rgba(0,0,0,0.10);
}

.form-header {
  height        : 60px;
  padding       : 20px 30px 0;
  border-bottom : 1px solid #E1E8EE;
}

.form-body {
  height  : 340px;
  padding : 30px 30px 20px;
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