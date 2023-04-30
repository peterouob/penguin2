<template>

</template>

<script setup>
import {onBeforeMount} from "vue";
import {story3Store} from "../../../store/store.js";
import router from "../../../router/index.js";
const s3 = story3Store()
onBeforeMount(()=>{
s3.apple = true
})
router.push("/")

</script>