import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    cityIndex: "6",
    //城市index传给儿子

    carIndex: "555"
    //车辆index传给儿子
  },
  mutations: {
    cityIndexMu: (state, payload) => {
      state.cityIndex = payload
    }
  },
  actions: {
    cityIndexAc: (context, payload) => {
      context.commit('cityIndexMu', payload)
    }
  }


})
