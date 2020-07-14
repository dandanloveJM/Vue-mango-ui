import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Button from '@/components/Button.vue';
import ButtonGroup from '@/components/ButtonGroup.vue';

Vue.config.productionTip = false
Vue.component('m-button', Button)
Vue.component('m-button-group', ButtonGroup)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
