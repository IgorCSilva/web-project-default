import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import Vuelidate from 'vuelidate'
import VueOffline from 'vue-offline'
import Snotify from 'vue-snotify'
import i18n from '@/translation/i18n/index.ts'

Vue.config.productionTip = false

// EventBus
export const eventBus = new Vue()

Vue.use(Vuelidate)

Vue.use(VueOffline, {
  mixin: false,
  storage: false
})

Vue.use(Snotify)


new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
