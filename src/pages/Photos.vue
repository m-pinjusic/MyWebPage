<template>
  <div class="foto" >
    <q-carousel
      swipeable
      animated
      arrows
      v-model="slide"
      :fullscreen.sync="fullscreen"
      infinite
    >
      <q-carousel-slide :name="1" img-src="https://www.veleri.hr/files/datoteke/slider/slider01.jpg" />
      <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
      <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/quasar.jpg" />

      <template v-slot:control>
        <q-carousel-control
          position="bottom-right"
          :offset="[18, 18]"
        >
          <q-btn
            push round dense color="white" text-color="primary"
            :icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'"
            @click="fullscreen = !fullscreen"
          />
        </q-carousel-control>
      </template>
    </q-carousel>

    <q-carousel
      swipeable
      animated
      arrows
      v-model="slide"
      :fullscreen.sync="fullscreen"
      infinite
    >
      <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
      <q-carousel-slide :name="2" img-src="https://www.veleri.hr/files/datoteke/slider/slider01.jpg" />
      <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />

      <template v-slot:control>
        <q-carousel-control
          position="bottom-right"
          :offset="[18, 18]"
        >
          <q-btn
            push round dense color="white" text-color="primary"
            :icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'"
            @click="fullscreen = !fullscreen"
          />
        </q-carousel-control>
      </template>
    </q-carousel>

    

  
  </div>
  

  
  
</template>

<script>
export default {
  data () {
    return {
      slide: 1,
      fullscreen: false,
      slika: '',
      pics: ''
    }
  },
  mounted: function () {
      pics = this.$st.refFromURL('gs://marinwebpage-7ecf8.appspot.com/insta1.jpg')
  }
}
</script>