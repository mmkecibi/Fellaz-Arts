import Vue from 'vue'

export const state = () => ({
    agentsbyservice:[],
    locations:[],
    requestedavailability:[],
    agentsfinder:[],
    agentsforclient:[],
    cart:[],
    cartcount:0,
    latlng:[],
    startenddate:[],
    limitpage:8,
    lastid:1,
    savelastid:1,
    resultAllIds:[],
    nextposid:0,
    prevposid:0,
    nextshow:false,
    prevshow:false,
    sliderregionvshow:false,
    distance:1,
    usrauth:{},
    issearchok:false
})

export const actions = {

  setAuthUser({commit}, pusrauth) {
    commit('setAuthUsernmut', pusrauth)   ;
  },
    getlatlng({state}) { 
      return state.latlng;
    },
    getstartenddate({state}) { 
      return state.startenddate;
    },

     getAllAgentsByServiceCode({commit, state}, agenttypecodearg) { 

        let agenttypecode = agenttypecodearg
        return this.$axios.$get(`/api/v1/users/agents/allagentsbytype/${agenttypecode}`)
          .then(agentsbyservice => {
            commit('setAllAgentsBytype', agentsbyservice)        
            return state.agentsbyservice
          })
      },
    async  zipcoderadusfinder({commit, state},  {zipcode, distance,radious}) {   

        let lat
        let lng
        let latlng  = await this.$axios.$get(`https://maps.googleapis.com/maps/api/geocode/json?address=${zipcode}&key=AIzaSyCQFKwVLvTw3-ovzOWm1UUAHeIVyDkW2t4`)
          .then(agent => {
                  if(agent.results[0]){
                          lat = agent.results[0]['geometry']['location'].lat
                          lng = agent.results[0]['geometry']['location'].lng                 
                        }else {
                          lat = 0.0
                          lng = 0.0
                  }    
                  return [lat,lng]        
          })
          commit('setlatlng', latlng) 
      },

      setLocations({commit}, locations) {
        commit('setLocationsinmut', locations)   ;
      },
      setrequestedavailability({state,commit,dispatch}, requestedavailability) {

        let agentAvailibilitiesData = {startdate:0,enddate:0}
        if(requestedavailability.length > 0){
            if(requestedavailability[0].end === null)
                  requestedavailability[0].start = requestedavailability[0].end
             agentAvailibilitiesData = [requestedavailability[0].start,requestedavailability[0].end]
        }
        commit('setStartenddate', agentAvailibilitiesData) 
      },

      initsearch({state,commit,dispatch},{postcode,distance})
      { 
        if(postcode === ""){
            commit('setlatlng', [undefined,undefined]) 
            commit('setsliderregionvshow', false) 
          }
          else
          {
            commit('setsliderregionvshow', true) 
          }
        commit('setdistance', distance) 
        commit('setresultAllIds', []) 
        commit('setagentsfinder', []) 
        commit('setnextshow', false) 
        commit('setprevshow', false) 
        commit('setnextposid', 0) 
        commit('setsavelastid', 1)
      },

    async  agentavailibilitieszipcoderadusfinder({state,commit,dispatch}, prevnext){

      if(state.resultAllIds){
          if(state.resultAllIds.length > 0){
                     if(prevnext === 'next'){
                      let next = state.nextposid + state.limitpage - 1
                            if(state.resultAllIds[next]){
                                commit('setnextposid', next) 
                                commit('setsavelastid', state.resultAllIds[next].id) 
                                commit('setnextshow', true) 
                                commit('setprevshow', true) 
                            }
                            else{
                              commit('setnextshow', false) 
                              commit('setnextshow', false) 
                            }
                      }else{
                          if(prevnext === 'prev'){
                            let prev = 0
                            if(state.nextposid  > 0){
                                prev = state.nextposid - (state.limitpage - 1)
                                if(state.resultAllIds[prev]){
                                  commit('setnextposid', prev) 
                                  if(prev === 0){
                                      commit('setsavelastid', 1) 
                                      commit('setprevshow', false) 
                                      commit('setnextshow', true) 
                                  }
                                  else{
                                    commit('setprevshow', true) 
                                    commit('setnextshow', true) 
                                      commit('setsavelastid', state.resultAllIds[prev].id) 
                                  }
                                }
                              }
                          }
                      }
        }

        let findagent = {}

        findagent.latitude = state.latlng[0];
        findagent.longitude = state.latlng[1];
        findagent.distance  = state.distance;
        findagent.radious  =  3958;  /*earth radius in miles        @iRadius = 6371; // earth radius in km */
        findagent.startdate = Date.parse(state.startenddate[0])/1000;
        findagent.enddate = Date.parse(state.startenddate[1])/1000;
        findagent.limitpage = state.limitpage;
        findagent.lastid = state.savelastid;
        let result;
        let resultAllIds;
        let validatestartdate =  Date.parse(state.startenddate[0]);

        if( state.startenddate[0] !== undefined && !isNaN(validatestartdate) && state.latlng[0] !== undefined ){
                        resultAllIds = await  this.$axios.$post('/api/v1/users/agents/agentavailibilitieszipcoderadusfinderAllIds', findagent)
                        result = await  this.$axios.$post('/api/v1/users/agents/agentavailibilitieszipcoderadusfinder', findagent)
        }else{
              if( state.startenddate[0] !== undefined && !isNaN(validatestartdate) ){ 

                        commit('setsliderregionvshow', false) 
                        findagent.latitude = null;
                        findagent.longitude = null;
                        resultAllIds = await  this.$axios.$post('/api/v1/users/agents/agentavailibilitieszipcoderadusfinderAllIds', findagent)
                        result = await this.$axios.$post('/api/v1/users/agents/agentavailibilitieszipcoderadusfinder', findagent)
               }else{
                        commit('setsliderregionvshow', true) 
                        findagent.startdate = null;
                        findagent.enddate = null;
                        resultAllIds = await  this.$axios.$post('/api/v1/users/agents/agentavailibilitieszipcoderadusfinderAllIds', findagent)
                        result = await  this.$axios.$post('/api/v1/users/agents/agentavailibilitieszipcoderadusfinder', findagent)
                } 
        }

        commit('setresultAllIds', resultAllIds) 
        commit('setagentsfinder', result) 

  
        if(result !== undefined && result.length > 0){

          let next = state.nextposid + state.limitpage - 1
          if(state.resultAllIds[next]){
            commit('setnextshow', true) 
          }
          else{
            commit('setnextshow', false) 
          }
        }
      }
      }

    }

export const getters = {
  getLocations: state => {
       return state.locations
  },
  getrequestedavailability: state => {
    return state.requestedavailability
  },

}

export const mutations = {

  setAuthUsernmut(state, values) {
    state.usrauth = values
  },

    setAuthUsernmut(state, values) {
      state.agentsbyservice = values
    },
    setLocationsinmut(state, locations) {
      state.locations = locations ;
    },
    setrequestedavailabilityinmut(state, requestedavailability) {
      state.requestedavailability = requestedavailability ;
    },
    setAgentsForClientnmut(state, agentsavailable) {
      state.agentsforclient = agentsavailable ;
    },
    setlatlng(state, latlng) {
      state.latlng = latlng ;
    },
    setStartenddate(state, agentAvailibilitiesData) {
      state.startenddate = agentAvailibilitiesData ;
    },
    setagentsfinder(state, result) {

      if(result && result.length > 0)
           state.issearchok = true;
      state.agentsfinder = result ;
    },
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
    setsliderregionvshow(state, sliderregionvshow){
      state.sliderregionvshow = sliderregionvshow
    },
    setdistance(state, distance){
      state.distance = distance
    }
  }