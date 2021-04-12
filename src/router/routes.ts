import { RouteRecordRaw } from "vue-router";
import Tabs from "@/views/Tabs.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'login',
        component: () => import('@/views/login/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/register/Register.vue')
    },
    {
        path: '/tabs/',
        name: 'dashboard',
        component: Tabs,
        redirect: '/tabs/home',
        children: [
            {
                path: '',
                redirect: '/tabs/home'
            },
            {
                path: 'home',
                component: () => import('@/views/home/Home.vue')
            },
            {
                path: 'generate-qr',
                name: 'QRCode',
                component: () => import('@/views/createQrCode/createQrCode.vue')
            },
            {
                path: 'transaction',
                name: 'transaction',
                component: () => import('@/views/transaction/Transaction.vue')
            },
            {
                path: 'tab3',
                component: () => import('@/views/profile/Profile.vue')
            }
        ]
    }
]

export default routes
