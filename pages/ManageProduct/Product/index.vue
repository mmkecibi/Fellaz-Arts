<template>
  <div class="products-box container">
    <span class="title">{{$t('Products')}}</span>
<img v-if="displayloadingall" src="/img/loader_block.gif" />

          <router-link to="/ManageProduct/Product/AddProduct">
              <button type="button" class="btn btn-success add-btn btn-lg">{{$t('Add a new Product')}}</button>
          </router-link>

      
<div  class="form-area" novalidate="novalidate" autocomplete="off">
  <div class="row">
      <div class="col-md-10">
          <div class="styled-input wide multi">
              <div class="first-name" >
                  <input type="text" name="name" v-model="search.name" autocomplete="off"  :placeholder= 'this.$t("Name")' data-placeholder-focus="false"  @click="emitFormData('name')" />
              </div>
              <div class="last-name" >
                  <input type="text" v-model="search.code" autocomplete="off"  :placeholder= 'this.$t("Code")' data-placeholder-focus="false"  @click="emitFormData('code')" />
              </div>
              <div class="city" >
                <input type="date"   v-model.trim="search.created_at" autocomplete="off"  :placeholder= 'this.$t("Date")'  data-placeholder-focus="false"  @click="emitFormData('date')" />
            </div>
            <div class="city" >

              <select class="form-control" v-model="categoryId" @change="onchangecat">
                <option disabled selected>--{{$t('Select parent category')}}--</option>
                <option v-for="category of allcategories" :key="category.id" :value="category.id">{{($i18n.locale === 'en'?category['name']:category['name_'+$i18n.locale])}}</option>
              </select>

            </div>
          </div>
      </div>
      <div class="col-md-2 no-pad-left-10">
          <button type="submit" class="primary-btn serach-btn" @click="submit_btn"><i class="fas fa-search"  ></i></button>
      </div>
  </div>
</div >
       <table class="table-area">
          <tr>
            <th>{{$t('Product')}}</th>
            <th>{{$t('price')}}</th>
            <th>{{$t('quantity')}}</th>
            <th></th>
            <th></th>
          </tr>
          <tr v-for="item in products" :key="item.id">
            <td>
              <img v-if="item.photo" :src="`${item.photo[0]}`" :alt="item.name" class="product-img" />
              <img v-else src="/products/avatar_product.png"  class="product-img" />
              <h3 class="product-name">{{($i18n.locale === 'en'?item['name']:item['name_'+$i18n.locale])}}</h3>
            </td>
            <td>
              <h4 class="price">{{ item.unitprice | dollar }}</h4>
            </td>
            <td>
              <strong> {{ item.stock }}</strong>
            </td>
            <td>
              <button  class="delete-product">
                <NuxtLink :to="`/ManageProduct/product/${item.id}`">
                  <i class="fa fa-edit  editicon"></i>  
                </NuxtLink>
              </button>
            </td>
            <td>
              <button @click="removeproduct(item.id)" class="delete-product">
                <i class="fa fa-trash  editicon"></i>
              </button>
            </td>
          </tr>
        </table>

<br />
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
  </div>
</template>

<script>
import ProductBox from '~/components/ManageProduct/ProductBox';
import { mapState, mapGetters } from "vuex";
export default {
  name: 'Product',
  data() {
    return {
            search:{
                name:null,
                code:null,
                created_at:null,
                searchtype:null
             },
      products:[],
      categories:[],
      categoryId:0,
      displayloading:false,
      displayloadingnext:false,
      displayloadingprev:false,
      displayloadingall:true,
    };
  },
  components : {ProductBox}, 

  /*async fetch({ store, params }) {
    await store.dispatch("product/fetchallproducts");
  },*/

  computed: {
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
            },


  methods: {

    emitFormData(input){
       if(input === "name"){
              this.search.searchtype = 'name'
              this.search.code = ''
              this.search.created_at = null
       }else
       if(input === "code"){
              this.search.searchtype = 'code'
              this.search.name = ''
              this.search.created_at = null
       }else
       if(input === "date"){
              this.search.searchtype = 'date'
              this.search.name = ''
              this.search.code = ''
       }
    },
    submit_btn(){
                if(this.search.searchtype  === "name"){
                      this.fnsearchbyname();
                }else
                if(this.search.searchtype  === "code"){
                      this.fnsearchbycode();
                }else
                if(this.search.searchtype  === "date"){
                      this.fnsearchcreatedat();
                }
    },

      async fnsearchcreatedat(){
                  this.displayloadingall = true;
                     this.products =  await  this.$store
                              .dispatch("product/searchproductcreatedate",this.search.created_at)
                              .catch((error) => { console.log(error)});
                  this.displayloadingall = false;
        },
      async fnsearchbyname(){
          this.search.name = this.search.name.replace("'","").replace('"',"")
            if(this.search.name != ""){
                this.displayloadingall = true;
                       this.products =  await  this.$store
                            .dispatch("product/searchproductbyname",this.search.name)
                            .catch((error) => { console.log(error)});
                this.displayloadingall = false;
            }
            
        },
      async fnsearchbycode(){
            this.search.code = this.search.code.replace("'","").replace('"',"")
            if(this.search.code != ""){
                this.displayloadingall = true;
                     this.products =  await  this.$store
                            .dispatch("product/searchproductbycode",this.search.code)
                            .catch((error) => { console.log(error)});
                this.displayloadingall = false;
            }
        },


      onchangecat(){
          this.$store.dispatch("product/setcatid",this.categoryId);
          this.fetchgetProductByPage("");
      },
      async getAllCategories(){
          return await  this.$store
              .dispatch("product/fetchallcategories")
              .then((result) => {

                this.categories = result.data;
              })
              .catch((error) => this.$toasted.error(error, { duration: 3000 }));
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

       async removeproduct(id){
                  this.$store
                  .dispatch("product/deleteProduct",id )
                  .then((result) => {
                  if(result){
                    this.getAllProducts();
                    this.$router.push("/ManageProduct/Product");
                }
              })
              .catch((error) => this.$toasted.error(error, { duration: 3000 }));
              },

        async  editproduct(id){
                    this.$store
                      .dispatch("product/editProduct",id )
                      .then((result) => {
                      if(result){
                        this.getAllProducts();
                    }
                })
                .catch((error) => this.$toasted.error(error, { duration: 3000 }));
                },

                nextproduct() {

                   this.fetchgetProductByPage("next")
                },
                prevproduct() {
                  this.fetchgetProductByPage("prev")
                },

                    
    },
    created(){
      this.getAllCategories();
      this.fetchgetProductByPage("");
  },
}
</script>
<style>
        .btn-success {
          color: rgb(58, 113, 185); 
          background-color: #ffff;
          border-color: #28a745;
        }
</style>