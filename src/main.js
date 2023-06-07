import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js';
import '@/assets/fonts/inter-font.scss';
import './index.css'


createApp(App).use(router).mount('#app');
