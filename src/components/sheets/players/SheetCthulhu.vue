<template>
  <h1>Cthulhu</h1>
  <p>{{ characterSheet.name }}</p>
</template>

<script>
export default {
  name: "SheetCthulhu",
  props: ['characterSheet'],
  setup(props) {
    return {
      props
    }
  }
}
</script>

<style scoped>

</style>