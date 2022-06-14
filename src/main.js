import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import Vue from 'vue'
import Vuelidate from 'vuelidate'

createApp(App).use(router).use(Vuelidate).mount('#app')
