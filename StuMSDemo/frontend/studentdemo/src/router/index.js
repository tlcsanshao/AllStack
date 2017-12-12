import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import MainFrame from '@/components/mainframe'
import Add from "@/components/add"
import Edit from "@/components/edit"
import Query from "@/components/query"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },{
    	path:'/main',
    	name:'MainFrame',
    	component:MainFrame
    },{
      path:'/edit',
      name:'Edit',
      component:Edit
    },{
      path:'/add',
      name:'Add',
      component:Add
    },{
      path:'/query',
      name:'Query',
      component:Query
    }
  ]
})
