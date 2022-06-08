<template>
  <h1>Whitebox</h1>
  <p>{{ characterSheet.name }}</p>
</template>

<script>
export default {
  name: "SheetWhitebox",
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