import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Todolist from '@/components/Todolist'
import RoleMenu from '@/components/RoleMenu'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Todolist',
        component: Todolist
    }, {
        path: '/todo',
        name: 'todolist',
        component: Todolist
    }, {
        path: '/rolemenu',
        name: 'rolemenu',
        component: RoleMenu
    }]
})