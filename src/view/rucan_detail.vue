<!--入住就餐详情-->
<template>
  <div class="rucanbox rucanboxdtail">
    <div class="rucanlistitem">
      <img :src="'http://47.98.45.230:8080/gdd/public/uploads/'+index.img">
      <h3>{{index.name}}</h3>
      <p class="listp address" style="margin-top:10px;">地址：{{index.address}}</p>
      <p class="listp phone">电话：
        <a style="color:#666666" :href="'tel:'+index.tels[0]">{{index.tels[0]}}{{index.tels[1]}}</a>
        </p>
      <div class="content">
        <h5>就餐安排</h5>
        <div v-html="index.content"></div>
        <!-- <p class="t">早餐</p>
        <p class="c">7:00-8:00 向文杰、负责引导贵阳供电段到所住酒店就餐</p>
        <p class="t">午餐</p>
        <p class="c">11:30-12:00 工作人员所住酒店就餐</p>
        <p class="c">12:00 向文杰负责派车接永利酒店观摩人员到豪庭就餐</p>
        <p class="c">12:00-13:00 杨斌、裴杰负责引导贵阳供电段庭酒店就餐</p>
        <p class="c">13:10 杨斌负责派车接豪庭节点观摩人员返回永店休息</p>
        <p class="t">晚餐</p>
        <p class="c">18:05 向文杰负责派车接永利酒店观摩人员到酒店就餐</p>
        <p class="c">18:06 杨斌、裴杰负责引导贵阳供电段到豪店就餐</p>
        <p class="c">17:30 杨斌负责派车接豪庭节点观摩人员返酒店休息</p> -->
      </div>
    </div>
    <div class="rucanbg1"></div>
    <div class="rucanbg2"></div>
  </div>
</template>


<script>
import { mapState, mapActions } from "vuex";
import dateformat from "../helper/dateformat";
import wxsdk from "../lib/weixin/";
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
      index:null
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
  /**
   * 方法、函数
   */
  methods: {},
  /**
   * 完成挂载
   */
  mounted() {},
  /**
   * 更新完成状态
   */
  updated: function() {},
  /**
   * 完成了 data 数据的初始化
   */
  created() {
    this.index=this.$route.query.index;
    // console.log("index",this.index)
  }
};
</script>