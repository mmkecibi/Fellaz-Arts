import Vue from 'vue'
import axios from "axios";
import data from "~/static/storedata.json";


export const state = () => ({
    storedata: data,
    clientSecret: "", // Required to initiate the payment from the client
    products:[],
    product:null,
    category:null,
    allcategories:[],
    /******Pagination */
    limitpage:6,
    catid:0,
    lastid:0,
    savelastid:1,
    savenextlastid:1,
    saveprevlastid:0,
    resultAllIds:[],
    nextposid:0,
    prevposid:0,
    nextshow:false,
    prevshow:false,
    issearchok:false,
    previousids:[],
    /******Pagination */
    addstep: "addinfo", //"addcolorandphotos",
    createdproductid:0,
    prodphoto:null
  });
  
  export const getters = {
    featuredProducts: state => state.storedata.slice(0, 3),
    women: state => state.storedata.filter(el => el.gender === "Female"),
    men: state => state.storedata.filter(el => el.gender === "Male"),
    clientSecret: state => state.clientSecret
  };  
  

  export const actions = {
  async createCategory({commit}, category) {

        return await axios.post('/api/v1/product/createcategory', category)
        .then(result => { 
          return result})
        .catch(error => {return error})
       },

   async createProduct({commit}, form) {
          return await axios.post('/api/v1/product/createProduct', form)
          .then(result => { 
            return result.data})
          .catch(error => {return error})
         },
   async createProductPhotos({commit}, form) {

    var prodphotodata = {};
    var pic = [... JSON.parse(form.captures)];
    prodphotodata.captures = [];
    prodphotodata.captures.push(pic[0]);
    console.log("   prodphotodata.captures  ooooo ",  prodphotodata.captures)
    prodphotodata.captures = JSON.stringify(prodphotodata.captures); 
    prodphotodata.productid = form.productid;
          return await axios.post('/api/v1/product/createProductPhotos', form)
          .then( result => { 
            return result.data
          })
          .catch(error => {console.log(' error 2 ', error);return error})
         },
  async updateCategory({commit}, form) {

          return await axios.post('/api/v1/product/updateCategory', form)
          .then(result => { 
            return result})
          .catch(error => {return error})
         },

   async updateProduct({commit}, form) {

            return await axios.post('/api/v1/product/updateProduct', form)
            .then(result => { 
              return result})
            .catch(error => {return error})
           },

   async updateProductPhotoToDisplay({commit}, prodpicupdatedata) {

    return await axios.post('/api/v1/product/updateProductPhotoToDisplay', prodpicupdatedata)
    .then(result => { 
      return result})
    .catch(error => {return error})
   },


    async fetchallcategories({commit}) {

          return await axios.get('/api/v1/product/getallcategories')
          .then(result => { 
            result.data.push({"id":0, "name":"All"})
            commit('setallcategories', result.data) 
            return result})
          .catch(error => {return error})
         },

    async fetchallparentcategories({commit}) {

          return await axios.get('/api/v1/product/getallparentcategories')
          .then(result => { 
            return result})
          .catch(error => {return error})
         },
   
      async fetchgetProductByPage({commit, state},prevnext) {
             
        if( prevnext === ""){
                              commit('setresultAllIds', []) 
                              commit('setproducts', []) 
                              commit('setnextshow', false) 
                              commit('setprevshow', false) 
                              if(!state.previousids.includes(0))
                                    commit('setpreviousids', 0) 
                              commit('setsavelastid', 1)
                              commit('setprevposid', 2) 
                            }
        if(state.resultAllIds){

          if(state.resultAllIds.length > 0){

            if(prevnext === 'next'){

              let next =  state.limitpage - 1

                   if(state.resultAllIds[next]){

                       commit('setsavelastid', state.resultAllIds[next].id) 
                       commit('setpreviousids', state.resultAllIds[next-1].id) 
                       commit('setnextshow', true) 
                       commit('setprevshow', true) 
                   }
                   else{
                     commit('setnextshow', false) 
                     commit('setnextshow', false) 
                   }
             }else{

                 if(prevnext === 'prev'){
                        let prev = state.previousids.length - state.prevposid 
                        commit('setprevposid',  state.prevposid + 1) 
                        commit('setsavelastid', state.previousids[prev]) 
                        if(prev === 0){
                             commit('setprevposid', 2) 
                             commit('setprevshow', false) 
                             commit('setnextshow', true) 
                             commit('sresetproductids')
                         }
                         else{
                           commit('setprevshow', true) 
                           commit('setnextshow', true) 
                         }
                 }
             }
          }

          let findProd = {};
          console.log(' state.catid : ', state.catid)
          findProd.catid =  state.catid;
          findProd.limitpage = state.limitpage;
          findProd.lastid = state.savelastid;
 
          let  products = await this.$axios.$post('/api/v1/product/getProductByPage',findProd);
          let  resultAllIds = await this.$axios.$post('/api/v1/product/getProductByPageIds',findProd);

          if(products !== null && products !== undefined && products.length > 0)
          {                         
              for(var i =0; i < products.length ; i++){
                if(products[i].photo !== undefined && products[i].photo !== null && products[i].photo !== '')
                    products[i].photo = JSON.parse(products[i].photo)
              } 

              commit('setresultAllIds', resultAllIds) 
              commit('setproducts', products) 


            let next =  state.limitpage  - 1

            if(state.resultAllIds[next]){
              commit('setnextshow', true) 
            }
            else{
              commit('setnextshow', false) 
            }
          }
          return products;
     }
},

      async fetchAllCategoriesByParent({commit, state}, parentid) {

        return await this.$axios.$get(`/api/v1/product/getAllCategoriesByParent/${parentid}`)
          .then(result => {
            return result
          })
      },
      async fetchgetAllProductsByCategory({commit, state}, catid) {

        return await this.$axios.$get(`/api/v1/product/getAllProductsByCategory/${catid}`)
          .then(result => {

            for(var i =0; i <= result.length; i++){
              if(result[i] !== undefined)
                result[i].photo =   JSON.parse(result[i].photo )
            }
                commit('setproduct', result) 
                return result
          })
      }, 
      async fetchgetCategoryById({commit, state}, catid) {

        return await this.$axios.$get(`/api/v1/product/getCategoryById/${catid}`)
          .then(result => {
            
            commit('setcategory', result) 
            return result
          })
      },

      async deleteCategory({commit, state}, catid) {
        return await this.$axios.$get(`/api/v1/product/deletecategory/${catid}`)
          .then(result => {
            return result
          })
      },
    
      async fetchallproducts({commit}) {
        return await axios.get('/api/v1/product/getAllProducts')
        .then(result => { 

          for(var i =0; i <= result.data.length; i++)
             if(result.data[i] !== undefined)
                 result.data[i].photo =   JSON.parse(result.data[i].photo )
          commit('setproduct', result.data) 
          return result.data
        })
        .catch(error => {return error})
        
       },

      async fetchProductById({commit, state}, prodid) {
        commit("setcreatedproductid",prodid);
        return await this.$axios.$get(`/api/v1/product/getProductById/${prodid}`)
          .then(product => {
            commit('setproduct', product) 
          })
      },
      async fetchProductDetailsById({commit, state}, prodid) {
        return await this.$axios.$get(`/api/v1/product/getProductById/${prodid}`)
          .then(product => {
            console.log(' product  detail ', product)
            commit('setproductdetails', product) 
          })
      },
      async deleteProduct({commit, state}, prodid) {
        return await this.$axios.$get(`/api/v1/product/deleteProduct/${prodid}`)
          .then(result => {
            return result
          })
      },  

      async deleteProductColorPhoto({commit, state}, prodcolphotoid) {
        return await this.$axios.$get(`/api/v1/product/deleteProductColorPhoto/${prodcolphotoid}`)
          .then(result => {
            return result
          })
      },

    async productsPagination(){
       await  this.fetchgetProductByPageIds({commit, state}, findProd)
    },


       async searchproductcreatedate({commit, state},createat){
        return await this.$axios.$get(`/api/v1/product/searchproductcreatedate/${createat}`)
          .then(products => {
            for(var i =0; i <= products.length; i++)
            if(products[i] !== undefined)
                 products[i].photo =   JSON.parse(products[i].photo )
            commit('setproducts', products) 
            return products;
          })
      },
      async searchproductbyname({commit, state},name){
        return await this.$axios.$get(`/api/v1/product/searchproductbyname/${name}`)
          .then(products => {

            if(products !== null && products !== undefined && products.length > 0)
            {                         
                for(var i =0; i < products.length ; i++){
                  if(products[i].photo !== undefined && products[i].photo !== null && products[i].photo !== ''){
                         products[i].photo = JSON.parse(products[i].photo)
                      }               
                  } 
                commit('setproducts', products) 
                return products;
           }
          })
      },
      async searchproductbycode({commit, state},code){

        return await this.$axios.$get(`/api/v1/product/searchproductbycode/${code}`)
          .then(products => {
            for(var i =0; i <= products.length; i++)
            if(products[i] !== undefined)
                 products[i].photo =   JSON.parse(products[i].photo )
            commit('setproducts', products) 
            return products;
          })
      },
    setcatid({commit, state}, catid){
      commit('setcatid', catid) 
      commit('sresetproductids') 
    },

    async fetchProductPhotoById({commit, state}, productphotoid) {
      return await this.$axios.$get(`/api/v1/product/getProductPhotosById/${productphotoid}`)
        .then(productphoto => {
          console.log(' productphoto  detail ', productphoto)
          commit('setproductphoto', productphoto) 
        })
    },


  };
   
  export const mutations = {

     setClientSecret: (state, payload) => {
      state.clientSecret = payload;
     },
    setproduct: (state, payload) => {
      state.products = payload;
     },
    setproductdetails : (state, payload) => {
      state.product = payload;
     },
    setcategory: (state, payload) => {
      state.category = payload;
     },
     setallcategories: (state, payload) => {
      state.allcategories = payload;
     },
     /*********** Pagination ***************** */
      setlimitpage(state, limitpage) {
        state.limitpage = limitpage ;
      },
      setlastid(state, lastid) {
        state.lastid = lastid ;
      },
      setsavelastid(state, savelastid) {
        state.savelastid = savelastid ;
      },
      setresultAllIds(state, resultAllIds) {
        state.resultAllIds = resultAllIds ;
      },
      setnextposid(state, nextposid){
        state.nextposid = nextposid ;
      },
      setprevposid(state, prevposid){
        state.prevposid = prevposid;
      },
      setnextshow(state, nextshow){
        state.nextshow = nextshow
      },
      setprevshow(state, prevshow){
        state.prevshow = prevshow
      },
      setproducts(state, result) {

        if(result && result.length > 0)
             state.issearchok = true;
        state.products = result ;
      },

      setcatid(state, catid) {
        state.catid = catid ;
      },
      setpreviousids(state,previd){
        if(!state.previousids.includes(previd))
              state.previousids.push(previd)
      },
      sresetproductids(state){
        state.previousids = [];
        state.previousids.push(0)
      },
      setaddstep(state,step){
          state.addstep = step;
      },
      setcreatedproductid(state,id){
        state.createdproductid = id;
      },
      setproductphoto(state,prodphoto){
        state.prodphoto = prodphoto;
      },
     /***************************************** */
  };