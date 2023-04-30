<template>
  <div>

  </div>
</template>

<script setup>
import {userStore} from "../store/store.js";
import {onMounted} from "vue";
import router from "../router/index.js";
const user = userStore()
onMounted(()=>{
  user.finish = true
  router.push("/")
})
</script>