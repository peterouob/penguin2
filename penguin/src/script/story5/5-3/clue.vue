<template>

</template>

<script setup>
import {onBeforeMount} from "vue";
import {story5Store} from "../../../store/store.js";
import router from "../../../router/index.js";
const s5 = story5Store()
onBeforeMount(()=>{
  if(s5.small === true){
    s5.smallclue = true
    s5.small = false
  }
})
router.push("/")

</script>