import {ref} from "vue";


const API_SHEET = 'http://localhost:8000/api/sheets'

export const generateDefaultValue = (expectedType) => {
    switch (expectedType) {
        case 'number':
            return 10
        case 'input':
            return 'sample'
        case 'check':
            return false
        case 'mod':
            return 0
        default:
            return null
    }
}

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

export const updateCharacterSheet = (sheet) => {
    fetch(API_SHEET + '/' + sheet.slug, {
            method: 'PUT',
            body: JSON.stringify(sheet),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        }
    )
        .then(() => console.log('Updated.'))
        .catch((e) => console.error(e))

}