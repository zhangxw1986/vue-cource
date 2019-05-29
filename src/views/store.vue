<template>

<div>
  <a-input @input="handleIn" />
  <p> {{ val }} </p>
  <a-show :content='val' ></a-show>
  </div>
</template>

<script>
import AInput from '_c/AInput.vue'
import AShow from '_c/AShow.vue'
export default {
  name: 'store',
  components:{
    AInput,
    AShow
  },
  data(){
    return {
      val: ""
    }
  },
  methods:{
    handleIn(val){
      this.val = val;
    }
  }
}
</script>
