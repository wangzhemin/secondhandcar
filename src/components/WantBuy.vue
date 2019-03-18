<template>
  <div id="wantBuy">
    <div class="container">
      <!-- 条件选择框 -->
      <div class="conSelectionBox clearfix">
        <!-- 搜索框 -->
        <div class="selectionBoxHeader clearfix">
          <a href="/">
            <span class="title">值脉脉二手车平台欢迎你</span>
          </a>
          <div class="carSearch">
            <div class="searchBox">
              <input
                type="text"
                v-model="carSearch"
                class="search-input js_search_input_index"
                placeholder="搜索您想要的车"
                @keyup.enter="toSearchCar(carArrs)"
              >
              <button class="search-btn" type="button" @click="toSearchCar(carArrs)"></button>
            </div>
          </div>
        </div>
        <!-- 条件筛选框 -->
        <div class="screen">
          <!-- 所在地 -->
          <dl class="clearfix">
            <dt>所在地</dt>
            <dd>
              <div class="dd-top">
                <span class="a-box">
                  <!-- 不限 -->
                  <ul>
                    <!-- 热门所在地 -->
                    <li
                      :class="activeClassCity == index ? 'active':''"
                      v-for="(item,index) in cityList"
                      :key="index"
                      @click="chooseCity(index);getItemCity(index)"
                    >
                      <a>{{item}}</a>
                    </li>
                  </ul>
                </span>
              </div>
            </dd>
          </dl>
          <!-- 品牌 -->
          <dl class="clearfix">
            <dt>品牌</dt>
            <dd>
              <div class="dd-top">
                <span class="a-box">
                  <!-- 不限 -->
                  <ul>
                    <li
                      v-for="(itemBrand,index) in brandList"
                      :key="index"
                      :class="activeClassBrand == index ? 'active':''"
                      @click="getItemBrand(index);chooseBrand(index)"
                    >
                      <a class="active">{{itemBrand}}</a>
                    </li>
                  </ul>
                </span>
              </div>
            </dd>
          </dl>
        </div>
      </div>

      <div class="mainContent">
        <!-- 没搜索的时候展示的页面 -->
        <ul v-if="isShow" class="mainContentUl noSearch">
          <li @click="toDetail(car.id)" v-for="(car,index) in carArrs" :key="index">
            <a href>
              <img :src="car.imgUrl">
              <h2 class="t">{{car.title}} {{car.displacement}}L &nbsp;&nbsp; {{car.Automatic}}</h2>
              <div class="t-i">
                {{car.year}}年
                <span class="icon-pad">|</span>1.6万公里
                <span class="icon-pad">|</span>店内直卖
              </div>
              <div class="t-price">
                <p>
                  {{car.Price}}
                  <span>万</span>
                </p>
                <i class="i-orange">超值</i>
                <i class="i-blue">严选车</i>
                <em class="line-through">{{car.oldPrice}}万</em>
              </div>
            </a>
          </li>
        </ul>

        <!-- 搜索后展示的页面 -->
        <ul v-if="!isShow" class="mainContentUl noSearch">
          <li @click="toDetail(car.id)" v-for="(car,index) in newCarArrs" :key="index">
            <a href>
              <img :src="car.imgUrl">
              <h2 class="t">{{car.title}}{{car.displacement}}L</h2>
              <div class="t-i">
                {{car.year}}年
                <span class="icon-pad">|</span>1.6万公里
                <span class="icon-pad">|</span>店内直卖
              </div>
              <div class="t-price">
                <p>
                  {{car.Price}}
                  <span>万</span>
                </p>
                <i class="i-orange">超值</i>
                <i class="i-blue">严选车</i>
                <em class="line-through">{{car.oldPrice}}万</em>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import $axios from "Axios";
export default {
  name: "WantBuy",
  data() {
    return {
      carSearch: "",
      carArrs: [],
      newCarArrs: [],
      isShow: "true",

      // cityIndex: "",
      //城市index传给儿子

      // carIndex: "",
      //车辆index传给儿子

      //城市选中样式
      activeClassCity: -1,
      cityList: ["北京", "上海", "广州", "深圳", "杭州"],

      //选中车牌样式
      activeClassBrand: -1,
      brandList: ["大众", "宝马", "奥迪", "本田", "马自达", "丰田"],

      resData: [],
      //初始的信息数据
      carCity: [],
      //匹配城市后的数据
      iconListArr: []
      // 最终展示的数据
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      $axios.get("../../static/carDetails.json").then(
        response => {
          this.resData = response.data[0];
          // var iconListArr = resData.beijing.daZhong.carDetailsList;

          // for (let i in iconListArr) {
          //   var id = iconListArr[i].id;
          //   this.carArrs.push(iconListArr[id]);
          // }
          // console.log(iconListArr);
        },
        response => {
          console.log("数据加载失败");
        }
      );
    },
    chooseCity(index) {
      //选择城市
      if (index == 0) {
        this.carArrs = [];
        // this.$store.commit("cityIndex", 0);
        this.carCity = this.resData.beijing;
      } else if (index == 1) {
        this.carArrs = [];
        // this.$store.commit("cityIndex", 1);

        this.carCity = this.resData.shanghai;
      } else if (index == 2) {
        this.carArrs = [];
        this.carCity = this.resData.guangzhou;
      } else if (index == 3) {
        this.carArrs = [];
        this.carCity = this.resData.shenzhen;
      } else if (index == 4) {
        this.carArrs = [];
        this.carCity = this.resData.hangzhou;
      }
    },
    chooseBrand(index) {
      // 选择车牌
      if (index == 0) {
        this.carArrs = [];
        // this.$store.commit("carIndex", 0);
        this.carIndex = 0;
        this.iconListArr = this.carCity.daZhong.carDetailsList;
      } else if (index == 1) {
        this.carArrs = [];
        // this.$store.commit("carIndex", 1);

        this.iconListArr = this.carCity.baoMa.carDetailsList;
      } else if (index == 2) {
        this.carArrs = [];
        this.iconListArr = this.carCity.daZhong.carDetailsList;
      } else if (index == 3) {
        this.carArrs = [];
        this.iconListArr = this.carCity.daZhong.carDetailsList;
      } else if (index == 4) {
        this.carArrs = [];
        this.iconListArr = this.carCity.daZhong.carDetailsList;
      } else if (index == 5) {
        this.carArrs = [];
        this.iconListArr = this.carCity.daZhong.carDetailsList;
      }
      for (let i in this.iconListArr) {
        var id = this.iconListArr[i].id;
        this.carArrs.push(this.iconListArr[id]);
      }
    },

    toDetail(id) {
      this.$router.push({ path: `/carDetails/${id}` });
    },
    toSearchCar(carArrs) {
      if (this.carSearch == "") {
        alert("请输入你要查询的车辆");
      }
      this.newCarArrs = carArrs.filter(iList => {
        return iList.title.match(this.carSearch);
      });
      this.isShow = false;
    },
    getItemCity(index) {
      this.activeClassCity = -1;
      this.activeClassBrand = -1;
      //清空城市 车牌的选择样式
      this.activeClassCity = index; // 把当前点击元素的index，赋值给activeClassCity
    },
    getItemBrand(index) {
      this.activeClassBrand = -1;
      this.activeClassBrand = index; // 把当前点击元素的index，赋值给activeClassCity
    }
  },
  computed: {
    // searchCar: function() {
    //   return this.carArrs.filter(iList => {
    //     return iList.title.match(this.carSearch);
    //   });
    // }
  }
};
</script>

<style scoped>
dl {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
  outline: 0;
  font-weight: 400;
  cursor: pointer;
}
.clearfix:after {
  content: " ";
  display: block;
  clear: both;
  height: 0;
  visibility: hidden;
}
/*条件选择框开始*/

.conSelectionBox {
  width: 1222px;
  height: 300px;
  border: 2px solid #000;
}
.conSelectionBox .selectionBoxHeader {
  height: 50px;
  border: 1px solid rgb(19, 189, 201);
}
.conSelectionBox .title {
  font-size: 20px;
  font-family: Microsoft Yahei, arial, "sans-serif";
  width: 220px;
  height: 50px;
  line-height: 50px;
  margin-left: 10%;
  font-weight: bold;
  cursor: pointer;
}
.conSelectionBox .title:hover {
  color: aqua;
}
.conSelectionBox .carSearch {
  float: right;
  width: 280px;
  height: 34px;
  margin-top: 10px;
}
.conSelectionBox::after {
  content: "";
  display: block;
  clear: both;
}
.conSelectionBox .carSearch .searchBox {
  position: relative;
  width: 278px;
  height: 32px;
  border: 1px solid #e6e6e6;
}

.conSelectionBox .carSearch .searchBox input {
  float: left;
  width: 220px;
  height: 30px;
  border: none;
  line-height: 32px;
  padding: 0 10px;
  font-size: 14px;
  color: #495056;
  font-family: Microsoft Yahei, arial, "sans-serif";
}

.conSelectionBox .carSearch .searchBox button {
  background-image: url("https://cli-sta.guazistatic.com/c2c_web/icon.cccdd6106c22fa2cc2fbd5f5c65a1f27.png");
  float: right;
  width: 37px;
  height: 32px;
  background-color: transparent;
  border: none;
}
/*条件选择框结束*/

/*车源条件筛选开始*/
.conSelectionBox .screen {
  width: 1198px;
  border: 1px solid #e6e6e6;
}
.conSelectionBox .screen dl {
  border-bottom: 1px solid #e6e6e6;
  min-height: 50px;
  position: relative;
}
.screen dt {
  float: left;
  width: 70px;
  height: 100%;
  position: absolute;
  line-height: 50px;
  font-size: 14px;
  color: #7a838d;
  text-align: center;
  background: #fafafa;
}
.screen dd {
  float: right;
  width: 1128px;
}
.dd-top {
  height: 20px;
  padding: 15px 0 15px 6px;
}
.dd-top .a-box {
  float: left;
  width: 940px;
  height: 20px;
  overflow: hidden;
}
/*点击加上一个类*/
.dd-top li.active {
  color: #fff;
  background: #337ab7;
  text-decoration: none;
}

.dd-top li.active a {
  color: #fff;
}
.dd-top li a {
  padding: 0 6px;
  color: #495056;
}
.dd-top li {
  float: left;
  height: 20px;
  font-size: 14px;
  line-height: 20px;
  padding: 0 6px;
  margin: 0 8px;
}
/*车源条件筛选结束*/

/*主要车辆内容列表开始*/
.mainContent::after {
  content: "";
  display: block;
  clear: both;
}
.mainContent {
  box-sizing: border-box;
  width: 1222px;
}
.mainContentUl::after {
  content: "";
  display: block;
  clear: both;
}
.mainContentUl {
  margin-bottom: 20px;
  border: 1px solid #a5abb2;
  margin-top: 10px;
}
.mainContentUl li {
  float: left;
  margin-bottom: 10px;
  width: 305px;
  height: 305px;
}
.mainContentUl li:hover {
  box-shadow: 2px 2px 2px #a5abb2;
}
.mainContentUl li a {
  display: block;
  width: 287px;
  height: 287px;
  padding: 9px 8px;
  border: 1px solid transparent;
  position: relative;
}
.mainContentUl li a img {
  width: 285px;
  height: 190px;
  border: 1px solid #777575;
}
.mainContentUl li a .t {
  font-size: 17px;
  color: #495056;
  font-weight: 400;
  padding: 3px 0 6px 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mainContentUl li a .t-i {
  color: #a5abb2;
  font-size: 14px;
  padding-left: 4px;
  padding-bottom: 2px;
}
.mainContentUl li a .t-i .icon-pad {
  display: inline-block;
  font-size: 12px;
  width: 14px;
  text-align: center;
  vertical-align: top;
  line-height: 20px;
}
.mainContentUl li .t-price {
  font-size: 20px;
  color: #f95523;
  padding-left: 4px;
  height: 30px;
  overflow: hidden;
}
.t-price p {
  float: left;
  line-height: 30px;
}
.t-price em,
.t-price span {
  font-size: 14px;
}
.t-price i.i-orange {
  color: #ff9650;
  background: #ffeeda;
}
.t-price i {
  float: right;
  width: 46px;
  height: 21px;
  line-height: 21px;
  text-align: center;
  font-size: 12px;
  margin: 5px 0 0 5px;
}
.t-price i.i-blue {
  color: #d7a844;
  background: #fcf2d5;
}
.t-price em.line-through {
  text-decoration: line-through;
}
.t-price em {
  float: left;
  margin-left: 10px;
  margin-top: 7px;
  color: #a5abb2;
}
</style>
