<template>
  <div class="col">
    <div v-for="session in gameSessions" :key="session.id" class="card" style="width: 18rem; height: 30rem;">
      <div class="card-body">
        <h5 class="card-title">{{ session.name }}</h5>
        <p class="card-text">{{ session.game_template.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "GameSessions",
  props: ['gameSessions'],
  setup() {

  }
}
</script>

<style scoped>

</style>