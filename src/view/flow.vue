<template>
  <div class="all">
    <img class="img" src="../assets/bgd-three_01.png" alt>
    <div class="content">
      <router-link to="/place" class="item">
        <div class="left">
          <img src="../assets/three-1_03.png" alt>
          <p>比赛地点</p>
        </div>
        <div class="right">
          <p>查看详情</p>
          <img src="../assets/three-right_22.png" alt>
        </div>
      </router-link>
      <router-link to="/arrange" class="item">
        <div class="left">
          <img src="../assets/three-2_06.png" alt>
          <p>参赛人员及考试场地</p>
        </div>
        <div class="right">
          <p>查看详情</p>
          <img src="../assets/three-right_22.png" alt>
        </div>
      </router-link>
      <router-link to="/my" class="item">
        <div class="left">
          <img src="../assets/three-8_19.png" alt>
          <p>个人赛程及就餐</p>
        </div>
        <div class="right">
          <p>查看详情</p>
          <img src="../assets/three-right_22.png" alt>
        </div>
      </router-link>

      <router-link to="/workpress" class="item">
        <div class="left">
          <img src="../assets/three-5_12.png" alt>
          <p>总体赛事流程</p>
        </div>
        <div class="right">
          <p>查看详情</p>
          <img src="../assets/three-right_22.png" alt>
        </div>
      </router-link>

  <router-link to="/rucan" class="item">
        <div class="left">
          <img src="../assets/three-4_10.jpg" alt>
          <p>住宿就餐</p>
        </div>
        <div class="right">
          <p>查看详情</p>
          <img src="../assets/three-right_22.png" alt>
        </div>
      </router-link>

      <router-link to="/gameShow" class="item">
        <div class="left">
          <img src="../assets/three-6_14.png" alt>
          <p>比赛秀</p>
        </div>
        <div class="right">
          <p>查看详情</p>
          <img src="../assets/three-right_22.png" alt>
        </div>
      </router-link>

       <router-link to="/select_major" class="item">
        <div class="left">
          <img src="../assets/three-7_17.png" alt>
          <p>成绩公布</p>
        </div>
        <div class="right">
          <p>查看详情</p>
          <img src="../assets/three-right_22.png" alt>
        </div>
      </router-link>

      <router-link to="/wordpcontack" class="item">
        <div class="left">
          <img src="../assets/three-3_08.png" alt>
          <p>工作人员联系方式</p>
        </div>
        <div class="right">
          <p>查看详情</p>
          <img src="../assets/three-right_22.png" alt>
        </div>
      </router-link>


      <router-link to="/about" class="item" style="color: black;">
        <div class="left">
          <img src="../assets/three-9_22.png" alt>
          <p>关于成都供电段</p>
        </div>
        <div class="right">
          <p>查看详情</p>
          <img src="../assets/three-right_22.png" alt>
        </div>
      </router-link>
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
  destroyed() {
    this.$emit("changeHomeButton", true);
  },

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
    this.$emit("changeHomeButton", false);
  }
};
</script>
<style scoped>
.all {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow-y: auto;
  background: #f5f5f5;
}
a {
  color: black;
}
.img {
  width: 100%;
  height: 3.52rem;
}
.content {
  width: 90%;
  /* margin: 0 auto; */
  background: #fff;
  border-radius: 20px;
  position: absolute;
  top: 1rem;
  left: 0.4rem;
  padding: 0 0.24rem;
  box-sizing: border-box;
  margin-bottom: 1.06rem;
}
.item {
  height: 1.3rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #f3f3f3;
}
.item:last-child {
  border: none;
}
.left,
.right {
  display: flex;
  align-items: center;
}
.left {
  font-size: 0.3rem;
}
.left > img {
  width: 0.7rem;
  height: 0.7rem;
  margin-right: 0.34rem;
}
.right {
  font-size: 0.2rem;
  color: #999999;
}
.right > img {
  width: 0.12rem;
  height: 0.18rem;
  margin-left: 0.1rem;
}
</style>


