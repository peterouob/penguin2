<template>

</template>

<script setup>
import {onBeforeMount} from "vue";
import {story2Store} from "../../../store/store.js";
import router from "../../../router/index.js";
const s2 = story2Store()
onBeforeMount(()=>{
  s2.book = true
})
router.push("/")

</script>