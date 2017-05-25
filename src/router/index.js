import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import App from '@/components/App'
import Works from '@/components/Works'
import Liveme from '@/components/Liveme'
import Swipe from '@/components/swipe'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'works',
      component: Works
    },
    {
      path: '/hello/:name',
      name: 'Hello',
      component: Hello
    },
    {
      path:'/shopping',
      name:'shopping',
      component:App
    },
    {
      path:'/liveme',
      name:'liveme',
      component:Liveme
    },
    {
      path:'/swipe',
      name:'swpie',
      component:Swipe
    }
  ]
})
