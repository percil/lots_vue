import {ref} from "vue";

const API_URL = process.env.VUE_APP_REST_API_URL

export const getGameTemplates = () => {
    const gameTemplates = ref([])
    const error = ref(null)

    const loadGameTemplates = async () => {
        try {
            let data = await fetch(`${API_URL}/templates`)

            if (!data.ok) {
                throw Error('No data available')
            }

            gameTemplates.value = await data.json()
        } catch (e) {
            error.value = e.message
            console.log(`Error while loading game templates: ${error.value}`)
        }
    }

    return {
        gameTemplates, error, loadGameTemplates
    }
}