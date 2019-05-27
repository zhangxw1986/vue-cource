<template>
  <div class="home">
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
  methods: {
    handleClick(type) {
      // 变成式导航-JS代码内部跳转:this.$router.push('/xxx')
      // this.$router.go(-1)等同于history.back()
      // this.$router.go(1)等同于history.forward()
      if (type === "back") this.$router.back();
      // else if (type === "push") this.$router.push("parent");
      // 路由传递参数4种方式：1、通过router-link的to参数传参 2、在路由配置中利用动态路由配置 3、编程式导航中利用params对象或query对象传参
      else if (type === "push") this.$router.push({
        name:'argu',
        params: {
          name: 'zxw'
        },
        //
        query: {
          name: 'zxw'
        }
    })
    else if(type === "replace") this.$router.replace({
      name: 'parent'
    })
    }
  }
};
</script>
