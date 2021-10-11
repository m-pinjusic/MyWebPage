<template>
 <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-btn round to="/">
      <q-avatar size="60px">
        <img src="statics/MarinLogo.jpg">
      </q-avatar>
    </q-btn>
          Marin Pinjusic
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="center">
        <q-route-tab to="/photos" label="Galerija" />
        <q-route-tab to="/videos" label="Video" />
        <q-route-tab to="/contact" label="Kontakt" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>


<script>
export default {
  data () {
    return {
      left: false
    }
  }
}
</script>