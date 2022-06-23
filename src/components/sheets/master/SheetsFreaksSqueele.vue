<template>
  <div v-if="sheets.length">
    <table class="table table-striped">
      <thead>
      <tr>
        <th></th>
        <th>Nom</th>
        <th>PEX</th>
        <th>A.Ori</th>
        <th>A.Mil</th>
        <th>A.Pou</th>
        <th>A.Tr</th>
        <th>Ath</th>
        <th>Art</th>
        <th>Com</th>
        <th>Inv</th>
        <th>Eru</th>
        <th>Com</th>
        <th>Pouvoir</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="sheet in sheets" :key="sheet.id">
        <td>
          <a class="btn btn-dark" target="_blank" :href="'/sheets/'+sheet.slug">
            view
          </a>
        </td>
        <td> {{ sheet.name }} [{{ sheet.content.prénom }}]</td>
        <td>{{ sheet.content.pex }}</td>
        <td>[{{ sheet.content.aorigine_mod }}] {{ sheet.content.aorigine }}</td>
        <td>[{{ sheet.content.amilieu_mod }}] {{ sheet.content.amilieu }}</td>
        <td>[{{ sheet.content.apouvoir_mod }}] {{ sheet.content.apouvoir }}</td>
        <td>[{{ sheet.content.atrouble_mod }}] {{ sheet.content.atrouble }}</td>
        <td>{{ sheet.content.bathlétisme_mod }}</td>
        <td>{{ sheet.content.bartisanat_mod }}</td>
        <td>{{ sheet.content.bcombat_mod }}</td>
        <td>{{ sheet.content.binvestigation_mod }}</td>
        <td>{{ sheet.content.bérudition_mod }}</td>
        <td>{{ sheet.content.bcommunication_mod }}</td>
        <td>{{ sheet.content.cpou1 }}</td>
      </tr>
      </tbody>
    </table>
  </div>
  <div v-else>
    <h4>No sheets Sherlock...</h4>
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