<template>
  <div v-if="sheets.length">
    <table class="table table-striped">
      <thead>
      <tr>
        <th></th>
        <th>Name</th>

      </tr>
      </thead>
      <tbody>
      <tr v-for="sheet in sheets" :key="sheet.id">
        <td>
          <a class="btn btn-dark" target="_blank" :href="'/sheets/'+sheet.slug">
            view
          </a>
        </td>
        <td> {{ sheet.name }}</td>
        
      </tr>
      </tbody>
    </table>
  </div>
  <div v-else>
    <h4>No sheets here (yet)...</h4>
  </div>

</template>

<script>
import {getGameSessionById} from "@/composables/game_sessions";
import {getCharacterSheetsForSession} from "@/composables/character_sheet";

export default {
  name: "SheetsFreaksSqueele",
  props: ['sessionId'],
  setup(props) {
    const {session, error, loadGameSession} = getGameSessionById()
    const {sheets, sheetsError, loadCharacterSheets} = getCharacterSheetsForSession()

    loadGameSession(props.sessionId)
    loadCharacterSheets(props.sessionId)

    return {
      session, error,
      sheets, sheetsError
    }
  }

}
</script>

<style scoped>

</style>