<template>
  <div id="footer">
    <div class="company-info clearfix">
      <div class="footer-logo"></div>

      <div class="phone-email">
        <p>
          咨询电话：
          <i>400-088-8880</i>
          <span>（周一至周日 8:00-21:00）</span>
          <br>服务监督热线：
          <i>400-088-8880</i>
          <span>（周一至周日 9:00-21:00）</span>
        </p>
        <p>
          互联网违法或不良信息举报联系方式：
          <br>邮箱：
          <i>15757595721@163.com</i>&nbsp;&nbsp;电话：
          <i>010-8888888</i>
        </p>
      </div>

      <div class="ewm-box">
        <img src="../assets/weixin.jpg" alt class="gz-ewm">
        <p class="ewm-tit">关注微信</p>
      </div>

      <!-- <div class="ewm-box">
        <span class="bg-old-ewm"></span>
        <p class="ewm-tit">下载APP</p>
        <span class="ewm-tit-tip">瓜分十亿红包</span>
      </div>-->
      <div class="basic-info">
        <div class="info-link">
          <a rel="nofollow" href="/hz/aboutus/" target="_blank">关于值脉脉</a>
          <a rel="nofollow" href="/hz/aboutusGroup/" target="_blank">集团介绍</a>
          <a
            rel="nofollow"
            href="http://zhaopin.guazi.com/"
            data-gzlog="tracking_type=click&amp;eventid=02521527"
            target="_blank"
          >加入我们</a>
          <a rel="nofollow" href="/hz/contact/" target="_blank">联系我们</a>
          <a rel="nofollow" href="/hz/intro/" target="_blank">服务保障</a>
          <a rel="nofollow" href="/zq_privacy/" target="_blank">隐私声明</a>
          <a rel="nofollow" href="/zq_term/" target="_blank">服务条款</a>
          <a rel="nofollow" target="_blank">营业执照</a>
        </div>
        <p class="arc-info">Copyright 2019 www.zhimaimai.com All Rights Reserved</p>
        <p class="arc-info">京ICP备6666665号 ICP证66666号</p>
        <div class="protect clearfix"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {};
  }
};
</script>

<style scoped>
#footer {
  width: 100%;
  height: 190px;
  background-color: rgb(102, 102, 102);
  padding: 50px 0 30px;
}
.company-info {
  width: 1190px;
  height: 90px;
  margin: 0 auto;
  color: #2a2c37;
  padding-bottom: 70px;
  position: relative;
}
.footer-logo {
  width: 102px;
  height: 90px;
  float: left;
  margin-left: 40px;
  background: url("../assets/title_logo.jpg") no-repeat;
  background-size: 100% 100%;
}
.friendly-link {
  height: 28px;
  line-height: 28px;
  margin: 0 auto;
}

.phone-email {
  float: left;
  width: 425px;
  padding-left: 30px;
}
.phone-email p {
  line-height: 22px;
  margin-bottom: 5px;
}
.phone-email p i {
  padding-right: 18px;
}
.phone-email p span {
  display: inline-block;
  font-size: 14px;
}
.ewm-box {
  float: left;
  width: 85px;
  height: 105px;
  margin-top: 4px;
  margin-right: 30px;
  text-align: center;
  display: block;
}
.bg-old-ewm,
.ewm-box img {
  display: block;
  width: 85px;
  height: 85px;
}
.ewm-box .ewm-tit {
  line-height: 22px;
  font-size: 14px;
}
.company-info .basic-info {
  float: left;
  width: 390px;
  padding-left: 20px;
  background: transparent;
  margin: 0;
  overflow: hidden;
}
.info-link {
  line-height: 22px;
  font-size: 13px;
}
.info-link a {
  color: #2a2c37;
}
.info-link a:hover {
  color: #fff;
}
.info-link a {
  margin-right: 4px;
}
.arc-info {
  line-height: 20px;
  font-family: simhei;
  font-size: 14px;
}
.protect {
  padding-top: 3px;
  height: 28px;
  line-height: 28px;
}
.protect .police {
  display: inline-block;
  text-decoration: none;
  color: #2a2c37;
  line-height: 28px;
  padding-left: 24px;
  position: relative;
  font-size: 14px;
}
.clearfix:after {
  content: " ";
  display: block;
  clear: both;
  height: 0;
  visibility: hidden;
}
</style>
