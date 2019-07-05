import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/prop',
      name: 'prop',
      component: resolve => require(['../page/prop/index.vue'], resolve)
    },
    {
      path: '/mixin',
      name: 'mixin',
      component: resolve => require(['../page/mixin/index.vue'], resolve)
    },
    {
      path: '/css',
      name: 'css',
      component: resolve => require(['../page/css/index.vue'], resolve)
    }

  ]
})
