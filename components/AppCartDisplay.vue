<template>
  <div>
    <section v-if="cartCount > 0">
      <table>
        <tr>
          <th>{{ $t("Product") }}</th>
          <th>{{ $t("Price") }}</th>
          <th>{{ $t("Quantity") }}</th>
          <th>{{ $t("Total") }}</th>
          <th></th>
        </tr>
        <tr v-for="item in l_cart" :key="item.id">
          <td>
            <img v-if=" item.productPhoto " :src="item.productPhoto[0]" :alt="item.productName" class="product-img" />
            <img v-else src="/products/avatar_product.png" class="product-img" />
            <h3 class="product-name"><span class="circle" :style="{color: item.color}"></span><strong>{{ item.productName }}</strong></h3>

            <div class="div-size-weight">          
                      <div v-if="item.size !== undefined && item.size !== null " class="size-weight">
                        <strong v-if="item.size" >{{ $t("Size") }}: {{ item.size.size }}</strong>
                      </div>
                      <div v-if="item.weight !== undefined && item.weight !== null " class="size-weight">
                        <strong v-if="item.weight" >{{ $t("Weight") }}: {{ item.weight.weight }}</strong>
                      </div>
            </div> 
          </td>
          <td >
            <strong class="price">{{ calculateproductprice(item.productPrice , item.productDiscount , (item.size == null ? 0 : item.size.size_extraprice) , (item.weight == null ? 0 : item.weight.weight_extraprice) , item.color_extraprice, 1 )  | dollar }}</strong>
          </td>
          <td >
          <div class="quantity">
            <button class="update-num" @click="removeOneFromCart(item)">-</button>
            <strong class="quantity-value-adjust"> {{ item.productQuantity }}</strong>
            <button class="update-num" @click="addToCart(item)">+</button>
          </div>

          </td>
          <td><strong  class="price">{{ calculateproductprice(item.productPrice , item.productDiscount , (item.size == null ? 0 : item.size.size_extraprice) , (item.weight == null ? 0 : item.weight.weight_extraprice) , item.color_extraprice, item.productQuantity )  | dollar }}</strong></td>

          <td>
            <button @click="removeAllFromCart(item)" class="delete-product">
              <i class="fas fa-trash"  ></i>
            </button>
          </td>
        </tr>
      </table>
      <br/>
      <section class="payment">     
          <button class="pay-with-stripe" @click="goToShippingStep">{{ $t("Next") }}</button> 
      </section>
    </section>
    <section v-else class="center">
      <p>{{ $t("Your cart is empty, fill it up") }}!</p>
      <button class="pay-with-stripe">
        <nuxt-link exact to="/">{{ $t("Back Home") }}</nuxt-link>
      </button>
    </section>
    <br/><br/><br/><br/><br/><br/><br/><br/>
  </div>
</template>

<script>
import AppCard from "~/components/AppCard.vue";
import { mapState, mapGetters } from "vuex";

export default {
  async fetch({ store}) {
      await store.dispatch("orderstore/fetchgetTaxes");
    },
  name: 'AppCardDisplay',
  data() {
    return {
      l_cart:[],
    };
  },
  components: {
    AppCard
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
  async fetchCartWithProductPhotosByClientId(){
        return await  this.$store
            .dispatch("cartstore/fetchCartWithProductPhotosByClientId",this.user.id).then((cart)=>{
                  this.l_cart = cart;
            })
            .catch((error) => { console.log(error)});
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

    goToShippingStep() {
      this.$store.commit("cartstore/updateCartUI", "shipping");
    },
   
  },
    created(){
         this.fetchCartWithProductPhotosByClientId();
  },
};
</script>