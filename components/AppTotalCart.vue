<template>
  <div>
    <section>
      <br/>
      <section class="payment">      </section>
        <div  class="total">
          <div class="caption">
            <p class="golden-title ">
               {{ $t("Subtotal") }} :
            </p>

            <div v-for="item in taxes" :key="item.id">
            <p class="golden-title ">{{item.name}}</p>
            </div>
            <p  class="golden-title ">{{ $t("Shipping") }}:</p>
            <p class="golden-title ">{{ $t("Total") }}</p>
          </div>
          <div class="num">
          <p  class="golden">{{ cartTotal | dollar }}</p>
             <div v-for="item in taxes" :key="item.id">
            <p class="golden">{{(item.value / 100).toPrecision(1)}}</p>
            </div>

            <p  class="golden">{{ $t("Free Shipping") }}</p>
           <p class="golden">{{ cartTotalTaxe | dollar }} </p> 
          </div>
      <button class="pay-with-stripe" @click="goToShippingStep">{{ $t("Previous") }}</button>
      <button class="pay-with-stripe shipping_next " @click="goToPaymentStep" >{{ $t("Next") }}</button>
      <div class="clearfix"></div>    
      </div> 
    </section>
    
    <br/><br/><br/><br/><br/><br/><br/><br/>
  </div>
</template>

<script>
import { PROVINCES } from "@/helpers/export";
import AppCard from "~/components/AppCard.vue";
import { mapState, mapGetters } from "vuex";

export default {
  async fetch({ store}) {
      await store.dispatch("orderstore/fetchgetTaxes");
    },
  name: 'AppCardDisplay',
  data() {
    return {
      provinces:PROVINCES,
      provaince: "default",
      l_cart:[],
    };
  },
  components: {
    AppCard
  },
  computed: {
    cartTotal(){
      let total = 0;

      this.l_cart.forEach(item => {
        let size_extraprice   = (item.size == null ? 0 : item.size.size_extraprice);
        let weight_extraprice = (item.weight == null ? 0 : item.weight.weight_extraprice);

        total +=  this.calculateproductprice(item.productPrice , item.productDiscount , size_extraprice , weight_extraprice , item.color_extraprice, item.productQuantity )
      //  total += (item.productQuantity * (item.productPrice - item.productDiscount))
      });
      this.$store.commit("orderstore/setcartTotal", total);

      let taxess = this.$store.state.orderstore.taxes;

      let totaltx = 0;
            
      taxess.forEach(tx => {
        totaltx += (tx.value / 100) * total
      });
      let totaltxes = total + totaltx;
      this.cartTotalTaxe = totaltxes
      this.$store.commit("orderstore/setcartTotalTaxe", totaltxes);

      return total;
    },    
    taxes() {
      console.log( " this.$store.state.orderstore.taxes  ", this.$store.state.orderstore.taxes)
      return this.$store.state.orderstore.taxes;
    },
            ...mapGetters({ 
                      cartCount: 'cartstore/cartCount',                    
                      user: "auth/authUser",
                      isAuth: "auth/isAuthenticated",
                      isAdmin: "auth/isAdmin",
                      userAuthority: "auth/userAuthority",
                      shippingprovince: "orderstore/getshippingprovince",
                  }),
  },
  methods: {
  async fetchCartWithProductPhotosByClientId(){
        return await  this.$store
            .dispatch("cartstore/fetchCartWithProductPhotosByClientId",this.user.id).then((cart)=>{
                  this.l_cart = cart;
            })
            .catch((error) => { console.log(error)});
    },
  async fetchgetTaxes(){
        return await  this.$store
            .dispatch("orderstore/fetchTaxesByProvince",this.shippingprovince)
            .then((result) => {
              console.log( " fetchTaxesByProvince " , result)
            })
            .catch((error) => { this.$toasted.error(error, { duration: 3000 })});
    },
    calculateproductprice(productprice , discount , size_extraprice , weight_extraprice , color_extraprice, quantity){ 
          return  (productprice - discount + size_extraprice + weight_extraprice + color_extraprice)* quantity; 
    },
    addToCart(item) {
      item.user_id = this.user.id
      this.$store.commit("cartstore/addOneToCart", item);
      this.l_cart = [...this.$store.state.cartstore.cart];
    },
    removeOneFromCart(item) {

      item.user_id = this.user.id
      this.$store.commit("cartstore/removeOneFromCart", item);
      this.l_cart = [...this.$store.state.cartstore.cart];
    },
   removeAllFromCart  (item)  {
      item.user_id = this.user.id
      this.$store.commit("cartstore/removeAllFromCart", item);
                 console.log(' this.$store.state.cartstore.cart.length   ', this.$store.state.cartstore.cart.length)
      //if(this.$store.state.cartstore.cart.length > 1){
              this.l_cart = [...this.$store.state.cartstore.cart];
    //  }
    },
    async goToPaymentStep() { 
          this.$store.commit("cartstore/updateCartUI", "payementtype"); 
      },

    goToShippingStep() {
      this.$store.commit("cartstore/updateCartUI", "shipping");
    },
    gettaxbyprovince() {
      
    },
    
  },
    created(){
         this.fetchgetTaxes();
         this.fetchCartWithProductPhotosByClientId();
  },
};
</script>