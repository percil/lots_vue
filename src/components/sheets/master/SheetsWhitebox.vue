<template>
  <div v-if="sheets.length">
    <table>
      <thead>
      <tr>
        <th>Name</th>
        <th>Race</th>
        <th>Class</th>
        <th>STR</th>
        <th>DEX</th>
        <th>CON</th>
        <th>INT</th>
        <th>WIS</th>
        <th>CHA</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="sheet in sheets" :key="sheet.id">
        <td>{{ sheet.name }}</td>
        <td>{{ sheet.content.race }}</td>
        <td>{{ sheet.content.class }}</td>
        <td>{{ sheet.content.str }}</td>
        <td>{{ sheet.content.dex }}</td>
        <td>{{ sheet.content.con }}</td>
        <td>{{ sheet.content.int }}</td>
        <td>{{ sheet.content.wis }}</td>
        <td>{{ sheet.content.cha }}</td>
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
  name: "SheetsWhitebox",
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