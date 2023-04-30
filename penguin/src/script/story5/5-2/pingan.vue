<template>

</template>

<script setup>
import {onBeforeMount} from "vue";
import {story5Store} from "../../../store/store.js";
import router from "../../../router/index.js";
const s5 = story5Store()
onBeforeMount(()=>{
  if(s5.sqhy === true && s5.wood === true && s5.dance === true){
    s5.pinan = true
    s5.sqhy = false
    s5.wood = false
    s5.dance = false
  }
})
router.push("/")

</script>