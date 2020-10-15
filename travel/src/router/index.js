import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'

// const originalPush = VueRouter.prototype.push
//
// VueRouter.prototype.push = function push(location) {
//     return originalPush.call(this, location).catch(err => err)
// }

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/city',
        name: 'City',
        component: City
    },
    {
        path: '/detail/:id',
        name: 'Detail',
        component: Detail
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,

    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
})

export default router
