<!--工作流程-->
<template>
  <div class="wordpcontack">
    <div class="wordpressbox">
      <div class="content" v-for="(item,index) in data" :key="index">
        <div class="jt"></div>
        <div class="point">
          <div></div>
        </div>
        <h3 @click="detail(item)">
          {{item.date}}
          <span style="color:#6b9ff9">详情</span>
        </h3>
        <p v-if="item.isshow"  v-html="item.dcontent" class="contentbox"></p>
      </div>
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
    return {
      data: [],
      status: false, //是否显示详情
      index: null
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
      this.data = await this.http.get("/bssj");
      // this.data.forEach(element => {
      //   element.isShow=false
      // });
      // console.log(this.data)
      (this.data || []).map(a => {
        a.isshow=false
        a.dcontent = a.dcontent
          ? a.dcontent.replace(
              new RegExp("/public/uploads/images/", "gm"),
              "http://gdd.hezuaa.com/gdd/public/uploads/images/"
            )
          : "";
        return a;
      });
    },
   detail(item) {
     console.log(item)
      item.isshow= !item.isshow;
    this.$forceUpdate()
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
    this.getData();
  }
};
</script>