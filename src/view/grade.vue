<template>
  <div class="all">
    <div class="content">
      <div class="item title">
        <div class="txt">排名</div>
        <div class="txt">姓名</div>
        <div class="txt">得分</div>
      </div>
      <div class="item" v-for="(item, index) in data" :key="index">
        <div class="txt">
          <img v-if="index==0" class="img" src="../assets/one_03.png" alt>
          <img v-else-if="index==1" class="img" src="../assets/two_06.png" alt>
          <img v-else-if="index==2" class="img" src="../assets/three_08.png" alt>
          <div v-else>{{index+1}}</div>
        </div>
        <div class="txt">{{item.name}}</div>
        <div class="txt">{{item.fen}}</div>
      </div>
    </div>
    <div class="none"></div>
    <div class="none2"></div>
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
      sort: [],
      data: [], //所有排名
      // electricity: [], //电力专业
      // etad: [], //变配电专业
      // ols: [], //接触网专业
      // olsWork: [], //接触网作业车专业
      major: "",
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
    async getData() {
      // console.log("data", this.data);
      let major = this.major;
      console.log("major",typeof this.major)
      if (major) {
        console.log("value")
        this.data = await this.http.get(`/chenji?major=${major}`);
     } else {
        console.log("all")
        this.data = await this.http.get("/chenji");
      }
      // if (index == 0) {
      //   this.major==this.;
      // } else if (index == 1) {
      //   this.electricity
      // } else if (index == 2) {
      //   this.etad
      // } else if (index == 3) {
      //   this.ols
      // }
    }
    // sortFun(attr, rev) {
    //   //第二个参数没有传递 默认升序排列
    //   if (rev == undefined) {
    //     rev = 1;
    //   } else {
    //     rev = rev ? 1 : -1;
    //   }
    //   return function(a, b) {
    //     a = a[attr];
    //     b = b[attr];
    //     if (a < b) {
    //       return rev * -1;
    //     }
    //     if (a > b) {
    //       return rev * 1;
    //     }
    //     return 0;
    //   };
    // },
    // grades() {
    //   let grade = this.grade;
    //   //   grade.sort(function(a,b){
    //   //       return b-a;
    //   //   });
    //   this.sort = grade.sort(this.sortFun("data", false));
    //   console.log(this.sort);
    // },
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
  async created() {
    this.major =await this.$route.query.major;
    this.getData();

  }
};
</script>

<style scoped>
.all {
  position: absolute;
  width: 100%;
  /* height: 100%; */
  top: 0;
  left: 0;
  overflow-y: auto;
  background: url(../assets/bgd-5_02.png);
  background-size: 100%;
  background-repeat: no-repeat;
  padding-bottom: 1.5rem;
  background-color: #43137d;
}
.content {
  width: 90%;
  margin: 0 auto;
  background: #fff;
  border-radius: 20px;
  margin-top: 3.25rem;
  padding-bottom: 0.3rem;
}
.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 0.86rem;
  font-size: 0.22rem;
}
.title {
  font-size: 0.24rem;
  border-bottom: 1px solid #f6f6f6;
  font-weight: bold;
}
.txt {
  width: 33%;
  text-align: center;
}
.img {
  width: 0.34rem;
  height: 0.4rem;
}
.none {
  width: 80%;
  margin: 0 auto;
  height: 0.2rem;
  background: #5b40b4;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}
.none2 {
  width: 70%;
  margin: 0 auto;
  height: 0.2rem;
  background: #7c55d6;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}
</style>