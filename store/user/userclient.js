import Vue from 'vue'

export const state = () => ({
    users:[],
    user:{},
    captures:[],
    userevents:[],
    canUpdateUser: false,
        /******Pagination */
        limitpage:5,
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
        previousids:[]
        /******Pagination */
})


export const actions = {

    createUser({commit}, userData) {
      return this.$axios.$post('/api/v1/users/register', userData)
      .then(result => { 
        return result})
      .catch(error => {return error})
    },
    fetchgetAllUsers({commit, state}) {
      return this.$axios.$get(`/api/v1/users/getAllUsers`)
        .then(Users => {
          commit('setusers', users)
          return state.users
        })
    },


      fetchUserById({commit, state}, UserId) {
        return this.$axios.$get(`/api/v1/users/Users/${UserId}`)
          .then(User => {
            commit('setUser', User)
            return state.user
          })
      },
      updateUser({state,commit}, Userformdata ) {

      return this.$axios.$patch(`/api/v1/users/updateUserinfo`, Userformdata)
        .then(User => {
          commit('setUser', User)
          return state.user
        })
        .catch(error => error)
    },
    UpdateUserClientValue({commit}, {value, field,isValid}) {
      if(isValid){              
              commit('setCanUpdateUser', true)

              if(field === 'postcode'){
                let lat
                let lng
                  this.$axios.$get(`https://maps.googleapis.com/maps/api/geocode/json?address=${value}&key=AIzaSyCQFKwVLvTw3-ovzOWm1UUAHeIVyDkW2t4`)
                  .then(User => {
                          if(User.results[0]){
                                  lat = User.results[0]['geometry']['location'].lat
                                  lng = User.results[0]['geometry']['location'].lng
                          }else {
                                  lat = 0.0
                                  lng = 0.0
                          }
                          
                          commit('setUserClientValue', {value, field})
                           field = 'lat'
                           value = lat
                           commit('setUserClientValue', {value, field})
                           field = 'lng'
                           value = lng
                           commit('setUserClientValue', {value, field})                         
                  })
            }else{
                       commit('setUserClientValue', {value, field})
            }

        }else{
              commit('setCanUpdateUser', false)
             }
    },
     async UserNameexists({commit, state}, username) {
        let Userclientusername = username
        let Userclient = await  this.$axios.$get(`/api/v1/users/Userclientbyusername/${Userclientusername}`).catch(error => {  console.log(error) })
              return Userclient
      },
     async Emailexists({commit, state}, email) {
        let Userclientemail = email
        let Userclient = await  this.$axios.$get(`/api/v1/users/Userclientbyuseremail/${Userclientemail}`).catch(error => { })    
              return Userclient
      },

      async fetchgetUsersByPage({commit, state},prevnext) {
                  
              if( prevnext === ""){
                                    commit('setresultAllIds', []) 
                                    commit('setproducts', []) 
                                    commit('setnextshow', false) 
                                    commit('setprevshow', false) 
                                    if(!state.previousids.includes(0))
                                          commit('setpreviousids', 0) 
                                    commit('setsavelastid', 1)
                                    commit('setprevposid', 2) 
                                    commit('sresetusersids')    
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
                                    commit('sresetusersids')                                  
                                    commit('setprevshow', false) 
                                    commit('setnextshow', true) 
                              }
                              else{
                                    commit('setprevshow', true) 
                                    commit('setnextshow', true) 
                              }
                      }
                  }
                }

                let findUser = {};
                findUser.limitpage = state.limitpage;
                findUser.lastid = state.savelastid;

                let  resultAllIds = [];
                let  users = [];
                users = await this.$axios.$post('/api/v1/users/getUsersByPage',findUser);
                resultAllIds = await this.$axios.$post('/api/v1/users/getUsersByPageIds',findUser);

                if(users !== null && users !== undefined && users.length > 0)
                {                         
                  /*  for(var i =0; i < users.length ; i++){
                      if(users[i].photo !== undefined && users[i].photo !== null && users[i].photo !== '')
                               users[i].photo = JSON.parse(users[i].photo)
                    } */

                    commit('setresultAllIds', resultAllIds) 
                    commit('setusers', users) 


                  let next =  state.limitpage  - 1

                  if(state.resultAllIds[next]){
                    commit('setnextshow', true) 
                  }
                  else{
                    commit('setnextshow', false) 
                  }
                  
                }
                else{
                      commit('setprevshow', true) 
                      commit('setnextshow', false) 
                }
                return users;
          }
      },

      async searchclientbyphone({commit, state},phone){
        return await this.$axios.$get(`/api/v1/users/searchclientbyphone/${phone}`)
          .then(users => {
            commit('setusers', users)
            return users 
          })
      },
      async searchclientbyemail({commit, state},email){
        return await this.$axios.$get(`/api/v1/users/searchclientbyemail/${email}`)
          .then(users => {
            commit('setusers', users) 
            return users
          })
      },
      async searchclientbyname({commit, state},name){
        return await this.$axios.$get(`/api/v1/users/searchclientbyname/${name}`)
          .then(users => {
            commit('setusers', users)
            return users
          })
      },

      async createClientEvents({commit, state},eventstosend){

        return await this.$axios.$post('/api/v1/users/createclientevents',eventstosend)
          .then(users => {
            commit('setusers', users)
            return users
          })
      },

      async getEvents({commit, state},user_id){
        let eventstosend = [];
        return await this.$axios.$get(`/api/v1/users/getUserEvents/${user_id}`)
          .then(result => {

            result.forEach((event) => {
              let eventobj = new Object();
              eventobj.id = event.id;
              eventobj.id_user = event.user_id;
              eventobj.username = event.username;
              eventobj.color = event.Color;
              eventobj.details = event.Details;
              eventobj.end = event.End;
              eventobj.start = event.Start;
              eventobj.name = event.Name;
              eventobj.repeateventid = event.Repeateventid;
              eventobj.strattimestamp = event.Starttimestamp;
              eventobj.endtimestamp = event.Endtimestamp;
              eventobj.clientid = event.clientid;
              eventobj.eventtype = JSON.parse(event.eventtype);
              eventobj.photo = event.photo;
              eventstosend.push(eventobj);
          });
          commit('setuserevents', eventstosend) 
          })
      },

}
export const mutations = {

  setusers(state, users){
    state.users = users
  },
  setUser(state, UserData){
    state.user = UserData            
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
  setpreviousids(state,previd){
    if(!state.previousids.includes(previd))
        state.previousids.push(previd)
  },
  sresetusersids(state){
    state.previousids = [];
    state.previousids.push(0)
  },
  delpreviousids(state,index){
    state.previousids.splice(index, 1)
  },
  setuserevents(state, eventstosend){
    state.userevents = eventstosend;
  } 
  }