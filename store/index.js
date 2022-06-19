
import axios from "axios";
import data from "~/static/storedata.json";

export const state = () => ({
  cartUIStatus: "idle",
  storedata: data,
  cart: [],
  clientSecret: "" // Required to initiate the payment from the client
});

export const getters = {
  featuredProducts: state => state.storedata.slice(0, 3),
  women: state => state.storedata.filter(el => el.gender === "Female"),
  men: state => state.storedata.filter(el => el.gender === "Male"),
  cartCount: state => {
    if (!state.cart.length) return 0;
    return state.cart.reduce((ac, next) => ac + next.quantity, 0);
  },
  cartTotal: state => {
    if (!state.cart.length) return 0;
    return state.cart.reduce((ac, next) => ac + next.quantity * next.price, 0);
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

export const mutations = {
  setItems(state, {resource, items}) {
    state[resource].items = items
  }
}

export const actions = {
  async nuxtServerInit({commit, dispatch,app}, { req, redirect },context) {

   return this.$axios.$get(`/api/v1/users/me`)
    .then(user => {
      commit('auth/setAuthUser', user)
    }).catch(() => {redirect('/Signin') })

   // await dispatch('auth/getAuthUser').catch(() => {redirect('/login') })
  }
}