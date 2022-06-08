<template>
  <div>
    <h2>Game sessions</h2>
    <div v-if="error" class="alert-danger">
      {{ error }}
    </div>
    <div v-if="gameSessions.length" class="row">
      <GameSessionList :game-sessions="gameSessions"/>
    </div>
    <div v-else class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>

  </div>
</template>

<script>
import GameSessionList from "@/components/GameSessionList";
import {getGameSessions} from "@/composables/game_sessions";

export default {
  name: "GameSessionView",
  components: {GameSessionList},
  setup() {
    const {gameSessions, error, loadGameSessions} = getGameSessions()

    loadGameSessions()

    return {gameSessions, error}
  }
}
</script>

<style scoped>

</style>