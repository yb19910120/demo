import Vue from 'vue'
import Router from 'vue-router'
import Custmers from '../components/Custmers'
import About from '../components/About'
import AddUser from '../components/AddUser'
import DeleteUser from '../components/DeleteUser'
import Edit from '../components/Edit'
Vue.use(Router)

export default new Router({
  mode:'history',
   base:__dirname,
  routes: [
    {
      path: '/',
      component: Custmers
    },
    {
      path: '/About',
      component: About
    },
    {
      path: '/AddUser',
      component: AddUser
    },
    {
      path: '/user/:id',
      component: DeleteUser
    },
    {
      path: '/edit/:id',
      component: Edit
    }
  ]
})
