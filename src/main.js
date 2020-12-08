import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'
import VueNumericInput from 'vue-numeric-input';
export const EventBus = new Vue();

Vue.config.productionTip = false
//cria variavel global
// Vue.prototype.$urlAPI = 'http://localhost:5000'
Vue.prototype.$urlAPI = 'https://robertoopinho.pythonanywhere.com'
Vue.use(VueNumericInput)
Vue.use(Vuesax, {
  // options here
  colors: {
    dark: '#000'
  }
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
