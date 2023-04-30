<template>

</template>

<script setup>
import {onBeforeMount} from "vue";
import {story4Store} from "../../../store/store.js";
import router from "../../../router/index.js";
const s4 = story4Store()
onBeforeMount(()=>{
  if(s4.wiz ===  true){
    s4.happy = true
    s4.wiz = false
  }
})
router.push("/")

</script>