<template>
  <div>
    <div class="image-carousel">
      <div class="image-container">
        <img v-if="s1.yiu" src="../assets/第一條/冬蟲夏草.png" @click="ElMessageBox.alert('道具1','這是一個道具1')">
        <img v-if="s1.dagon" src="../assets/第一條/十九茶屋打工憑證.png" @click="ElMessageBox.alert('道具1','這是一個道具1')">
        <img v-if="s1.yisuiping" src="../assets/第一條/易碎瓶.jpg"  @click="ElMessageBox.alert('','') ">
        <img v-if="s1.popcorn" src="../assets/第一條/玉米杯杯.png"  @click="ElMessageBox.alert('','') ">
        <img v-if="s1.magic" src="../assets/第一條/神奇粉末.jpg" @click="ElMessageBox.alert('','') ">
        <img v-if="s1.twtea" src="../assets/第一條/逮丸頂尖珍珠奶茶.png"  @click="ElMessageBox.alert('','') ">
        <img v-if="s1.ziouz" src="../assets/第二條/石板-卡巴拉生命遺址.jpg"  @click="ElMessageBox.alert('','') ">
<!--        -->
<!--        <h1>2</h1>-->
        <img v-if="s2.not" src="../assets/第二條/不安非他命.jpg">
        <img v-if="s2.sizhoungname" src="../assets/第二條/市長的評估簽名.jpg">
        <img v-if="s2.yingfa" src="../assets/第二條/研發許可.jpg">
        <img v-if="s2.teachername" src="../assets/第二條/老師的評估簽名.jpg">
        <img v-if="s2.mouseCum" src="../assets/第二條/老鼠廚神的體液.jpg">
        <img v-if="s2.penclebox" src="../assets/第二條/鉛筆盒(螞蟻的家).jpg">
        <img v-if="s2.book" src="../assets/第二條/病毒公式書.jpg">
<!--        -->
        <img v-if="s" src="../assets/第三條/桐樹撒郎黑油.png">
        <img v-if="s" src="../assets/第三條/惡魔果實.png">
        <img v-if="s" src="../assets/第三條/修好的機器.PNG">
        <img v-if="s" src="../assets/第三條/好喝的機油BBB.png" >
        <img v-if="s" src="../assets/第三條/超破爛的機器.png">
        <img v-if="s" src="../assets/第三條/碳酸氫鈉水.jpg">
<!---->
        <img v-if="s" src="../assets/第四條/999+拳擊手套.jpg">
        <img v-if="s" src="../assets/第四條/八百倍歐姆蛋飯.png">
        <img v-if="s" src="../assets/第四條/冷凍小丑.jpg">
        <img v-if="s" src="../assets/第四條/快樂丸.jpg">
        <img v-if="s" src="../assets/第四條/沒草莓大福.jpg">
        <img v-if="s" src="../assets/第四條/祖傳地溝油.jpg">
        <img v-if="s" src="../assets/第四條/館長的遺志.jpg">
        <img v-if="s" src="../assets/第四條/麻蟻上訴.jpg">
        <img v-if="s" src="../assets/第四條/大麻%20煩的貨.jpg">
<!--        -->
        <img v-if="s" src="../assets/第五條/三羌.PNG" >
        <img v-if="s" src="../assets/第五條/加0木刀.jpg" >
        <img v-if="s" src="../assets/第五條/十足的歉意.PNG" >
        <img v-if="s" src="../assets/第五條/多功能木塊.PNG" >
        <img v-if="s" src="../assets/第五條/小偷特徵.jpg" >
        <img v-if="s" src="../assets/第五條/沒特徵藍圖.PNG" >
        <img v-if="s" src="../assets/第五條/祝。平安喜樂.PNG" >
        <img v-if="s" src="../assets/第五條/胖達舞蹈全紀錄.jpg" >
        <img v-if="s" src="../assets/第五條/詩情畫意的句子.jpg" >
        <img v-if="s" src="../assets/第五條/通緝令.jpg" >
      </div>
    </div>
  </div>
</template>

<script setup>
import {useRouter} from "vue-router";
import {ElMessageBox} from 'element-plus'
import {story1Store, story2Store} from "../store/store.js";

const router = useRouter()
const s1 = story1Store()
const s2 = story2Store()
</script>
<style>

.prev{
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-right: 10px solid black;
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translateX(-50%);
  /* 要將按鈕放在螢幕上方或下方，將上面的left改為top，transform改為translateY即可 */
}

.prev:hover{
  transform: scale(1.5);
}


.next{
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 10px solid black;
  position: absolute;
  top: 50%;
  right: 10%;
  transform: translateX(-50%);
  /* 要將按鈕放在螢幕上方或下方，將上面的left改為top，transform改為translateY即可 */
}

.next:hover{
  transform: scale(1.5);
}


.image-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
}

.image-container img {
  width: 30%;
  height: auto;
  margin: 10px;
}

@media screen and (max-width: 768px) {
  .image-container img {
    width: 45%;
  }
}
</style>