<template>

</template>

<script setup>
import {story1Store} from "../../store/store.js";
import {onBeforeMount} from "vue";
import router from "../../router/index.js";

const s1 = story1Store()

onBeforeMount(()=>{
  if(s1.sea === true && s1.ziouz === true && s1.sanling === true){
    s1.sea = false
    s1.ziouz =false
    s1.sanling = false
    s1.stone1 = true
  }
})
router.push("/main")
</script>