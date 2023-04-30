<template>

</template>

<script setup>
import {onBeforeMount} from "vue";
import {story4Store} from "../../../store/store.js";
import router from "../../../router/index.js";
const s4 = story4Store()
onBeforeMount(()=>{
  if(s4.clown === true){
    s4.ant = true
    s4.clown = false
  }
})
router.push("/")

</script>