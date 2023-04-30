<template>
  <div>
  </div>
</template>

<script setup>
import {onBeforeMount} from "vue";
import {story1Store} from "../../../store/store.js";
import router from "../../../router/index.js";
const s1 = story1Store()
onBeforeMount(()=>{
  if(s1.yiu === true){
    s1.magic = true
    s1.yiu = false
  }
})
router.push("/")
</script>