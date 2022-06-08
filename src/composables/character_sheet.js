import {ref} from "vue";
import authHeader from "@/services/auth-headers";

const API_SHEET = 'http://localhost:8000/sheets/'

export const getCharacterSheet = () => {
    const characterSheet = ref(null)
    const error = ref(null)

    const loadCharacterSheet = async (slug) => {
        try {
            let data = await fetch(API_SHEET + slug, {
                headers: authHeader()
            })

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