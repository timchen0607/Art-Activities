import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "@/assets/scss/_reset.scss"
import "@/assets/scss/_global.scss"
import "@fortawesome/fontawesome-free/js/all.js";

createApp(App).use(router).mount('#app')
