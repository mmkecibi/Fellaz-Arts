import Vue from 'vue'

export const state = () => ({
    cart:[],
    cartcount:0
})

export const actions = {

  async createConfirmCardPayment({commit}, {amountc,emailc}){
    try {
      // Create a PaymentIntent with the information about the order
      const result = await this.$axios.$post("/api/v1/users/cart/createConfirmCardPayment",
          { amount: amountc, email:emailc}
      );
      return result;
    } catch (e) {
      console.log("error", e);
    }
  },

      addToCart({commit}, cart){
        commit('addToCart', cart)  
      },
      setCartcount({commit}, cartcount){
        commit('setCartcount', cartcount)  
      },
      resteCartAndCounter({commit}){
        commit('resteCartAndCounter')  
      },
      pushToCart({commit,state,rootState}, cart){

        let clientid = rootState.auth.user.id

         commit('pushToCart', cart)  
         let pushtodb = []
         for (var i =0; i< state.cart.length; i ++ ){
             let cartobj = new  Object()
             cartobj.clientid = clientid
             cartobj.clientusername = rootState.auth.user.username
             cartobj.agentid = state.cart[i].id
             cartobj.availabilities = state.cart[i].availbelid
             cartobj.starttimestamp = state.cart[i].starttimestamp
             cartobj.endtimestamp = state.cart[i].endtimestamp
             pushtodb.push(cartobj);
       }
          this.$axios.$post('/api/v1/users/cart/createupdatecart', pushtodb)
                     .then(result => { 
                      
                                          let agentavli = new  Object()
                                          agentavli.starttimestamp = cart.starttimestamp
                                          agentavli.endtimestamp =  cart.endtimestamp 
                                          agentavli.agentid = cart.id
                                          agentavli.isavailable = 0

                                          this.$axios.$patch('/api/v1/users/cart/updateavailibrelatedToCart', agentavli)
                                          .then(result => { 
                                          result})
                                          .catch(error => Promise.reject(error))

                    })
                      .catch(error => Promise.reject(error))
      },
     async deleteFromCart({commit,state,rootState}, index){

      let agentavli = new  Object()
      agentavli.starttimestamp = state.cart[index].starttimestamp
      agentavli.endtimestamp = state.cart[index].endtimestamp
      agentavli.agentid = state.cart[index].id
      agentavli.isavailable = 1


      await  this.$axios.$patch('/api/v1/users/cart/updateavailibrelatedToCart', agentavli)
        .then(result => { 
        result})
        .catch(error => Promise.reject(error))

        commit('deleteFromCart', index) 

        let pushtodb = []
            if( state.cart !==  undefined   && state.cart.length > 0){
                    for (var i =0; i< state.cart.length; i ++ ){

                            let cartobj = new  Object()
                            cartobj.clientid = rootState.auth.user.id
                            cartobj.clientusername = rootState.auth.user.username
                            cartobj.agentid = state.cart[i].id
                            cartobj.agentavailbalfor = state.cart[i].availbelid
                            cartobj.starttimestamp = state.cart[i].starttimestamp
                            cartobj.endtimestamp = state.cart[i].endtimestamp
                            pushtodb.push(cartobj);
                    }
           await  this.$axios.$post('/api/v1/users/cart/createupdatecart', pushtodb)
              .then(result => { 

            })
              .catch(error => Promise.reject(error))
        }
        else{
            let clientid = rootState.auth.user.id
            return this.$axios.$get(`/api/v1/users/cart/deletecart/${clientid}`)
            .then(agent => {
              /*commit('setAgent', agent)
              return state.item*/
            })
        }

      },
      createAgent({commit}, cart) {
        return this.$axios.$post('/api/v1/users/cart/createupdatecart', cart)
        .then(result => { 
          return result})
        .catch(error => {return error})
       },
       getcart({commit, state, rootState}){

       },


     async  fetchCartByClientId({commit, rootState} ) {

    let clientId = 0;
      if(rootState.auth.user !== null)
          clientId = rootState.auth.user.id

        let localcart = []
        let recievedcart = await  this.$axios.$get(`/api/v1/users/cart/clientcart/${clientId}`)

          if(recievedcart  !== null){
            if(recievedcart !== undefined ){

              let order = JSON.parse(recievedcart.orderlines);
              for(var i =0; i < order.length; i++)
               {

                  let agent = await this.$axios.$get(`/api/v1/users/getUserwithphotosById/${order[i].agentid}`)
                          let cartobj = new  Object()
                          cartobj.agent = agent
                          cartobj.age = agent.age
                          cartobj.availabilities =  agent.availabilities
                          cartobj.city =  agent.city
                          cartobj.cp =  agent.cp
                          cartobj.email =  agent.email
                          cartobj.firstname =  agent.firstname
                          cartobj.gender =  agent.gender
                          cartobj.id =  agent.id
                          cartobj.lastname =  agent.lastname
                          cartobj.lat =  agent.lat
                          cartobj.lng =  agent.lng
                          cartobj.phone =  agent.phone
                          cartobj.street =  agent.street
                          cartobj.username =  agent.username
                          cartobj.availbelid = order[i].agentavailbalfor
                          cartobj.starttimestamp = order[i].starttimestamp 
                          cartobj.endtimestamp =  order[i].endtimestamp 

                          cartobj.images = []
                          cartobj.images =    [
                                                {src:agent.photos[0].photo0, id: 0},
                                                {src:agent.photos[0].photo1, id: 1},
                                                {src:agent.photos[0].photo2, id: 2},
                                                {src:agent.photos[0].photo3, id: 3},
                                              ]
                          localcart.push(cartobj)       

              }
            }
            console.log('tag  state.cart  localcart order[i] ', localcart)
            commit('setclientcart', localcart)   
          }  
      },

     insertupdatecart(){
        let pushtodb = []
        for (var i =0; i< state.cart.length; i ++ ){
            let cartobj = new  Object()
            cartobj.clientid = rootState.auth.user.id
            cartobj.clientusername = rootState.auth.user.username
            cartobj.agentid = state.cart[i].id
            cartobj.agentavailbalfor = state.cart[i].availbelid
            cartobj.starttimestamp = state.cart[i].starttimestamp
            cartobj.endtimestamp = state.cart[i].endtimestamp
            pushtodb.push(cartobj);
        }

        return this.$axios.$post('/api/v1/users/cart/createupdatecart', pushtodb)
                    .then(result => { 
                    return result})
                    .catch(error => {return error})
      }
    }
export const mutations = {
    setCartcount(state, cartcount){
      state.cartcount = cartcount
    },
    pushToCart(state, agentcart){

      if(state.cart.length > 0){
        var isExist = false;

        for (var i =0; i< state.cart.length; i ++ ){
            if(state.cart[i].id ===  agentcart.id){
                  isExist = true;
            }
        }
        if(!isExist){
          state.cart.push(agentcart) 
          state.cartcount += 1
        }
      }
      else{
        state.cart.push(agentcart) 
        state.cartcount += 1
      }
    },
    setclientcart(state, cart){
      state.cart = cart
      state.cartcount = cart.length
    },
    deleteFromCart(state, index){
      Vue.delete(state.cart,index)
      state.cartcount -= 1
    },
    getCurrentCart(state, cart){
      state.cart = cart
    },
    setCartFromdb(state,cartobj ){
      state.cart.push(cartobj)
    },
    resteCartAndCounter(state){
      state.cart = [];
      state.cartcount = 0;
    }

  }