<template>
  <div class="col-md-6">
    <div class="row">
      <div v-if="gameTemplates.length" class="col-md-4">

        <select class="form-control" v-model="filter">
          <option value="" selected>Template filter</option>
          <option v-for="gameTemplate in gameTemplates" :value="gameTemplate.id" :key="gameTemplate.id">
            {{ gameTemplate.name }}
          </option>
        </select>

      </div>
    </div>
    <div class="row mt-lg-2">
      <div v-for="session in computedSessions" :key="session.id" class="col">
        <div class="card mb-lg-1" style="width: 12rem;">

          <div class="card-body">
            <h5 class="card-title">{{ session.name }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{ session.game_template.name }}</h6>
            <p class="card-text">
              {{ session.sheets_count }} sheet<span v-if="session.sheets_count > 1">s</span>.
            </p>
            <router-link :to="{name: 'gameMasterSession', params: {id: session.id}}" class="btn btn-primary">
              Open
            </router-link>
          </div>
        </div>
      </div>
    </div>

  </div>


</template>

<script>

import {computed, ref} from "vue";

export default {
  name: "GameSessions",
  props: ['gameSessions', 'gameTemplates'],
  setup(props) {

    const filter = ref('')

    const computedSessions = computed(() => {
      let currentFilter = filter.value
      if (typeof currentFilter !== 'undefined' && currentFilter !== '') {
        return props['gameSessions'].filter((session) => session.game_template.id === currentFilter)
      }
      return props['gameSessions']
    })


    return {
      computedSessions, props, filter
    }
  }
}
</script>

<style scoped>

</style>