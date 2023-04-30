<template>

</template>

<script setup>
import {onBeforeMount} from "vue";
import {story1Store} from "../../../store/store.js";
import router from "../../../router/index.js";
const s1 = story1Store()
onBeforeMount(()=>{
  if(s1.magic === true && s1.yisuiping === true){
    s1.ziouz = true
    s1.magic = false
    s1.yisuiping = false
  }
})
router.push("/")
</script>