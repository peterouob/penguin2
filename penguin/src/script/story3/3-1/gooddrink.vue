<template>

</template>

<script setup>
import {onBeforeMount} from "vue";
import {story3Store} from "../../../store/store.js";
import router from "../../../router/index.js";
const s3 = story3Store()
onBeforeMount(()=>{
if(s3.tree === true && s3.water === true){
  s3.goodDrink = true
  s3.tree = false
  s3.water = false
}
})
router.push("/")

</script>