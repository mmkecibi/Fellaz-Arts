

export const state = () => ({
  user: null,
  authority:''
})

export const getters = {
  authUser(state) {
    return state.user || null
  },
  isAuthenticated(state) {
    return !!state.user
  },
  isAdmin(state) {
    return state.user && state.user.roles && state.user.roles.filter(el => el.authority === "admin").length > 0;
  },
  isAgent(state) {
    return state.user &&
            state.authority &&
            state.authority === 'agent'
  },
  isClient(state) {
    return state.user &&
            state.authority &&
            state.authority === 'client'
  },
  userAuthority(state) {
    return state.authority
  }
}

export const actions = {

  setAuthUser({commit}, pusrauth) {
    commit('setAuthUsernmut', pusrauth)   ;
  },

  getuserbyemail({commit, state}, email) {
      return this.$axios.$get(`/api/v1/users/getuserbyemail/${email}`)
      .then(user => {
        return user
      }).catch(error => console.log(error))
  },

  login({commit, state}, loginData) {
    console.log(loginData);
    return this.$axios.$post('/api/v1/users/login', loginData)
      .then(user => {
        commit('setAuthUser', user)

        return state.user
      })
      .catch(error => Promise.reject(error))
  },
  getuserfromsession({commit, state}, user) {
    commit('setAuthUser', user)
    return state.user
  },
  register(_, registerData) {
    return this.$axios.$post('/api/v1/users/register', registerData)
      .catch(error => {
         let errorMessage = 'Uuups, something went wrong, try to register again!'
         if (error.response.data.errors) {
           errorMessage = error.response.data.errors.message
         }
         return Promise.reject(errorMessage)
      })
  },

  logout({commit}) {
    return this.$axios.$post('/api/v1/users/logout')
      .then(() => {
        commit('setAuthUser', null)
        return true
      })
      .catch(error => Promise.reject(error))
  },
  getAuthUser({commit, getters, state}) {
    const authUser = getters.authUser
    if (authUser) { return Promise.resolve(authUser) }
    return this.$axios.$get('/api/v1/users/me')
      .then((user) => {
        commit('setUserAuthority', user.roles[0].authority)
        commit('setAuthUser', user)
        return state.user
      })
      .catch((error) => {
        commit('setAuthUser', null)
        return Promise.reject(error)
      })
  }
}

export const mutations = {
  setAuthUser(state, user) {
    state.user = user
  },
  setUserAuthority(state, authority) {
    state.authority = authority
  },
  setAuthUsernmut(state, values) {
    state.usrauth = values
  },
}










