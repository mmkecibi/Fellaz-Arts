<template>
  <div class="storegrid" v-if="filteredprice.length > 0" style="position: relative">
 <img v-if="displayloadingall" src="img/loader_block.gif" />
   <transition-group name="items" tag="section" class="content">
      <div v-for="item in filteredprice" :key="item.id" class="item">

        <div class="img-contain">        
          <NuxtLink :to="`product/${item.id}`">
              <img v-if="item.photo" :src="`${item.photo[0]}`"  />
              <img v-else src="/products/avatar_product.png"   />
          </NuxtLink>
        </div>
        <star-rating
          :rating="item.starrating"
          active-color="#000"
          :star-size="15"
          :show-rating="false"
          style="margin: 5px 0"
        ></star-rating>
        <h3>{{($i18n.locale === 'en'?item['name']:item['name_'+$i18n.locale])}}</h3>
        <div  v-if="item.discount > 0"> 
        <img class="specialoffercss" src="img/special-offer.jpeg" /> 

            <span class="regularprice">{{ item.unitprice | dollar }}</span>
            <h4 class="price">{{ item.unitprice - item.discount | dollar }} </h4>
           
        </div>
        <div v-else>
            <h4 class="price">{{ item.unitprice | dollar }}</h4>
        </div>
        <NuxtLink :to="`product/${item.id}`">
          <button class="multi-item">{{ $t("View Item") }} ></button>
        </NuxtLink>
      </div>
    </transition-group>
    <aside>
    <div class="col-md-6">
      <div class="form-group">
        <label>{{ $t("Category") }}</label>
        <select class="form-control" v-model="categoryId" @change="onchangecat">
          <option disabled selected>-- {{ $t("Select parent category") }} --</option>
          <option v-for="category of allcategories" :key="category.id" :value="category.id">{{($i18n.locale === 'en'?category['name']:category['name_'+$i18n.locale])}}</option>
        </select>
      </div>
    </div>

      <h3>{{ $t("Special Sale") }}</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam libero iusto nemo laboriosam perferendis voluptas ullam officiis, quibusdam quas quam eveniet est fugit delectus corporis incidunt nam esse suscipit itaque?</p>
      <h3>{{ $t("Filter by Price") }}:</h3>
      <p style="margin-top: 5px">
        {{ $t("Max Price") }}
        <strong>${{ pricerange }}</strong>
      </p>
      <input
        class="slider"
        id="pricerange"
        type="range"
        v-model="pricerange"
        :min="min"
        :max="max"
        step="0.1"
      />
      <span class="min">${{ min }}</span>
      <span class="max">${{ max }}</span>


    <br />
    <div class="nextprevious float-left">
      <button
        @click.prevent="prevproduct"
        :hidden="getprevshow"
        class="previous round"
      >&#8249;
      <span v-if="displayloadingnext" id="spinnerprev" class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
      </button>
    </div>
    <div class="nextprevious float-right">
      <button
        @click.prevent="nextproduct"
        :hidden="getnextshow"
        class="next round"
      >
        &#8250;
        <span v-if="displayloadingprev" id="spinnernext" class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
      </button>
    </div>

    </aside>
  </div>
  <div v-else style="float: left; margin-left: 20%">
        <div class="loader"><img src="/img/loader_block.gif" /></div>
        <br/><br/><br/><br/><br/><br/>
                <br/><br/><br/><br/><br/><br/>
                        <br/><br/><br/><br/><br/><br/>
  </div>
</template>
<script>
import StarRating from "vue-star-rating/src/star-rating.vue";
import { mapGetters } from "vuex";

export default {

  data() {
    return {
      products:[],
      categories:[],
      categoryId:0,
      min: 0,
      max: 200,
      pricerange: 200,
      displayloadingnext:false,
      displayloadingprev:false,
      displayloadingall:true,
    };
  },
  computed: {
    filteredprice() {
      console.log("  this.products  ",this.products)
      return this.products.filter(el => el.unitprice < this.pricerange);
    },
    allcategories() {
      return this.categories;
    },
    getnextshow: {
        get: function () {
        return !this.$store.state.product.nextshow;
        },
    },
    getprevshow: {
        get: function () {
        return !this.$store.state.product.prevshow;
        },
    },
        ...mapGetters({ 
                      cartCount: 'cartstore/cartCount',
                      user: "auth/authUser",
                      isAuth: "auth/isAuthenticated",
                      isAdmin: "auth/isAdmin",
                      userAuthority: "auth/userAuthority",
                  }),

  },
  components: {
    StarRating
  },
    methods: {
      onchangecat(){
          this.$store.dispatch("product/setcatid",this.categoryId);
          this.fetchgetProductByPage("");
      },

      async getAllCategories(){
          return await  this.$store
              .dispatch("product/fetchallcategories")
              .then((result) => {
                console.log('tag  result   ', result.data)
                this.categories = result.data;
              })
              .catch((error) => this.$toasted.error(error, { duration: 3000 }));
          },

      async fetchCartByClientId(){
        var clientid = this.user.id;
          return await  this.$store
              .dispatch("cartstore/fetchCartByClientId",clientid)
              .then((result) => {
              }) .catch((error) => console.log(error));
           //   .catch((error) => this.$toasted.error(error, { duration: 3000 }));
          },
          
          
      async fetchgetProductByPage(nextprev){
            if(nextprev === "next")
                  this.displayloadingnext  = true;
            else
              if(nextprev === "")
                  this.displayloadingall = true;
              else
                  this.displayloadingprev = true;
              return await  this.$store
                  .dispatch("product/fetchgetProductByPage",nextprev)
                  .then((result) => {

                      this.products = result; 
                      if(nextprev === "next")
                            this.displayloadingnext  = false;
                      else
                          if(nextprev === "")
                              this.displayloadingall = false;
                          else
                              this.displayloadingprev = false;
                  })
                  .catch((error) => { this.$toasted.error(error, { duration: 3000 })});
              },

      nextproduct() {
          this.fetchgetProductByPage("next")
      },
      prevproduct() {
        this.fetchgetProductByPage("prev")
      },

    },
    created(){
      this.displayloadingall = true;
      this.fetchCartByClientId();
      this.getAllCategories();
      this.fetchgetProductByPage("");
  },
};
</script>

<style lang="scss" scoped>

.storegrid{
  padding-top: 50px;
}
.content {
  height: 100%;
  width: 100%;
}

.img-contain {
  max-height: 200px;
  display: flex;
  align-content: center;
  align-items: center;
  img {
    width: 100%;
  }
}
.item {
  max-height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px 0;
}

aside {
  height: 100%;
  width: 100%;
}

.max {
  display: inline-block;
  float: right;
}
.previous {
  background-color: #4bacff;
  color: rgb(250, 248, 248);
  font-size: 0.8vw;
  border-style: none;
}

.next {
  background-color: #4bacff;
  color: rgb(250, 248, 248);
  font-size: 0.8vw;
  border-style: none;
}

.round {
  border-radius: 8%;
}


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

</style>