<script setup>
import {story2Store, userStore,story5Store} from "./store/store.js";
import {onMounted, ref} from "vue";
import router from "./router/index.js";
import QrStreamExample from "./components/QRcode.vue";
import {ElMessageBox} from "element-plus";
const user = userStore()
const dialogFormVisible = ref()
const dialogClue = ref()
const dialogQrocde = ref()
const clue = ref("")
const s2 = story2Store()
const s5 = story5Store()
if(user.power < 0){
  user.power = 0
}
window.addEventListener('storage', function(e) {
  localStorage.setItem(e.key, e.oldValue)
})

const ans = ()=>{
  if(clue.value === "mouse"){
    s2.mouseCum = true
    ElMessageBox.alert("似乎獲得了什麼道具？","通知")
    s2.clue1 = false
  }else if(clue.value === "河馬館長" && s5.smallclue === true){
    s5.tchiling = true
    ElMessageBox.alert("似乎獲得了什麼道具？","通知")
    s5.smallclue = false
  }else{
    ElMessageBox.alert("答案有問題唷！","通知")
  }
}

</script>

<template>
  <div>
    <nav class="navbar" v-if="user.login">
      <div class="navbar-logo" @click="dialogFormVisible=true">威望值</div>
      <ul class="navbar-menu">
        <li><router-link to="/main">Home</router-link></li>
        <li><router-link to="/bag">Bag</router-link></li>
        <li><router-link to  @click="dialogQrocde=true">Qrcode</router-link></li>
        <li><router-link to @click="dialogClue=true">Clue</router-link></li>
      </ul>
    </nav>
    <el-dialog style="width: 100vw;border-radius: 20px" v-model="dialogFormVisible">
      <h1>威望值</h1>
      <el-progress :text-inside="true" :stroke-width="30" :percentage=user.power />
    </el-dialog>

    <el-dialog style="width: 100vw;border-radius: 20px" v-model="dialogClue">
      <el-input v-model="clue" />
      <el-button style="margin-top: 1.5rem" @click="ans">Click</el-button>
    </el-dialog>

    <el-dialog style="width: 100vw;border-radius: 20px" v-model="dialogQrocde">
      <QrStreamExample></QrStreamExample>
    </el-dialog>

    <router-view />
  </div>
</template>

<style scoped>
</style>
