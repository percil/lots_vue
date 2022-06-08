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
            let data = await fetch(`http://localhost:8000/api/sessions/${id}`)

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