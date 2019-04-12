import Vue from 'vue'
import Router from 'vue-router'
import UsersView from './views/UsersView'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'users-view',
      component: UsersView
    }
  ]
})
