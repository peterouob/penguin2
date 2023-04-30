<template>
  <div>

  </div>
</template>

<script setup>
import {onBeforeMount} from "vue";
import {story1Store} from "../../../store/store.js";
import router from "../../../router/index.js";
const s1 = story1Store()
onBeforeMount(()=>{
  if(s1.popcorn === true){
    s1.sea = true
    s1.popcorn = false
  }
  router.push("/")
})
</script>