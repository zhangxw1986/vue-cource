// 引入vue框架
import Vue from 'vue'
// 引入vue-router路由依赖
import Router from 'vue-router'
// 引入路由列表
import routes from './router'

// 加载插件，让VUE全局使用Router
Vue.use(Router)
// 创建路由实例
export default new Router({
  routes: routes
})
