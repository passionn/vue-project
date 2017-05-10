import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import App from '@/components/App'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path:'/shopping',
      name:'shopping',
      component:App
    }
  ]
})
