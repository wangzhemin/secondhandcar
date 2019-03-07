<template>
  <div id="buyer_login">
    <div style="height:1px;"></div>
    <div class="login">
      <header>
        <h1>买家登录</h1>
      </header>
      <div class="sr">
        <form>
          <div class="name">
            <label>
              <!-- <i class="sublist-icon glyphicon glyphicon-user"></i> -->
            </label>
            <input type="text" placeholder="请输入买家登录名" class="name_inp">
          </div>
          <div class="name">
            <label>
              <!-- <i class="sublist-icon glyphicon glyphicon-pencil"></i> -->
            </label>
            <input type="text" placeholder="请输入买家登录密码" class="name_inp">
          </div>
          <button class="dl" @click="goToWantBuy">买家登录</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
//方法命名不规范，仅做Demo
export default {
  name: "Buyer_Login",
  data() {
    return {
      labelPosition: "right",
      formLabelAlign: {
        name: "",
        pass: ""
      }
    };
  },
  methods: {
    goToWantBuy() {
      //登录成功跳转到买车页面
      this.$router.push({ path: "/WantBuy" });
    },

    getTest() {
      //方法
      console.log(this.formLabelAlign);
      let name = this.formLabelAlign.name;
      let pass = this.formLabelAlign.pass;
      if ("" != name && "" != pass) {
        this.http
          .post("login", {
            username: this.formLabelAlign.name,
            password: this.formLabelAlign.pass
          })
          .then(response => {
            console.log(response.data);
            if (response.data.flag == true) {
              alert("登录成功");
            } else {
              alert("登录失败");
            }
          });
      }
    }
  }
};
</script>
<style scoped>
#buyer_login {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
@keyframes cc {
  0% {
    opacity: 0.4;
    transform: scale(0.1);
    top: -500px;
  }
  50% {
    opacity: 0.4;
    transform: scale(0.1) rotateX(90deg);
    top: -50px;
  }
  100% {
    opacity: 1;
    transform: scale(1) rotateX(0deg);
    top: 0;
  }
}
@media only screen and (max-width: 500px) {
  .login {
    width: 95% !important;
  }
  .sr {
    padding: 30px 70px !important;
  }
}

.login {
  width: 450px;
  position: relative;
  top: 0;
  margin: 5% auto;
  background: rgba(218, 211, 211, 0.8);
  border-radius: 10px;
  color: #000;
  animation: cc 2s ease-in-out;
}
.login header {
  padding: 10px;
  border-bottom: 2px solid #000;
}
.login header h1 {
  margin: 0;
  padding: 0;
  text-align: center;
  font-size: 25px;
  line-height: 40px;
}
.sr {
  padding: 30px 90px;
}
.name {
  position: relative;
  margin-bottom: 20px;
  clear: both;
  border: 1px solid #000;
  width: 100%;
  height: 40px;
}
.name label {
  position: absolute;
  color: #000;
  top: 10px;
  left: 10px;
}
.name_inp {
  padding-left: 34px;
  height: 38px;
  line-height: 38px;
  line-height: 36px\9;
  border: none;
  background-color: #fff;
  width: 100%;
  outline: none;
}
.dl {
  width: 150px;
  height: 40px;
  background: #000;
  line-height: 40px;
  display: block;
  margin: 0 auto;
  color: #fff;
  border: 0;
  font-size: 18;
  border-radius: 5%;
}
</style>