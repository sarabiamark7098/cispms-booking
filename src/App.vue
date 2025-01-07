<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import LandingPage from './components/LandingPage.vue'
import Navbar from './components/Navbar.vue'
import Modal from './components/Modal.vue'

const isModalOpen = ref(false)

const openModal = () => {
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
}
</script>

<template>
  <header class="shadow-lg bg-indigo-50 bg-blend-darken">
    <div class="wrapper">
      <Navbar @open-modal="openModal" />

      <Modal :show="isModalOpen" @close="closeModal" />
    </div>
  </header>

  <RouterView class="shadow-2xl" />
</template>

<style scoped>
@media (min-width: 1920px) {
}
</style>
