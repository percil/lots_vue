<template>
  <h1>Freaks'Squeele</h1>
  <p>{{ sheet.name }}</p>

  <div id="map">
    <div class="m-1">
      <img :src="require('@/assets/sheets/freaks_squeele/frsq_s1.png')">
      <input id="entrée" type="text" v-model="sheet.content['entrée']"
             style="top: 272px; left: 603px; position: absolute">
      <input id="nom" type="text" v-model="sheet.content['nom']" style="top: 330px; left: 570px; position: absolute">
      <input id="prénom" type="text" v-model="sheet.content['prénom']"
             style="top: 367px; left: 570px; position: absolute">
      <input id="alias" type="" v-model="sheet.name"
             style="top: 407px; left: 570px; position: absolute">
      <textarea id="team" v-model="sheet.content['team']" style="top: 65px; left: 566px; position: absolute"></textarea>
      <textarea id="look" v-model="sheet.content['look']" style="top: 226px; left: 58px; position: absolute"></textarea>
      <textarea id="équipement" v-model="sheet.content['équipement']"
                style="top: 416px; left: 96px; position: absolute"></textarea>
      <input id="a" type="checkbox" v-model="sheet.content['a']" style="top: 464px; left: 445px; position: absolute">
      <input id="b" type="checkbox" v-model="sheet.content['b']" style="top: 480px; left: 443px; position: absolute">
      <input id="c" type="checkbox" v-model="sheet.content['c']" style="top: 494px; left: 441px; position: absolute">
      <input id="validé" type="checkbox" v-model="sheet.content['validé']"
             style="top: 295px; left: 524px; position: absolute">
      <input id="refusé" type="checkbox" v-model="sheet.content['refusé']"
             style="top: 295px; left: 597px; position: absolute">
      <textarea id="alliés" v-model="sheet.content['alliés']"
                style="top: 66px; left: 268px; position: absolute"></textarea>
      <textarea id="artefacts" v-model="sheet.content['artefacts']"
                style="top: 177px; left: 289px; position: absolute"></textarea>

    </div>
    <div class="m-1">
      <img :src="require('@/assets/sheets/freaks_squeele/frsq_s2.png')" usemap="#image-map-02">
    </div>
  </div>

  <map name="image-map-01">
    <area class="an_area" title="text_entrée" href="" coords="603,272,1" shape="circle">
    <area class="an_area" title="text_nom" href="" coords="570,330,1" shape="circle" data-type="text" data-name="nom"
          data-value="">
    <area class="an_area" title="text_prénom" href="" coords="570,367,1" shape="circle" data-type="text"
          data-name="prénom"
          data-value="">
    <area class="an_area" title="text_alias" href="" coords="570,407,1" shape="circle" data-type="text"
          data-name="alias"
          data-value="">
    <area class="an_area" title="text_team" href="" coords="566,65,1" shape="circle" data-type="text" data-name="team"
          data-value="">
    <area class="an_area" title="text_look" href="" coords="58,226,1" shape="circle" data-type="text" data-name="look"
          data-value="">
    <area class="an_area" title="text_équipement" href="" coords="96,416,1" shape="circle" data-type="text"
          data-name="équipement"
          data-value="">
    <area class="an_area" title="check_a" href="" coords="445,464,1" shape="circle" data-type="check"
          data-name="dossier_a"
          data-value="">
    <area class="an_area" title="check_b" href="" coords="443,480,1" shape="circle" data-type="check"
          data-name="dossier_b"
          data-value="">
    <area class="an_area" title="check_c" href="" coords="441,494,1" shape="circle" data-type="check"
          data-name="dossier_c"
          data-value="">
    <area class="an_area" title="check_validé" href="" coords="524,295,1" shape="circle" data-type="check"
          data-name="valié"
          data-value="">
    <area class="an_area" title="check_refusé" href="" coords="597,295,1" shape="circle" data-type="check"
          data-name="refusé"
          data-value="">
    <area class="an_area" title="text_alliés" href="" coords="268,66,1" shape="circle" data-type="text"
          data-name="alliés"
          data-value="">
    <area class="an_area" title="text_artefacts" href="" coords="289,177,1" shape="circle" data-type="text"
          data-name="artefacts"
          data-value="">
  </map>


  <map name="image-map-2">

  </map>

</template>

<script>
import {reactive, ref} from "vue"


export default {
  name: "SheetFreaksSqueele",
  props: ['characterSheet'],
  setup(props) {

    let sheet = ref(props['characterSheet'])

    if (sheet.value.content !== null) {
      sheet.value.content = reactive({})
    }

    return {
      sheet
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

.dynamic input[type="text"] {
  border: none;
}
</style>