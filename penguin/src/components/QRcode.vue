<template>
  <div>
    <div class="mb">
    </div>
    <div class="center stream">
      <qr-stream @decode="onDecode" class="mb">
        <div style="color: red;" class="frame"></div>
      </qr-stream>
    </div>
    <div class="result">
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, reactive, toRefs} from 'vue';
import { QrStream } from 'vue3-qrcode-reader'
import {useRouter} from "vue-router";

export default defineComponent({
  name: 'QrStreamExample',
  components: {
    QrStream
  },
  setup() {
    let flag = false
    const router = useRouter()
    const state = reactive({
      data: null
    })
    function go(){}

    function onDecode(data) {
      state.data = data
      flag = true
      console.log(state.data)
      if(flag === true){
        router.push(state.data)
      }
    }
    return {
      ...toRefs(state),
      onDecode,
      go,
    }

  }
}
);
</script>

<style scoped>
.stream {
  max-height: 100vh;
  max-width: 100vw;
  margin: auto;
}
.frame {
  border-style: solid;
  border-width: 2px;
  border-color: red;
  height: 200px;
  width: 200px;
  position: absolute;
  top: 0px;
  bottom: 0px;
  right: 0px;
  left: 0px;
  margin: auto;
}
</style>