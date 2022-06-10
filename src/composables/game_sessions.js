import {ref} from "vue";

const API_URL = process.env.VUE_APP_REST_API_URL

export const getGameSessions = () => {
    const gameSessions = ref([])
    const error = ref(null)

    const loadGameSessions = async () => {
        try {
            let data = await fetch(`${API_URL}/sessions`)

            if (!data.ok) {
                throw Error('No data available')
            }

            gameSessions.value = await data.json()
        } catch (e) {
            error.value = e.message
        }
    }

    return {
        gameSessions, error, loadGameSessions
    }
}

export const getGameSessionById = () => {
    const session = ref(null)
    const error = ref(null)

    const loadGameSession = async (id) => {
        try {
            let data = await fetch(`${API_URL}/sessions/${id}`)

            if (!data.ok) {
                throw Error('No data available')
            }

            session.value = await data.json()
        } catch (e) {
            error.value = e.message
        }
    }

    return {
        session, error, loadGameSession
    }
}