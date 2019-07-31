<!--工作流程-->
<template>
  <div class="placebox">
    <div class="bdmap" id="bdmap"></div>
    <div id="r-result" style="position: absolute;left:0px;top:50%;z-index:1000;"></div>
    
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
      lat: 2,
      lnt: 0
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
      this.map();
    },
    locationToPlace: function() {
      var geolocation = new BMap.Geolocation();
      var geoc = new BMap.Geocoder();
      var T = this;
      geolocation.getCurrentPosition(
        r => {
          if (r.point) {
            var driving = new BMap.DrivingRoute(this.mapBox, {
              renderOptions: {
                map: this.mapBox,
                panel: "r-result",
                autoViewport: true
              }
            });
            var p2 = new BMap.Point(this.lnt, this.lat);
            // driving.search(startplace,T.mudidi);
            driving.search(r.point, p2);
          }
        },
        {
          enableHighAccuracy: true
        }
      );
    },
    map() {
      this.$nextTick(function() {
        this.mapBox = new BMap.Map("bdmap");
        // var point = new BMap.Point(this.lat,this.lnt);
        // this.mapBox.centerAndZoom(point, 15);
        // this.mapBox.enableScrollWheelZoom();
        // let markers = new BMap.Marker(point);
        // this.mapBox.addOverlay(markers);
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

        var geolocation = new BMap.Geolocation();
      var geoc = new BMap.Geocoder();
      var T = this;
      geolocation.getCurrentPosition(
        r => {
          if (r.point) {
            var driving = new BMap.DrivingRoute(this.mapBox, {
              renderOptions: {
                map: this.mapBox,
                panel: "r-result",
                autoViewport: true
              }
            });

            var p2 = new BMap.Point(this.lat,this.lnt);
            driving.search(r.point, p2);
          }
        },
        {
          enableHighAccuracy: true
        }
      );
      });
    }
  },
  /**
   * 完成挂载
   */
  async mounted() {

    // this.$nextTick(function() {
    //   var map = new BMap.Map("bdmap");
    //   var point = new BMap.Point(this.lat,this.lnt);
    //   map.centerAndZoom(point, 15);
    //   map.enableScrollWheelZoom();
    //   let markers = new BMap.Marker(point);
    //   map.addOverlay(markers);
    //   // 添加带有定位的导航控件
    //   var navigationControl = new BMap.NavigationControl({
    //     // 靠左上角位置
    //     anchor: BMAP_ANCHOR_TOP_LEFT,
    //     // LARGE类型
    //     type: BMAP_NAVIGATION_CONTROL_LARGE,
    //     // 启用显示定位
    //     enableGeolocation: true
    //   });
    //   map.addControl(navigationControl);
      
    // });
  },
  /**
   * 更新完成状态
   */
  updated: function() {},
  /**
   * 完成了 data 数据的初始化
   */
  created() {
    this.lat = this.$route.query.lat;
    this.lnt = this.$route.query.lnt;
    this.getData();
  }
};
</script>