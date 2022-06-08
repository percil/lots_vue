<template>
  <h1>GM view :: Cthulhu</h1>
  <div v-for="sheet in sheets" :key="sheet.id">
    <p>{{ sheet.name }}</p>
  </div>
</template>

<script>
export default {
  name: "SheetsCthulhu",
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