<template>
  <!-- 车辆详细信息 -->
  <div id="CarDetails" class="clearfix container">
    <div class="product-detail clearfix">
      <div class="bigimgbox">
        <img :src="carimg.titleImg" alt>
      </div>
      <div class="smallimgbox">
        <ul class="clearfix">
          <li v-for="(item,index) in carimg.items" @mouseenter="changImg(index)" :key="index">
            <img :src="item.imglist" alt>
          </li>
        </ul>
      </div>
    </div>
    <div class="product-textbox clearfix">
      <h2 class="titlebox">{{carDetailsData.title}}</h2>
      <ul class="assort clearfix">
        <li class="one">
          <span>{{carDetailsData.year}}</span>上牌时间
        </li>
        <li class="two">
          <span>{{carDetailsData.Kilometres}}万公里</span>表显里程
        </li>

        <li class="three">
          <span>{{carDetailsData.displacement}}</span>排量
        </li>
        <li class="last">
          <span>{{carDetailsData.Automatic}}</span>变速箱
        </li>
      </ul>
      <div class="pricebox js-disprice">
        <i class="ico-type">车主报价：</i>
        
        <span class="pricestype">
          ¥{{carDetailsData.Price}}
          <span class="f14">万</span>
        </span>
        <span class="newcarprice">新车指导价{{carDetailsData.oldPrice}}万(含税)</span>
      </div>
      <div class="service-protect-vip">
        <div class="service-protect-title clearfix">
          <i class="text-service">服务保障</i>
          <i class="text-service-gray">服务费不超过9%，详情可咨询购车顾问</i>
          <a class="look-detail" target="_blank">
            查看详情
            <i class="icon-gray-right7x11"></i>
          </a>
        </div>
        <ul class="service-protect-list clearfix">
          <li>
            <i class="icon-one"></i>
            <span>2年4万公里保障</span>
          </li>
          <li>
            <i class="icon-two"></i>
            <span>30天无忧退</span>
          </li>
          <li>
            <i class="icon-three"></i>
            <span>专业整备</span>
          </li>
          <li>
            <i class="icon-four"></i>
            <span>代办过户</span>
          </li>
          <li>
            <i class="icon-five"></i>
            <span>调表车赔付</span>
          </li>
          <li>
            <i class="icon-six"></i>
            <span>优质个人车</span>
          </li>
          <li>
            <i class="icon-seven"></i>
            <span title="盗抢查封、销赃车，必退">盗抢查封、销赃车，必退</span>
          </li>
          <li>
            <i class="icon-eight"></i>
            <span>259项检测</span>
          </li>
        </ul>
      </div>
      <div class="btnbox clearfix">
        <a class="orgbtn" @click="showAlertBox">预约看车</a>
        <a class="freephonebtn" @click="showMyPhone">免费咨询</a>
      </div>
      <div class="alertBox" v-show="alertBox">
        <span>车主的电话是：{{carDetailsData.sellerPhone}}</span>
      </div>
    </div>
    <span>{{cityIndexMu}}</span>
  </div>
</template>

<script>
import $axios from "Axios";
export default {
  name: "CarDetails",
  data() {
    return {
      carDetailsData: [],
      carimg: {},
      alertBox: false
    };
  },
  props: {
    id: String
  },
  methods: {
    changImg: function(index) {
      // console.log(index); //获取小图片的索引
      var car = this.carimg;
      // console.log(car.items[0].imglist);

      var src1 = car.items[0]; //获取每一个小图片相对应的src
      var src2 = car.items[1];
      var src3 = car.items[2];
      var src4 = car.items[3];
      var src5 = car.items[4];

      //如果我点击的小图片索引为0的时候，这时大图片的src要等于索引为0小图片的src
      if (index == 0) {
        car.titleImg = src1.imglist;
      } else if (index == 1) {
        car.titleImg = src2.imglist;
      } else if (index == 2) {
        car.titleImg = src3.imglist;
      } else if (index == 3) {
        car.titleImg = src4.imglist;
      } else if (index == 4) {
        car.titleImg = src5.imglist;
      }
    },
    showMyPhone() {
      alert("请咨询客服15757595721");
      alert(this.$store.state.cityIndex);
    },
    showAlertBox() {
      if (!this.alertBox) {
        this.alertBox = true;
      } else {
        this.alertBox = false;
      }
    }
  },
  mounted() {
    $axios.get("../../static/carDetails.json").then(
      response => {
        let datas = response.data[0].beijing.daZhong.carDetailsList;
        // console.log(datas);
        // console.log(this.id);

        if (datas && datas.length > 0) {
          this.carDetailsData = datas[this.id];
          this.carimg = this.carDetailsData.carimg;
          // console.log(this.carimg);
        } else {
          console.log("not found datas");
        }
      },
      response => {
        console.log("数据加载失败");
      }
    );
  },
  computed: {
    cityIndexMu() {
      return this.$store.state.cityIndex;
    }
  }
};
</script>

<style scoped>
.clearfix:after {
  content: " ";
  display: block;
  clear: both;
  height: 0;
  visibility: hidden;
}
#CarDetails {
  margin-bottom: 30px;
  margin-top: 20px;
}
/*左边车辆图片开始*/
.product-detail {
  width: 602px;
  float: left;
  position: relative;
}
.product-detail .bigimgbox {
  margin-bottom: 10px;
  position: relative;
  height: 402px;
}

.product-detail .bigimgbox img {
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.smallimgbox {
  position: relative;
  overflow: hidden;
  height: 88px;
}
.product-detail .smallimgbox ul {
  display: flex;
}
.product-detail .smallimgbox li {
  margin: 0 3px;
  height: 80px;
  cursor: pointer;
  flex: 1;
}
.product-detail .smallimgbox img:hover {
  border: 2px solid #22ac38;
}
.product-detail .smallimgbox img {
  width: 113px;
  height: 78px;
  border: 1px solid #e9e9e9;
}

/*左边车辆图片结束*/

/*右边车辆信息区域开始*/
.product-textbox {
  width: 535px;
  float: right;
  padding-left: 22px;
}

.product-textbox .titlebox {
  display: inline-block;
  color: #495056;
  font-size: 24px;
  font-weight: 400;
  line-height: 30px;
  padding-top: 7px;
  max-height: 60px;
  overflow: hidden;
  margin-bottom: 22px;
}
.assort li.one:before {
  width: 0;
}
.assort li:before {
  content: "";
  height: 34px;
  width: 1px;
  background-color: #e6e6e6;
  position: absolute;
  top: 9px;
  left: 0;
}
.assort {
  margin-bottom: 15px;
}
.assort li.one {
  width: 117px;
}
.assort li.two {
  width: 146px;
}
.assort li.three {
  width: 97px;
}
.assort li.last {
  width: 81px;
}
.assort li {
  float: left;
  text-align: center;
  color: #a5abb2;
  line-height: 24px;
  font-size: 12px;
  position: relative;
}
.assort li span {
  display: block;
  color: #495056;
  font-size: 18px;
  font-family: Microsoft Yahei;
  padding-bottom: 3px;
}
.pricebox {
  margin-bottom: 22px;
}
.pricebox .ico-type {
  color: #495056;
  font-size: 14px;
}
.pricebox-b .pricestype,
.pricebox .pricestype {
  font-size: 28px;
  color: #f95523;
}
.f14 {
  font-size: 14px;
}
.pricebox .newcarprice {
  text-decoration: line-through;
  color: #a5abb2;
  font-size: 14px;
  padding-left: 6px;
}
.pricebox .tip-icon {
  vertical-align: middle;
  margin-top: -7px;
}
/*服务保障区域*/
.service-protect-vip {
  background: #fffdf9;
  margin-bottom: 20px;
  padding: 25.5px 27px 10.5px 25px;
  border: 1px solid #fcf2d5;
}
.service-protect-vip .service-protect-title {
  font-size: 14px;
  color: #495056;
  line-height: 14px;
  padding-bottom: 27px;
}
.service-protect-vip .text-service {
  line-height: 14px;
  display: inline-block;
  padding-right: 8px;
}
.text-service {
  color: #495056;
  font-size: 14px;
  padding-right: 5px;
}
.service-protect-vip .text-service-gray {
  font-size: 12px;
  color: #a8abae;
}
.service-protect-vip .look-detail {
  color: #495056;
  float: right;
  line-height: 14px;
}
.service-protect-list li i,
.service-protect-list li span {
  float: left;
}
.service-protect-list li i {
  background: url("https://cli-sta.guazistatic.com/c2c_web/detail-icon-serveic@2x.a6794e78e4fa5fc2d8fba91c4808df06.png")
    no-repeat;
  background-size: 14px 157.5px;
  width: 14px;
  height: 14px;
  display: inline-block;
  vertical-align: middle;
  margin-right: 6px;
}
.service-protect-list li {
  width: 25%;
  float: left;
  line-height: 14px;
  margin-bottom: 15px;
  font-size: 13px;
  color: #495056;
}
.service-protect-list li span {
  white-space: nowrap;
  width: 90px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
}
.service-protect-list li i.icon-one {
  background-position: 0 -99px;
}
.service-protect-list li i.icon-two {
  background-position: 0 -79px;
}
.service-protect-list li i.icon-three {
  background-position: 0 1px;
}
.service-protect-list li i.icon-four {
  background-position: 0 -58px;
}
.service-protect-list li i.icon-five {
  background-position: 0 -37px;
}
.service-protect-list li i.icon-six {
  background-position: 0 -16px;
}
.service-protect-list li i.icon-seven {
  background-position: 0 -116px;
}
.service-protect-list li i.icon-eight {
  background-position: 0 -135px;
}
a.orgbtn {
  background-color: #fd6c34;
  border-radius: 2px;
  text-align: center;
  text-decoration: none;
  font-size: 20px;
  display: inline-block;
  width: 174px;
  height: 48px;
  line-height: 48px;
  vertical-align: top;
  color: #fff;
  margin-right: 20px;
  float: left;
  border: 1px solid #fd6c34;
}
a.orgbtn:hover {
  color: #fd6c34;
  background-color: #fff;
}
a.freephonebtn {
  width: 172px;
  height: 46px;
  line-height: 46px;
  border: 1px solid #2abd53;
  background-color: #f6fcf7;
  color: #2abd53;
  border-radius: 2px;
  margin-right: 10px;
  text-align: center;
  text-decoration: none;
  font-size: 20px;
  display: inline-block;
  vertical-align: top;
  float: right;
}
a.freephonebtn:hover {
  background-color: #2abd53;
  color: #fff;
}
.alertBox {
  border: 1px solid aqua;
  background-color: aqua;
  height: 50px;
  border-radius: 2%;
  text-emphasis: center;
  line-height: 50px;
  font-style: 30px;
  font-weight: bold;
  padding-left: 30px;
  margin-top: 20px;
}
/*右边车辆信息区域结束*/
</style>
