// 日期格式化
import {getPlatform, getAppCode} from './base'
// app交互
import {callAppMethod, callAppCommon, callAppAliPay} from './callApp'
// 弹框二次封装
import {alert, toast, confirm} from './popup'
// 日期格式化
import {dateFormat} from './date'

export default {
  getPlatform,
  getAppCode,
  callAppMethod,
  callAppCommon,
  callAppAliPay,
  dateFormat,
  alert,
  toast,
  confirm
}
