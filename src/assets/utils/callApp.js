import {getPlatform} from './base'
import {alert} from './popup'
// 跟app交互调用的方法
function callAppMethod (methodName, param, callback) {
  let platform = getPlatform()
  if (typeof param === 'object') param = JSON.stringify(param)
  if (platform === 'ios') {
    window.webkit.messageHandlers[methodName].postMessage(param)
  } else if (platform === 'android') {
    window.android && window.android[methodName](param)
  } else {
    typeof callback === 'function' && callback()
  }
}

// 调用app分享公共方法
function callAppCommon (param, callback) {
  const defaultParam = {
    shareType: 0, // 0.微信,1.朋友圈,2.小程序,3:钉钉
    shareContentType: 0, // 0.链接，1.图片
    imgUrl: '', // 分享的图片(工牌海报)、软文封面图
    title: '', // 分享标题
    path: '',
    content: '', // 分享描述内容
    webpageUrl: '',
    userName: 'gh_83e76b11ec8b'
  }
  if (typeof param === 'object') Object.assign(defaultParam, param)
  try {
    this.callAppMethod('shareCommon', defaultParam, callback)
  } catch (e) {
    alert('分享失败,请升级APP至最新版本,谢谢支持')
  }
}

// 调用app支付公共方法
function callAppAliPay (param, callback) {
  try {
    this.callAppMethod('appAliPay', param, callback)
  } catch (e) {
    alert({
      message: '支付失败,请升级APP至最新版本,谢谢支持'
    })
  }
}

export {callAppMethod, callAppCommon, callAppAliPay}
