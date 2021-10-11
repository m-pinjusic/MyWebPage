<template>
  <div class="q-pa-md">
    <div class="q-gutter-md row items-start">
      <q-input v-model="password" bg-color="white" filled :type="isPwd ? 'password' : 'text'" hint="Password with toggle">
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
      <q-btn color="primary" glossy label="Potvrdi" :disable="password !==data[0].dPassword" @click="trigger=true"/>
      //sifra je admin123(moze se mijenjati u bazi)
      </div>
      <div class="q-pa-md">
    <div class="q-gutter-md" style="max-width: 300px">
      <q-input filled v-model="data[0].client" bg-color="white" label="Broj klijenata" :disable="trigger!=true"/>
      <q-input filled v-model="data[0].project" bg-color="white" label="Broj projekata" :disable="trigger!=true"/>
      <q-input filled v-model="data[0].editedPic" bg-color="white" label="Broj editanih slika" :disable="trigger!=true"/>

      <q-input filled v-model="data[0].video" bg-color="white" label="Postotak-video" :disable="trigger!=true"/>
      <q-input filled v-model="data[0].photo" bg-color="white" label="Postotak-photo" :disable="trigger!=true"/>
      <q-input filled v-model="data[0].sound" bg-color="white" label="Postotak-sound" :disable="trigger!=true"/>
      <q-btn color="primary" glossy label="PROMIJENI" :disable="trigger!=true" @click="edit"/>
      </div>
  </div>
  
  </div>

</template>

<script>
export default {
  data () {
    return {
      password: '',
      admin: 'admin',
      isPwd: true,
      data: [],
      trigger: false,
      confirm: false
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

},
 methods: {
edit: function () {
      // eslint-disable-next-line standard/object-curly-even-spacing
      this.$db.collection('Info').doc('xp').update({
        client: this.data[0].client,
        project: this.data[0].project,
        editedPic: this.data[0].editedPic,
        video: this.data[0].video,
        photo: this.data[0].photo,
        sound: this.data[0].sound
      })
        .then((funciotn) => {
          console.log('Document successfully updated!')
          confirm=true
        })
        .catch((error) => {
          console.error('Error adding document: ', error)
        })
      console.log(this.selected[0].stationName)
    }
}
}
</script>
