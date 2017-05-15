// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/*import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>'
})
*/


/*import 'babel-polyfill'
import Vue from 'vue'
import router from './router'
import App from './components/App.vue'
import store from './store'
import { currency } from './currency'

Vue.filter('currency', currency)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})*/


import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import Shopping from './components/App.vue'
import Works from './components/App.vue'
import store from './store'
import { currency } from './currency'

import 'bootstrap/dist/css/bootstrap.css'

Vue.filter('currency', currency)

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App ,Shopping,Works }
})
