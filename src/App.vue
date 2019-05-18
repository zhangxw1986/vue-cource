<template>
  <div id="app">
    <div id="nav">
      <!-- router-link标签跳转：封装了a标签，用于跳转，to:导航路径，可以直接写路径或者写对象的方式 -->
      <router-link :to="{name:'home',params:{'username':'zxw'}}">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <!-- 视图渲染组件，通过router-link加载的组件会在这里渲染 -->
    <!-- 命名视图相关 -->
    <!-- transition-group设置组件动效 -->
    <transition-group name='router'>
    <router-view key='default'/>
    <router-view key='email' name="email"/>
    <router-view key='phone' name="phone"/>
    </transition-group>


  </div>
</template>

<style lang="less">
.router-enter{
  opacity: 0;
}
.router-enter-active{
  transition: opacity 1s ease;
}
.router-enter-to{
  opacity: 1
}
.router-leave{
  opacity: 1;
}
.router-leave-active{
  transition: opacity 1s ease;
}
.router-leave-to{
  opacity: 0
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
