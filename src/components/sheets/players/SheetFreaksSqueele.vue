<template>
  <div id="map">
    <div class="m-1">
      <img :src="require('@/assets/sheets/freaks_squeele/frsq_s1.png')">
      <div v-if="sheet">
        <input id="rentrée" type="text" v-model="sheet.content.rentrée" v-on:change="handleUpdate"
               style="top: 260px; left: 596px; position: absolute">
        <input id="nom" type="text" v-model="sheet.content.nom" v-on:change="handleUpdate"
               style="top: 317px; left: 485px; position: absolute" class="long-text">
        <input id="prénom" type="text" v-model="sheet.content.prénom" v-on:change="handleUpdate"
               style="top: 360px; left: 486px; position: absolute" class="long-text">
        <input id="alias" type="text" v-model="sheet.name" v-on:change="handleUpdate"
               style="top: 396px; left: 487px; position: absolute" class="long-text">
        <textarea id="team" v-model="sheet.content.team" v-on:change="handleUpdate"
                  style="top: 60px; left: 555px;  position: absolute" class="small-textarea"></textarea>
        <input id="attestation" type="checkbox" v-model="sheet.content.attestation" v-on:change="handleUpdate"
               style="top: 458px; left: 400px; position: absolute">
        <input id="bulletin" type="checkbox" v-model="sheet.content.bulletin" v-on:change="handleUpdate"
               style="top: 477px; left: 400px; position: absolute">
        <input id="certificat" type="checkbox" v-model="sheet.content.certificat" v-on:change="handleUpdate"
               style="top: 494px; left: 400px; position: absolute">
        <input id="validé" type="checkbox" v-model="sheet.content.validé" v-on:change="handleUpdate"
               style="top: 290px; left: 480px; position: absolute">
        <input id="refusé" type="checkbox" v-model="sheet.content.refusé" v-on:change="handleUpdate"
               style="top: 290px; left: 554px; position: absolute">
        <textarea id="look" v-model="sheet.content.look" v-on:change="handleUpdate"
                  style="top: 217px; left: 48px; position: absolute" class="large-textarea"></textarea>
        <textarea id="équipement" v-model="sheet.content.équipement" v-on:change="handleUpdate"
                  style="top: 412px; left: 80px; position: absolute" class="large-textarea"></textarea>
        <textarea id="alliés" v-model="sheet.content.alliés" v-on:change="handleUpdate"
                  style="top: 62px; left: 263px; position: absolute" class="small-textarea"></textarea>
        <textarea id="artefacts" v-model="sheet.content.artefacts" v-on:change="handleUpdate"
                  style="top: 176px; left: 283px; position: absolute" class="small-textarea"></textarea>
      </div>
    </div>
    <div class="m-1">
      <img :src="require('@/assets/sheets/freaks_squeele/frsq_s2.png')">
      <div v-if="sheet">
        <input id="aorigine_mod" type="text" v-model="sheet.content.aorigine_mod" v-on:change="handleUpdate"
               style="top: 605px; left: 40px; position: absolute" class="modifier">
        <textarea id="aorigine" v-model="sheet.content.aorigine" v-on:change="handleUpdate"
                  style="top: 600px; left: 105px; position: absolute" class="extra-small-textarea"></textarea>
        <input id="amilieu_mod" type="text" v-model="sheet.content.amilieu_mod" v-on:change="handleUpdate"
               style="top: 635px; left: 40px; position: absolute" class="modifier">
        <textarea id="amilieu" v-model="sheet.content.amilieu" v-on:change="handleUpdate"
                  style="top: 630px; left: 105px; position: absolute" class="extra-small-textarea"></textarea>
        <input id="apouvoir_mod" type="text" v-model="sheet.content.apouvoir_mod" v-on:change="handleUpdate"
               style="top: 660px; left: 40px; position: absolute" class="modifier">
        <textarea id="apouvoir" v-model="sheet.content.apouvoir" v-on:change="handleUpdate"
                  style="top: 655px; left: 105px; position: absolute" class="extra-small-textarea"></textarea>
        <input id="atrouble_mod" type="text" v-model="sheet.content.atrouble_mod" v-on:change="handleUpdate"
               style="top: 685px; left: 40px; position: absolute" class="modifier">
        <textarea id="atrouble" v-model="sheet.content.atrouble" v-on:change="handleUpdate"
                  style="top: 680px; left: 105px; position: absolute" class="extra-small-textarea"></textarea>
        <input id="aautre_mod" type="text" v-model="sheet.content.aautre_mod" v-on:change="handleUpdate"
               style="top: 715px; left: 40px; position: absolute" class="modifier">
        <textarea id="aautre" v-model="sheet.content.aautre" v-on:change="handleUpdate"
                  style="top: 710px; left: 70px; position: absolute" class="extra-small-textarea"></textarea>


        <input id="bathlétisme_mod" type="text" v-model="sheet.content.bathlétisme_mod" v-on:change="handleUpdate"
               style="top: 600px; left: 560px; position: absolute" class="small-modifier">
        <input id="bartisanat_mod" type="text" v-model="sheet.content.bartisanat_mod" v-on:change="handleUpdate"
               style="top: 600px; left: 660px; position: absolute" class="small-modifier">
        <input id="bcombat_mod" type="text" v-model="sheet.content.bcombat_mod" v-on:change="handleUpdate"
               style="top: 625px; left: 560px; position: absolute" class="small-modifier">
        <input id="binvestigation_mod" type="text" v-model="sheet.content.binvestigation_mod"
               v-on:change="handleUpdate" style="top: 625px; left: 660px; position: absolute" class="small-modifier">
        <input id="bérudition_mod" type="text" v-model="sheet.content.bérudition_mod" v-on:change="handleUpdate"
               style="top: 650px; left: 560px; position: absolute" class="small-modifier">
        <input id="bcommunication_mod" type="text" v-model="sheet.content.bcommunication_mod"
               v-on:change="handleUpdate" style="top: 650px; left: 660px; position: absolute" class="small-modifier">
        <input id="bautre1_mod" type="text" v-model="sheet.content.bautre1_mod" v-on:change="handleUpdate"
               style="top: 675px; left: 560px; position: absolute" class="small-modifier">
        <input id="bautre1" type="text" v-model="sheet.content.bautre1" v-on:change="handleUpdate"
               style="top: 675px; left: 580px; position: absolute" class="small-input">
        <input id="bautre2_mod" type="text" v-model="sheet.content.bautre2_mod" v-on:change="handleUpdate"
               style="top: 675px; left: 660px; position: absolute" class="small-modifier">
        <input id="bautre2" type="text" v-model="sheet.content.bautre2" v-on:change="handleUpdate"
               style="top: 675px; left: 680px; position: absolute" class="small-input">


        <input id="ren_count" type="text" v-model="sheet.content.ren_count" v-on:change="handleUpdate"
               style="top: 760px; left: 55px; position: absolute" class="modifier">
        <input id="ren_mod" type="text" v-model="sheet.content.ren_mod" v-on:change="handleUpdate"
               style="top: 765px; left: 80px; position: absolute" class="small-modifier">

        <input id="ren_t1_mod" type="text" v-model="sheet.content.ren_t1_mod" v-on:change="handleUpdate"
               style="top: 837px; left: 62px; position: absolute" class="small-modifier">
        <input id="ren_t1" type="text" v-model="sheet.content.ren_t1" v-on:change="handleUpdate"
               style="top: 853px; left: 35px; position: absolute" class="small-input">
        <textarea id="ren_t1_desc" v-model="sheet.content.ren_t1_desc" v-on:change="handleUpdate"
                  style="top: 870px; left: 35px; position: absolute" class="extra-small-textarea shorty"></textarea>
        <input id="ren_t2_mod" type="text" v-model="sheet.content.ren_t2_mod" v-on:change="handleUpdate"
               style="top: 909px; left: 62px; position: absolute" class="small-modifier">
        <input id="ren_t2" type="text" v-model="sheet.content.ren_t2" v-on:change="handleUpdate"
               style="top: 924px; left: 35px; position: absolute" class="small-input">
        <textarea id="ren_t2_desc" v-model="sheet.content.ren_t2_desc" v-on:change="handleUpdate"
                  style="top: 943px; left: 35px; position: absolute" class="extra-small-textarea shorty"></textarea>
        <input id="ren_t3_mod" type="text" v-model="sheet.content.ren_t3_mod" v-on:change="handleUpdate"
               style="top: 980px; left: 62px; position: absolute" class="small-modifier">
        <input id="ren_t3" type="text" v-model="sheet.content.ren_t3" v-on:change="handleUpdate"
               style="top: 996px; left: 35px; position: absolute" class="small-input">
        <textarea id="ren_t3_desc" v-model="sheet.content.ren_t3_desc" v-on:change="handleUpdate"
                  style="top: 1013px; left: 35px; position: absolute" class="extra-small-textarea shorty"></textarea>


        <input id="ter_count" type="text" v-model="sheet.content.ter_count" v-on:change="handleUpdate"
               style="top: 760px; left: 125px; position: absolute" class="modifier">
        <input id="ter_mod" type="text" v-model="sheet.content.ter_mod" v-on:change="handleUpdate"
               style="top: 765px; left: 155px; position: absolute" class="small-modifier">

        <input id="ter_t1_mod" type="text" v-model="sheet.content.ter_t1_mod" v-on:change="handleUpdate"
               style="top: 837px; left: 130px; position: absolute" class="small-modifier">
        <input id="ter_t1" type="text" v-model="sheet.content.ter_t1" v-on:change="handleUpdate"
               style="top: 853px; left: 104px; position: absolute" class="small-input">
        <textarea id="ter_t1_desc" v-model="sheet.content.ter_t1_desc" v-on:change="handleUpdate"
                  style="top: 870px; left: 104px; position: absolute" class="extra-small-textarea shorty"></textarea>
        <input id="ter_t2_mod" type="text" v-model="sheet.content.ter_t2_mod" v-on:change="handleUpdate"
               style="top: 909px; left: 130px; position: absolute" class="small-modifier">
        <input id="ter_t2" type="text" v-model="sheet.content.ter_t2" v-on:change="handleUpdate"
               style="top: 924px; left: 104px; position: absolute" class="small-input">
        <textarea id="ter_t2_desc" v-model="sheet.content.ter_t2_desc" v-on:change="handleUpdate"
                  style="top: 943px; left: 104px; position: absolute" class="extra-small-textarea shorty"></textarea>
        <input id="ter_t3_mod" type="text" v-model="sheet.content.ter_t3_mod" v-on:change="handleUpdate"
               style="top: 980px; left: 130px; position: absolute" class="small-modifier">
        <input id="ter_t3" type="text" v-model="sheet.content.ter_t3" v-on:change="handleUpdate"
               style="top: 996px; left: 104px; position: absolute" class="small-input">
        <textarea id="ter_t3_desc" v-model="sheet.content.ter_t3_desc" v-on:change="handleUpdate"
                  style="top: 1013px; left: 104px; position: absolute" class="extra-small-textarea shorty"></textarea>


        <input id="cre_count" type="text" v-model="sheet.content.cre_count" v-on:change="handleUpdate"
               style="top: 760px; left: 195px; position: absolute" class="modifier">
        <input id="cre_mod" type="text" v-model="sheet.content.cre_mod" v-on:change="handleUpdate"
               style="top: 765px; left: 220px; position: absolute" class="small-modifier">

        <input id="cre_t1_mod" type="text" v-model="sheet.content.cre_t1_mod" v-on:change="handleUpdate"
               style="top: 837px; left: 198px; position: absolute" class="small-modifier">
        <input id="cre_t1" type="text" v-model="sheet.content.cre_t1" v-on:change="handleUpdate"
               style="top: 853px; left: 175px; position: absolute" class="small-input">
        <textarea id="cre_t1_desc" v-model="sheet.content.cre_t1_desc" v-on:change="handleUpdate"
                  style="top: 870px; left: 175px; position: absolute" class="extra-small-textarea shorty"></textarea>
        <input id="cre_t2_mod" type="text" v-model="sheet.content.cre_t2_mod" v-on:change="handleUpdate"
               style="top: 909px; left: 198px; position: absolute" class="small-modifier">
        <input id="cre_t2" type="text" v-model="sheet.content.cre_t2" v-on:change="handleUpdate"
               style="top: 924px; left: 175px; position: absolute" class="small-input">
        <textarea id="cre_t2_desc" v-model="sheet.content.cre_t2_desc" v-on:change="handleUpdate"
                  style="top: 943px; left: 175px; position: absolute" class="extra-small-textarea shorty"></textarea>
        <input id="cre_t3_mod" type="text" v-model="sheet.content.cre_t3_mod" v-on:change="handleUpdate"
               style="top: 980px; left: 198px; position: absolute" class="small-modifier">
        <input id="cre_t3" type="text" v-model="sheet.content.cre_t3" v-on:change="handleUpdate"
               style="top: 996px; left: 175px; position: absolute" class="small-input">
        <textarea id="cre_t3_desc" v-model="sheet.content.cre_t3_desc" v-on:change="handleUpdate"
                  style="top: 1013px; left: 175px; position: absolute" class="extra-small-textarea shorty"></textarea>


        <input id="bad01_mod" type="input" v-model="sheet.content.bad01_mod" v-on:change="handleUpdate"
               style="top: 625px; left: 305px; position: absolute" class="small-modifier">
        <textarea id="bad01" v-model="sheet.content.bad01" v-on:change="handleUpdate"
                  style="top: 650px; left: 285px; position: absolute" class="extra-small-textarea shorty"></textarea>
        <input id="bad02_mod" type="input" v-model="sheet.content.bad02_mod" v-on:change="handleUpdate"
               style="top: 625px; left: 385px; position: absolute" class="small-modifier">
        <textarea id="bad02" v-model="sheet.content.bad02" v-on:change="handleUpdate"
                  style="top: 650px; left: 360px; position: absolute" class="extra-small-textarea shorty"></textarea>
        <input id="bad03_mod" type="input" v-model="sheet.content.bad03_mod" v-on:change="handleUpdate"
               style="top: 625px; left: 465px; position: absolute" class="small-modifier">
        <textarea id="bad03" v-model="sheet.content.bad03" v-on:change="handleUpdate"
                  style="top: 650px; left: 445px; position: absolute" class="extra-small-textarea shorty"></textarea>

        <input id="bad04_mod" type="input" v-model="sheet.content.bad04_mod" v-on:change="handleUpdate"
               style="top: 705px; left: 305px; position: absolute" class="small-modifier">
        <textarea id="bad04" v-model="sheet.content.bad04" v-on:change="handleUpdate"
                  style="top: 730px; left: 285px; position: absolute" class="extra-small-textarea shorty"></textarea>
        <input id="bad05_mod" type="input" v-model="sheet.content.bad05_mod" v-on:change="handleUpdate"
               style="top: 705px; left: 385px; position: absolute" class="small-modifier">
        <textarea id="bad05" v-model="sheet.content.bad05" v-on:change="handleUpdate"
                  style="top: 730px; left: 360px; position: absolute" class="extra-small-textarea shorty"></textarea>
        <input id="bad06_mod" type="input" v-model="sheet.content.bad06_mod" v-on:change="handleUpdate"
               style="top: 705px; left: 465px; position: absolute" class="small-modifier">
        <textarea id="bad06" v-model="sheet.content.bad06" v-on:change="handleUpdate"
                  style="top: 730px; left: 445px; position: absolute" class="extra-small-textarea shorty"></textarea>

        <input id="bad07_mod" type="input" v-model="sheet.content.bad07_mod" v-on:change="handleUpdate"
               style="top: 780px; left: 305px; position: absolute" class="small-modifier">
        <textarea id="bad07" v-model="sheet.content.bad07" v-on:change="handleUpdate"
                  style="top: 805px; left: 285px; position: absolute" class="extra-small-textarea shorty"></textarea>
        <input id="bad08_mod" type="input" v-model="sheet.content.bad08_mod" v-on:change="handleUpdate"
               style="top: 780px; left: 385px; position: absolute" class="small-modifier">
        <textarea id="bad08" v-model="sheet.content.bad08" v-on:change="handleUpdate"
                  style="top: 805px; left: 360px; position: absolute" class="extra-small-textarea shorty"></textarea>
        <input id="bad09_mod" type="input" v-model="sheet.content.bad09_mod" v-on:change="handleUpdate"
               style="top: 780px; left: 465px; position: absolute" class="small-modifier">
        <textarea id="bad09" v-model="sheet.content.bad09" v-on:change="handleUpdate"
                  style="top: 805px; left: 445px; position: absolute" class="extra-small-textarea shorty"></textarea>


        <textarea id="notes" v-model="sheet.content.notes" v-on:change="handleUpdate"
                  style="top: 860px; left: 275px; position: absolute" class="large-textarea"></textarea>
        <input id="team_avantage1_mod" type="text" v-model="sheet.content.team_avantage1_mod"
               v-on:change="handleUpdate" style="top: 1040px; left: 285px; position: absolute" class="small-modifier">
        <input id="team_avantage1" type="text" v-model="sheet.content.team_avantage1" v-on:change="handleUpdate"
               style="top: 1040px; left: 305px; position: absolute" class="small-extra-long-input">
        <input id="team_avantage2_mod" type="text" v-model="sheet.content.team_avantage2_mod"
               v-on:change="handleUpdate" style="top: 1060px; left: 285px; position: absolute" class="small-modifier">
        <input id="team_avantage2" type="text" v-model="sheet.content.team_avantage2" v-on:change="handleUpdate"
               style="top: 1060px; left: 305px; position: absolute" class="small-extra-long-input">
        <input id="pex" type="text" v-model="sheet.content.pex" v-on:change="handleUpdate"
               style="top: 1050px; left: 495px; position: absolute" class="modifier">

        <input id="cpou1" type="text" v-model="sheet.content.cpou1" v-on:change="handleUpdate"
               style="top: 735px; left: 615px; position: absolute" class="small-long-input">
        <input id="cpou1_desc" type="text" v-model="sheet.content.cpou1_desc" v-on:change="handleUpdate"
               style="top: 750px; left: 565px; position: absolute" class="small-extra-long-input">
        <input id="cpou1_nat" type="text" v-model="sheet.content.cpou1_nat" v-on:change="handleUpdate"
               style="top: 765px; left: 665px; position: absolute" class="small-input">
        <input id="cpou1_clé1_mod" type="text" v-model="sheet.content.cpou1_clé1_mod" v-on:change="handleUpdate"
               style="top: 780px; left: 565px; position: absolute" class="small-modifier">
        <input id="cpou1_clé1" type="text" v-model="sheet.content.cpou1_clé1" v-on:change="handleUpdate"
               style="top: 780px; left: 595px; position: absolute" class="small-long-input">
        <input id="cpou1_clé1_desc" type="text" v-model="sheet.content.cpou1_clé1_desc" v-on:change="handleUpdate"
               style="top: 795px; left: 565px; position: absolute" class="small-extra-long-input">
        <input id="cpou1_clé2_mod" type="text" v-model="sheet.content.cpou1_clé2_mod" v-on:change="handleUpdate"
               style="top: 810px; left: 565px; position: absolute" class="small-modifier">
        <input id="cpou1_clé2" type="text" v-model="sheet.content.cpou1_clé2" v-on:change="handleUpdate"
               style="top: 810px; left: 585px; position: absolute" class="small-long-input">
        <input id="cpou1_clé2_desc" type="text" v-model="sheet.content.cpou1_clé2_desc" v-on:change="handleUpdate"
               style="top: 825px; left: 565px; position: absolute" class="small-extra-long-input">
        <input id="cpou1_clé3_mod" type="text" v-model="sheet.content.cpou1_clé3_mod" v-on:change="handleUpdate"
               style="top: 840px; left: 565px; position: absolute" class="small-modifier">
        <input id="cpou1_clé3" type="text" v-model="sheet.content.cpou1_clé3" v-on:change="handleUpdate"
               style="top: 840px; left: 585px; position: absolute" class="small-long-input">
        <input id="cpou1_clé3_desc" type="text" v-model="sheet.content.cpou1_clé3_desc" v-on:change="handleUpdate"
               style="top: 855px; left: 565px; position: absolute" class="small-extra-long-input">
        <input id="cpou1_clé4_mod" type="text" v-model="sheet.content.cpou1_clé4_mod" v-on:change="handleUpdate"
               style="top: 870px; left: 565px; position: absolute" class="small-modifier">
        <input id="cpou1_clé4" type="text" v-model="sheet.content.cpou1_clé4" v-on:change="handleUpdate"
               style="top: 870px; left: 585px; position: absolute" class="small-long-input">
        <input id="cpou1_clé4_desc" type="text" v-model="sheet.content.cpou1_clé4_desc" v-on:change="handleUpdate"
               style="top: 885px; left: 565px; position: absolute" class="small-extra-long-input">

        <input id="cpou2" type="text" v-model="sheet.content.cpou2" v-on:change="handleUpdate"
               style="top: 910px; left: 615px; position: absolute" class="small-long-input">
        <input id="cpou2_desc" type="text" v-model="sheet.content.cpou2_desc" v-on:change="handleUpdate"
               style="top: 925px; left: 565px; position: absolute" class="small-extra-long-input">
        <input id="cpou2_nat" type="text" v-model="sheet.content.cpou2_nat" v-on:change="handleUpdate"
               style="top: 940px; left: 665px; position: absolute" class="small-input">
        <input id="cpou2_clé1_mod" type="text" v-model="sheet.content.cpou2_clé1_mod" v-on:change="handleUpdate"
               style="top: 955px; left: 565px; position: absolute" class="small-modifier">
        <input id="cpou2_clé1" type="text" v-model="sheet.content.cpou2_clé1" v-on:change="handleUpdate"
               style="top: 955px; left: 595px; position: absolute" class="small-long-input">
        <input id="cpou2_clé1_desc" type="text" v-model="sheet.content.cpou2_clé1_desc" v-on:change="handleUpdate"
               style="top: 970px; left: 565px; position: absolute" class="small-extra-long-input">
        <input id="cpou2_clé2_mod" type="text" v-model="sheet.content.cpou2_clé2_mod" v-on:change="handleUpdate"
               style="top: 985px; left: 565px; position: absolute" class="small-modifier">
        <input id="cpou2_clé2" type="text" v-model="sheet.content.cpou2_clé2" v-on:change="handleUpdate"
               style="top: 985px; left: 585px; position: absolute" class="small-long-input">
        <input id="cpou2_clé2_desc" type="text" v-model="sheet.content.cpou2_clé2_desc" v-on:change="handleUpdate"
               style="top: 1000px; left: 565px; position: absolute" class="small-extra-long-input">
        <input id="cpou2_clé3_mod" type="text" v-model="sheet.content.cpou2_clé3_mod" v-on:change="handleUpdate"
               style="top: 1015px; left: 565px; position: absolute" class="small-modifier">
        <input id="cpou2_clé3" type="text" v-model="sheet.content.cpou2_clé3" v-on:change="handleUpdate"
               style="top: 1015px; left: 585px; position: absolute" class="small-long-input">
        <input id="cpou2_clé3_desc" type="text" v-model="sheet.content.cpou2_clé3_desc" v-on:change="handleUpdate"
               style="top: 1030px; left: 565px; position: absolute" class="small-extra-long-input">
        <input id="cpou2_clé4_mod" type="text" v-model="sheet.content.cpou2_clé4_mod" v-on:change="handleUpdate"
               style="top: 1045px; left: 565px; position: absolute" class="small-modifier">
        <input id="cpou2_clé4" type="text" v-model="sheet.content.cpou2_clé4" v-on:change="handleUpdate"
               style="top: 1045px; left: 585px; position: absolute" class="small-long-input">
        <input id="cpou2_clé4_desc" type="text" v-model="sheet.content.cpou2_clé4_desc" v-on:change="handleUpdate"
               style="top: 1060px; left: 565px; position: absolute" class="small-extra-long-input">


      </div>
    </div>
    <div class="m-1">
      <img :src="require('@/assets/sheets/freaks_squeele/frsq_s3.png')">
      <div v-if="sheet">
        <textarea id="bad10" v-model="sheet.content.bad10" v-on:change="handleUpdate"
                  style="top: 1170px; left: 100px; position: absolute"
                  class="extra-small-textarea extra_line"></textarea>
        <textarea id="bad11" v-model="sheet.content.bad11" v-on:change="handleUpdate"
                  style="top: 1170px; left: 285px; position: absolute"
                  class="extra-small-textarea extra_line"></textarea>
        <textarea id="bad12" v-model="sheet.content.bad12" v-on:change="handleUpdate"
                  style="top: 1170px; left: 475px; position: absolute"
                  class="extra-small-textarea extra_line"></textarea>
        <textarea id="bad13" v-model="sheet.content.bad13" v-on:change="handleUpdate"
                  style="top: 1170px; left: 660px; position: absolute"
                  class="extra-small-textarea extra_line"></textarea>

        <textarea id="bad14" v-model="sheet.content.bad14" v-on:change="handleUpdate"
                  style="top: 1225px; left: 100px; position: absolute"
                  class="extra-small-textarea extra_line"></textarea>
        <textarea id="bad15" v-model="sheet.content.bad15" v-on:change="handleUpdate"
                  style="top: 1225px; left: 285px; position: absolute"
                  class="extra-small-textarea extra_line"></textarea>
        <textarea id="bad16" v-model="sheet.content.bad16" v-on:change="handleUpdate"
                  style="top: 1225px; left: 475px; position: absolute"
                  class="extra-small-textarea extra_line"></textarea>
        <textarea id="bad17" v-model="sheet.content.bad17" v-on:change="handleUpdate"
                  style="top: 1225px; left: 660px; position: absolute"
                  class="extra-small-textarea extra_line"></textarea>

        <textarea id="bad18" v-model="sheet.content.bad18" v-on:change="handleUpdate"
                  style="top: 1275px; left: 100px; position: absolute"
                  class="extra-small-textarea extra_line"></textarea>
        <textarea id="bad19" v-model="sheet.content.bad19" v-on:change="handleUpdate"
                  style="top: 1275px; left: 285px; position: absolute"
                  class="extra-small-textarea extra_line"></textarea>
        <textarea id="bad20" v-model="sheet.content.bad20" v-on:change="handleUpdate"
                  style="top: 1275px; left: 475px; position: absolute"
                  class="extra-small-textarea extra_line"></textarea>
        <textarea id="bad21" v-model="sheet.content.bad21" v-on:change="handleUpdate"
                  style="top: 1275px; left: 660px; position: absolute"
                  class="extra-small-textarea extra_line"></textarea>

        <textarea id="bad22" v-model="sheet.content.bad22" v-on:change="handleUpdate"
                  style="top: 1327px; left: 100px; position: absolute"
                  class="extra-small-textarea extra_line"></textarea>
        <textarea id="bad23" v-model="sheet.content.bad23" v-on:change="handleUpdate"
                  style="top: 1327px; left: 285px; position: absolute"
                  class="extra-small-textarea extra_line"></textarea>
        <textarea id="bad24" v-model="sheet.content.bad24" v-on:change="handleUpdate"
                  style="top: 1327px; left: 475px; position: absolute"
                  class="extra-small-textarea extra_line"></textarea>
        <textarea id="bad25" v-model="sheet.content.bad25" v-on:change="handleUpdate"
                  style="top: 1327px; left: 660px; position: absolute"
                  class="extra-small-textarea extra_line"></textarea>

        <textarea id="bad26" v-model="sheet.content.bad26" v-on:change="handleUpdate"
                  style="top: 1380px; left: 100px; position: absolute"
                  class="extra-small-textarea extra_line"></textarea>
        <textarea id="bad27" v-model="sheet.content.bad27" v-on:change="handleUpdate"
                  style="top: 1380px; left: 285px; position: absolute"
                  class="extra-small-textarea extra_line"></textarea>
        <textarea id="bad28" v-model="sheet.content.bad28" v-on:change="handleUpdate"
                  style="top: 1380px; left: 475px; position: absolute"
                  class="extra-small-textarea extra_line"></textarea>
        <textarea id="bad29" v-model="sheet.content.bad29" v-on:change="handleUpdate"
                  style="top: 1380px; left: 660px; position: absolute"
                  class="extra-small-textarea extra_line"></textarea>

        <textarea id="bad30" v-model="sheet.content.bad30" v-on:change="handleUpdate"
                  style="top: 1432px; left: 100px; position: absolute"
                  class="extra-small-textarea extra_line"></textarea>
        <textarea id="bad31" v-model="sheet.content.bad31" v-on:change="handleUpdate"
                  style="top: 1432px; left: 285px; position: absolute"
                  class="extra-small-textarea extra_line"></textarea>
        <textarea id="bad32" v-model="sheet.content.bad32" v-on:change="handleUpdate"
                  style="top: 1432px; left: 475px; position: absolute"
                  class="extra-small-textarea extra_line"></textarea>
        <textarea id="bad33" v-model="sheet.content.bad33" v-on:change="handleUpdate"
                  style="top: 1432px; left: 660px; position: absolute"
                  class="extra-small-textarea extra_line"></textarea>

        <textarea id="bad34" v-model="sheet.content.bad34" v-on:change="handleUpdate"
                  style="top: 1485px; left: 100px; position: absolute"
                  class="extra-small-textarea extra_line"></textarea>
        <textarea id="bad35" v-model="sheet.content.bad35" v-on:change="handleUpdate"
                  style="top: 1485px; left: 285px; position: absolute"
                  class="extra-small-textarea extra_line"></textarea>
        <textarea id="bad36" v-model="sheet.content.bad36" v-on:change="handleUpdate"
                  style="top: 1485px; left: 475px; position: absolute"
                  class="extra-small-textarea extra_line"></textarea>
        <textarea id="bad37" v-model="sheet.content.bad37" v-on:change="handleUpdate"
                  style="top: 1485px; left: 660px; position: absolute"
                  class="extra-small-textarea extra_line"></textarea>

        <textarea id="bad38" v-model="sheet.content.bad38" v-on:change="handleUpdate"
                  style="top: 1537px; left: 100px; position: absolute"
                  class="extra-small-textarea extra_line"></textarea>
        <textarea id="bad39" v-model="sheet.content.bad39" v-on:change="handleUpdate"
                  style="top: 1537px; left: 285px; position: absolute"
                  class="extra-small-textarea extra_line"></textarea>
        <textarea id="bad40" v-model="sheet.content.bad40" v-on:change="handleUpdate"
                  style="top: 1537px; left: 475px; position: absolute"
                  class="extra-small-textarea extra_line"></textarea>
        <textarea id="bad41" v-model="sheet.content.bad41" v-on:change="handleUpdate"
                  style="top: 1537px; left: 660px; position: absolute"
                  class="extra-small-textarea extra_line"></textarea>

        <textarea id="bad42" v-model="sheet.content.bad42" v-on:change="handleUpdate"
                  style="top: 1589px; left: 100px; position: absolute"
                  class="extra-small-textarea extra_line"></textarea>
        <textarea id="bad43" v-model="sheet.content.bad43" v-on:change="handleUpdate"
                  style="top: 1589px; left: 285px; position: absolute"
                  class="extra-small-textarea extra_line"></textarea>
        <textarea id="bad44" v-model="sheet.content.bad44" v-on:change="handleUpdate"
                  style="top: 1589px; left: 475px; position: absolute"
                  class="extra-small-textarea extra_line"></textarea>
      </div>
    </div>
  </div>


</template>

<script>
import {ref} from "vue"
import {getCharacterSheet, updateCharacterSheet} from "@/composables/character_sheet";


export default {
  name: "SheetFreaksSqueele",
  props: ['slug'],
  setup(props) {
    const {characterSheet, error, loadCharacterSheet} = getCharacterSheet()

    loadCharacterSheet(props.slug)

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
  font-family: "Comic Sans MS";
  font-size: 1em;
}

#map input[type="checkbox"] {
  border: none;
  background: none;
}

#map textarea {
  border: none;
  background: none;
  width: 11rem;
  height: 7rem;
  font-family: "Comic Sans MS";
  font-size: 0.8em;
}

.long-text {
  width: 13rem !important;
}

.small-textarea {
  width: 7rem !important;
  height: 5rem !important;
}

.small-input {
  width: 5rem !important;
  font-size: 0.7rem !important;
}

.small-long-input {
  width: 8rem !important;
  font-size: 0.7rem !important;
}

.small-extra-long-input {
  width: 12rem !important;
  font-size: 0.7rem !important;
}

.extra-small-textarea {
  width: 8rem !important;
  height: 2rem !important;
  font-size: 0.7rem !important;
}

.large-textarea {
  width: 15rem !important;
}

.shorty {
  width: 4rem !important;
}

.extra_line {
  height: 3rem !important;
}

.modifier {
  width: 2.5rem !important;
}

.small-modifier {
  width: 2rem !important;
  font-size: 0.8rem !important;
}

</style>