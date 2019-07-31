<!--
- 提示信息
- DO NOT use this component directly, use tips.js
-->
<template>
  <transition name="toast-transition">
    <div class="toast" v-if="show">
      <div class="topsbg"></div>
      <div class="tips">
        <!-- <div class="timg"></div> -->
        <div class="closewd" v-if="showCloseBtn" @click="closeWindow">
          <!-- <img src="../../static/images/closewd.png" /> -->
          <div class="lineclose"></div>
        </div>
        {{content}}
      </div>
    </div>
  </transition>
</template>

<script>
import ebus from "../helper/event-bus";
import ModalMask from "./ModalMask";
export default {
  components: {
    ModalMask
  },
  data() {
    return {
      show: false,
      content: "",
      showCloseBtn: false
    };
  },
  methods: {
    closeWindow: function() {
      this.$data.show = false;
      this.$data.content = "";
    }
  },
  created() {
    function hide() {
      this.$data.show = false;
      this.$data.content = "";
    }
    ebus.$on("toast:show", (content, duration, showCloseBtn = false) => {
      this.$data.show = true;
      this.$data.showCloseBtn = showCloseBtn;
      this.$data.content = content;
      if (duration && !showCloseBtn) {
        setTimeout(hide.bind(this), duration);
      }
    });
    ebus.$on("toast:hide", hide.bind(this));
  }
};
</script>

<style>
.toast {
  z-index: 2000;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
.toast .topsbg {
  z-index: 2001;
  position: fixed;
  width: 50vw;
  height: 35vw;
  left: 25vw;
  background-color: rgba(0, 0, 0, 0.8);
  top: 30%;
  border-radius: 10px;
}
.toast .tips .timg {
  background-size: 20vw 20vw;
  width: 100px;
  height: 100px;
  position: absolute;
  z-index: 2002;
  top: -20px;
  left: 30vw;
  display: inline-block;
}
.toast .tips {
  z-index: 2002;
  position: fixed;
  width: 50vw;
  left: 25vw;
  min-height: 35vw;
  padding-top: 10%;
  top: 30%;
  color: #ffffff;
  border-radius: 10px;
  font-size: 1.1em;
  text-align: center;
}
.toast .tips .closewd .lineclose {
  position: absolute;
  width: 2px;
  height: 28px;
  left: 25px;
  bottom: -10px;
  background-color: #ffffff;
  display: inline-block;
}
.toast .tips .closewd {
  z-index: 2002;
  width: 50px;
  height: 50px;
  position: absolute;
  right: -2vw;
  top: -60px;
}
.toast .tips .closewd img {
  width: 32px;
  height: 32px;
}
.toast .tips .tips-img {
  position: absolute;
  left: 50%;
  -webkit-transform: translate(-50%, -30%);
  transform: translate(-50%, -30%);
  border-radius: 50%;
}
.toast-transition-enter-active,
.toast-transition-leave-active {
  transition: opacity 0.3s;
  -webkit-transition: opacity 0.3s;
}
</style>