<template>

</template>

<script setup>
import {onBeforeMount} from "vue";
import {story2Store} from "../../../store/store.js";
import router from "../../../router/index.js";
const s2 = story2Store()
onBeforeMount(()=>{
  if(s2.mouseCum === true && s2.yingfa === true){
    s2.not = true
    s2.mouseCum = false
    s2.yingfa = false
  }
})
router.push("/")

</script>