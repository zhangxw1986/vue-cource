// 引入VUE框架
import Vue from 'vue'
// 引入根组件
import App from './App.vue'
// 引入路由组件
import router from './router'
// 引入vuex存储组件
import store from './store'
import Bus from './lib/bus'

// 关闭生产模式下给出的提示
Vue.config.productionTip = false
Vue.prototype.$bus = Bus

// 定义实例
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
