<template>
  <div class="all">
    <div class="top">
      <video
        :src="'http://47.98.45.230:8080/gdd/public/uploads/'+topdata.video"
        style="width:100%;height:60vw;background-color:#000000;"
        controls="false"
      >您的浏览器不支持 video 标签。</video>
      <div style="padding-left:0.2rem;">
            <div class="gameName">{{topdata.name}}</div>
            <div class="name">参赛人：{{topdata.user}}</div>
      </div>
   
    </div>
    <div class="bottom" style="    overflow: hidden;">
      <div
        :class="{item:true,rightitem:(index+1)%2==0}"
        v-for="(item,index) in data"
        :key="index"
        style="width:45%;float:left;position: relative;"
      >
        <div class="left" style="width:100%;">
          <!-- <img src="../assets/video-2_06.png" alt> -->
          <div class="container">
            <!-- <div class="player">
              <video-player
                class="video-player vjs-custom-skin"
                ref="videoPlayer"
                :playsinline="true"
                :options="playerOptions"
              ></video-player>
            </div>-->
            <video
              :id="'video'+index"
              :src="'http://47.98.45.230:8080/gdd/public/uploads/'+item.video"
              style="width:100%;height:30vw;background-color:#000000;"
            >您的浏览器不支持 video 标签。</video>
            <div
              style="position: absolute;width:100%;height:100%;opacity: 0;left:0;top:0;"
              @click="play(index)"
            ></div>
          </div>
          <div class="item-txt">
            <div class="gameName">{{item.name}}</div>
            <div class="name">参赛人：{{item.user}}</div>
          </div>
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
      data: [],
      topdata: {},
      playerOptions: {
        //playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            type: "application/x-mpegURL",
            src:
              "http://47.98.45.230:8080/gdd/public/uploads/media/2019/06/20190612192613116.mp4" //你的m3u8地址（必填）
          }
        ],
        poster: "/dist/img/video-1_03.c5dd1b0.png", //你的封面地址
        width: document.documentElement.clientWidth,
        notSupportedMessage: "此视频暂无法播放，请稍后再试", //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true //全屏按钮
        }
      }
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
    play: function(index) {
      console.log(document.getElementById("video" + index));
      document.getElementById("video" + index).play();
      this.full(document.getElementById("video" + index));
    },
    showTips: function() {},
    async getData() {
      this.data = await this.http.get("/matchxiu");
      this.topdata = this.data[0];
      this.data = this.data.splice(1, this.data.length);
      console.log("data", this.data);

      // this.playerOptions.sources = `http://47.98.45.230:8080/gdd/public/uploads/${
      //   this.data[1].video
      // }`;
      // console.log(12344);
    },
    full: function(element) {
      {
        //此方法不可以在異步任務中執行，否則火狐無法全屏
        if (element.requestFullscreen) {
          element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen();
        } else if (element.msRequestFullscreen) {
          element.msRequestFullscreen();
        } else if (element.oRequestFullscreen) {
          element.oRequestFullscreen();
        } else if (element.webkitRequestFullscreen) {
          element.webkitRequestFullScreen();
        } else {
        }
      }
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
    // console.log(this.$store.getters["user/userInfo"]);
  }
};
</script>

<style scoped>
.rightitem {
  float: right !important;
}
.all {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow-y: auto;
  
  background: #f5f5f5;
  padding-top: 0.3rem;
  padding-bottom: 1rem;

}
.top {
  width: 90%;
  margin: 0 auto;
      overflow: hidden;
    border-radius: 20px;
  /* box-shadow:darkgrey 0px 10px 30px 5px */
}
.top > img {
  height: 3.34rem;
}
.bottom {
  width: 90%;
  margin: 0 auto;
}
.item {
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  overflow: hidden;
  margin-top: 0.24rem;
  flex-wrap: wrap;
}
.left {
  background: #fff;
  width: 48%;
  height: 3.5rem;
  border-radius: 20px;
  margin-top:0.2rem; 
  overflow: hidden;
}

.left > img {
  width: 100%;
  height: 2.4rem;
}
.item-txt {
  margin-left: 0.22rem;
}
.gameName {
  font-size: 0.26rem;
  color: #000;
  font-weight: bold;
  margin: 0.1rem 0;
}
.name {
  font-size: 0.22rem;
  color: #666666;
}
</style>