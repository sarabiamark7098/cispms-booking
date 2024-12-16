<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <div class="fixed top-0 left-0 right-0 z-50 bg-white">
    <div class="relative">
      <nav class="text-white shadow-md py-3">
        <div class="container mx-auto flex justify-between items-center">
          <!-- Brand -->
          <div class="flex flex-inline">
            <a href="#" class="text-2xl font-bold text-blue-400 px-2 mx-0">
              <img class="max-h-20 max-w-60 image-white" src="../assets/AICS.png" alt="" />
            </a>
            <a href="#" class="text-2xl font-bold text-blue-400 px-2 mx-0">
              <img class="max-h-20 max-w-60 image-white" src="../assets/onse_connect.png" alt="" />
            </a>
            <a href="#" class="text-2xl font-bold text-blue-400 px-2 mx-0">
              <img class="max-h-20 max-w-72 image-white" src="../assets/DSWD_logo.png" alt="" />
            </a>
          </div>

          <!-- Toggler for Mobile -->
          <button class="lg:hidden text-gray-300 focus:outline-none" @click="toggleMenu">
            <svg
              class="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          <!-- Navbar Links -->
          <div
            :class="[
              'lg:flex flex-col lg:flex-row lg:space-x-6 items-center',
              isMenuOpen ? 'block' : 'hidden',
            ]"
            class="w-full lg:w-auto text-lg"
          >
            <RouterLink
              to="/"
              class="block w-48 text-center py-3 my-4 text-black font-bold hover:text-white hover:bg-blue-500 rounded-full hover:shadow-md"
              >Home</RouterLink
            >
            <RouterLink
              to="/services"
              class="block w-48 text-center py-3 my-4 text-black font-bold hover:text-white hover:bg-blue-500 rounded-full hover:shadow-md"
              >AICS Services</RouterLink
            >
            <RouterLink
              to="/charter"
              class="block w-48 text-center py-3 my-4 text-black font-bold hover:text-white hover:bg-blue-500 rounded-full hover:shadow-md"
              >Citizen's Charter</RouterLink
            >
            <RouterLink
              to="/book"
              class="block w-48 text-center py-3 my-4 text-black font-bold bg-blue-600 text-white hover:bg-blue-500 rounded-full hover:shadow-md"
              >Book Now</RouterLink
            >
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<style scoped></style>
