<template>
  <h1>GM view :: Whitebox</h1>
  <div v-for="sheet in sheets" :key="sheet.id">
    <p>{{ sheet.name }}</p>
  </div>
</template>

<script>
export default {
  name: "SheetsWhitebox",
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