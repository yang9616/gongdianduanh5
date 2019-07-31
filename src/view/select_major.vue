<template>
  <div class="all">
    <div class="content">
      <router-link to="/grade" class="item" style="color: black;">
        <div class="left">
          <p>全部排名</p>
        </div>
        <div class="right">
          <p>查看详情</p>
          <img src="../assets/three-right_22.png" alt>
        </div>
      </router-link>
      <div class="item" v-for="(item,index) in data" :key="index" @click="grade(item.major)">
        <div class="left">
          <p>{{item.major}}</p>
        </div>
        <div class="right">
          <p>查看详情</p>
          <img src="../assets/three-right_22.png" alt>
        </div>
      </div>
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
    return {
      data: null
      // major:["全部排名","电力专业","变配电专业","接触网专业","接触网作业车专业"]
    };
  },
  /**
   * 监听Vue实例上的数据变动
   */
  watch: {},

  /**
   * 方法、函数
   */
  methods: {
 
    async getmajor() {
      this.data = await this.http.get("/major_list");
      console.log(this.data);
    },
       grade(major) {
      this.$router.push({ name: "grade", query: { major: major } });
    },
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
    this.getmajor();
    // console.log(this.$store.getters["user/userInfo"]);
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
  background: url("../assets/bgd-6_02.png");
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