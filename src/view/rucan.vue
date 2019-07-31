<!--入住就餐-->
<template>
  <div class="rucanbox">
    <div class="rucanlistitem" v-for="(item,index) in data" :key="index" >
      <!-- <router-link to="/rucandetail"> -->
      <div  @click="detail(index)">
        <!-- <img src="../../static/images/rucan1.jpg"> -->
        <img :src="'http://47.98.45.230:8080/gdd/public/uploads/'+item.img" alt="">
        <h3>{{item.name}}</h3>
        <p class="listp address" style="margin-top:10px;">地址：{{item.address}}</p>
        <p class="listp phone">电话：
         
          {{item.tels[0]}}{{item.tels[1]}}</p>
        <!-- </router-link> -->
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
      data: []
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
      this.data = await this.http.get("/hotels");
      console.log("data", this.data);
    },
   detail(index){
      // let index = e.target.dataset.index;
      // console.log(index)
      this.$router.push({name:'rucan_detail',query:{index:this.data[index]}})
    }
  },
  /**
   * 完成挂载
   */
  mounted() {
    this.getData();
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