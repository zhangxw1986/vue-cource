// 引入vue框架
import Vue from 'vue'
// 引入vue-router路由依赖
import Router from 'vue-router'
// 引入路由列表
import routes from './router'
import { setTitle } from '@/lib/utils'

// 加载插件，让VUE全局使用Router
Vue.use(Router)
// 创建路由实例
const router = new Router({
  mode: 'history',
  routes: routes
})

const HAS_LOGIN = true

// 全局路由守卫，一般用于路由跳转前确认用户是否登录、用户是否有权限等全局设置
router.beforeEach((to, from, next) => {
  to.meta && setTitle(to.meta.title)
  if (to.name !== 'login') {
    if (HAS_LOGIN) next()
    else next({ name: 'login' })
  } else {
    if (HAS_LOGIN) next({ name: 'home'})
    else next()
  }
})

/** 路由跳转过程详解
 * 1、导航被触发
 * 2、在失活的组件（即将离开的页面组件）里调用离开守卫beforeRouteLeave
 * 3、调用全局的前置守卫 beforeEach
 * 4、在重用的组件里调用 beforeRouteUpdate
 * 5、调用路由独享的守卫 beforeEnter
 * 6、解析异步路由组件
 * 7、在被激活的组件（即将进入的页面组件）里调用beforeRouteEnter
 * 8、调用全局的解析守卫 beforeResolve
 * 9、导航被确认
 * 10、调用全局的后置守卫 afterEach
 * 11、触发DOM更新
 * 12、用创建好的实例调用beforeRouteEnter守卫里传给next的回调函数。
 *
*/
export default router
