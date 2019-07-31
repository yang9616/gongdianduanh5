<template>
  <div class="wordpcontack">
    <div class="wordpitem" v-for="(item,index) in data" :key="index">
      <h3>{{item.zyxuanze}}</h3>
      <div>
        <div class="item">
          <p class="l1">负责人：</p>
          <div class="span">{{item.charge}}</div>
        </div>
        <div class="item">
          <p class="l2">电&nbsp;&nbsp;&nbsp;话：</p>
          <div class="span">
            <a
              class="tel"
              v-for="(item,index) in item.tel"
              :key="index"
              :href="'tel:'+item"
            >{{item}}</a>
          </div>
        </div>
        <div class="item">
          <p class="l3">车辆信息：</p>
          <div class="span">{{item.car}}</div>
        </div>
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
      tel: 13212312311
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
      this.data = await this.http.get("/tels");
      console.log("data", this.data);
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
    this.localStorage.set("abc", { username: { user: 1 } });
    let a = this.localStorage.get("abc");
    let mwxsdk = new wxsdk({ a: 1 });
    mwxsdk.show();
  }
};
</script>
<style scoped>
.item {
  display: flex;
  /* align-items: center; */
  /* flex-wrap: wrap; */
}
.span {
  margin-right: 0.2rem;
  margin-top: 0.15rem;
  line-height: 0.4rem;
  width: 60%;
}
.tel {
  display: block;
}
p {
  width: 28%;
}

a {
  color: #000;
}
</style>
>

</style>
