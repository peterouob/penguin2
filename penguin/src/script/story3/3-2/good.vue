<template>

</template>

<script setup>
import {onBeforeMount} from "vue";
import {story3Store} from "../../../store/store.js";
import router from "../../../router/index.js";
const s3 = story3Store()
onBeforeMount(()=>{
if(s3.goodDrink === true){
  s3.goodM = true
  s3.goodDrink = false
}
})
router.push("/")

</script>