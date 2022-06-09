<template>
  <div v-if="characterSheet">
    <div v-if="characterSheet.game_template.code == 'whitebox'">
      <SheetWhitebox :slug="characterSheet.slug"/>
    </div>
    <div v-else-if="characterSheet.game_template.code == 'cthulhu'">
      <SheetCthulhu :character-sheet="characterSheet"/>
    </div>
    <div v-else-if="characterSheet.game_template.code == 'freaks-squeele'">
      <SheetFreaksSqueele :character-sheet="characterSheet"/>
    </div>
    <div v-else>
      <h3>The sheet template is not supported yet.</h3>
    </div>

  </div>
  <div v-if="error">
    {{ error }}
  </div>
</template>

<script>
import {useRoute} from "vue-router";
import {getCharacterSheet} from "@/composables/character_sheet";
import SheetCthulhu from "@/components/sheets/players/SheetCthulhu";
import SheetWhitebox from "@/components/sheets/players/SheetWhitebox";
import SheetFreaksSqueele from "@/components/sheets/players/SheetFreaksSqueele";

export default {
  name: "CharacterSheetView",
  components: {SheetCthulhu, SheetWhitebox, SheetFreaksSqueele},

  setup() {
    const route = useRoute()

    let sheetSlug = route.params.slug
    console.log(`using slug: ${sheetSlug}`)

    const {characterSheet, error, loadCharacterSheet} = getCharacterSheet()

    loadCharacterSheet(sheetSlug)

    return {
      characterSheet, error
    }
  }
}
</script>

<style scoped>

</style>