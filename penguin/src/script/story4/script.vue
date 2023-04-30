<template>

</template>

<script setup>
import {onBeforeMount} from "vue";
import {story4Store} from "../../store/store.js";
import router from "../../router/index.js";
const s4 = story4Store()
onBeforeMount(()=>{
  if(s4.black === true && s4.egg === true && s4.ant === true && s4.happy === true){
    s4.stone4 = true
    s4.black = false
    s4.egg = false
    s4.ant = false
    s4.happy = false
  }
})
router.push("/")

</script>