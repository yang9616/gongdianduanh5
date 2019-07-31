// //微信相关配置以及操作Api
// import wxSdk from 'weixin-js-sdk';


// //微信jssdk配置
// //obj={
// //    debug, // 开启调试模式,
// //    appId, // 必填，企业号的唯一标识，此处填写企业号corpid
// //    timestamp:, // 必填，生成签名的时间戳
// //    nonceStr, // 必填，生成签名的随机串
// //    signature,// 必填，签名，见附录1
// //    jsApiList//jsapi列表
// //}
// //返回配置成功<Promise>
// function wxSdkConfig(obj) {
//     wxSdk.config(obj);
//     return new Promise((resolve, reject) => {
//         wxSdk.ready(function () {
//             resolve(true);
//         });
//     })
// }

// // 微信分享自定义
// // shareMethodArray  分享方法的数组，eg:["onMenuShareAppMessage", "onMenuShareTimeline"]
// // 分享参数
// //shareInfo.title  标题
// //shareInfo.link   链接
// //shareInfo.imgUrl 图片链接
// //返回分享成功或者失败<Promise>
// function wxShareCfonig(shareMethodArray, shareInfo) {
//     return new Promise((resolve, reject) => {
//         wxSdk[shareMethodArray]({
//             title: shareInfo.title,
//             link: shareInfo.link,
//             imgUrl: shareInfo.imgUrl,
//             success: function () {
//                 resolve(true);
//             },
//             cancel: function () {
//                 resolve(false);
//             }
//         });
//     })
// }

// // 微信支付函数
// //obj{
// //    timestamp,// 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
// //    nonceStr,// 支付签名随机串，不长于 32 位
// //    package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
// //    signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
// //    paySign,/ 支付签名
// //}
// function wxPay(obj) {
//     return new Promise((resolve, reject) => {
//         wxSdk.chooseWXPay({
//             timestamp: obj.timestamp,
//             nonceStr: obj.nonceStr,
//             package: obj.package,
//             signType: obj.signType,
//             paySign: obj.paySign,
//             success: (res) => {
//                 resolve(true);
//             },
//             cencel: () => {
//                 resolve(false);
//             },
//             fail: () => {
//                 resolve(false);
//             }
//         })
//     })
// }


// //图片处理相关微信接口
// function imageHandler() {
//     //选择图片
//     this.chooseImg = function (obj = {
//         count: 1,// 选择图片张数
//         sizeType: ['original', 'compressed'],// 可以指定是原图还是压缩图，默认二者都有
//         sourceType: ['album', 'camera'] // 可以指定来源是相册还是相机，默认二者都有
//     }) {
//         return new Promise((resolve, reject) => {
//             wxSdk.chooseImage({
//                 count: obj.count,
//                 sizeType: obj.sizeType,
//                 sourceType: obj.sourceType,
//                 success: function (res) {
//                     let localIds = res.localIds;
//                     resolve({
//                         localIds: localIds
//                     });
//                 },
//                 fail: function () {

//                 }
//             });
//         })
//     }

//     //上传图片,返回服务端id
//     this.uploadImage = function (localId, isShowProgressTips = 1) {
//         return new Promise((resolve, reject) => {
//             wxSdk.uploadImage({
//                 localId: localId,
//                 isShowProgressTips: 1, // 默认为1，显示进度提示
//                 success: function (res) {
//                     var serverId = res.serverId;
//                     resolve({
//                         serverId: serverId
//                     })
//                 }
//             })
//         })
//     }
// }

// //选择图片,返回localIds
// imageHandler.prototype.chooseImage = function (obj) {
//     return this.chooseImg(obj);
// }

// //上传图片，返回服务端id数组
// imageHandler.prototype.uploadImage = function (obj) {
//     return new Promise((resolve, reject) => {
//         this.chooseImage(obj).then(chooseRes => {
//             let localIds = chooseRes.localIds;
//             let promiseArray = localIds.filter(a => {
//                 return this.uploadImage(a);
//             });
//             return Promise.all(promiseArray);
//         })
//     })
// }


// export default {
//     wxSdkConfig,
//     wxShareCfonig,
//     wxPay,
//     imageHandler: new imageHandler()
// }
import wxSdk from 'weixin-js-sdk';
class wxJsSdk {
    //构造函数，传入配置参数对象
    constructor(configObj) {
        this.config = configObj;
    }

    //微信jssdk配置
    //obj={
    //    debug, // 开启调试模式,
    //    appId, // 必填，企业号的唯一标识，此处填写企业号corpid
    //    timestamp:, // 必填，生成签名的时间戳
    //    nonceStr, // 必填，生成签名的随机串
    //    signature,// 必填，签名，见附录1
    //    jsApiList//jsapi列表
    //}
    //返回配置成功<Promise>
    config() {
        wxSdk.config(this.config);
        return new Promise((resolve, reject) => {
            wxSdk.ready(function () {
                resolve(true);
            });
        })
    }
}

export default wxJsSdk;