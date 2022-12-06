import Vue from 'vue'

import { createPinia, PiniaVuePlugin } from 'pinia'

import App from './App.vue'
import router from './router'

import 'flowbite';
import './assets/main.css'
import './index.css'

Vue.use(PiniaVuePlugin)
const pinia = createPinia()

new Vue({
  router,
  render: (h) => h(App),
  pinia
}).$mount('#app')
