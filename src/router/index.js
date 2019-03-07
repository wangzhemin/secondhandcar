import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Register from '@/components/Register'
import WantBuy from '@/components/WantBuy'
import WantSeller from '@/components/WantSeller'
import CarDetails from '@/components/CarDetails'
import Feedback from '@/components/Feedback'

import Testt from '@/components/Testt'//测试专用



// 二级路由
import Buyer_Login from '@/components/Login_Register/Buyer_Login'
import Seller_Login from '@/components/Login_Register/Seller_Login'
import Admin_Login from '@/components/Login_Register/Admin_Login'
import Buyer_Register from '@/components/Login_Register/Buyer_Register'
import Seller_Register from '@/components/Login_Register/Seller_Register'



Vue.use(Router)

export default new Router({
  mode: 'history',

  routes: [

    {
      path: '/',
      // name: 'Home',
      component: Home,
      redirect: '/Home' //重定向到Home去

    },

    {
      path: '/Home',
      name: 'Home',
      component: Home,

    },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
      redirect: '/Login/Buyer_Login',
      children: [{
          path: '/Login/Buyer_Login',
          name: 'Buyer_Login',
          component: Buyer_Login
        },
        {
          path: '/Login/Seller_Login',
          name: 'Seller_Login',
          component: Seller_Login
        },
        {
          path: '/Login/Admin_Login',
          name: 'Admin_Login',
          component: Admin_Login
        }
      ]
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register,
      redirect: '/Register/Buyer_Register',
      children: [{
          path: '/Register/Buyer_Register',
          name: 'Buyer_Register',
          component: Buyer_Register
        },
        {
          path: '/Register/Seller_Register',
          name: 'Seller_Register',
          component: Seller_Register
        }
      ]
    },
    {
      path: '/WantBuy',
      name: 'WantBuy',
      component: WantBuy
    },
    {
      path: '/WantSeller',
      name: 'WantSeller',
      component: WantSeller
    },
    {
      path: '/CarDetails/:id',
      name: 'CarDetails',
      component: CarDetails,
      props: true
    },
    {
      path: '/Feedback',
      name: 'Feedback',
      component: Feedback
    },{
      path: '/Testt',
      name: 'Testt',
      component: Testt
    },
  ]
})
