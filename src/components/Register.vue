<template>
  <div id="register">
    <div class="container">
      <ul class="registerUl">
        <router-link class="buyer_register" tag="li" :to="{name:'Buyer_Register'}">买家注册</router-link>
        <router-link class="seller_register" tag="li" :to="{name:'Seller_Register'}">卖家注册</router-link>
      </ul>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register"
};
</script>

<style scoped>
#register {
  background: url("../assets/bgRegister.jpg") no-repeat center center;
  height: 600px;
  padding-top: 50px;
}

ul {
  float: left;
}
li {
  width: 100px;
  height: 100px;
  border-radius: 20%;
  text-align: center;
  line-height: 100px;
  margin: 20px;
  color: #fff;
  font-size: 18px;
}
.buyer_register {
  background-color: rgba(122, 122, 122, 0.8);
  color: #fff;
}
.seller_register {
  background-color: rgba(122, 122, 122, 0.8);
  color: #fff;
  margin-top: 150px;;
}
.router-link-active {
  background-color: #fff;
  color: rgba(122, 122, 122, 0.8);
}
</style>
