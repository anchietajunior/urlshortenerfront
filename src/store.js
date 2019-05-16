import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import { ninvoke } from 'q';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userToken: null
  },
  mutations: {
    authUser (state, userData) {
      state.userToken = userData.jwt
    }
  },
  actions: {
    subscribe ({commit}, authData) {
      axios.post('http://localhost:3000/subscribe', {
        email: authData.email,
        password: authData.password,
        password_confirmation: authData.passwordConfirmation
      })
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error.response.data)
        })
    },
    login ({commit}, authData) {
      axios.post('http://localhost:3000/login', {
        email: authData.email,
        password: authData.password
      })
        .then(res => {
          console.log(res)
          commit('authUser', {
              userToken: res.data.jwt
            }
          )
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
})
