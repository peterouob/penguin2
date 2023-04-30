<template>

</template>

<script setup>
import {onBeforeMount} from "vue";
import {story2Store} from "../../store/store.js";
import router from "../../router/index.js";
const s2 = story2Store()
onBeforeMount(()=>{
  if(s2.not === true){
    s2.stone2 = true
    s2.not = false
  }
})
router.push("/")

</script>