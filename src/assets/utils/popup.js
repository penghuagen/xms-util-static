// 对vant常用的提示框进行二次封装
import { Dialog, Toast } from 'vant'

// 弹框默认配置
const defaultOptions = {
  cancelButtonColor: '#333',
  confirmButtonColor: '#44c85a',
  className: 'common-confirm'
}

// 合并参数
function mergeOption (defaultOptions, options) {
  if (typeof options === 'object') defaultOptions = Object.assign({}, defaultOptions, options)
  if (typeof options === 'string') defaultOptions.message = options
  return defaultOptions
}

/* 确认框提示
   options:传的是字符串,默认为提示文字信息;传的是对象信息,则会跟默认配置合并.
   callback:回调函数为点击确认回调
   常用示例: alert('分享失败') alert({message:'分享失败'})
    */
function alert (options, callBack) {
  options = mergeOption(defaultOptions, options)
  Dialog.alert(options).then(() => {
    typeof callBack === 'function' && callBack()
  })
}

/* 确认框提示
   options:传的是字符串,默认为提示文字信息;传的是对象信息,则会跟默认配置合并.
   callback:回调函数为点击确认回调
   常用示例: alert('分享失败') alert({message:'分享失败'})
    */
function confirm (options, callBack) {
  options = mergeOption(defaultOptions, options)
  Dialog.confirm({
    ...options,
    beforeClose: (action, done) => {
      if (action === 'confirm') {
        typeof callBack === 'function' && callBack()
        done()
      } else {
        done()
      }
    }
  }).catch(() => {})
}

/* 消息提示框
   options:传的是字符串,默认为提示文字信息;传的是对象信息,则会跟默认配置合并.
   常用示例: toast('分享失败') toast({message:'分享失败'})
*/
function toast (options) {
  const defaultToastOptions = {
    message: '至少要传提示内容',
    className: 'toast',
    duration: 2000
  }
  options = mergeOption(defaultToastOptions, options)
  Toast(options)
}
export {alert, toast, confirm}
