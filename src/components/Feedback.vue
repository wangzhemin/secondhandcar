<template>
  <!--  留言意见反馈区域 -->
  <div id="feedback">
    <div class="freeback-container">
      <div class="freeback-img-box">
        <img src="../assets/freeback.png">
      </div>
      <div class="freeback-box-border">
        <div class="freeback-box">
          <div class="freeback-title">
            <h1>意见反馈</h1>
            <h2>感谢你的反馈，我们会积极改善，做出更好的服务的</h2>
          </div>
          <div class="freeback-content">
            <div class="freeback-form">
              <form autocomplete="off" class="ivu-form ivu-form-label-right">
                <div class="ivu-form-item">
                  <label class="ivu-form-item-label" style="width: 80px;">标题</label>
                  <div class="ivu-form-item-content" style="margin-left: 80px;">
                    <div class="ivu-input-wrapper ivu-input-type">
                      <i
                        class="ivu-icon ivu-icon-load-c ivu-load-loop ivu-input-icon ivu-input-icon-validate"
                      ></i>
                      <input
                        autocomplete="off"
                        spellcheck="false"
                        type="text"
                        placeholder="请输入标题"
                        class="ivu-input"
                      >
                    </div>
                  </div>
                </div>
                <div class="ivu-form-item">
                  <label class="ivu-form-item-label" style="width: 80px;">反馈信息</label>
                  <div class="ivu-form-item-content" style="margin-left: 80px;">
                    <div class="ivu-input-wrapper ivu-input-type">
                      <textarea
                        wrap="soft"
                        autocomplete="off"
                        spellcheck="false"
                        placeholder="请输入反馈信息"
                        rows="2"
                        class="ivu-input"
                        style="height: 178px; min-height: 178px; max-height: 220px;"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div class="ivu-form-item">
                  <div class="ivu-form-item-content" style="margin-left: 80px;">
                    <button type="button" class="ivu-btn ivu-btn-primary">
                      <span>提交</span>
                    </button>
                    <button type="button" class="ivu-btn ivu-btn-ghost">
                      <span>清空信息</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Feedback",
  data() {
    return {};
  }
};
</script>

<style scoped>
.freeback-container {
  margin: 15px auto;
  width: 80%;
}
.freeback-container,
.pay-done-box {
  height: 600px;
  display: flex;
  align-items: center;
}
.freeback-img-box {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.freeback-img-box img {
  width: 80%;
}
.freeback-box-border {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.freeback-box {
  width: 480px;
}
.freeback-content {
  margin: 15px auto;
  border: 1px dotted #ccc;
}
.freeback-form {
  margin: 30px auto;
  width: 90%;
}
.ivu-form-item {
  margin-bottom: 24px;
  vertical-align: top;
  zoom: 1;
}
.ivu-form .ivu-form-item-label {
  text-align: right;
  vertical-align: middle;
  float: left;
  font-size: 12px;
  color: #495060;
  line-height: 1;
  padding: 10px 12px 10px 0;
  box-sizing: border-box;
}
.ivu-form-item-content {
  position: relative;
  line-height: 32px;
  font-size: 12px;
}
.ivu-input-wrapper {
  display: inline-block;
  width: 100%;
  position: relative;
  vertical-align: middle;
  line-height: normal;
}
.ivu-input-icon-validate {
  display: none;
}

.ivu-input-icon {
  width: 32px;
  height: 32px;
  line-height: 32px;
  font-size: 16px;
  text-align: center;
  color: #80848f;
  position: absolute;
  right: 0;
  z-index: 3;
}
.ivu-icon {
  display: inline-block;
  speak: none;
  font-style: normal;
  font-weight: 400;
  font-variant: normal;
  text-transform: none;
  text-rendering: auto;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
}
.ivu-input {
  display: inline-block;
  width: 100%;
  height: 32px;
  line-height: 1.5;
  padding: 4px 7px;
  font-size: 12px;
  border: 1px solid #dddee1;
  border-radius: 4px;
  color: #495060;
  background-color: #fff;
  background-image: none;
  position: relative;
  cursor: text;
  transition: border 0.2s ease-in-out, background 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out;
}
button,
input {
  overflow: visible;
}
.ivu-form-item {
  margin-bottom: 24px;
  vertical-align: top;
  zoom: 1;
}
.ivu-form-item:after,
.ivu-form-item:before {
  content: "";
  display: table;
}
.ivu-form .ivu-form-item-label {
  text-align: right;
  vertical-align: middle;
  float: left;
  font-size: 12px;
  color: #495060;
  line-height: 1;
  padding: 10px 12px 10px 0;
  box-sizing: border-box;
}
.ivu-form-item-content {
  position: relative;
  line-height: 32px;
  font-size: 12px;
}
.ivu-input-wrapper {
  display: inline-block;
  width: 100%;
  position: relative;
  vertical-align: middle;
  line-height: normal;
}
.ivu-form-item:after {
  clear: both;
  visibility: hidden;
  font-size: 0;
  height: 0;
}
.ivu-form-item:after,
.ivu-form-item:before {
  content: "";
  display: table;
}
.ivu-form-item {
  margin-bottom: 24px;
  vertical-align: top;
  zoom: 1;
}

.ivu-btn-primary {
  color: #fff;
  background-color: #2d8cf0;
  border-color: #2d8cf0;
}
.ivu-btn,
.ivu-btn:active,
.ivu-btn:focus {
  outline: 0;
}
.ivu-btn {
  display: inline-block;
  margin-bottom: 0;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  white-space: nowrap;
  line-height: 1.5;
  user-select: none;
  padding: 6px 15px;
  font-size: 12px;
  border-radius: 4px;
  transition: color 0.2s linear, background-color 0.2s linear,
    border 0.2s linear, box-shadow 0.2s linear;
  color: #495060;
  background-color: #f7f7f7;
  border-color: #dddee1;
}
.ivu-btn-ghost {
  color: #495060;
  background-color: transparent;
  border-color: #dddee1;
}
</style>
