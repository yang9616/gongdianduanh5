<!--入住就餐详情-->
<template>
  <div class="rucanbox rucanboxdtail aboutbg">
    <div class="rucanlistitem" v-html="data.content">
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
      data:{}
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
  methods: {
       async getData() {
      this.data = await this.http.get("/about");
      console.log("data",this.data);
       }
  },
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
    this.getData()
  }
};
</script>