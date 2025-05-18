import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './style.css'; // If it's in src/

createApp(App).use(router).mount('#app');
