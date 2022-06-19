import Vue from 'vue'
import axios from "axios";
import moment from 'moment'

export const state = () => ({
    orders:[],
    order:null,
    orderdetail:[],
    taxes:[],
    taxe:null,
    cartTotal:null,
    cartTotalTax:null,
    paymenttype:null,
    ordernumber:null
  });
  
  export const getters = {
    getcartTotal: state => {
      return state.cartTotal;
    },
    getcartTotalTax: state => {
      return state.cartTotalTax;
    },
    getpaymenttype: state => {
      return state.paymenttype;
    },
    getordernumber: state => {
      return state.ordernumber;
    },
  };  
  
  export const actions = {

    async createConfirmCardPayment({commit}, {amountc,emailc}){
      try {
        console.log('createConfirmCardPayment  ',amountc)
        console.log('createConfirmCardPayment  ',emailc)
        // Create a PaymentIntent with the information about the order
        const result = await axios.post("/api/v1/order/createConfirmCardPayment",
            { amount: amountc, email:emailc}
        );
        return result;
      } catch (e) {

      }
    },

    async createOrderWeb({commit}, orderdata){
      try {
        console.log("/api/v1/order/createOrderWeb",orderdata)
        const result = await axios.post("/api/v1/order/createOrderWeb",orderdata);
        return result;
      } catch (e) {

      }
    },


    async createshipping({commit, state}, payload) {
      return await axios.post('/api/v1/order/createShipping', payload)
      .then(result => { 
        return true})
      .catch(error => {return error})
     },
     async fetchShippingAddressByClientId({commit, state}, clientid) {

      return await this.$axios.$get(`/api/v1/order/getclientshipping/${clientid}`)
         .then(shipping => {
              return shipping;
         })
     },
 
    /**************************** Taxes ****** */

    async fetchgetTaxes({commit, state}) {
      return await this.$axios.$get(`/api/v1/order/getTaxes`)
        .then(taxes => {
          commit('settaxes', taxes) 
        })
    },
    async fetchTaxeById({commit, state},id) {
      return await this.$axios.$get(`/api/v1/order/getTaxeById/${id}`)
        .then(taxe => {
          commit('settaxe', taxe) 
        })
    },
    async deleteTaxe({commit, state}, id) {
      return await this.$axios.$get(`/api/v1/order/deleteTaxe/${id}`)
        .then(result => {
          return result
        })
    },  
    async updateTaxe({commit}, form) {

      return await axios.post('/api/v1/order/updateTaxe', form)
      .then(result => { 
        return result})
      .catch(error => {return error})
     },

     async createTaxe({commit}, form) {

      return await axios.post('/api/v1/order/createTaxe', form)
      .then(result => { 
        return result})
      .catch(error => {return error})
     },


    async fetchgetOrderUsersByPage({commit, state}) {
        return await this.$axios.$get(`/api/v1/order/getorderswithitsusers`)
          .then(orders => {
            orders.forEach(el => {
              if(el.order_date !== null && el.order_date !== undefined && el.order_date !== ''){
                  el.order_date = moment(el.order_date ).format('MM-DD-YYYY hh:mm')
              }
          });

            commit('setorders', orders) 
          })
      },

      async approuveOrder({commit}, form) {
        return await axios.post('/api/v1/order/approuveorder', form)
        .then( async result =>  { 
            return await this.$axios.$get(`/api/v1/order/getorderswithitsusers`)
            .then(orders => {
              orders.forEach(el => {
                if(el.order_date !== null && el.order_date !== undefined && el.order_date !== ''){
                    el.order_date = moment(el.order_date ).format('MM-DD-YYYY hh:mm')
                }
            });
              commit('setorders', orders) 
            })
        })
        .catch(error => {return error})
       },

       async fetchOrderById({commit, state},orderid) {
        return await this.$axios.$get(`/api/v1/order/getOrderById/${orderid}`)
          .then(order => {
            commit('setorder', order[0]) 
          })
      },
      
      async fetchorderDetailslistbyorderid({commit, state},orderid) {
        return await this.$axios.$get(`/api/v1/order/getorderDetailslistbyorderid/${orderid}`)
          .then(orderdetail => {

            console.log(' orderdetail :', orderdetail)
            for(var i =0; i <= orderdetail.length; i++){
                if(orderdetail[i] !== undefined ){
                  if(orderdetail[i].product_photo !== undefined ){
                        orderdetail[i].size   = JSON.parse(orderdetail[i].size);
                        orderdetail[i].weight = JSON.parse(orderdetail[i].weight);
                        orderdetail[i].product_photo =   JSON.parse(orderdetail[i].product_photo )
                  }else{
                    orderdetail[i].product_photo = undefined
                  }
                }
                
              }
            commit('setorderdetail', orderdetail) 
          })
      },

      async searchcreatedate({commit, state},createat){
        return await this.$axios.$get(`/api/v1/order/searchcreatedate/${createat}`)
          .then(orders => {
            commit('setorders', orders) 
          })
      },
      async searchbyemail({commit, state},email){
        return await this.$axios.$get(`/api/v1/order/searchbyemail/${email}`)
          .then(orders => {
            commit('setorders', orders) 
          })
      },
      async searchbyname({commit, state},name){
        return await this.$axios.$get(`/api/v1/ordersearchbyname/${name}`)
          .then(orders => {
            commit('setorders', orders) 
          })
      },
      async searchbyphone({commit, state},phone){
        return await this.$axios.$get(`/api/v1/order/searchbyphone/${phone}`)
          .then(orders => {
            commit('setorders', orders) 
          })
      },
      async searchordernumber({commit, state},ordernumber){
        return await this.$axios.$get(`/api/v1/order/searchordernumber/${ordernumber}`)
          .then(orders => {
            commit('setorders', orders) 
          })
      },
    setcatid({commit, state}, catid){
      commit('setcatid', catid) 
      commit('sresetproductids') 
    },


  };
   
  export const mutations = {
     /*********** Pagination ***************** */
      setorders(state, result) { 
        state.orders = result ;
      },
      setorder(state, result) {
        state.order = result ;
      },
      settaxes(state, result) { 
        state.taxes =  result.filter(el => el.provaince == 'Quebec') ;
      },
      settaxe(state, result) { 
        state.taxe = result ;
      },
      setorderdetail(state, result) { 
        state.orderdetail = result ;
      },
      setcartTotal(state, result) { 
        state.cartTotal = result ;
      },
      setcartTotalTaxe(state, result) { 
        state.cartTotalTax = result ;
      },
      setpaymenttype(state, result) { 
        state.paymenttype = result ;
      },
      setordernumber(state, result) { 
        state.ordernumber = result ;
      },
    /***************************************** */
  };