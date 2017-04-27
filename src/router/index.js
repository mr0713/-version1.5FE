import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      component: resolve => require(['../components/index/home.vue'], resolve),
      children: [
        {
          path: '/',
          component: resolve => require(['../components/index/index.vue'], resolve)
        },
        {
          path: '/case',
          component: resolve => require(['../components/index/case.vue'], resolve)
        },
        {
          path: '/contact',
          component: resolve => require(['../components/index/contact.vue'], resolve)
        },
        {
          path: '/currse',
          component: resolve => require(['../components/index/currse.vue'], resolve)
        },
        {
          path: '/servers',
          component: resolve => require(['../components/index/servers.vue'], resolve)
        }
      ]
    }
  ]
})
