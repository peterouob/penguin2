<script setup>
import {ref,onBeforeMount} from "vue";
import {useRouter} from 'vue-router'
import {ElMessage} from 'element-plus'
import {userStore} from "../store/store.js";
const user = userStore()
const router = useRouter()
const team = ref()

onBeforeMount(()=>{
  if(user.login === true){
    router.push("/main")
  }
})

const login = async ()=>{
  if(team.value === "team1" || team.value === "team2"){
    user.login = true
    user.teamName = team.value
    ElMessage.success("登入成功")
    await router.push("/main")
  }else if(team.value === undefined){
    ElMessage.error("請輸入隊伍名稱")
  }else{
    ElMessage.error("隊伍名稱錯誤")
  }
}

const clear = ()=>{
  team.value = ""
  ElMessage.info("成功清除")
}
</script>

<template>
  <div class="bk">
    <div class="login-form-container">
      <div class="bk">
        <div class="login-form">
          <label for="username" style="font-size: 1.25rem;margin-bottom: 1rem">隊伍編號</label>
          <input v-model="team" type="text" placeholder="Username" name="username"/>
          <button @click="login">Login</button>
          <button @click="clear">清除</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>

body {
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
  padding: 0;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f2f2f2;
  padding: 20px;
  box-shadow: 10px 5px 5px rgba(0, 0, 0, .1);
}

.navbar-logo {
  font-size: 24px;
  font-weight: bold;
}

.navbar-menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.navbar-menu li {
  margin-right: 20px;
}

.navbar-menu li:last-child {
  margin-right: 0;
}

.navbar-menu li a {
  color: #333;
  text-decoration: none;
  font-weight: bold;
  font-size: 16px;
}

.login-form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh);
  background-color: #0093E9;
  background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
}

.login-form {
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  padding: 20px;
  box-shadow: 0 20px 10px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  height: 25vh;
}

.login-form input {
  font-size: 20px;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  outline: none;
}

.login-form input[type="text"] {
  width: 300px;
}

.login-form button{
  margin-top:0.75rem;
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 15px;
}

.login-form button:hover {
  background-color: #696969;
  color: #ffffff;
}
.main-content h1 {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
}
</style>