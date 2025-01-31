<script setup>
import { ref } from 'vue'
import Assistance_Card from './Assistance_Card.vue'

</script>

<template>
  <div class="text-center mb-9">
    <h1 class="text-3xl font-extrabold">Select Assistance</h1>
    <span class="text-md">Please select the type of assistance you would like to receive</span>
  </div>
  <div>
    <Assistance_Card />
  </div>
</template>
<style scoped></style>
