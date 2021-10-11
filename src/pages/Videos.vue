<template>
  <div class="video">
    <q-carousel
      animated
      v-model="slide"
      infinite
    >
      <q-carousel-slide name="klijenti">
        <q-video
          class="absolute-full"
          src="https://www.youtube.com/embed/a_GX0_bMYBA"
          
        />
      </q-carousel-slide>

      <q-carousel-slide name="filmovi">
        <q-video
          class="absolute-full"
          src="https://www.youtube.com/embed/AuN8lrQLjm0"
        />
      </q-carousel-slide>

      <q-carousel-slide name="projekti">
        <q-video
          class="absolute-full"
          src="https://www.youtube.com/embed/RHQC4fAhcbU"
        />
      </q-carousel-slide>
    </q-carousel>

    <div class="row justify-center">
      <q-btn-toggle
        glossy
        v-model="slide"
        :options="[
          { label: 'Klijenti', value: 'klijenti' },
          { label: 'Filmovi', value: 'filmovi' },
          { label: 'Projekti', value: 'projekti' }
        ]"
      />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      slide: 'klijenti'
    }
  }
}
</script>
