<template>
  <div v-if="session">
    <h1>{{ session.name }}</h1>
    <h2>{{ session.game_template.name }}</h2>
  </div>

  <div v-if="sheets.length">
    <div v-for="sheet in sheets" :key="sheet.id">
      <p>{{ sheet.name }}</p>
    </div>
  </div>
  <div v-else>
    <h4>No character sheets for this session :-(</h4>
  </div>


  <div v-if="error" class="text-warning">
    {{ error }}
  </div>
</template>

<script>
import {useRoute} from "vue-router";
import {getGameSessionById} from "@/composables/game_sessions";
import {getCharacterSheetsForSession} from "@/composables/character_sheet";

export default {
  name: "GameMasterView",
  setup() {
    const route = useRoute()
    const {session, error, loadGameSession} = getGameSessionById()
    const {sheets, errorSheets, loadCharacterSheets} = getCharacterSheetsForSession()

    let sessionId = route.params.id

    loadGameSession(sessionId)
    loadCharacterSheets(sessionId)

    return {
      session, error,
      sheets, errorSheets
    }
  }
}
</script>

<style scoped>

</style>