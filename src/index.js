import Utils from './assets/utils/index.js'
import HelloWorld from './components/HelloWorld'

const components = {
  HelloWorld
}

const install = function (Vue, options = {}) {
  Object.keys(components).forEach(key => {
    Vue.component(key, components[key])
  })

  Vue.prototype.$util = Utils
}

export default install
