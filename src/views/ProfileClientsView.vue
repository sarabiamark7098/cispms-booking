<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import ProfileContainer from '@/components/ProfileContainer.vue'
import Modal from '@/components/Modal.vue'
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
    <div class="bg-blue-700 h-full min-h-screen w-screen">
      <Modal :show="isModalOpen" @close="closeModal" />
      <!-- <RequestOTP v-if="isRequestRoute" /> -->
      <ProfileContainer v-if="isProfile" @open-modal="openModal" />
      <StepsContainer v-if="isStepsContainer" @open-modal="openModal" />
    </div>
  </div>
</template>

<style scoped></style>
