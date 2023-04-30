<template>

</template>

<script setup>
import {onBeforeMount} from "vue";
import {story5Store} from "../../store/store.js";
import router from "../../router/index.js";
const s5 = story5Store()
onBeforeMount(()=>{
  if(s5.blue === true && s5.pinan === true && s5.sorry === true){
    s5.stone5 = true
    s5.blue = false
    s5.pinan = false
    s5.sorry = false
  }
})
router.push("/")

</script>