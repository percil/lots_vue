import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GameTemplateView from "@/views/GameTemplateView";
import GameSessionView from "@/views/GameSessionView";

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/templates',
        name: 'gameTemplates',
        component: GameTemplateView
    },
    {
        path: '/sessions',
        name: 'gameSessions',
        component: GameSessionView
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
