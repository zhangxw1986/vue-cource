// 引入HOME页面组件
import Home from '@/views/Home.vue'

export default [
  {
    path: '/',
    // 别名
    alias: '/home_page',
    // 命名路由
    name: 'home',
    component: Home,
    props: route => ({
      food: route.query.food // 设置路由传递参数，第三种函数模式，
    }),
    // 路由独享守卫：仅用于该路由跳转时的守卫设置，注意别忘了next()函数的调用。
    beforeEnter: (to, from, next) => {
      // if (from.name === 'about') alert('这是从about页过来的')
      // else alert('这不是从about页来的')
      next()
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // 以下方式让懒加载
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
    // props: {   // 设置路由传递参数，第二种对象模式，
    //   food: 'banana'
    // }
    meta: {
      title: '关于'
    }
  },
  // 动态路由匹配,即在url中传递参数
  {
    path: '/argu/:name',
    name: 'argu',
    component: () => import('@/views/argu.vue')
    // props: true // 设置路由传递参数，第一种布尔模式：只能对动态参数进行传递
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
  },
  {
    path: '*', // 设置404错误页面
    component: () => import('@/views/404_page.vue')
  }

]
