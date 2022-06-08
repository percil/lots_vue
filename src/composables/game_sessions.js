import {ref} from "vue";

export const getGameSessions = () => {
    const gameSessions = ref([])
    const error = ref(null)

    const loadGameSessions = async () => {
        try {
            let data = await fetch('http://localhost:8000/api/sessions')

            if (!data.ok) {
                throw Error('No data available')
            }

            gameSessions.value = await data.json()
        } catch (e) {
            error.value = e.message
            console.log(`Error while loading game sessions: ${error.value}`)
        }
    }

    return {
        gameSessions, error, loadGameSessions
    }
}