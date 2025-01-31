<script setup>
import CarouselItems from './CarouselItems.vue';
</script>

<template>
  <!-- Outer container to maintain responsiveness -->
  <div class="container mx-auto pt-[50px] sm:pt-[500px] lg:pt-[150px] px-4 lg:px-8">
    <!-- Carousel Section -->
    <div class="mt-16 sm:mt-32 lg:mt-40">
      <CarouselItems />
    </div>

    <!-- Additional Section -->
    <div
      class="flex flex-wrap justify-center py-12 gap-6 sm:gap-8 lg:gap-12 text-center"
    >
      
    </div>
  </div>
</template>
