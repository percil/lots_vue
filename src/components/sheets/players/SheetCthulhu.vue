<template>
  <h1>Cthulhu</h1>
  <p>{{ characterSheet.name }}</p>
</template>

<script>
import {getCharacterSheet, updateCharacterSheet} from "@/composables/character_sheet";
import {ref} from "vue";

export default {
  name: "SheetCthulhu",
  props: ['slug'],
  setup(props) {
    const {characterSheet, error, loadCharacterSheet} = getCharacterSheet()

    loadCharacterSheet(props.slug)

    let sheet = ref(characterSheet)

    const handleUpdate = () => {
      updateCharacterSheet(characterSheet.value)
    }

    return {
      sheet, error, handleUpdate
    }
  }
}
</script>

<style scoped>

</style>