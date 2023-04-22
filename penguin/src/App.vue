<template>
  <div>
    <div v-for="i in item">{{i}}</div>
  </div>
</template>

<script setup>
import {ref,reactive} from 'vue'
import GameManager from "./game/GameManager.js";

const item = GameManager.GetInstance().itemRegistry
</script>