<template>
  <div class="email">
    <button @click="handleClick">按我</button>
  </div>
</template>
<script>
export default {
  methods:{
    handleClick(){
      this.$bus.$emit('on-click','hello')
    }
  },
  mounted(){
    console.log(this.$bus)
  }
}
</script>

<style lang="less">
  .email {
    border: 1px solid green
  }
</style>
