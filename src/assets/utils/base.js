function getPlatform () {
  let platform = 'ios'
  let userAgent = window.navigator.userAgent.toLowerCase()
  if (userAgent.indexOf('xms_android') > -1) {
    platform = 'android'
  } else if (userAgent.indexOf('xms_ios') > -1) {
    platform = 'ios'
  } else if (userAgent.indexOf('micromessenger') > -1) {
    platform = 'weixin'
  } else {
    platform = 'other'
  }
  return platform
}

function getAppCode () {
  let appCode = 1
  let userAgent = window.navigator.userAgent.toLowerCase()
  if (userAgent) {
    let uaArr = userAgent.split('appcode=')
    if (uaArr.length === 2) {
      appCode = uaArr[1]
    } else {
      let localAppCode = localStorage.getItem('appCode')
      if (localAppCode) {
        appCode = localAppCode
      }
    }
  }

  return Number(appCode)
}

export {getPlatform, getAppCode}
