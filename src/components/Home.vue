<template>
  <div id="home">
    <!-- 轮播图区域 -->
    <div class="swiper">
      <swiper id="home_swiper" :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide v-for="(carimage,index) in carImageList" :key="index">
          <img class="swiperimg" :src="carimage.src">
        </swiper-slide>

        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
      <div class="slick-list draggable">
        <div class="home_text">
          <h2 class="text-color">
            Welcome to
            <strong>ZhiMaiMai</strong>
          </h2>
          <h1 class="text-color">We are more professional</h1>
          <h3 class="text-color">
            -It is more convenient for people to
            <strong>buy</strong> a car and
            <strong>sell</strong> a car-
          </h3>
        </div>

        <div class="home_btns">
          <router-link tag="button" class="btn" :to="{name:'WantBuy'}">我要买车</router-link>
          <router-link tag="button" class="btn" :to="{name:'WantSeller'}">我要卖车</router-link>
        </div>
      </div>
    </div>

    <!-- 热销 推荐 -->
    <div class="wrap MD-home-half-js-half MD-home-half-half" style="display: block;">
      <!-- 热销 推荐 头部 -->
      <div class="MD-home-nav-nav">
        <h3 class="MD-home-nav-nav-title">热销推荐</h3>
        <a
          href="javascript:void(0);"
          data-idx="0"
          data-type="half"
          data-class="nav-tab"
          class="MD-home-nav-tab-title"
        >马上购</a>
        <p class="MD-home-nav-js-line MD-home-nav-line" style="left: 138px; width: 54px;"></p>

        <router-link class="MD-home-nav-more" :to="{name:'WantBuy'}">更多>></router-link>
      </div>

      <div class="MD-home-half-half-list MD-home-half-js-half-list">
        <div
          class="MD-home-half-list MD-home-half-js-list"
          style="display:block;"
          v-for="(hotCar,index) in hotCarList"
          :key="index"
        >
          <a :href="hotCar.carHerf" data-scid="2823" class="MD-home-half-car-list">
            <span class="MD-home-half-left">
              <span class="MD-home-half-brands">{{hotCar.carName}}</span>
              <span class="MD-home-half-price">
                <b class="MD-home-half-blod">{{hotCar.carPrice}}</b>万起
              </span>
            </span>
            <span class="MD-home-half-right">
              <img
                :data-original="hotCar.carImg"
                :src="hotCar.carImg"
                class="MD-home-half-pic lazyload lazy"
                style="display: inline;"
              >
            </span>
          </a>
        </div>
      </div>
      <!-- 一站式服务 -->
      <a href="/half_detail/index/beijing/" class="MD-home-half-process-half-price" rel="nofollow">
        <span class="MD-home-half-process-half-process">
          <span class="MD-home-half-process-num">1</span>
          <span class="MD-home-half-process-tit">提交申请</span>
          <span class="MD-home-half-process-txt">第一时间为您安排专属购车顾问提供1对1服务</span>
        </span>
        <span class="MD-home-half-process-half-process">
          <span class="MD-home-half-process-num">2</span>
          <span class="MD-home-half-process-tit">极速审批</span>
          <span class="MD-home-half-process-txt">最快60分钟即可在网页查看审批结果</span>
        </span>
        <span class="MD-home-half-process-half-process MD-home-half-process-no-line">
          <span class="MD-home-half-process-num">3</span>
          <span class="MD-home-half-process-tit">一站提车</span>
          <span class="MD-home-half-process-txt">合同签署、过户、抵押办理在内的一站式服务</span>
        </span>
      </a>
    </div>

    <!-- 问题区域 -->
    <div class="problem">
      <div class="problem-tit">值脉脉问答</div>
      <ul class="problem-list">
        <li class="problem-item">
          <div class="problem-item-tit">在值脉脉二手车直卖网上买二手车可以办理贷款吗？</div>
          <div
            class="problem-item-con"
          >可以的，目前与值脉脉合作有信用贷抵押贷，可点击值脉脉官网页面上的“分期购车”，详细了解贷款产品的情况；也可直接拨打值脉脉金融客服热线400-555-5555进行咨询。</div>
        </li>
        <li class="problem-item">
          <div class="problem-item-tit">值脉脉二手车直卖网对售出的车辆提供哪些保障？</div>
          <div
            class="problem-item-con"
          >对于符合值脉脉延保标准的车辆，会赠送一年或2万公里的质保，保发动机和变速箱。延保相关部门会在签订延保合同后的两个工作日内进行审核，审核通过之日延保立即生效。</div>
        </li>
        <li class="problem-item">
          <div class="problem-item-tit">值脉脉二手车直卖网的车辆异地可以看车吗？</div>
          <div
            class="problem-item-con"
          >可以，不过请您在异地看车之前务必先和我们的销售取得联系，确认车辆的在售情况，以免您异地看车时出现车辆已售的情况耽误您的时间。</div>
        </li>
        <li class="problem-item">
          <div class="problem-item-tit">值脉脉二手车直卖网的优势？</div>
          <div class="problem-item-con">值脉脉二手车直卖网的车辆均经由专业评估师评估，有保障，并且售出车辆经检查有质量问题的，支持14日内退车。</div>
        </li>
      </ul>
    </div>

    <!-- 底部让每个家庭拥有更好的车 -->
    <div class="index-foot-buysell">
      <div class="w1200 clearfix">
        <span class="iconbg"></span>
        <p class="foot-buysell-tel fl">
          <span class="iconbg"></span>免费咨询电话：400-666-6666
        </p>
        <div class="foot-buysell-btn fl">
          <router-link tag="button" class="foot-btn-buy" :to="{name:'WantBuy'}">我要买车</router-link>
          <router-link tag="button" class="foot-btn-sell" :to="{name:'WantSeller'}">我要卖车</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      // 轮播数据
      swiperOption: {
        autoplay: {
          delay: 1500,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        loop: true,
        autoHeight: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          type: "bullets"
        },
        paginationClickable: true,
        effect: "fade",
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      carImageList: [
        { src: require("../assets/carImageList/slider/slider-img-1.jpg") },
        { src: require("../assets/carImageList/slider/slider-img-2.jpg") },
        { src: require("../assets/carImageList/slider/slider-img-3.jpg") }
      ],
      //热销推荐数据
      hotCarList: [
        {
          carName: "雪佛兰",
          carPrice: "5.53",
          carImg:
            "http://c2.xinstatic.com/che/20161209/1443/584a5278740d3745223.jpg",
          carHerf: "http://beijing/xuefulan/keluzi/sn_v20/h/"
        },
        {
          carName: "本田",
          carPrice: "5.84",
          carImg:
            "http://c2.xinstatic.com/che/20161209/1447/584a5388c7c35601012.jpg",

          carHerf: "http://beijing/bentian/yage/sn_v20/h/"
        },
        {
          carName: "奥迪",
          carPrice: "11.09",
          carImg:
            "http://c2.xinstatic.com/che/20161209/1442/584a523978203960307.jpg",
          carHerf: "http://beijing/aodi/a6l/sn_v20/h/"
        },
        {
          carName: "丰田",
          carPrice: "6.05",
          carImg:
            "http://c2.xinstatic.com/che/20161209/1438/584a51656f1af980570.jpg",
          carHerf: "http://beijing/xuefulan/keluzi/sn_v20/h/"
        },
        {
          carName: "别克",
          carPrice: "5.50",
          carImg:
            "http://c2.xinstatic.com/che/20161209/1447/584a537420c2f929132.jpg",
          carHerf: "http://beijing/bieke/kaiyue/sn_v20/h/"
        },
        {
          carName: "宝马",
          carPrice: "15.25",
          carImg:
            "http://c2.xinstatic.com/f1/20170601/1448/592fb8d60b9a9663502.jpg",
          carHerf: " http: //beijing/baoma/5xi/sn_v20/h/"
        }
      ]
    };
    //   created() {
    //     var url = this.HOST + "/movie/top250";
    //     this.$axios
    //       .get(url, {
    //         params: {
    //           count: 10,
    //           statr: 0
    //         }
    //       })
    //       .then(res => {
    //         this.movies = res.data;
    //         console.log(res.data);
    //       })
    //       .catch(error => {
    //         console.log(error);
    //       });
    //   }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    // this.swiper.slideTo(5, 5000, true);
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
  outline: 0;
  font-weight: 400;
  cursor: pointer;
}
#home{
 
}
/*轮播区域开始*/

#home_swiper {
  width: 100%;
  height: 700px;
}
.swiperimg {
  width: 100%;
  height: 100%;
}

.swiper {
  position: relative;
  margin-top: 0px;
  padding: 0;
}
.swiper >>> .swiper-pagination-bullet-active {
  background-color: rgb(87, 20, 212) !important;
  font-size: 50px;
}
.swiper >>> .swiper-pagination-bullet {
  background: #fff;
  opacity: 0.8;
  height: 20px;
  border-radius: 50%;
  width: 20px;
  transition: all 0.2s;
}
.slick-list {
  position: absolute;
  text-align: center;
  width: 500px;
  height: 300px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
}
.home_text .text-color {
  color: #fff;
}
.slick-list .home_text {
  opacity: 0.6;
}
.home_btns {
  margin-top: 15%;
}
.home_btns button {
  width: 150px;
  height: 50px;
  font-size: 18px;
  margin-right: 50px;
  margin-left: 10px;
  color: rgb(87, 20, 212);
}
.home_btns button:hover {
  background-color: rgb(87, 20, 212);
  color: rgba(255, 255, 255);
}

/*轮播区域结束*/

/* 热销推荐开始 */
.wrap {
  width: 1216px;
  margin: 0 auto;
  overflow: hidden;
}
.MD-home-nav-nav {
  width: 1210px;
  position: relative;
  height: 45px;
  border-bottom: 1px solid #ebebeb;
  overflow: hidden;
}
.MD-home-nav-nav-title {
  line-height: 45px;
  font-size: 22px;
  color: #1b1b1b;
  width: 138px;
  text-align: left;
  float: left;
  font-weight: 400;
}
.MD-home-nav-tab-title {
  float: left;
  height: 45px;
  line-height: 45px;
  font-size: 18px;
  color: #585858;
  margin-right: 40px;
}
.MD-home-nav-line {
  position: absolute;
  bottom: 0;
  left: 138px;
  width: 54px;
  height: 2px;
  background: #ff5a37;
  transition: all 0.1s ease;
}
.MD-home-nav-more {
  float: right;
  height: 45px;
  line-height: 45px;
  font-size: 14px;
  color: #ff5a37;
}
.MD-home-half-brands {
  display: block;
  width: 130px;
  font-size: 18px;
  line-height: 32px;
  color: #585858;
}
.MD-home-half-price {
  font-size: 18px;
  color: #333;
  font-weight: 400;
}
.MD-home-half-blod {
  font-size: 30px;
  color: #ff5a37;
}
.MD-home-half-left,
.MD-home-half-right {
  display: table-cell;
  vertical-align: middle;
}
.MD-home-half-half-list {
  overflow: hidden;
}
.MD-home-half-car-list {
  display: table;
  float: left;
  width: 345px;
  height: 165px;
  padding-right: 60px;
  vertical-align: middle;
}
.MD-home-half-car-list:hover > .MD-home-half-right img {
  margin-left: 0;
}

.MD-home-half-pic {
  width: 190px;
  margin-left: 15px;
  transition: all 300ms ease;
}
.MD-home-half-process-half-price {
  display: block;
  width: 1210px;
  /* height: 45px; */
  padding: 25px 0;
  background: url("https://s4.xinstatic.com/static/newcar-www/widget/home/half-process/imgs/bg_1cd5f50.jpg")
    no-repeat;
  overflow: hidden;
}
.MD-home-half-process-half-process {
  float: left;
  width: 357px;
  height: 45px;
  padding-left: 45px;
  border-right: 1px solid #fec3b6;
  overflow: hidden;
}
.MD-home-half-process-num {
  float: left;
  width: 40px;
  height: 40px;
  line-height: 40px;
  border: 2px solid #fff;
  font-size: 20px;
  color: #fff;
  margin-right: 13px;
  text-align: center;
  border-radius: 100%;
}
.MD-home-half-process-no-line {
  border: 0;
}
.MD-home-half-process-tit {
  font-size: 18px;
  line-height: 28px;
  color: #fff;
  display: block;
}
.MD-home-half-process-txt {
  font-size: 14px;
  color: #fff;
  display: block;
}
.MD-home-half-nopr {
  padding-right: 0;
}

/* 热销推荐结束 */
/*问题开始*/

.problem {
  width: 1130px;
  margin: 50px auto 0;
  overflow: hidden;
  background-color: rgb(121, 121, 121);
}
.problem .problem-tit {
  font-size: 40px;
  color: #181818;
  letter-spacing: 4.25px;
  font-weight: 700;
  text-align: center;
  line-height: 53px;
  padding-top: 79.5px;
  padding-bottom: 77.5px;
}
.problem .problem-list {
  margin: 0 auto;
}
.problem .problem-item {
  width: 500px;
  float: left;
  margin-right: 62.5px;
  margin-left: 62.5px;
}
.problem .problem-item .problem-item-tit {
  font-size: 18px;
  font-weight: bolder;
  color: rgba(87, 20, 212, 0.678);
  letter-spacing: 1.9px;
  line-height: 18px;
  margin-bottom: 21px;
  position: relative;
  text-indent: 41.5px;
}
.problem .problem-item .problem-item-con {
  font-size: 14px;
  line-height: 27px;
  color: #fff;
  width: 439px;
  text-align: justify;
  padding-bottom: 23.5px;
  margin-bottom: 31px;
  position: relative;
}
.problem .problem-item .problem-item-tit:before {
  content: "";
  width: 24.5px;
  height: 21.5px;
  background: url("https://cli-sta.guazistatic.com/c2c_web/pro.c3e69a272e918d3ffc1c9912ea1d2c81.png");
  background-size: 100% 100%;
  margin-right: 17px;
  position: absolute;
  top: -2px;
  left: 0;
}
.problem .problem-item .problem-item-con:after {
  content: "";
  background-color: #000;
  height: 1px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
}
.problem .problem-item:nth-child(2n) {
  margin-right: 0;
  margin-left: 0;
}
/*问题结束*/

/*让每个家庭拥有更好的车开始*/
.index-foot-buysell {
  height: 120px;
  background-color: #fff;
  background-image: url("https://cli-sta.guazistatic.com/c2c_web/foot-buysell-entry.6170e8f3cb5feb45f1d1e2a0b1d3c2e0.jpg");
  background-repeat: no-repeat;
  background-position: top;
  width: 100%;
  margin-top: 36px;
}
.index-foot-buysell .w1200 {
  width: 800px;
  margin: 0 auto;
}
.foot-buysell-tel {
  width: 382px;
  font-size: 14px;
  color: #858d96;
  text-align: center;
}
.foot-buysell-tel .iconbg {
  display: block;
  width: 382px;
  height: 30px;
  margin-top: 33px;
  margin-bottom: 9px;
  background-position: 0 -170px;
}
.foot-buysell-btn {
  padding-top: 30px;
}

.fl {
  float: left;
}
.clearfix:after {
  content: " ";
  display: block;
  clear: both;
  height: 0;
  visibility: hidden;
}
.foot-btn-buy {
  background: #3cb46d;
}
.foot-btn-buy:hover {
  background-color: #fff;
  color: #3cb46d;
}
.foot-btn-sell {
  background: #97cf00;
  margin-left: 11px;
}
.foot-btn-sell:hover {
  background-color: #fff;
  color: #97cf00;
}
.foot-btn-buy,
.foot-btn-sell {
  float: left;
  width: 179px;
  margin-left: 23px;
  line-height: 64px;
  font-size: 22px;
  color: #fff;
  text-align: center;
  border-radius: 5px;
}

.iconbg {
  background-image: url("https://cli-sta.guazistatic.com/c2c_web/icon_@2x_s.5dfd8e0395d1a3188c98507b746b6df4.png");
  background-size: 451px 300px;
}
/*让每个家庭拥有更好的车结束*/
</style>
