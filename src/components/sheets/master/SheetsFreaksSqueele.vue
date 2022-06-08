<template>
  <h1>GM view :: Freaks'Squeele</h1>
  <div v-for="sheet in sheets" :key="sheet.id">
    <p>{{ sheet.name }}</p>
  </div>
</template>

<script>
export default {
  name: "SheetsFreaksSqueele",
  props: ['sheets'],
  setup(props) {
    return {
      props
    }
  }
}
</script>

<style scoped>

</style>