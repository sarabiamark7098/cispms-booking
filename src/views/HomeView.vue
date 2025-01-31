<script setup>
import { useAttrs } from 'vue'

// Use attrs to forward non-props attributes
import Carousel from '@/components/Carousel.vue'
import CarouselItems from '@/components/CarouselItems.vue'
import FooterView from '@/components/FooterView.vue'

const attrs = useAttrs()
</script>

<template>
  <div class="bg-[#1D4BB2]">
    <div class="relative max-w-full mt-20 border-2" v-bind="attrs">
      <!-- Header Section -->
      <img
        src="@/assets/Home.jpg"
        class="w-full h-60 sm:h-80 md:h-96 object-cover opacity-60"
        alt="image"
      />
      <div
        class="absolute top-32 sm:top-40 md:top-56 inset-x-0 text-center text-white font-bold text-xl sm:text-2xl md:text-4xl tracking-wide"
      >
        ASSISTANCE TO INDIVIDUALS IN CRISIS SITUATION (AICS)
        <div class="text-center text-white font text-sm sm:text-lg md:text-2xl tracking-wider mt-2">
          Providing Immediate Assistance for Individuals in Crisis.
        </div>

        <!-- Content Section -->
        <div class="static">
          <div class="grid grid-cols-1 sm:grid-cols-10 mt-6 px-4 sm:px-8 lg:px-0">
            <div
              class="sm:col-start-2 sm:col-end-10 bg-white rounded-lg h-auto sm:h-80 shadow-xl p-5 sm:p-7"
            >
              <div class="grid grid-cols-1 lg:grid-cols-6 gap-4">
                <!-- Image Section -->
                <div class="flex justify-center">
                  <img class="w-40 sm:w-52 lg:w-64" src="@/assets/aics-image.png" alt="image" />
                </div>

                <!-- Text Section -->
                <div
                  class="col-span-1 lg:col-span-5 text-black font-extrabold text-lg sm:text-3xl md:text-5xl text-left sm:ml-0 lg:ml-24"
                >
                  About <span class="text-blue-600 font-extrabold">AICS</span><br />
                  <p class="text-sm sm:text-base lg:text-xl mt-4 sm:mt-5 indent-4 sm:indent-12">
                    The <b>Assistance to Individuals in Crisis Situation (AICS)</b>
                    is part of the DSWD’s protective services for the poor, marginalized, and
                    vulnerable/disadvantaged individuals. The AICS has been implemented by the DSWD
                    for decades, as part of its technical assistance and resource augmentation
                    support to local government units (LGUs) and other partners.
                  </p>
                  <p class="text-sm sm:text-base lg:text-xl mt-4 sm:mt-6 indent-4 sm:indent-12">
                    Who may avail: <b>Individuals in Crisis Situation</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Carousel Section -->
    <!-- Outer container to maintain responsiveness -->
    <div class="container mx-auto pt-[50px] sm:pt-[500px] lg:pt-[150px] px-4 lg:px-8">
      <!-- Carousel Section -->
      <div class="mt-16 sm:mt-32 lg:mt-40">
        <CarouselItems />
      </div>

      <!-- Additional Section -->
      <div class="flex flex-wrap justify-center py-12 gap-6 sm:gap-8 lg:gap-12 text-center"></div>
    </div>
  </div>

  <!-- Footer Section -->
  <FooterView />
</template>

<style scoped></style>
