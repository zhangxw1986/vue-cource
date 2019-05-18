<template>
  <div>
    <!-- {{ $route.params.name }} -->
    <!-- {{name }} -->
  </div>
</template>
<script>
export default {
//
  // props:{
  //   name:{
  //     type: String,
  //     default: 'zxw'
  //   }
  // }
  beforeRouteUpdate(to,from,next){
    console.log(to.name,from.name)
    next()
  },
  
}
</script>
