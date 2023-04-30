<template>

</template>

<script setup>
import {onBeforeMount} from "vue";
import {story5Store} from "../../../store/store.js";
import router from "../../../router/index.js";
const s5 = story5Store()
onBeforeMount(()=>{
  s5.blue = true
})
router.push("/")

</script>