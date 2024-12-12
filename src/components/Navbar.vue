<script>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

export default {
  setup() {
    const isMenuOpen = ref(false)

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value
    }

    return {
      isMenuOpen,
      toggleMenu,
    }
  },
}
</script>

<template>
  <nav class="bg-white-800 text-white shadow-md py-3">
    <div class="container mx-auto px-4 flex justify-between items-center">
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
          class="block py-2 px-4 my-4 text-black font-bold hover:text-white hover:bg-blue-500 rounded-full hover:shadow-md"
          >Home</RouterLink
        >
        <RouterLink
          to="/services"
          class="block py-2 px-4 my-4 text-black font-bold hover:text-white hover:bg-blue-500 rounded-full hover:shadow-md"
          >AICS Services</RouterLink
        >
        <RouterLink
          to="/charter"
          class="block py-2 px-4 my-4 text-black font-bold hover:text-white hover:bg-blue-500 rounded-full hover:shadow-md"
          >Citizen's Charter</RouterLink
        >
        <RouterLink
          to="/book"
          class="mt-3 lg:mt-0 py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full shadow-md"
          >Book Now</RouterLink
        >
      </div>
    </div>
  </nav>
</template>

<style scoped>

</style>
