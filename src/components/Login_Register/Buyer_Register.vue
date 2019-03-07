<template>
  <div id="buyer_register">
    <div class="container">
      <form class="register_form">
        <fieldset>
          <label class="block clearfix">
            <span class="block input-icon input-icon-right">
              <input type="text" class="form-control" placeholder="用户名">
            </span>
          </label>
          
          <label class="block clearfix">
            <span class="block input-icon input-icon-right">
              <input type="phone" class="form-control" placeholder="手机号">
            </span>
          </label>
          
          <label class="block clearfix">
            <span class="block input-icon input-icon-right">
              <input type="password" class="form-control" placeholder="密码">
            </span>
          </label>
          
          <label class="block clearfix">
            <span class="block input-icon input-icon-right">
              <input type="password" class="form-control" placeholder="确认密码">
            </span>
          </label>
          
          <span class="samePassword">两次密码不相同，请重新输入</span>
          
          <button type="button" class="btn btn-buyer btn-block">
            <span class="bigger">买家注册</span>
          </button>
        </fieldset>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Buyer_Register"
};
</script>

<style scoped>
.register_form {
  width: 400px;
  height: 400px;
  display: flex;
  box-sizing: border-box;
  margin: 0 40% 0 20%;
  background-color: rgba(122, 122, 122, 0.8);
  padding: 50px;
  border-radius: 5%;
}
.fieldset {
  padding: 0;
  margin: 0;
  border: 0;
  min-width: 0;
}

.block {
  display: block;
}
label {
  font-weight: 400;
  font-size: 14px;
  width: 300px;
  margin-bottom: 25px;
  border: 1px solid #000;
}
.samePassword {
  color: red;
  display: block;
  margin-bottom: 10px;
}
.btn-buyer {
  background-color: #000;
  color: #fff;
}
</style>
