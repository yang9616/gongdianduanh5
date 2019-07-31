<!--入住就餐详情-->
<template>
  <div class="all1">
    <div class="all">
      <div class="rucanbox rucanboxdtail">
        <div class="rucanlistitem" >
          <div class="content" v-if="status==true">
          <button class="btn" @click="click">就餐卡</button>
            <p class="t">入住及就餐</p>
            <p class="c">酒店名称：{{data.content_hotel.name}}</p>
            <p class="c">酒店地址：{{data.content_hotel.address}}</p>
            <div>
              <div
                class="descriptions"
                v-for="(item,index) in data.content_hotel.descriptions"
                :key="index"
              >
                <p class="c" v-if="index==0">接待人员：</p>
                <p
                  v-else
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                <p>{{item}}</p>
              </div>
            </div>

            <p class="t">比赛时间</p>
            <div v-for="(item,index) in data.content_bssj" :key="index">
              <p class="c" v-html="item.dcontent"></p>
              <!-- <p class="c">{{item.date}}：{{item.dcontent}}</p> -->
            </div>

            <p class="t">比赛地点</p>
            <p class="c">比赛地址:{{data.content_bsdd.address_detail}}</p>

            <p class="t">工作人员联系方式</p>
            <div v-for="(item,index) in data.content_contact" :key="index">
              <p class="c">工作人员：{{item.charge}}</p>
              <p class="c">联系方式：{{item.tel}}</p>
              <p class="c">车辆信息：{{item.car}}</p>
            </div>
          </div>
          <div class="none" v-else>没有该人员的赛程详情</div>
          
        </div>
        <div class="repast" v-if="status2">
            <p class="close" @click="close">x</p>
            <img class="closeImg" src="../assets/111.png" alt="">
          </div>
        <div class="rucanbg1"></div>
        <div class="rucanbg2"></div>
      </div>
    </div>
  </div>
</template>


<script>
import { mapState, mapActions } from "vuex";
import dateformat from "../helper/dateformat";
import wxsdk from "../lib/weixin/";
import Cookies from "js-cookie";

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
      data: null,
      phone: "",
      name: "",
      status: true,
      status2: false,
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
      this.data = await this.http.get(
        `/search?name=${this.name}&mobile=${this.phone}`
      );
      console.log("data", this.data);
      if (this.data.length==0) {
        console.log("ok");
        this.status = false;
      } else {
        console.log("no");
        this.status = true;
      }
    },
    click(){
      console.log(555)
      this.status2=true
    },
    close(){
      console.log(666)
      this.status2=false

    },
    judge() {}
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
    this.phone = this.$route.query.phone;
    this.name = this.$route.query.name;
    // let cookie=Cookies.get();
    // console.log(cookie)
    // this.phone=cookie.mobile;
    // this.name=cookie.username;
    this.getData();
    this.judge();
    console.log("detail", this.phone);
    // console.log("detail", this.name);
  }
};
</script>
<style scoped>
.repast{
  width: 86%;
  margin: 0 auto;
  height: 10rem;
  position: absolute;
  top:3rem;;
  left: 0.55rem;
  border-radius: 10px;
  overflow: hidden;
}
.close{
  color: #fff;
  font-size: 0.4rem;
  position: absolute;
right:0.4rem;

}
.closeImg{
  width: 100%;
  border-radius: 10px;

}
.btn{
  width: 80px;
  height: 30px;
  background: rgb(221,227,255);
  border-radius: 10px;
  border:none;
}
.all {
  background: url(../assets/bgd-6_02.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.rucanbox {
  background: none;
}
.rucanbox .rucanlistitem {
  padding-bottom: 4.12rem;
}
.descriptions {
  display: flex;
}
.none {
  width: 100%;
  height:8rem;
  text-align: center;
  font-size: 0.44rem;
  padding-top: 3rem;
  box-sizing: border-box;
}

</style>
