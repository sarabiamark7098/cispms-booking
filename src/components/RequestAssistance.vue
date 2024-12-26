<script setup>
import { ref } from 'vue'

// defineEmits(['open-modal'])
</script>

<template>
  <div class="text-center font-extrabold text-3xl mb-9">Select Assistance</div>
  <div class="grid grid-cols-2 gap-9 w-full">
    <div class="w-full col-start-1 col-span-2">
      <select class="select border-black bg-gray-100 w-full max-full uppercase" required>
        <option disabled selected>Assistance</option>
        <option value="Medical Assistance for Hospital Bill">
          Medical Assistance for Hospital Bill
        </option>
        <option value="Medical Assistance for Medicine / Assistive Device">
          Medical Assistance for Medicine / Assistive Device
        </option>
        <option value="Medical Assistance for Laboratory Requests">
          Medical Assistance for Laboratory Requests
        </option>
        <option value="Burial Assistance or Transfer of Cadaver">
          Burial Assistance or Transfer of Cadaver
        </option>
        <option value="Educational Assistance">Educational Assistance</option>
        <option value="Food Assistance">Food Assistance</option>
        <option value="Cash Assistance for Other Support Services">
          Cash Assistance for Other Support Services
        </option>
      </select>
    </div>
  </div>
</template>
<style scoped></style>
