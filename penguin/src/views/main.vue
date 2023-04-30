<script setup>
import {ref, onMounted, onBeforeMount} from "vue";
import {userStore,story1Store,story2Store,story3Store,story4Store,story5Store} from "../store/store.js";

const user = userStore()
const s1 = story1Store()
const s2 = story2Store()
const s3 = story3Store()
const s4 = story4Store()
const s5 = story5Store()
const initialTimeRemaining = 3 * 60 * 60;
const timeRemaining = ref(parseInt(localStorage.getItem('timeRemaining')) || initialTimeRemaining);
const displayTime = ref('');

const saveToLocalStorage = () => {
  localStorage.setItem('timeRemaining', timeRemaining.value.toString());
};
let intervalId
let flag = true
onMounted(() => {
  intervalId = setInterval(() => {
    timeRemaining.value--;
    const hours = Math.floor(timeRemaining.value / 3600);
    const minutes = Math.floor((timeRemaining.value % 3600) / 60);
    const seconds = Math.floor(timeRemaining.value % 60);
    displayTime.value = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    saveToLocalStorage();
  }, 1000);
  if(user.finish === true){
    clearInterval(intervalId);
    const time = localStorage.getItem("timeRemaining");
    flag = false
    console.log(time)
  }
});

onBeforeMount(()=>{
  if(s1.stone1 === true && s2.stone2 === true && s3.stone3 === true && s4.stone4 === true && s5.stone5 === true){
    user.finishBtn = true
    s1.stone1 = false
    s2.stone2 = false
    s3.stone3 = false
    s4.stone4 = false
    s5.stone5 = false
  }
})
</script>

<template>
<div>
  <div class="container">
    <div class="date" v-if="flag">{{ displayTime }}</div>
    <div class="grid">
      <div v-if="s1.stone1" class="item">
        <img src="../assets/第一條/" alt="Image 1">
      </div>
      <div class="item">
        <img src="../assets/第二條/石板-卡巴拉生命遺址.jpg" alt="Image 2">
      </div>
      <div class="item">
        <img src="../assets/第三條/" alt="Image 3">
      </div>
      <div class="item">
        <img src="../assets/1.jpeg" alt="Image 4">
      </div>
      <div class="item" style="left: 50%;top: 10%">
        <img src="../assets/1.jpeg" alt="Image 5">
      </div>
    </div>
  </div>
</div>

</template>

<style>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
  /*margin: 0 auto;*/
  max-width: 1200px;
  margin-top: 2rem;
}

.date {
  font-family: Arial, Helvetica, sans-serif;
  width: 300px;
  margin: 100px auto 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 7vw;
  padding: 3.5vw;
  background-color: #0093E9;
  background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
  border-radius: 20px;
  border: 5px solid #ffffff;
  color: #ffffff;
  height: auto;
  box-shadow: 0 0 10px #333;
  animation: movepoint 2s infinite;
}


.item {
  position: relative;
}


.item img {
  display: block;
  width: 100%;
  height: auto;
}

.item h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.item p {
  font-size: 1rem;
}

@media screen and (max-width: 768px) {
  .grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-gap: 10px;
  }
}

@keyframes movepoint {

}
</style>
