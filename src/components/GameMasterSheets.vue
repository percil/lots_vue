<template>
  <h1>[{{ gameSession.game_template.name }}] :: {{ gameSession.name }}</h1>
</template>

<script>
export default {
  name: "GameMasterSheets",
  props: ['gameSession'],
  setup(props) {

    return {
      props
    }
  }
}
</script>

<style scoped>

</style>