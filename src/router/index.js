import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GameSessionView from "@/views/GameSessionView";
import CharacterSheetView from "@/views/CharacterSheetView";
import GameMasterView from "@/views/GameMasterView";


const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/sessions',
        name: 'gameSessions',
        component: GameSessionView
    },
    {
        path: '/sessions/:id',
        name: 'gameMasterSession',
        component: GameMasterView
    },
    {
        path: '/sheets/:slug',
        name: 'characterSheet',
        component: CharacterSheetView
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
