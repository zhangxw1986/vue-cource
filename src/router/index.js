import Vue from 'vue'
import Router from 'vue-router'
// 路由列表
import routes from './router'
// 加载插件
Vue.use(Router)
// 创建路由实例
export default new Router({
  routes: routes
})
