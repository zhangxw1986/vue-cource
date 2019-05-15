<template>
  <div id="app">
    <div id="nav">
      <!-- 封装了a标签，用于跳转 -->
      <router-link :to="{name:'home'}">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <!-- 视图渲染组件，通过router-link加载的组件会在这里渲染 -->
    <!-- 命名视图相关 -->
    <router-view/>
    <router-view name="email"/>
    <router-view name="phone"/>

  </div>
</template>

<style lang="less">
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
