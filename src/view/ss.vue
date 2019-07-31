<template>
<div class="all"></div>
    
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
}
</script>

<style scoped>
.all{
        position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow-y: auto;
}
</style>