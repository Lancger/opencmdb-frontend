import Vue from 'vue'
import 'normalize.css/normalize.css'// A modern alternative to CSS resets
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.scss' // global css
// import './mock/index'
// 导入字体图标库
import 'font-awesome/less/font-awesome.less'
import "./theme/light.scss"
import "./theme/dark.scss"

Vue.use(Element)
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false
document.body.ondrop = function (event) {
	event.preventDefault()
	event.stopPropagation()
}
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
