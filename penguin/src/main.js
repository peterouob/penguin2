import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router/index.js";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import {createPinia} from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import QrReader from 'vue3-qr-reader';

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(QrReader)
app.use(ElementPlus)
app.use(router)
app.use(pinia)
app.mount('#app')
