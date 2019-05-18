<template>
  <div class="home">
    <p>{{food}}</p>
    <img alt="Vue logo" src="../assets/img/logo.png">
    <p>{{$route.params.username}}</p>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="handleClick('back')">返回上一页</button>
    <button @click="handleClick('push')">跳转到parent</button>
    <button @click="handleClick('replace')">更新到parent</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  props: {
    food: {
      type: String,
      default: 'apple'
    }
  },
  //组件内守卫有3个：beforeRouterEnter、beforeRouterLeave、beforeRouterUpdate，后两个可以使用this对象表示组件，第一个不可以
  beforeRouteEnter (to, from, next) {
    next(vm => {  // 采用回调函数的方式使用组件对象
      console.log(vm)
    })
  },
  beforeRouteLeave (to, from, next) {
    const leave = confirm('你真的确定要离开吗？')
    if(leave) next()
    else next(false)
  },

  methods: {
    handleClick(type) {
      // 变成式导航-JS代码内部跳转:this.$router.push('/xxx')
      // this.$router.go(-1)等同于history.back()
      // this.$router.go(1)等同于history.forward()
      if (type === "back") this.$router.back();
      // else if (type === "push") this.$router.push("parent");
      else if (type === "push") this.$router.push({
        name:'argu',
        params: {
          name: 'zxw'
        },
        query: {
          name: 'zxw'
        }
    })
    else if(type === "replace") this.$router.replace({
      name: 'parent'
    })
    }
  }
}
</script>
