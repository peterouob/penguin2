<template>

</template>

<script setup>
import {onBeforeMount} from "vue";
import {story4Store} from "../../../store/store.js";
import router from "../../../router/index.js";
const s4 = story4Store()
onBeforeMount(()=>{
  s4.black = true
})
router.push("/")

</script>