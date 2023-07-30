import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';
import VueGtag from "vue-gtag";
import './assets/styles/reset.css';

createApp(App)
  .use(VueGtag, {
    config: { id: "UA-270744270-1" }
  })
  .use(createPinia())
  .mount('#app');
