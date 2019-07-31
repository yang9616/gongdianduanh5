import vuex from "vuex";
import localStorage from "../../helper/localStorage";

/**
 * 用户登录数据以及状态管理store
 */

const state = {
    userInfo: {
        id: 1,
        username: 'test',
        avatar: 'https://xxxxxx',
        openid: 'xxxxxxxxxxxxx'
    },
    loginStatus: false
}

const getters = {
    userInfo: () => {
        //api获取 eg:
        return localStorage.get('user') || state.userInfo;
    },
    userLoginStatus: () => {
        return state.loginStatus;
    }
}

const actions = {
    async changeUserInfo({ commit }) {
        await setTimeout(commit('changeUserInfoAsync', 22), 2000);
    }
}

const mutations = {
    changeUserInfoAsync(state, userid) {
        state.userInfo = {
            id: userid,
            username: 'test2'
        }
        localStorage.set('user', state.userInfo);
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}