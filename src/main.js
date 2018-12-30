import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
/* 在后面引入 */
import '../src/assets/style/comment.css'


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
