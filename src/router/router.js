import {createRouter, createWebHistory} from "vue-router";
import MainView from '@/views/MainView'
import HeaderView from '@/views/HeaderView'
import FooterView from '@/views/FooterView'
import ZakonBiz from '@/views/ZakonBiz'

const routes = [
    {
        path: '/',
        component: MainView
    },
    {
        path: '/header-view',
        component: HeaderView
    },
    {
        path: '/footer-view',
        component: FooterView
    },
    {
        path: '/zakon-biz',
        component: ZakonBiz
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;