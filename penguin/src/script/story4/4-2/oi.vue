<template>

</template>

<script setup>
import {onBeforeMount} from "vue";
import {story4Store} from "../../../store/store.js";
import router from "../../../router/index.js";
const s4 = story4Store()
onBeforeMount(()=>{
  if(s4.big === true){
    s4.oi = true
    s4.big = false
  }
})
router.push("/")

</script>