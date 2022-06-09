<template>

  <div v-if="session">
    <h1>{{ session.name }} [{{ session.game_template.name }}]</h1>
    <div v-if="session.game_template.code == 'cthulhu'">
      <SheetsCthulhu :sessionId="session.id"/>
    </div>
    <div v-else-if="session.game_template.code == 'whitebox'">
      <SheetsWhitebox :sessionId="session.id"/>
    </div>
    <div v-else-if="session.game_template.code == 'freaks-squeele'">
      <SheetsFreaksSqueele :sessionId="session.id"/>
    </div>
  </div>
  <div v-else>
    <h4>No character sheets for this session :-(</h4>
  </div>


  <div v-if="error" class="text-warning">
    {{ error }}
  </div>
</template>

<script>
import {useRoute} from "vue-router";
import {getGameSessionById} from "@/composables/game_sessions";
import SheetsCthulhu from "@/components/sheets/master/SheetsCthulhu";
import SheetsWhitebox from "@/components/sheets/master/SheetsWhitebox";
import SheetsFreaksSqueele from "@/components/sheets/master/SheetsFreaksSqueele";

export default {
  name: "GameMasterView",
  components: {SheetsFreaksSqueele, SheetsWhitebox, SheetsCthulhu},
  setup() {
    const route = useRoute()
    const {session, error, loadGameSession} = getGameSessionById()

    let sessionId = route.params.id

    loadGameSession(sessionId)

    console.log(session)

    return {
      session, error
    }
  }
}
</script>

<style scoped>

</style>