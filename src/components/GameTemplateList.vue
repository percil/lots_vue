<template>
  <div class="col">
    <div v-for="template in gameTemplates" :key="template.id" class="card" style="width: 18rem; height: 30rem;">
      <div class="card-body">
        <h5 class="card-title">{{ template.name }}</h5>
        <p class="card-text">...</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "GameTemplates",
  props: ['gameTemplates'],
  setup() {

  }
}
</script>

<style scoped>

</style>