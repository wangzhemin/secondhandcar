<template>
  <div id="login">
    <div class="container">
      <ul >
        <router-link class="buyer" tag="li" :to="{name:'Buyer_Login'}">买家登录</router-link>
        <router-link class="seller" tag="li" :to="{name:'Seller_Login'}">卖家登录</router-link>
        <router-link class="admin" tag="li" :to="{name:'Admin_Login'}">管理员登录</router-link>
      </ul>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {};
  }
};
</script>
<style scoped>
#login {
  background: url("../assets/bgLogin1.jpg") no-repeat center center;
  height: 600px;
}
ul {
  width: 800px;
  height: 120px;
  box-sizing: border-box;
  margin: 0 auto;
  display:block;
  overflow: hidden;
  padding-left: 22px;
}
li {
  float: left;
  width: 200px;
  height: 100px;
  line-height: 100px;
  margin:10px 15px;
  text-align: center;
  font-size: 25px;
  font-weight:800;
  border-radius: 20%;
  box-sizing: border-box;
}

.buyer {
  background-color: rgba(122, 122, 122, 0.8);
  color: #fff;
}
.seller {
  background-color: rgba(122, 122, 122, 0.8);
  color: #fff;
}
.admin {
  background-color: rgba(122, 122, 122, 0.8);
  color: #fff;
}
.router-link-active {
  background-color: #fff;
  color: rgba(122, 122, 122, 0.8);
}
</style>
