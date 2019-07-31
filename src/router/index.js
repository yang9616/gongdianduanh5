import Vue from 'vue'
import Cookies from 'js-cookie'

import Router from 'vue-router'
import index from '@/view/index'
import arrange from '@/view/arrange'
import flow from '@/view/flow'
import gameShow from '@/view/gameShow'
import grade from '@/view/grade'
import my from '@/view/my'
import rucan from '@/view/rucan'
import rucan_detail from '@/view/rucan_detail'
import about from '@/view/about'
import wordpcontack from '@/view/wordpcontack'
import workpress from '@/view/workpress'
import place from '@/view/place'
import myDetails from '@/view/myDetails'
import select_major from '@/view/select_major'
import location from '@/view/location'


Vue.use(Router)

//路由定义
const router = new Router({
    routes: [{
            path: '/',
            name: 'index',
            component: index,
            meta: {
                title: '成都局集团公司-第九届职工职业技能竞赛供电专业决赛',
            }
        }, {
            path: '/arrange',
            name: 'arrange',
            component: arrange,
            meta: {
                title: '比赛安排',
            },
        },
        {
            path: '/flow',
            name: 'flow',
            component: flow,
            meta: {
                title: '比赛流程',
            },
        },
        {
            path: '/gameShow',
            name: 'gameShow',
            component: gameShow,
            meta: {
                title: '比赛秀',
            },
        },
        {
            path: '/grade',
            name: 'grade',
            component: grade,
            meta: {
                title: '成绩公布',
            },
        },
        {
            path: '/my',
            name: 'my',
            component: my,
            meta: {
                title: '个人赛程',
            },
        }, ,
        {
            path: '/myDetails',
            name: 'myDetails',
            component: myDetails,
            meta: {
                title: '个人赛程详情',
            },
        },
        {
            path: '/rucan',
            name: 'rucan',
            component: rucan,
            meta: {
                title: '入住就餐',
            },
        }, {
            path: '/rucandetail',
            name: 'rucan_detail',
            component: rucan_detail,
            meta: {
                title: '入住就餐详情',
            },
        }, {
            path: '/about',
            name: 'about',
            component: about,
            meta: {
                title: '关于成都供电段',
            },
        }, {
            path: '/wordpcontack',
            name: 'wordpcontack',
            component: wordpcontack,
            meta: {
                title: '工作人员联系方式',
            },
        }, {
            path: '/workpress',
            name: 'workpress',
            component: workpress,
            meta: {
                title: '工作流程',
            },
        }, {
            path: '/place',
            name: 'place',
            component: place,
            meta: {
                title: '比赛地点',
            },

        }, {
            path: '/select_major',
            name: 'select_major',
            component: select_major,
            meta: {
                title: '选择专业',
            },
            select_major
        }, {
            path: '/location',
            name: 'location',
            component: location,
            meta: {
                title: '导航',
            }
        }
    ]
})


router.beforeEach((to, from, next) => {

    /* 路由发生变化修改页面meta */
    if (to.meta.content) {
        let head = document.getElementsByTagName('head');
        let meta = document.createElement('meta');
        meta.content = to.meta.content;
        head[0].appendChild(meta)
    }
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    // if (to.path == "/my") {
    //     if (Cookies.get('mobile') && Cookies.get('username')) { // 代表登录过
    //         console.log(Cookies.get('mobile'), "11111")
    //         console.log(Cookies.get('username'), 6666)
    //         console.log(12333)

    //         next('/myDetails')
    //     } else { // 没有登录
    //         console.log(22222)
    //             // next('/my')
    //         r
    //         // this.$router.push({ name: "my" })
    //     }
    // }

    next()
});

export default router;