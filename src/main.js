// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import Axios from 'axios'
// import VueAxios from 'vue-axios'
import $ from 'jquery'
import './assets/bootstrap/js/bootstrap.min.js'
import './assets/bootstrap/css/bootstrap.min.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)

Vue.prototype.HOST = './api'
Vue.use(ElementUI);
Vue.prototype.$axios = Axios





// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// Vue.use(VueAxios, axios)

// axios.defaults.baseURL = "/api"

/* eslint-disable no-new */


// 添加请求拦截器
// Axios.interceptors.request.use(function (config) {
//   // 在发送请求之前做些什么
//   if (config.method == "post") {
//     config.data = qs.stringify(config.data)
//   }
//   return config;
// }, function (error) {
//   // 对请求错误做些什么
//   return Promise.reject(error);
// });

// // 添加响应拦截器
// Axios.interceptors.response.use(function (response) {
//   // 对响应数据做点什么
//   return response;
// }, function (error) {
//   // 对响应错误做点什么
//   return Promise.reject(error);
// });
new Vue({
  el: '#app',
  router,
  VueAwesomeSwiper,
  components: {
    App
  },
  template: '<App/>'
})
