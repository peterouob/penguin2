<script setup>
import {ElMessage} from 'element-plus'
import {userStore} from "../store/store.js";
import {onBeforeMount} from "vue";
import router from "../router/index.js";
let power = userStore()
onBeforeMount(async ()=>{
  power.power -= 10;
  ElMessage.success("威望值好像有變動！")
  await router.push("/main")
})
</script>

<template>

</template>