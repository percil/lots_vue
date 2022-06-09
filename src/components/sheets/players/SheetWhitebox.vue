<template>
  <div id="map">
    <div class="m-1">
      <img :src="require('@/assets/sheets/whitebox/wh_s1.png')">
      <div v-if="sheet">
        <input id="name" type="input" v-model="sheet.name" v-on:change="handleUpdate" class="extra-long"
               style="top: 45px; left: 140px; position: absolute">
        <input id="str" type="number" v-model="sheet.content.str" v-on:change="handleUpdate" class="characteristic"
               style="top: 120px; left: 125px; position: absolute">
        <input id="strb" type="text" v-model="sheet.content.strb" v-on:change="handleUpdate" class="modifier"
               style="top: 120px; left: 175px; position: absolute">
        <input id="int" type="number" v-model="sheet.content.int" v-on:change="handleUpdate" class="characteristic"
               style="top: 180px; left: 125px; position: absolute">
        <input id="intb" type="text" v-model="sheet.content.intb" v-on:change="handleUpdate" class="modifier"
               style="top: 180px; left: 175px; position: absolute">
        <input id="wis" type="number" v-model="sheet.content.wis" v-on:change="handleUpdate" class="characteristic"
               style="top: 250px; left: 125px; position: absolute">
        <input id="wisb" type="text" v-model="sheet.content.wisb" v-on:change="handleUpdate" class="modifier"
               style="top: 250px; left: 175px; position: absolute">
        <input id="dex" type="number" v-model="sheet.content.dex" v-on:change="handleUpdate" class="characteristic"
               style="top: 315px; left: 125px; position: absolute">
        <input id="dexb" type="text" v-model="sheet.content.dexb" v-on:change="handleUpdate" class="modifier"
               style="top: 315px; left: 175px; position: absolute">
        <input id="con" type="number" v-model="sheet.content.con" v-on:change="handleUpdate" class="characteristic"
               style="top: 380px; left: 125px; position: absolute">
        <input id="conb" type="text" v-model="sheet.content.conb" v-on:change="handleUpdate" class="modifier"
               style="top: 380px; left: 175px; position: absolute">
        <input id="cha" type="number" v-model="sheet.content.cha" v-on:change="handleUpdate" class="characteristic"
               style="top: 445px; left: 125px; position: absolute">
        <input id="chab" type="text" v-model="sheet.content.chab" v-on:change="handleUpdate" class="modifier"
               style="top: 445px; left: 175px; position: absolute">
        <input id="hp" type="number" v-model="sheet.content.hp" v-on:change="handleUpdate" class="characteristic"
               style="top: 115px; left: 255px; position: absolute">
        <input id="ac" type="number" v-model="sheet.content.ac" v-on:change="handleUpdate" class="characteristic"
               style="top: 200px; left: 255px; position: absolute">
        <input id="bhb" type="number" v-model="sheet.content.bhb" v-on:change="handleUpdate" class="characteristic"
               style="top: 275px; left: 255px; position: absolute">
        <input id="sv" type="number" v-model="sheet.content.sv" v-on:change="handleUpdate" class="characteristic"
               style="top: 350px; left: 255px; position: absolute">
        <input id="mv" type="number" v-model="sheet.content.mv" v-on:change="handleUpdate" class="characteristic"
               style="top: 430px; left: 255px; position: absolute">
        <input id="class" type="input" v-model="sheet.content.class" v-on:change="handleUpdate"
               style="top: 95px; left: 420px; position: absolute">
        <input id="lvl" type="number" v-model="sheet.content.lvl" v-on:change="handleUpdate"
               style="top: 155px; left: 420px; position: absolute">
        <input id="xp" type="input" v-model="sheet.content.xp" v-on:change="handleUpdate"
               style="top: 155px; left: 600px; position: absolute">
        <input id="race" type="input" v-model="sheet.content.race" v-on:change="handleUpdate"
               style="top: 95px; left: 615px; position: absolute">
        <input id="wpn1" type="input" v-model="sheet.content.wpn1" v-on:change="handleUpdate" class="long"
               style="top: 215px; left: 425px; position: absolute">
        <input id="wpn2" type="input" v-model="sheet.content.wpn2" v-on:change="handleUpdate" class="long"
               style="top: 260px; left: 425px; position: absolute">
        <input id="armor" type="input" v-model="sheet.content.armor" v-on:change="handleUpdate" class="long"
               style="top: 310px; left: 470px; position: absolute">
        <input id="spell" type="input" v-model="sheet.content.spell" v-on:change="handleUpdate" class="long"
               style="top: 360px; left: 480px; position: absolute">
      </div>
    </div>
    <div class="m-1">
      <img :src="require('@/assets/sheets/whitebox/wh_s2.png')">
      <textarea id="gear" v-model="sheet.content.gear" v-on:change="handleUpdate"
                style="top: 585px; left: 50px; position: absolute"></textarea>
      <textarea id="abilities" v-model="sheet.content.abilities" v-on:change="handleUpdate"
                style="top: 825px; left: 50px; position: absolute"></textarea>
      <input id="gp" type="text" v-model="sheet.content.gp" v-on:change="handleUpdate"
             style="top: 575px; left: 630px; position: absolute">
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

#map textarea {
  border: none;
  background: none;
  width: 30rem;
  height: 11rem;
  font-family: "Permanent Marker";
  font-size: 1em;
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