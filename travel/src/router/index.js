import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '@/pages/home/Home'
// import City from '@/pages/city/City'
// import Detail from '@/pages/detail/Detail'
Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/pages/home/Home')
    },
    {
        path: '/city',
        name: 'City',
        component: () => import('@/pages/city/City')
    },
    {
        path: '/detail/:id',
        name: 'Detail',
        component: () => import('@/pages/detail/Detail')
    },
]

const router = new VueRouter({
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
