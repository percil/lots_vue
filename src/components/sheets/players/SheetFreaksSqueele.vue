<template>
  <h1>Freaks'Squeele</h1>
  <p>{{ characterSheet.name }}</p>
</template>

<script>
export default {
  name: "SheetFreaksSqueele",
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