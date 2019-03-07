<template>
  <div id="header">
    <div class="title">
      <a class="title_logo" href="/home">
        <img src="@/assets/title_logo.jpg">
      </a>
      <div class="title_name">
        <h2>值脉脉二手车交易平台</h2>
      </div>
    </div>
    <div class="list">
      <ul>
        <router-link tag="li" :to="{name:'Home'}">首页</router-link>
        <router-link tag="li" :to="{name:'WantBuy'}">我要买车</router-link>
        <router-link tag="li" :to="{name:'WantSeller'}">我要卖车</router-link>
        <router-link tag="li" :to="{name:'Login'}">登录</router-link>
        <router-link tag="li" :to="{name:'Register'}">注册</router-link>
        <router-link tag="li" :to="{name:'Feedback'}">意见反馈</router-link>

      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  }
};
</script>

<style scoped>
#header {
  width: 100%;
  height: 85px;
  background-color: rgb(102, 102, 102);
}
.title {
  display: inline-block;
  padding-top: 10px;
}
.title .title_name {
  display: inline-block;
  padding: 10px;
  margin-left: 50px;
}
.title_logo {
  display: inline-block;
  width: 80px;
  height: 60px;
  margin-left: 20px;
}
.title_logo>img {
  width: 100%;
  height: 100%;
}
.list {
  float: right;
}
ul {
  display: flex;
  text-align: center;
  font-size: 18px;
}
li {
  width: 100px;
  height: 50px;
  color: #fff;
  margin: 18px 10px 0 10PX;
  line-height: 50px;
}
.router-link-active {
  border-bottom: 2px solid #fff;
}
</style>

