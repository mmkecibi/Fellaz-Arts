<template>
  <div class="products-box container">
    <span class="title">{{$t("Clients")}}  </span>   
    <router-link :to="localePath('/ManageClient/Client/AddClient')">
        <button type="button" class="btn btn-success add-btn btn-lg">{{$t("Add a new Client")}}</button>
    </router-link>
<div  class="form-area" novalidate="novalidate" autocomplete="off">
  <div class="row">
      <div class="col-md-10">
          <div class="styled-input wide multi">
              <div class="first-name" >
                  <input type="text" name="name" v-model="search.name" autocomplete="off"  :placeholder= 'this.$t("Name")'  data-placeholder-focus="false"  @click="emitFormData('name')" />
              </div>
              <div class="last-name" >
                  <input type="text" v-model="search.email" autocomplete="off"  :placeholder= 'this.$t("Email")'  data-placeholder-focus="false"  @click="emitFormData('email')" />
              </div>
              <div class="city" >
                  <input type="text"  v-model="search.phone"  v-mask="'(999) 999-9999'"  autocomplete="off"  :placeholder= 'this.$t("Phone")'   data-placeholder-focus="false"  @click="emitFormData('phone')" />
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
            <th>{{$t("name")}}</th>
            <th>{{$t("Email")}}</th>
            <th>{{$t("Username")}}</th>
            <th>{{$t("Phone")}}</th>
            <th></th>
            <th></th>
          </tr>
          <tr v-for="item in users" :key="item.id">
            <td>
                <span v-if="item.photo">
                        <img :src="`${item.photo}`" :alt="item.lastname" class="product-img" />
                </span>
                <span v-else >
                        <img v-if="item.gender == 'm'"  src="/products/men-avatar.png" class="product-img" />
                        <img v-else  src="/products/women-avatar.png" class="product-img" />
                </span>
              <h5 class="product-name">{{ item.firstname + ' ' + item.lastname }}</h5>
            </td>
            <td>
              <h4 class="price">{{item.email}}</h4>
            </td>
            <td>
              <strong> {{ item.username }}</strong>
            </td>
            <td>
              <strong> {{ item.phone }}</strong>
            </td>
            <td>
              <button  class="delete-product">
                <NuxtLink :to="localePath(`/ManageClient/Client/${item.id}`)">
                  <i class="fa fa-edit"></i>  
                </NuxtLink>
              </button>
            </td>
            <td>
              <button @click="removeclient(item.id)" class="delete-product">
                <i class="fa fa-trash"></i>
              </button>
            </td>
          </tr>
        </table>

<br />
    <br />
    <div class="nextprevious float-left">
      <button
        @click.prevent="prevclient"
        :hidden="getprevshow"
        class="previous round"
      >&#8249;
      <span v-if="displayloadingnext" id="spinnerprev" class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
      </button>
    </div>
    <div class="nextprevious float-right">
      <button
        @click.prevent="nextclient"
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
import { mapState, mapGetters } from "vuex";
export default {
  name: 'Users',
  data() {
    return {
      search:{
                name:null,
                email:null,
                phone:null,
                ordernumber:null,
                searchtype:null
             },

      users:[],
      displayloadingnext:false,
      displayloadingprev:false,
    };
  },

  computed: {
  async  Categories() {
      return await this.getAllCategories().then(res => {
                                                          return res.data;
                                                       })
    },
    getnextshow: {
        get: function () {
            return !this.$store.state.user.userclient.nextshow;
        },
    },
    getprevshow: {
        get: function () {
            return !this.$store.state.user.userclient.prevshow;
        },
    },
  },

  methods: {
 
    emitFormData(input){
       if(input === "name"){
              this.search.searchtype = 'name'
              this.search.email = ''
              this.search.phone = ''
       }else
       if(input === "email"){
              this.search.searchtype = 'email'
              this.search.name = ''
              this.search.phone = ''
       }else
       if(input === "phone"){
              this.search.searchtype = 'phone'
              this.search.name = ''
              this.search.email = ''
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
                }
    },


             async fetchgetUsersByPage(nextprev){
                        if(nextprev === "next")
                              this.displayloadingnext  = true;
                        else
                              this.displayloadingprev = true;
                        return await  this.$store
                            .dispatch("user/userclient/fetchgetUsersByPage",nextprev)
                            .then((result) => {
                                this.users = result; 
                            if(nextprev === "next")
                                  this.displayloadingnext  = false;
                            else
                                  this.displayloadingprev = false;
                            })
                            .catch((error) => { this.$toasted.error(error, { duration: 3000 })});
                    },

      async fnsearchbyphone(){
        
            if(/^\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}$/.test(this.search.phone))
            {
                this.search.phone = this.search.phone.replace('(','').replace(')','').replace('-','').replace(' ','')
                          await  this.$store
                              .dispatch("user/userclient/searchclientbyphone",this.search.phone)
                              .then((result) => {
                                this.users = result})
                              .catch((error) => { console.log(error)});
            }
        },
      async fnsearchbyemail(){
        this.search.email = this.search.email.replace("'","").replace('"',"")

              if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/.test(this.search.email))
                {
                            await  this.$store
                                .dispatch("user/userclient/searchclientbyemail",this.search.email)
                                .then((result) => {
                                this.users = result})
                                .catch((error) => { console.log(error)});
                }
        },
      async fnsearchbyname(){
            this.search.name = this.search.name.replace("'","").replace('"',"")
            if(this.search.name != ""){
                        await  this.$store
                            .dispatch("user/userclient/searchclientbyname",this.search.name)
                            .then((result) => {
                                this.users = result})
                            .catch((error) => { console.log(error)});
            }
        },

              async removeclient(id){
                  this.$store
                  .dispatch("user/deleteClient",id )
                  .then((result) => {
                  if(result){
                    this.getAllProducts();
                    this.$router.push("/ManageClient/Client");
                }
              })
              .catch((error) => this.$toasted.error(error, { duration: 3000 }));
              },

              async  editclient(id){
                    this.$store
                      .dispatch("product/editclient",id )
                      .then((result) => {
                      if(result){
                        this.getAllProducts();
                    }
                })
                .catch((error) => this.$toasted.error(error, { duration: 3000 }));
                },

                nextclient() {
                   this.fetchgetUsersByPage("next")
                },
                prevclient() {
                  this.fetchgetUsersByPage("prev")
                }, 
                    
  },
  created(){
    //this.fetchgetAllUsers();
    this.fetchgetUsersByPage("");
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