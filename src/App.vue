<script setup>
import { RouterLink, RouterView } from 'vue-router'
import LandingPage from './components/LandingPage.vue'
import Navbar from './components/Navbar.vue'
</script>

<template>
  <header class="shadow-lg bg-indigo-50 bg-blend-darken">
    <div class="wrapper">
      <Navbar />
      <LandingPage />

    </div>
  </header>

  <RouterView class="shadow-2xl" />
</template>

<style scoped>

@media (min-width: 1920px) {

}
</style>
