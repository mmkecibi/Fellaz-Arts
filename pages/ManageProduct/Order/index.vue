<template>
  <div class="products-box container">
    <span class="title">{{ $t("Orders")}}</span>
   <div v-if="displayloadingall"><img  src="/img/loader_block.gif" /></div> 
    <div v-if="!displayloadingall">
      <section >

<div  class="form-area" novalidate="novalidate" autocomplete="off">
  <div class="row">
      <div class="col-md-10">
          <div class="styled-input wide multi">
              <div class="first-name" >
                  <input type="text" name="name" v-model="search.name" autocomplete="off"  :placeholder= 'this.$t("Name")'  data-placeholder-focus="false"  @click="emitFormData('name')" />
              </div>
              <div class="last-name" >
                  <input type="text" v-model="search.email" autocomplete="off"  :placeholder= 'this.$t("Email")'   data-placeholder-focus="false"  @click="emitFormData('email')" />
              </div>
              <div class="city" >
                  <input type="text"  v-model="search.phone"  v-mask="'(999) 999-9999'"  autocomplete="off"  :placeholder= 'this.$t("Phone")'  data-placeholder-focus="false"  @click="emitFormData('phone')" />
              </div>
              <div class="last-name" >
                  <input type="text" v-model="search.ordernumber" autocomplete="off"  :placeholder= 'this.$t("Order Number")'  data-placeholder-focus="false"   @click="emitFormData('ordernumber')" />
              </div>
              <div class="city" >
                <input type="date"   v-model.trim="search.created_at" autocomplete="off"  :placeholder= 'this.$t("Date")'  data-placeholder-focus="false"  @click="emitFormData('date')" />
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
            <th>{{ $t("Client")}}</th>
            <th>{{ $t("Type")}}</th>
            <th>{{ $t("Total")}}</th>
            <th>{{ $t("Approved")}}</th>
            <th>{{ $t("Detail")}}</th>
            <th></th>
          </tr>
          <tr v-for="item in orders" :key="item.id">
            <td class="product-imgnamedate">
              <img :src="`${item.photo}`" :alt="item.lastname" class="product-img" />
                  <div class="div-orderclientname-date">          
                            <div class="orderclientname">
                              <strong > {{ item.lastname }}</strong>
                            </div>
                            <div class="orderclientdate">
                              <strong > {{ item.order_date }}</strong>
                            </div>
                  </div> 
            </td>
            <td>
              <strong> {{ item.payment_type }}</strong>
            </td>
            <td>
              <strong class="price">{{ item.total_amount | dollar }}</strong>
            </td>
            <td>
                <img v-if="item.isapptoved" width="28" length="28" src="/img/on.jpg" />
                <img v-if="!item.isapptoved"  width="28" length="28"  src="/img/off.jpg" />
            </td>

            <td>
                <NuxtLink :to="localePath(`/ManageProduct/order/displayorderdetail/${item.id}`)">
                  <i class="fa fa-list listicon"></i>  
                </NuxtLink>
            </td>
            <td>
              <button  class="delete-product">
                <NuxtLink :to="localePath(`/ManageProduct/order/${item.id}`)">
                  <i class="fa fa-edit editicon"></i>  
                </NuxtLink>
              </button>
            </td><td></td>
          </tr>
        </table>

        <br />
        <br />

      </section>

    </div>

  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: 'Order',
  data() {
    return {
      search:{
                name:null,
                email:null,
                phone:null,
                ordernumber:null,
                created_at:null,
                searchtype:null
             },

      categories:[],
      categoryId:0,
      displayloading:false,
      displayloadingnext:false,
      displayloadingprev:false,
      displayloadingall:true,
    };
  },
  computed: {
                orders: {
                  get: function () {
                    return this.$store.state.orderstore.orders;
                  },
                },
            },


  methods: {

    emitFormData(input){
       if(input === "name"){
              this.search.searchtype = 'name'
              this.search.email = ''
              this.search.phone = ''
              this.search.ordernumber = ''
              this.search.created_at = null
       }else
       if(input === "email"){
              this.search.searchtype = 'email'
              this.search.name = ''
              this.search.phone = ''
              this.search.ordernumber = ''
              this.search.created_at = null
       }else
       if(input === "phone"){
              this.search.searchtype = 'phone'
              this.search.name = ''
              this.search.email = ''
              this.search.ordernumber = ''
              this.search.created_at = null
       }else
       if(input === "ordernumber"){
              this.search.searchtype = 'ordernumber'
              this.search.name = ''
              this.search.email = ''
              this.search.phone = ''
              this.search.created_at = null
       }else
       if(input === "date"){
              this.search.searchtype = 'date'
              this.search.name = ''
              this.search.email = ''
              this.search.phone = ''
              this.search.ordernumber = ''
       }
    },
    submit_btn(){
                if(this.search.searchtype  === "name"){
                      this.fnsearchbyname();
                }else
                if(this.search.searchtype  === "email"){
                      this.fnsearchbyemail();
                }else
                if(this.search.searchtype  === "phone"){
                      this.fnsearchbyphone();
                }else
                if(this.search.searchtype  === "ordernumber"){
                      this.fnsearchordernumber();
                }else
                if(this.search.searchtype  === "date"){
                      this.fnsearchcreatedat();
                }
    },

      async fetchgetOrderUsersByPage(){
                this.displayloadingall = true;
                  await  this.$store
                            .dispatch("orderstore/fetchgetOrderUsersByPage")
                            .catch((error) => { console.log(error)});
                this.displayloadingall = false;
              },

      async fnsearchcreatedat(){
                  this.displayloadingall = true;
                          await  this.$store
                              .dispatch("orderstore/searchcreatedate",this.search.created_at)
                              .catch((error) => { console.log(error)});
                  this.displayloadingall = false;
        },

      async fnsearchbyphone(){
            if(/^\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}$/.test(this.search.phone))
            {
                this.search.phone = this.search.phone.replace('(','').replace(')','').replace('-','').replace(' ','')
                  this.displayloadingall = true;
                          await  this.$store
                              .dispatch("orderstore/searchbyphone",this.search.phone)
                              .catch((error) => { console.log(error)});
                  this.displayloadingall = false;
            }
        },
      async fnsearchbyemail(){
        this.search.email = this.search.email.replace("'","").replace('"',"")

              if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/.test(this.search.email))
                {
                    this.displayloadingall = true;
                            await  this.$store
                                .dispatch("orderstore/searchbyemail",this.search.email)
                                .catch((error) => { console.log(error)});
                    this.displayloadingall = false;
                }
        },
      async fnsearchbyname(){
            this.search.name = this.search.name.replace("'","").replace('"',"")
            if(this.search.name != ""){
                this.displayloadingall = true;
                        await  this.$store
                            .dispatch("orderstore/searchbyname",this.search.name)
                            .catch((error) => { console.log(error)});
                this.displayloadingall = false;
            }
        },
      async fnsearchordernumber(){
          this.search.ordernumber =  this.search.ordernumber.replace("'","").replace('"',"")

          if(this.search.ordernumber != ""  && !/^[']*$/.test(this.search.ordernumber )){
                this.displayloadingall = true;
                        await  this.$store
                            .dispatch("orderstore/searchordernumber",this.search.ordernumber)
                            .catch((error) => { console.log(error)});
                this.displayloadingall = false;
          }
        },

      async  ApproveOrder (orderid,isapptoved,approuved) {

        var form = {};
        form.id = orderid
        form.isapptoved = (isapptoved == 1 ? 0 : 1);
        form.status =  (approuved == 0 ? "Not Approved" : "Approved");

          this.$store
            .dispatch("orderstore/approuveOrder",form)
        },
        
      async DisplayOrderDeail(order_id){
        
      } 
    },
    created(){
      this.fetchgetOrderUsersByPage();
  },

}
</script>
<style>

.product-date{
  float:left;
  font-size: 12px;;
}

.div-orderclientname-date{
    position: relative;
    width: 100%;
}
.orderclientname{
    float: left;
    width: 100%;
}
.orderclientdate{
    float: left;
    width: 100%;
}


        .btn-success {
          color: rgb(58, 113, 185); 
          background-color: #ffff;
          border-color: #28a745;
        }
</style>