<template>
  <div id="app">
    <router-view @changeHomeButton="changeHomeButton"/>
    <Toast></Toast>
    <router-link to="flow" class="index" v-if="isShowHomeBtn">
      <span>回到首页</span>
    </router-link>
  </div>
</template>

<script>
import Toast from "./components/Toast.vue";
export default {
  components: { Toast },
  data() {
    return {
      isShowHomeBtn: true
    };
  },
  name: "App",
  methods: {
    changeHomeButton: function(flag) {
      this.isShowHomeBtn = flag;
    }
  },
  created() {}
};
!(function(win, doc) {
  function setFontSize() {
    // 获取window 宽度
    // zepto实现 $(window).width()就是这么干的
    var winWidth = window.innerWidth;
    doc.documentElement.style.fontSize = (winWidth / 750) * 100 + "px";
  }

  var evt = "onorientationchange" in win ? "orientationchange" : "resize";

  var timer = null;

  win.addEventListener(
    evt,
    function() {
      clearTimeout(timer);

      timer = setTimeout(setFontSize, 300);
    },
    false
  );
  win.addEventListener(
    "pageshow",
    function(e) {
      if (e.persisted) {
        clearTimeout(timer);
        timer = setTimeout(setFontSize, 300);
      }
    },
    false
  );

  //初始化
  setFontSize();
})(window, document);
</script>
<style scoped>
.index {
  /* color: red; */
  width: 12vw;
  height: 10.5vw;
  font-size: 1em;
  padding: 2vw;
  padding-top: 3.5vw;
  display: block;
  background: rgba(51, 133, 255, 0.8);
  color: #ffffff;
  box-shadow: 0px 0px 10px rgba(51, 133, 255, 0.9);
  text-align: center;
  border-radius: 50px;
  position: fixed;
  bottom: 60px;
  right: 30px;
  text-align: center;
  z-index: 1000;
}
.index span {
  display: inline-block;
  width: 2em;
  line-height: 1.5em;
}
</style>

