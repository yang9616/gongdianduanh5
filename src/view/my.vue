<template>
  <div class="all">
    <div class="content">
      <div class="name">
        <input type="text" placeholder="请输入您的姓名" v-model="name">
      </div>
      <div class="phone">
        <input type="text" placeholder="请输入您的电话" v-model="phone">
        <p class="err" v-if="err">{{txt}}</p>
      </div>
      <div>
        <button @click="submit" style="background:#aa00e4 !important;">确定</button>
      </div>
    </div>
  </div>
</template>
<script>
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
      name: "",
      phone: "",
      data: null,
      err: false,
      txt: ""
    };
  },
  /**
   * 监听Vue实例上的数据变动
   */
  watch: {
    name() {
      //  this.name = this.$refs.username.value;
      console.log("name", this.name);
    },
    phone() {
      console.log("phone", this.phone);
    }
  },

  /**
   * 方法、函数
   */
  methods: {
    async getData() {
      this.data = await this.http.get(
        `/search?name=${this.name}&mobile=${this.phone}`
      );

      // 通过Cookies.get('mobile')获取
      // if (Cookies.get("mobile") && Cookies.get("username")) {
      //   // 代表登录过
      // } else {
      //   // 没有登录
      // }

      // if (this.data.length==0) {
      //   console.log("ok");
      //   this.status = false;
      // } else {
      //   console.log("no");
      //   this.status = true;
      // }
    },

    async submit() {
      if (this.name && this.phone) {
        this.err = false;
        let phone = this.phone;
        if (!/^1[3456789]\d{9}$/.test(phone)) {
          this.err = true;
          this.txt = "请输入正确的手机号码";
        } else {
          this.err = false;
          this.$router.push({
            name: "myDetails",
            query: { name: this.name, phone: this.phone }
          });
        }
      } else {
        this.txt = "请填写正确的信息";
        this.err = true;
      }
      this.data = await this.http.get(
        `/search?name=${this.name}&mobile=${this.phone}`
      );

      console.log("data1111", this.data);

      if (this.data == null || this.data == "") {
        console.log("none");
      } else {
        console.log("yes");
        // 保存好了
        Cookies.set("mobile", this.data.mobile);
        Cookies.set("username", this.data.name);
        let cookie = Cookies.get();
        console.log(cookie, "Cookies");
      }
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
  created() {
    let cookie = Cookies.get();
    console.log(cookie);
    this.phone = cookie.mobile;
    this.name = cookie.username;
    // this.names()
    // console.log(this.$store.getters["user/userInfo"]);
  }
};
</script>

<style scoped>
.all {
  overflow-y: auto;
  background: url(../assets/bgd-6_02.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  /* background-color:#b9c6ff ; */
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow-y: auto;
}
.content {
  width: 90%;
  margin: 0 auto;
  height: 5.12rem;
  background: #fff;
  border-radius: 20px;
  margin-top: 0.36rem;
  padding-top: 0.54rem;
}
input {
  width: 90%;
  margin: 0 auto;
  height: 0.84rem;
  display: block;
  background: #f5f5f5;
  border: none;
  border-radius: 50px;
  padding-left: 20px;
  font-size: 0.24rem;
  /* color: #dbdbdb; */
  outline: none;
  caret-color: #106bff;
}
.name {
  margin-bottom: 0.26rem;
}
.phone {
  margin-bottom: 0.97rem;
}
button {
  display: block;
  width: 90%;
  margin: 0 auto;
  height: 0.72rem;
  font-size: 0.26rem;
  color: #fff;
  border: none;
  border-radius: 20px;
  background: linear-gradient(left, #aa00e4 0%, #6d27dc 100%);
}
.err {
  color: red;
  font-size: 0.22rem;
  padding-left: 5%;
  margin-top: 0.05rem;
}
</style>