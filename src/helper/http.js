import axios from 'axios';
//loading等待提示
import tips from './tips';

//http request 对象
//提供get、post访问方式
//http.get(url).then(res={}),返回Promise对象
//ES7 async=> await http.get(url);
//http.post(url,params).then(res=>{}),返回Promise对象
//ES7 async=> await http.post(url,params);
const http = axios.create({
    baseURL: 'http://47.98.45.230:8080/gdd/api.php',
    timeout: 5000
});

//提示框出现时间限制
//当请求的应答大于500毫秒时，会出现等待请求提示框
//当请求的应答小于500毫秒时，不会出现
const tolerantResponseDuration = 500; // ms

//记录reqId
const transmittingReqs = [];
let reqIdGen = 0;

// add reqId
http.interceptors.request.use(config => {
    let reqId = reqIdGen++;
    config.reqId = reqId;
    transmittingReqs.push(reqId);

    // 请求返回的足够快，可以不显示loading
    setTimeout(function() {
        if (transmittingReqs.indexOf(reqId) !== -1) {
            tips.show('loading...');
        }
    }, tolerantResponseDuration);
    return config;
});

// global http error handler
// 401: 重定向到登录
// 500: 显示错误
http.interceptors.response.use(res => {
    tips.hide();
    let reqId = res.config.reqId;
    transmittingReqs.splice(transmittingReqs.indexOf(reqId), 1);

    const rawData = res.data;
    return rawData.data;
}, errRes => {
    if (errRes.response.status === 401) {
        // session timeout
        let {
            origin,
            pathname
        } = location;

        // 避免循环重定向
        // if (!pathname.startsWith('/authorize')) {
        //   let url = `${origin}/authorize?cb=${encodeURIComponent(location.href)}`;
        //   location.replace(url);
        // }
        // return;
    } else {
        // almost 500 
        tips.show('服务器错误', 1000);
    }
});

export default http