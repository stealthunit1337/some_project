import {createRouter, createWebHistory} from "vue-router";
import MainView from '@/views/MainView'
import HeaderView from '@/views/HeaderView'
import FooterView from '@/views/FooterView'

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
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;