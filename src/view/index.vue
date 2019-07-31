<template>
  <div class="homebg">
    <meta
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
      name="viewport"
    >
    <div class="btnbox">
      <router-link to="/flow" class="liuc">比赛流程</router-link>
      <router-link to="/my" class="lianxi" >个人赛程及就餐</router-link>
      <!-- <router-link to="/wordpcontack" class="lianxi">联系电话</router-link> -->
    </div>
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
    return {};
  },
  /**
   * 监听Vue实例上的数据变动
   */
  watch: {},
  destroyed() {
    this.$emit("changeHomeButton", false);
  },
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
    this.$emit("changeHomeButton", false);
    this.localStorage.set("abc", { username: { user: 1 } });
    let a = this.localStorage.get("abc");
    let mwxsdk = new wxsdk({ a: 1 });
    mwxsdk.show();
  }
};
</script>