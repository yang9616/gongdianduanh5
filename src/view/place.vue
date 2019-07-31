<!--工作流程-->
<template>
  <div class="placebox">
    <div class="bdmap" id="bdmap"></div>
    <div id="r-result" style="position: absolute;left:0px;top:50%;z-index:1000;"></div>
    <div class="info" v-if="data&&data.length>0">
      <div v-for="(item,index) in data" :key="index" @click="click(index)">
        <h3>
          {{item.address_name}}
          <!-- <em @click.stop="locationToPlace(item)" style="color:#3385ff">[导航]</em> -->
        </h3>
        <p>{{item.address_detail}}</p>
      </div>

      <!-- <span></span> -->
    </div>
  </div>
</template>


<script>
import { mapState, mapActions } from "vuex";
import dateformat from "../helper/dateformat";
import wxsdk from "../lib/weixin/";
import axios from "axios";
export default {
  /**
   * 组件
   */
  components: {},
  /**
   * 数字
   */
  data() {
    return {
      // location: { lng: 121.160724, lat: 31.173277 },
      // placename: "环球中心",
      // address: "成都市武侯区天府大道北段1700号S1区1223",
      data: [],
      mapBox: undefined,
      index: 0,
      tgh: 1,
      lat: 2
    };
  },
  /**
   * 监听Vue实例上的数据变动
   */
  watch: {},
  /**
   *区别于method
   *computed是属性调用，而methods是函数调用
   *computed带有缓存功能，而methods不是
   */
  computed: mapState({
    user: userInfo => userInfo.id
  }),
  created() {},
  /**
   * 方法、函数
   */
  methods: {
    async getData() {
      this.data = await this.http.get("/address_list");
      // console.log("data", this.data[0].through);
      this.map();
    },
    locationToPlace: function(item) {
      this.$router.push(`/location?lat=${item.through}&lnt=${item.latitude}`)
      
    },
    click(index) {
      if (index == 0) {
        this.tgh = this.data[0].through;
        this.lat = this.data[0].latitude;
        this.map();
      } else if (index == 1) {
        this.tgh = this.data[1].through;
        this.lat = this.data[1].latitude;
        this.map();
      } else if (index == 2) {
        this.tgh = this.data[2].through;
        this.lat = this.data[2].latitude;
        this.map();
      }
    },

    map() {
      this.$nextTick(function(tgh, lat) {
        this.mapBox = new BMap.Map("bdmap");
        var point = new BMap.Point(this.tgh, this.lat);

        this.mapBox.centerAndZoom(point, 15);
        this.mapBox.enableScrollWheelZoom();
        let markers = new BMap.Marker(point);
        this.mapBox.addOverlay(markers);
        // 添加带有定位的导航控件
        var navigationControl = new BMap.NavigationControl({
          // 靠左上角位置
          anchor: BMAP_ANCHOR_TOP_LEFT,
          // LARGE类型
          type: BMAP_NAVIGATION_CONTROL_LARGE,
          // 启用显示定位
          enableGeolocation: true
        });
        this.mapBox.addControl(navigationControl);
      });
    }
  },
  /**
   * 完成挂载
   */
  async mounted() {
    await this.getData();
    let tgh = this.tgh;
    let lat = this.lat;
    this.$nextTick(function(tgh, lat) {
      var map = new BMap.Map("bdmap");
      var point = new BMap.Point(this.data[0].through, this.data[0].latitude);

      map.centerAndZoom(point, 15);
      map.enableScrollWheelZoom();
      let markers = new BMap.Marker(point);
      map.addOverlay(markers);
      // 添加带有定位的导航控件
      var navigationControl = new BMap.NavigationControl({
        // 靠左上角位置
        anchor: BMAP_ANCHOR_TOP_LEFT,
        // LARGE类型
        type: BMAP_NAVIGATION_CONTROL_LARGE,
        // 启用显示定位
        enableGeolocation: true
      });
      map.addControl(navigationControl);
    });
  },
  /**
   * 更新完成状态
   */
  updated: function() {},
  /**
   * 完成了 data 数据的初始化
   */
  created() {}
};
</script>