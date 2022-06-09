<template>
  <div id="map">
    <div class="m-1">
      <img :src="require('@/assets/sheets/whitebox/wh_s1.png')">
      <div v-if="sheet">
        <input id="name" type="input" v-model="sheet.name" v-on:change="handleUpdate" class="extra-long"
               style="top: 45px; left: 140px; position: absolute">
        <input id="str" type="number" v-model="sheet.content.str" v-on:change="handleUpdate" class="characteristic"
               style="top: 120px; left: 125px; position: absolute">
        <input id="strb" type="text" v-model="sheet.content.strb" class="modifier"
               style="top: 120px; left: 175px; position: absolute">
        <input id="int" type="number" v-model="sheet.content.int" class="characteristic"
               style="top: 180px; left: 125px; position: absolute">
        <input id="intb" type="text" v-model="sheet.content.intb" class="modifier"
               style="top: 180px; left: 175px; position: absolute">
        <input id="wis" type="number" v-model="sheet.content.wis" class="characteristic"
               style="top: 250px; left: 125px; position: absolute">
        <input id="wisb" type="text" v-model="sheet.content.wisb" class="modifier"
               style="top: 250px; left: 175px; position: absolute">
        <input id="dex" type="number" v-model="sheet.content.dex" class="characteristic"
               style="top: 315px; left: 125px; position: absolute">
        <input id="dexb" type="text" v-model="sheet.content.dexb" class="modifier"
               style="top: 315px; left: 175px; position: absolute">
        <input id="con" type="number" v-model="sheet.content.con" class="characteristic"
               style="top: 380px; left: 125px; position: absolute">
        <input id="conb" type="text" v-model="sheet.content.conb" class="modifier"
               style="top: 380px; left: 175px; position: absolute">
        <input id="cha" type="number" v-model="sheet.content.cha" class="characteristic"
               style="top: 445px; left: 125px; position: absolute">
        <input id="chab" type="text" v-model="sheet.content.chab" class="modifier"
               style="top: 445px; left: 175px; position: absolute">
        <input id="hp" type="number" v-model="sheet.content.hp" class="characteristic"
               style="top: 115px; left: 255px; position: absolute">
        <input id="ac" type="number" v-model="sheet.content.ac" class="characteristic"
               style="top: 200px; left: 255px; position: absolute">
        <input id="bhb" type="number" v-model="sheet.content.bhb" class="characteristic"
               style="top: 275px; left: 255px; position: absolute">
        <input id="sv" type="number" v-model="sheet.content.sv" class="characteristic"
               style="top: 350px; left: 255px; position: absolute">
        <input id="mv" type="number" v-model="sheet.content.mv" class="characteristic"
               style="top: 430px; left: 255px; position: absolute">
        <input id="class" type="input" v-model="sheet.content.class"
               style="top: 95px; left: 420px; position: absolute">
        <input id="lvl" type="number" v-model="sheet.content.lvl"
               style="top: 155px; left: 420px; position: absolute">
        <input id="xp" type="input" v-model="sheet.content.xp"
               style="top: 155px; left: 600px; position: absolute">
        <input id="race" type="input" v-model="sheet.content.race"
               style="top: 95px; left: 615px; position: absolute">
        <input id="wpn1" type="input" v-model="sheet.content.wpn1" class="long"
               style="top: 215px; left: 425px; position: absolute">
        <input id="wpn2" type="input" v-model="sheet.content.wpn2" class="long"
               style="top: 260px; left: 425px; position: absolute">
        <input id="armor" type="input" v-model="sheet.content.armor" class="long"
               style="top: 310px; left: 470px; position: absolute">
        <input id="spell" type="input" v-model="sheet.content.spell" class="long"
               style="top: 360px; left: 480px; position: absolute">
      </div>
    </div>
    <div class="m-1">
      <img :src="require('@/assets/sheets/whitebox/wh_s2.png')">
    </div>
  </div>
</template>

<script>
import {useRoute} from "vue-router";
import {getCharacterSheet, updateCharacterSheet} from "@/composables/character_sheet";
import {ref} from "vue";

export default {
  name: "SheetWhitebox",

  setup() {
    const route = useRoute()

    let sheetSlug = route.params.slug

    const {characterSheet, error, loadCharacterSheet} = getCharacterSheet()

    loadCharacterSheet(sheetSlug)

    let sheet = ref(characterSheet)

    const handleUpdate = () => {
      updateCharacterSheet(characterSheet.value)
    }

    return {
      sheet, error, handleUpdate
    }
  }
}
</script>

<style scoped>
#map {
  position: relative;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 782px
}

#map input {
  border: none;
  background: none;
  width: 6rem;
  font-family: "Permanent Marker";
  font-size: 1.5em;
}

.characteristic {
  width: 3rem !important;
}

.modifier {
  width: 2.5rem !important;
}

.long {
  width: 15rem !important;
}

.extra-long {
  width: 35rem !important;
}
</style>