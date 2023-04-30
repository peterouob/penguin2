<template>

</template>

<script setup>
import {onBeforeMount} from "vue";
import {story2Store} from "../../../store/store.js";
import router from "../../../router/index.js";
const s2 = story2Store()
onBeforeMount(()=>{
  if(s2.teachername === true && s2.sizhoungname === true){
    s2.yingfa = true
    s2.teachername = false
    s2.sizhoungname = false
  }
})
router.push("/")

</script>