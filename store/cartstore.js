import Vue from 'vue'
import axios from "axios";

export const state = () => ({
    cartUIStatus: "idle",
    cart: [],
  });
  
  export const getters = {

    cartCount: state => {
      if (!state.cart.length) return 0;
      return state.cart.reduce((ac, next) => ac + next.productQuantity, 0);
    },
    cartTotal: state => {
      if (!state.cart.length) return 0;
      var l_cart = [... state.cart];
      var total = 0;

      for(var i =0; i< l_cart.length; i++){
          if(l_cart[i].isspecialprix ){
               total += l_cart[i].quantity * l_cart[i].specialprix
          }else{
               total += l_cart[i].quantity * l_cart[i].unitprice
          }
      }
      return total; //state.cart.reduce((ac, next) => ac + next.quantity * next.price, 0);
    },
    cartItems: state => {
      if (!state.cart.length) return [];
      return state.cart.map(item => {
        return {
          id: item.id,
          quantity: item.quantity
        };
      });
    },
    clientSecret: state => state.clientSecret
  };  
  

  export const actions = {

    async fetchCartByClientId({commit, state}, clientid) {

     return await this.$axios.$get(`/api/v1/cart/cartbyclient/${clientid}`)
        .then(cart => {
          commit('setcart', cart) 
          return cart;
        })
    },

    async fetchCartWithProductPhotosByClientId({commit, state}, clientid) {

      return await this.$axios.$get(`/api/v1/cart/cartwithproductphotosbyclient/${clientid}`)
         .then(cart => {
          for(var i =0; i <= cart.length; i++){
            if(cart[i] !== undefined){
              cart[i].size = JSON.parse(cart[i].size )
              cart[i].weight = JSON.parse(cart[i].weight )
              var photo = JSON.parse(cart[i].productPhoto )
            cart[i].productPhoto =   photo
            }
          }
           commit('setcart', cart) 
           return cart;
         })
     },

    async addItemToCart({commit, state}, payload) {
      commit('setcartquantity',payload);

      return await axios.post('/api/v1/cart/addItemToCart', state.cart)
      .then(result => { 
        return result})
      .catch(error => {return error})
     },

  };
   
  export const mutations = {
    updateCartUI: (state, payload) => {
      state.cartUIStatus = payload;
    },
    clearCart: state => {
      //this clears the cart
      (state.cart = []), (state.cartUIStatus = "idle");
    },
    setcart(state, result) { 
      state.cart = []
      state.cart = result;
    },
    setcartquantity: (state, payload) => {
      let itemfound = state.cart.find(el => el.productId === payload.productId);
      itemfound
        ? (itemfound.productQuantity += payload.productQuantity)
        : state.cart.push(payload)
     },
    addOneToCart: async (state, payload) => {
     
      let itemfound = state.cart.find(el => el.productId === payload.productId)
      itemfound ? itemfound.productQuantity++ : state.cart.push(payload)

     /* let l_cart = [...state.cart];
      l_cart.forEach(inituserid);
      l_cart.forEach(initphoto);
      console.log(' state.cart  ',state.cart[0])*/
      var clientid = (itemfound.clientid? itemfound.clientid : itemfound.user_id)
      var productId = itemfound.productId 
      var qty = itemfound.productQuantity 
      return await axios.get(`/api/v1/cart/updatebyproductid/${clientid}/${productId}/${qty}`)
      .then(result => { 
        return result})
      .catch(error => {return error})

   /*   function inituserid(el, index, array) {
        el.clientid = payload.user_id;
      }
      function initphoto(el, index, array) {
        el.productPhoto = [];
      }*/
      
    },
    removeOneFromCart: async (state, payload) => {
      let index = state.cart.findIndex(el => el.productId === payload.productId)

     if(state.cart[index].productQuantity > 1){
            state.cart[index].productQuantity 
              ? state.cart[index].productQuantity-- : state.cart.splice(index, 1)
             /* let l_cart = [...state.cart];
              l_cart.forEach(inituserid);
              l_cart.forEach(initphoto);*/
              var clientid = (state.cart[index].clientid? state.cart[index].clientid : state.cart[index].user_id)
              var productId = state.cart[index].productId 
              var qty = state.cart[index].productQuantity 
              return await axios.get(`/api/v1/cart/updatebyproductid/${clientid}/${productId}/${qty}`)
              .then(result => { 
                return result})
              .catch(error => {return error})
      }
      /*  function inituserid(el, index, array) {
          el.clientid = payload.user_id;
        }
        function initphoto(el, index, array) {
          el.productPhoto = [];
        }*/

    },
    removeAllFromCart: async (state, payload) => {
      let l_cart = [];
      if(state.cart.length > 1){
        console.log('  state.cart.length before ',state.cart.length)
            state.cart = state.cart.filter(el => el.productId !== payload.productId)
            console.log('  state.cart.length after ',state.cart.length)
           /* l_cart = [...state.cart];
            l_cart.forEach(inituserid);
            l_cart.forEach(initphoto);*/
            var clientid = (state.cart[index].clientid? state.cart[index].clientid : state.cart[index].user_id)
            var productId = state.cart[index].productId 
            var qty = state.cart[index].productQuantity 
            return await axios.get(`/api/v1/cart/updatebyproductid/${clientid}/${productId}/${qty}`)
            .then(result => { 
              return result})
            .catch(error => {return error})
      .then(async result => { 
      })
      .catch(error => {return error})

      }else{
        state.cart = state.cart.filter(el => el.productId !== payload.productId)
        let result = await axios.get(`/api/v1/cart/deletecart/${payload.user_id}`)
        .then(cartnet => {
          return true;
            //  
        })
        if(result){
          
        }
      }
    /*  function inituserid(el, index, array) {
        el.clientid = payload.user_id;
      }
      function initphoto(el, index, array) {
        el.productPhoto = [];
      }*/
    },
  };