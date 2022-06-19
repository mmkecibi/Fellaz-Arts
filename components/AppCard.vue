<template>
  <div id="app">
    <div v-if="cartUIStatus === 'idle'" class="payment">
      <h3>{{ $t("Please enter your payment details") }}:</h3>
      <label for="card">{{ $t("Credit Card") }}</label>
      <br />

      <!-- card
        class="stripe-card"
        id="card"
        :class="{ complete }"
        stripe="pk_test_8ssZgwB2PiH0ajJksD2gVbsG00u7Y3IDPv"
        :options="stripeOptions"
        @change="complete = $event.complete"
      / -->
      <small class="card-error">{{error}}</small>
      <button
        class="pay-with-stripe button"
        :disabled="!complete || !stripeEmail || loading"
      >{{ $t("Pay with credit card") }}</button>
    </div>

    <div v-else class="statussubmit">
      <div v-if="cartUIStatus === 'failure'">
        <h3>{{ $t("Oh No") }}!</h3>
        <p>{{ $t("Something went wrong") }}!</p>
        <button @click="clearCart">{{ $t("Please try again") }}</button>
      </div>

      <div v-else-if="cartUIStatus === 'loading'" class="loadcontain">
        <h4>{{ $t("Please hold, were filling up your cart with goodies") }}</h4>
        <p>{{ $t("Placeholder loader") }}</p>
      </div>

      <div v-else-if="cartUIStatus === 'success'" class="loadcontain">
        <h4>{{ $t("Success") }}!</h4>
      </div>
    </div>




    <div class="nes-container with-title is-centered">
      <form @submit.prevent="handleSubmit">
        <fieldset :class="{ dis: loading }" class="fields">
          <div class="nes-field"></div>
          <div class="nes-field">
            <label for="name_field">{{ $t("Name") }}</label>
            <input
              placeholder="Jane Doe"
              type="text"
              name="name"
              id="name_field"
              class="nes-input"
            />
          </div>
          <div class="nes-field">
            <label for="email_field">{{ $t("Email") }}</label>
            <input
              placeholder="jane.doe@example.com "
              type="email"
              name="email"
              v-model="stripeEmail"
              id="email_field"
              class="nes-input"
            />
          </div>
          <div class="nes-field">
            <label for="phone_field">{{ $t("Phone") }}</label>
            <input
              placeholder=""
              type="phone"
              name="phone"
              id="phone_field"
              class="nes-input"
            />
          </div>
          <div class="nes-field">
            <label for="address_field">{{ $t("Address") }}</label>
            <input
              placeholder="1234 Sycamore Street"
              type="text"
              name="address"
              id="address_field"
              class="nes-input"
            />
          </div>
          <div class="nes-field">
            <label for="city_field">{{ $t("City") }}</label>
            <input
              placeholder="Reno"
              type="text"
              name="city"
              id="city_field"
              class="nes-input"
            />
          </div>
          <div class="nes-field">
            <label for="state_field">{{ $t("State") }}</label>
            <input
              placeholder="Nevada"
              type="text"
              name="state"
              id="state_field"
              class="nes-input"
            />
          </div>
          <div class="nes-field">
            <label for="zip_field">{{ $t("Zip") }}</label>
            <input
              placeholder="89523"
              type="text"
              name="zip"
              id="zip_field"
              class="nes-input"
            />
          </div>
          <div class="nes-field">
            <label for="email_field">{{ $t("Credit Card") }}</label>
            <div id="stripe-element-mount-point" class="nes-input" />
          </div>
        </fieldset>
        <div class="nes-field">
          <button
            type="submit"
           
            :disabled="!iscardvalid || !stripeEmail"
           
          >
          Pay {{ cartTotal | dollar  }}
           
          </button>
        </div>
      </form>
    </div>
    <small>
      Test using these Stripe test credit card numbers with any CVC, postal code, and expiration date in the future:
      <ul>
        <li>
          <span class="cc-number">4242 4242 4242 4242</span>
        </li>
        <li>
          <span class="cc-number">4000 0027 6000 3184</span> (requires authentication, will trigger a pop-up)
        </li>
        <li>
          <span class="cc-number">4000 0000 0000 9995</span> (will decline with a decline code of insufficient funds)
        </li>
      </ul>
    </small>

  </div>
</template>
 
<script>
///import { Card, handleCardPayment } from "vue-stripe-elements-plus";


import { mapState, mapGetters } from "vuex";

export default {
  components: {  },
  computed: {
    ...mapState(["cartUIStatus"]),
    ...mapGetters({ cartTotal: 'cartstore/cartTotal',  cartCount: 'cartstore/cartCount' }),
  },
  mounted() {

    this.token = localStorage.getItem('token');
    // create a PaymentIntent on Stripe with order information
   // this.$store.dispatch("createPaymentIntent");
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
      
  },
  data() {
    return {
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
    signout: function () {
      localStorage.removeItem('token');
      this.token = null;
      this.$router.go();
    },
    clearCart() {
      this.complete = false;
      this.$store.commit("cartstore/clearCart");
    },
    async  handleSubmit(event) {

     if (this.loading) return;
      this.loading = true;
      const cardElement = this.elements.getElement("card");
      const { name, email,phone, address, city, state, zip } = Object.fromEntries(
        new FormData(event.target)
      );
      const billingDetails = {
            name,
            email,
            phone,
            address: {
              city,
              line1: address,
              state,
              postal_code: zip,
              country:"ca"
            }
          };

       try {
       let amountc = Number(this.cartTotal);
       let emailc = email;
       const response = await this.$store.dispatch("cartstore/createConfirmCardPayment",{amountc,emailc});  
       const { secret} =  response.data;
       const paymentMethodReq = await this.stripe.createPaymentMethod({
          type: "card",
          card: cardElement,
          billing_details: billingDetails,
        });
console.log('tag  paymentMethodReq   ', paymentMethodReq)
       const { error } = await this.stripe.confirmCardPayment(secret, {
          payment_method: paymentMethodReq.paymentMethod.id,
          receipt_email:email
        });
        let paymentMethodid = paymentMethodReq.paymentMethod.id        
        this.loading = false;
        this.clearCart();
        this.$router.push("/success");
      } catch (error) {
        console.log("error", error);
        this.loading = false;
      }
    }
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
</style> 