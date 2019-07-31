/**
 * Vuex Stores 管理器
 * 在此处统一导出
 */


import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    modules: {
        user,
    },
    strict: debug
})
