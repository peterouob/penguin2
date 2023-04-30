<template>

</template>

<script setup>
import {onBeforeMount} from "vue";
import {story2Store} from "../../../store/store.js";
import router from "../../../router/index.js";
const s2 = story2Store()
onBeforeMount(()=>{
  if(s2.book === true && s2.penclebox === true ){
    s2.teachername = true
    s2.book = false
    s2.penclebox = false
  }
})
router.push("/")

</script>