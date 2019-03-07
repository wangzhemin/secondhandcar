<template>
  <div>
    <h1>WantSeller</h1>

    <!-- 值脉脉问答 -->
    <div class="zhimaimai-qa">
      <div class="problem">
        <div class="con-tit">
          <p>值脉脉问答</p>
          <i></i>
        </div>
        <ul class="qa-list clearfix">
          <li>
            <div class="qa-pic qa-pic-1"></div>
            <div class="qa-con">
              <p class="qa-t">
                Q1：在值脉脉卖车有什么优势？
                <i></i>
              </p>
              <p
                class="qa-txt"
              >值脉脉二手车直卖网，一直秉承“没有中间商赚差价”的二手车直卖模式，将原本由中间环节层层加码产生的差价让渡给买卖双方，让买家少花钱，卖家多卖钱。同时，值脉脉二手车有专业的售车顾问为您精准匹配优质客户，快速卖出，且全程陪同，卖车流程安全省心可靠。</p>
            </div>
          </li>

          <li>
            <div class="qa-pic qa-pic-2"></div>
            <div class="qa-con">
              <p class="qa-t">
                Q2：卖车流程是怎样的？
                <i></i>
              </p>
              <p class="qa-txt">1、在本页填写卖车信息或拨打400-666-6666联系我们。
                <br>2、提交质检报告。
                <br>3、接受评估师专业的上门质检，定出售价。
                <br>4、达成交易协议，具备过户条件的值脉脉二手车直卖网提供过户服务。
                <br>
              </p>
            </div>
          </li>

          <li>
            <div class="qa-pic qa-pic-3"></div>
            <div class="qa-con">
              <p class="qa-t">
                Q3：卖车需要准备什么？
                <i></i>
              </p>
              <p
                class="qa-txt"
              >1、身份证；2、环保标；3、购置税本；4、行驶证；5、检字标；6、购置税发票；7、车辆登记证；8、交强险标；9、购车发票/最近一次过户发票；10、交强险单。</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WantSeller"
};
</script>

<style scoped>
.zhimaimai-qa {
  height: 535px;
  background: #f8f8f8;
}
.zhimaimai-qa .problem {
  width: 1200px;
  margin: 0 auto;
}
.con-tit {
  padding: 33px 0 40px;
}
.con-tit p {
  font-size: 24px;
  color: #495056;
  line-height: 44px;
  text-align: center;
}
.con-tit i {
  display: block;
  width: 28px;
  height: 3px;
  margin: 0 auto;
  line-height: 0;
  font-size: 0;
  background: #22ac38;
}
.zhimaimai-qa .problem .qa-list li {
  width: 500px;
  height: 190px;
  float: left;
  margin: 0 60px 0 35px;
}
.zhimaimai-qa .problem .qa-list li .qa-pic {
  float: left;
  width: 60px;
  height: 60px;
  background-size: 100% 100%;
  border-radius: 50%;
}
.zhimaimai-qa .problem .qa-list li .qa-con {
  float: right;
  width: 425px;
  padding-top: 12px;
}
.zhimaimai-qa .problem .qa-list li .qa-con .qa-t {
  position: relative;
  display: inline-block;
  line-height: 36px;
  padding: 0 15px;
  background: #ebebeb;
  border-radius: 3px;
  font-size: 16px;
  color: #495056;
}
.zhimaimai-qa .problem .qa-list li .qa-con .qa-t i {
  position: absolute;
  top: 13px;
  left: -11px;
  display: block;
  width: 1px;
  height: 1px;
  border: 5px solid transparent;
  border-right: 5px solid #ebebeb;
}
.zhimaimai-qa .problem .qa-list li .qa-con .qa-txt {
  font-size: 14px;
  color: #a5abb2;
  padding-top: 10px;
  line-height: 30px;
}
.zhimaimai-qa .problem .qa-list li .qa-pic.qa-pic-1 {
  background-image: url("../assets/headPortrait/headPortrait1.jpg");
}
.zhimaimai-qa .problem .qa-list li .qa-pic.qa-pic-2 {
  background-image: url("../assets/headPortrait/headPortrait2.jpg");
}
.zhimaimai-qa .problem .qa-list li .qa-pic.qa-pic-3 {
  background-image: url("../assets/headPortrait/headPortrait3.jpg");
}
.clearfix:after {
  content: " ";
  display: block;
  clear: both;
  height: 0;
  visibility: hidden;
}
</style>
