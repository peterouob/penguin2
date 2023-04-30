<template>

</template>

<script setup>
import {onBeforeMount} from "vue";
import {story5Store} from "../../../store/store.js";
import router from "../../../router/index.js";
const s5 = story5Store()
onBeforeMount(()=>{
  if(s5.three === true){}
  s5.sorry = true
  s5.three = false
})
router.push("/")

</script>