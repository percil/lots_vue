<template>
  <div>
    <h2>Game templates</h2>
    <div v-if="error" class="alert-danger">
      {{ error }}
    </div>
    <div v-if="gameTemplates.length" class="row">
      <GameTemplateList :game-templates="gameTemplates"/>
    </div>
    <div v-else class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>

  </div>
</template>

<script>
import GameTemplateList from "@/components/GameTemplateList";
import {getGameTemplates} from "@/composables/game_templates";

export default {
  name: "GameTemplateView",
  components: {GameTemplateList},
  setup() {
    const {gameTemplates, error, loadGameTemplates} = getGameTemplates()

    loadGameTemplates()

    return {gameTemplates, error}
  }
}
</script>

<style scoped>

</style>