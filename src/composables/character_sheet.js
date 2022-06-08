import {ref} from "vue";


const API_SHEET = 'http://localhost:8000/api/sheets'

export const getCharacterSheet = () => {
    const characterSheet = ref(null)
    const error = ref(null)

    const loadCharacterSheet = async (slug) => {
        try {
            let data = await fetch(API_SHEET + '/' + slug)

            if (!data.ok) {
                throw Error('No data available')
            }

            characterSheet.value = await data.json()
        } catch (e) {
            error.value = e.message
        }

    }

    return {
        characterSheet, error, loadCharacterSheet
    }


}

export const getCharacterSheetsForSession = () => {
    const sheets = ref([])
    const error = ref(null)

    const loadCharacterSheets = async (sessionId) => {
        try {
            let data = await fetch(API_SHEET + '?game_sessions=' + sessionId)

            if (!data.ok) {
                throw Error('No data available')
            }

            sheets.value = await data.json()
        } catch (e) {
            error.value = e.message
        }
    }

    return {sheets, error, loadCharacterSheets}
}