<template>
  <q-page >
    <img class="fixed-center" alt="Quasar logo" src="~assets/MarinLogo.svg">
    <h5 class="absolute-center index">Marin Pinjušić</h5>
      
       <h1>
         FOTOGRAFIJA I VIDEOGRAFIJA
       </h1>  
       <h5>Hvala na posjeti web stranice.</h5>
    <h4>Trebate li novu fotografiju ili video za<br> svoj novi proizvod, tvrtku, projekt ili sebe?
<br>Na pravom ste mjestu!  </h4>
    
      <div class="q-pa-md q-gutter-md">
    <q-parallax
      
      src="statics/slika1.jpg"
    >
      <q-chip size="xl" icon="mood">
        Zadovoljni klijenti
      </q-chip>
      <h1 text-bold >
        {{data[0].client}}
      </h1>
    </q-parallax>
  </div>

      

      <div class="q-pa-md q-gutter-md">

    <q-parallax
      src="statics/slika2.jpg"
    >
      <q-chip size="xl" icon="business_center">
        Završeni projekti
      </q-chip> 
      <h1 >
        {{data[0].project}}
      </h1>
    </q-parallax>
  </div>
      
      
      <div class="q-pa-md q-gutter-md">

    <q-parallax
      src="statics/slika3.jpg"
    >
      <q-chip size="xl" icon="camera_alt">
        Uređenih slika
      </q-chip>
      <h1 >
        {{data[0].editedPic}}
      </h1>
    </q-parallax>
      </div>


      

  <div class="center margin100">
    <h2>   <b>Iskustva i vještine</b>  </h2>
    

    <div class="right" style="text-align:center;padding-left:38vw">
      Video<br>
    <q-circular-progress
      show-value
      font-size="22px"
      :value="data[0].video"
      size="100px"
      :thickness="0.12"
      color="primary"
      track-color="grey-3"
      class="q-ma-md"
    >
      {{ data[0].video }}%
    </q-circular-progress>

    </div>
    
    <div class="right" style="text-align:center">
      Fotografija<br>
    <q-circular-progress
      show-value
      font-size="22px"
      :value="data[0].photo"
      size="100px"
      :thickness="0.12"
      color="primary"
      track-color="grey-3"
      class="q-ma-md"
    >
      {{ data[0].photo }}%
    </q-circular-progress>

    </div>

    <div class="right" style="text-align:center">
      Zvuk<br>
    <q-circular-progress
      show-value
      font-size="22px"
      :value="data[0].sound"
      size="100px"
      :thickness="0.12"
      color="primary"
      track-color="grey-3"
      class="q-ma-md"
    >
      {{ data[0].sound }}%
    </q-circular-progress>

    </div>

    </div>


  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      data: [],
 
}
 }
,
  mounted () {

var arrayBuffer = []
    this.$db.collection('Info').get()
      .then((querySnapshot) => {
        querySnapshot.forEach( (doc) => {
          /* .push dodaje na kraj polja arrayBuffer
          dodaje doc.data,a to je objekt oblika: { naziv: 'Vezica1', opis: 'Meteo stanica na Vezici' }(vidjeti u konsoli)
          tako da sad je to ovako arrayBuffer.push(doc.data())
          EDIT osim toga možemo koristiti ... operator za spajanje objekata pa za ubacit id u listu koristimo id: doc.id, ...doc.data
          ... efektivno kaže "aj napravi objekt sa id: doc.id i spoji ga sa doc.data() objektom"
          */
          let raw = doc.data()
          console.log(raw)
          this.data.push(raw)
          
        })
        
      })

}
}
</script>