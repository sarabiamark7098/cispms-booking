<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import Modal from '@/components/Modal.vue'
import ProfileContainer from '@/components/ProfileContainer.vue'
import StepsContainer from '@/components/StepsContainer.vue'
// Access the current route using the `useRoute` hook
// const route = useRoute()

// Use a computed property to check if the current route is '/request'
// const isRequestRoute = computed(() => route.path === '/request')

const isModalOpen = ref(false)

const openModal = () => {
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
}
const route = useRoute()

const isProfile = computed(() => route.path === '/profile')
const isStepsContainer = computed(() => route.path === '/request')
</script>

<template>
  <div class="flex">
    <div class="bg-[#1D4BB2] h-full min-h-screen w-screen">
      <Modal :show="isModalOpen" @close="closeModal" />
      
      <ProfileContainer v-if="isProfile" @open-modal="openModal" :show="isModalOpen" />
      <StepsContainer v-if="isStepsContainer" @open-modal="openModal" :show="isModalOpen" />
    </div>
  </div>
</template>

<style scoped></style>
