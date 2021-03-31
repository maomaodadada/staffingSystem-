import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/scss/reset.scss'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Http from './api/index'
Vue.use(Http)
Vue.config.productionTip = false

Vue.use(ElementUI)
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
