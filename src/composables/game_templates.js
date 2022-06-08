import {ref} from "vue";

export const getGameTemplates = () => {
    const gameTemplates = ref([])
    const error = ref(null)

    const loadGameTemplates = async () => {
        try {
            let data = await fetch('http://localhost:8000/api/templates')

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