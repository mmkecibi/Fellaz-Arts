<template>
  <div>
    <section class="item-contain">
      <section class="imgsection">
             <span  v-if="product.productcolorphotos.length > 0" >
                    <span v-for="(pic, key) in JSON.parse(product.productcolorphotos[indexpic].photo)" :key="key">
                          <img v-if="pic" :src="pic" class="img" />
                          <img v-else src="/products/avatar_product.png" class="img" />
                    </span>
             </span>
             <span  v-else >
                       <img  src="/products/avatar_product.png" class="img" />
             </span>
      </section>
      <section class="product-info">
        <h1>{{($i18n.locale === 'en'?product['name']:product['name_'+$i18n.locale])}}</h1>
        <star-rating
          :rating="product.starrating"
          :star-size="15"
          :show-rating="false"
          active-color="#000"
          style="margin: 5px 0"
        ></star-rating>
        <h4 class="price">{{ newproductprice  | dollar }}</h4>
        <p>{{($i18n.locale === 'en'?product['description']:product['description_'+$i18n.locale])}}</p>
         <div class="product-options">
          <div class="quantity">
            <button class="update-num" @click="quantitypriceminus()">-</button>
            <input type="number" v-model="quantity" />
            <button class="update-num" @click="quantitypriceplus()">+</button>
          </div>
          <div v-if="product.size !== undefined && product.size.length > 0" class="size">
            <select v-model="size" class="size-picker" @change="changePriceForSelectedSize(size)">
              <option :value="null" disabled hidden>{{$t("size")}}</option>
               <option :value="0" >{{$t("size")}}</option>
              <option v-for="(size, key) in product.size" :key="key" :value="size">{{ size.size }}</option>
            </select>
          </div>

          <div v-if="product.weight !== undefined && product.weight.length > 0" class="size">
            <select v-model="weight" class="size-picker" @change="changePriceForSelectedWeight(weight)">
              <option :value="null" disabled hidden>{{$t("weight")}}</option>
               <option :value="0" >{{$t("weight")}}</option>
              <option v-for="(weight, key) in product.weight" :key="key" :value="weight">{{ weight.weight }}</option>
            </select>
          </div>
        </div>
        <br/>
          <div v-if="product.productcolorphotos !== undefined && product.productcolorphotos.length > 0"  >
                <span v-for="(prodcolorphoto, key) in product.productcolorphotos" :key="key" :value="prodcolorphoto" 
                class="circle" :style="{color: prodcolorphoto.color}"
                @click="changePriceForSelectedColor(prodcolorphoto,key)"  >
                 </span>
          </div>
        <br/>
        <p>
          <button class="button purchase" @click="cartAdd">{{$t("Add to Cart")}}</button>
        </p>
      </section>
    </section>
    <hr />
    <div class="review">
      <h2>{{$t("Reviews")}}</h2>
      <!-- maybe an image of a person? -->
      <star-rating
        :rating="product.starrating"
        active-color="#000"
        :star-size="15"
        :show-rating="false"
        style="margin: 5px 0"
      ></star-rating>
      <p>{{ product.review }}</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum iusto placeat consequatur voluptas sit mollitia ratione autem, atque sequi odio laborum, recusandae quia distinctio voluptatibus sint, quae aliquid possimus exercitationem.</p>
    </div>
    <app-featured-products />
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";
import StarRating from "vue-star-rating/src/star-rating.vue";
import AppFeaturedProducts from "~/components/AppFeaturedProducts.vue";

export default {
  async fetch({ store, params }) {
      await store.dispatch("product/fetchProductDetailsById", params.id);
    },
  components: {
    StarRating,
    AppFeaturedProducts
  },
  data() {
    return {
      id: this.$route.params.id,
      quantity: 1,
      size: null,
      indexpic:0,
      photo: [],
      weight: null,
      showSizeRequiredMessage: false,
      tempcart: [],
      productprice:0, // this object should be the same as the json store object, with additional params, quantity and size
      newproductprice:0,
      size_extraprice:0,
      weight_extraprice:0,
      color_extraprice:0,
    };
  },
  computed: {
    product() {
      //return this.$store.state.product.storedata.find(el => el.id === this.id);
/*return this.$store.state.product.product*/
          let prod = {... this.$store.state.product.product}
          if(prod !== undefined && prod !== null){
                prod.size  = JSON.parse(prod.size);
                console.log(' prod.size  : ', prod.size )
                prod.weight = JSON.parse(prod.weight);  
                                console.log(' prod.productcolorphotos[0].photo  : ', prod.productcolorphotos.length)
                if(prod.productcolorphotos.length > 0){
                        this.photo = prod.productcolorphotos[0].photo;
                        this.photo  = JSON.parse(this.photo);
                        this.productprice  = prod.unitprice
                     //   this.color_extraprice = prod.productcolorphotos[0].extraprice;
                     //   this.newproductprice  = prod.unitprice + this.color_extraprice;
                      //  this.color_extraprice = prod.productcolorphotos[0].extraprice;
                      //  this.newproductprice = this.productprice * this.quantity + this.size_extraprice + this.weight_extraprice + this.color_extraprice;
                }else{
                        this.productprice  = prod.unitprice
                        this.newproductprice  = prod.unitprice
                }
          }
     return prod

    },
        ...mapGetters({ 
                      cartCount: 'cartstore/cartCount',
                      user: "auth/authUser",
                      isAuth: "auth/isAuthenticated",
                      isAdmin: "auth/isAdmin",
                      userAuthority: "auth/userAuthority",
                  }),
  },
  mounted() {
         if(this.product.productcolorphotos.length > 0){
                this.color_extraprice = this.product.productcolorphotos[0].extraprice;
                this.newproductprice  = this.product.unitprice + this.color_extraprice;
           }
  },
  methods: {
    calculateproductprice(){
          this.newproductprice = (this.productprice - this.product.discount   + this.size_extraprice + this.weight_extraprice + this.color_extraprice)* this.quantity;
    },
    quantitypriceplus(){
      this.quantity++;
      this.calculateproductprice();
    },
    quantitypriceminus(){
      this.quantity > 0 ? this.quantity-- : this.quantity = 1;
      if(this.quantity === 0)
      this.quantity = 1;
       this.calculateproductprice();    
    },

    changePriceForSelectedColor(prodcolorphoto,key){
      this.indexpic = key;
      this.color_extraprice = this.product.productcolorphotos[key].extraprice;
      this.calculateproductprice();

    },

    changePriceForSelectedSize(size){
      if(size === 0)
        this.size_extraprice = 0;
      else
        this.size_extraprice = size.size_extraprice;
      this.calculateproductprice();
    },

    changePriceForSelectedWeight(weight){
      if(weight === 0)
        this.weight_extraprice = 0;
      else
        this.weight_extraprice = weight.weight_extraprice;  
      this.calculateproductprice();
    },
    
    cartAdd() {
     /* if (this.product.sizes && !this.size) {
        this.showSizeRequiredMessage = true;
        return;
      }*/
      let item = {};
      if(this.product.productcolorphotos.length > 0){
              item.productphotoid = this.product.productcolorphotos[this.indexpic].id;
              item.color_extraprice = this.product.productcolorphotos[this.indexpic].extraprice;
      }else{
              item.productphotoid = 0;
              item.color_extraprice = 0;
      }    
      item.productName = this.product.name;
      item.productPrice = this.product.unitprice;
      item.productDiscount  = this.product.discount;
      item.productId  = this.product.id;
      item.clientid = this.user.id;
      item.productDetail  = this.product.description;
      item.productQuantity  = this.quantity;
      item.size   = JSON.stringify(this.size);
      item.weight = JSON.stringify(this.weight);
      this.tempcart.push(item);
   //   this.$store.commit("product/addToCart", item);
         this.$store.dispatch("cartstore/addItemToCart", item);
    }
  }

};
</script>

<style>
input[type="number"] {
  color: #444242;
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 3px;
  font-weight: 400;
  font-size: 18px;
}
.item-contain {
  margin-left: 18%;
  width: 80%;
  display: grid;
  justify-content: space-around;
  grid-template-columns: 1fr 2fr;
}

section.product-info{
  margin-left: 8%;
}

@media screen and (max-width: 650px) {
.item-contain {
  margin-left: 88%;
  width: 80%;
  display:inline;

}

section.imgsection{
  margin-left: 28%;
}

section.product-info{
  margin-left: 18%;
}
  .review {
    width: 90%;
    margin-left: 4%;
  }
}
</style>