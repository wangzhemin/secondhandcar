<template>
  <div id="CarDetails">
    <ul>
      <li>{{carDetailsData.id}}：{{carDetailsData.title}}</li>
      <img :src="carDetailsData.imgUrl">
    </ul>
  </div>
</template>

<script>
import $axios from "Axios";
export default {
  name: "CarDetails",
  data() {
    return {
      carDetailsData: []
    };
  },
  props: {
    id: String
  },
  mounted() {
    let self = this;
    $axios.get("../../static/carDetails.json").then(
      response => {
        let datas = response.data.beijing[0].daZhong;
        // console.log(datas);
        if (datas && datas.length > 0) {
          self.carDetailsData = datas[self.id - 1];
          //   console.log(self.productDetailsData);
        } else {
          console.log("not found datas");
        }
      },
      response => {
        console.log("数据加载失败");
      }
    );
  }
};
</script>

<style>
</style>
