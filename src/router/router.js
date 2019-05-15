// 引入HOME页面组件
import Home from '@/views/Home.vue'

export default [
  {
    path: '/',
    // 别名
    alias: '/home_page',
    // 命名路由
    name: 'home',

    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // 以下方式让懒加载
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  },
  // 动态路由匹配,即在url中传递参数
  {
    path: '/argu/:name',
    name: 'argu',
    component: () => import('@/views/argu.vue')
  },
  // 子路由，也叫嵌套路由，在children后跟路由数组来实现，数组里和其他配置路由基本相同，
  // 然后增加<router-view></router-view>来显示子页面，相当于嵌入iframe
  {
    path: '/parent', // 主页路由
    name: 'parent',
    component: () => import('@/views/parent.vue'),
    children: [ // 嵌套子路由
      {
        path: 'child', // 子页面
        component: () => import('@/views/child.vue')
      }
    ]
  },
  // 命名视图
  {
    path: '/named_view',
    components: {
      default: () => import('@/views/child.vue'),
      email: () => import('@/views/email.vue'),
      phone: () => import('@/views/phone.vue')
    }
  },
  // 重定向
  {
    path: '/home',
    redirect: to => '/'
  }

]
