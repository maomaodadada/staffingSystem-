import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button, Container } from 'element-ui'

Vue.config.productionTip = false

Vue.use(Button)
Vue.use(Container)
router.beforeEach((to, from, next) => {
  console.log('to', to)
  console.log('from', from)
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
