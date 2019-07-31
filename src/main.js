//======================================================================
//
//        Copyright (C) 2019 www.trycheers.com
//        All rights reserved
//
//        description :
//        chuangqi FrontBasic Framework main Entrance;
//        version:1.0.0
//        created by tracy at  03/06/1019
//        http://www.trycheers.com
//        
//======================================================================


// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import http from "./helper/http";
import tips from './helper/tips';
import store from './store';
import localStorage from './helper/localStorage';
import '../static/css/reset.css'
import "../static/css/public.css";
import VideoPlayer from 'vue-video-player';

require('video.js/dist/video-js.css')

require('vue-video-player/src/custom-theme.css')
    //加载全局css
    //加载全局js

/**
 * 生产提示信息标志
 * False:不提示
 */
Vue.config.productionTip = false;

/**
 * 将tips对象添加到Vue原型上
 * eg:
 * this.tips.show(msg,duration);
 */
Vue.prototype.tips = tips;

/**
 * 将localStorage添加到Vue原型上
 */
Vue.prototype.localStorage = localStorage;

/**
 * 将http访问接口挂载到Vue原型上，作为全局调用
 * in components eg:
 * this.http.get(url) return <Promise>;
 * this.http.post(url,paras) return <Promise>;
 * 返回Promise对象，也可以使用await关键词。
 */
Vue.prototype.http = http;
Vue.use(VideoPlayer);
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    /**
     * VueX Store 挂载
     */
    store: store,
    components: {
        App
    },
    template: '<App/>'
})