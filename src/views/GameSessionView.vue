<template>
  <div>
    <h2>Sessions</h2>
    <div v-if="error" class="alert-danger">
      {{ error }}
    </div>
    <div v-if="gameSessions.length" class="row">
      <GameSessionList :game-sessions="gameSessions" :game-templates="gameTemplates"/>
    </div>
    <div v-else class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>

  </div>
</template>

<script>
import GameSessionList from "@/components/GameSessionList";
import {getGameSessions} from "@/composables/game_sessions";
import {getGameTemplates} from "@/composables/game_templates";

export default {
  name: "GameSessionView",
  components: {GameSessionList},
  setup() {
    const {gameSessions, error, loadGameSessions} = getGameSessions()
    const {gameTemplates, templateError, loadGameTemplates} = getGameTemplates()

    loadGameSessions()
    loadGameTemplates()

    return {
      gameSessions, error,
      gameTemplates, templateError
    }
  }
}
</script>

<style scoped>

</style>