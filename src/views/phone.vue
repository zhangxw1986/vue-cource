<template>
  <div class="phone">
    <p>{{message}}</p>
  </div>
</template>
<script>
export default {
  data(){
    return{
      message: ''
    }
  },
  mounted(){
    this.$bus.$on('on-click',mes1 => this.message = mes1)
  }

}
</script>

<style lang="less">
  .phone{
    border: 1px solid red
  }
</style>
