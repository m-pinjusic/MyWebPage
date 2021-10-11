<template>
    <div class="q-pa-md">
    <div class="q-gutter-md absolute-center" style="max-width: 300px">

      <h2>
        Kontaktiraj me
      </h2>

      <q-input  color="primary" bg-color="white" outlined v-model="text" label="Ime">
        <template v-slot:append>
        </template>
      </q-input>

      <q-input color="primary" bg-color="white" outlined v-model="text" label="Naslov">
        <template v-slot:append>
        </template>
      </q-input>

      <q-input color="primary" bg-color="white" outlined v-model="text" label="Email" hint="Email">
        <template v-slot:append>
        </template>
      </q-input>

      <q-input color="primary" bg-color="white" outlined v-model="text" label="Poruka" type="textarea">
        <template v-slot:append>
        </template>
      </q-input>
      <q-btn color="primary" icon-right="send" label="POŠALJI" />
      </div>
      <div id="app">
        <croppa v-model="croppa">
        </croppa>
        <button @click="upload">UPLOAD</button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  croppa: {},
  methods: {
  upload () {
      if (!this.croppa.hasImage()) {
        alert('no image to upload')
        return
      }

      this.croppa.generateBlob((blob) => {
        var fd = new FormData()
        fd.append('file', blob, 'filename.jpg')
        fd.append('other', 'blahblahblah')
        
      })
      this.$storageRef.put(croppa).then(function (snapshot) {
          console.log('Uploaded a blob or file!')
        })
      
    }
    }
}
</script>
