import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    cityIndex: "111",
    //城市index传给儿子

    carIndex: ""
    //车辆index传给儿子
  }

})
