import { createRouter, createWebHistory } from 'vue-router'
import CityList from '../views/CityList.vue'
import Info from '../views/Info.vue'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'

const routerHistory = createWebHistory()

const routes = [
    {
        path: '/cities',
        name: 'CityList',
        component: CityList
    },
    {
        path: '/info/:city',
        name: 'Info',
        component: Info
    },
    {
        path: '/signin',
        name: 'SignIn',
        component: SignIn
    },
    {
        path: '/signup',
        name: 'Signp',
        component: SignUp
    }
]

const router = createRouter({
	history: createWebHistory(),
	routes
})


export default router