<template>
<div class="all">
    <div class="content">
      <div class="top">
        <div class="item item-title">
          <div class="left title-left">参赛人员</div>
          <div class="border"> </div>
          <div class="right">所属单位</div>
        </div>
         <div class="item">
            <div class="left">参赛人员</div>
            <div class="right">所属单位</div>
        </div> 
        <div class="item">
            <div class="left">参赛人员</div>
          <div class="right">所属单位</div>
        </div>
        <div class="item">
            <div class="left">参赛人员</div>
          <div class="right">所属单位</div>
        </div>
        <div class="item">
            <div class="left">参赛人员</div>
          <div class="right">所属单位</div>
        </div>
        <div class="item">
            <div class="left">参赛人员</div>
          <div class="right">所属单位</div>
        </div>
        <div class="item">
            <div class="left">参赛人员</div>
          <div class="right">所属单位</div>
        </div>
        <div class="item">
            <div class="left">参赛人员</div>
          <div class="right">所属单位</div>
        </div>
          <div class="item">
            <div class="left">参赛人员</div>
          <div class="right">所属单位</div>
        </div>
        <div class="item">
            <div class="left">参赛人员</div>
          <div class="right">所属单位</div>
        </div>

      </div>
      <!-- <img class="img" src="../assets/bgd1-2_03.png" alt=""> -->
      
    </div>
    <div class="none"> </div>
    <div class="none2"> </div>
    <div class="site">
      <div class="site-item site-border">笔试场地：成都市环球中心S1区1223</div>
      <div class="site-item">实作场地：成都市锦城广场环球中心S1区1223号</div>
    </div>
</div>

</template>


<script>

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

  /**
   * 方法、函数
   */
  methods: {
    showTips: function() {}
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
    // console.log(this.$store.getters["user/userInfo"]);
  }
};
</script>
<style scoped>
.all{
  background: url(../assets/bgd1_02.png) ;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding-top:0.34rem;
padding-bottom: 0.58rem;
 position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow-y: auto;
}

.content{
      position: relative;
    width: 90%;
   margin: 0 auto;
  background: #fff;
  border-radius: 20px;;
  text-align: center;
}

.item{
  height: 0.87rem;
  border-bottom: 1px solid #f4f4f4;
  font-size: .2rem;
  /* background: #fff; */

}
.item{
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.22rem;
  color: #666666;
}
.item:last-child{
  border:none;
}
.left,.right{
  width: 50%;
  text-align: center;
}

.item-title{
  background: #f9f9f9;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
font-size: 0.26rem;
font-weight: bold;
color: #000;
}
.border{
  height: 0.3rem;
  border:1px solid #dadada;
}

.img{
  width: 90%;
  margin: 0 auto;
position: absolute;
    bottom: -40px;
    left: 34px;
    z-index: -0;
}
.none{
  width:85%;
  margin: 0 auto;
  background: #d9dfff;
  height: 0.3rem;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

}
.none2{
  width:75%;
  margin: 0 auto;
  background: #cdd6ff;
  height: 0.2rem;
   border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}
.site{
font-size: 0.26rem;
width: 90%;
height: 1.69rem;
margin: 0 auto;
margin-top:0.62rem; 
color: #fff;
background: linear-gradient(left, #4e1cc5 0%, #6920a4 100%);
border-radius: 20px;
}
.site-item{
  height: 0.86rem;
  line-height: 0.86rem;
padding-left: 0.36rem;

}
.site-border{
  color: #fff;
  border-bottom: 1px solid rgba(255, 255, 255,.1);
}
</style>
