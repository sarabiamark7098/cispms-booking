<script setup>
import { ref } from 'vue'
</script>

<template>
  <div class="grid grid-cols-12 w-full gap-9">
    <div class="col-start-2 col-end-5 bg-gray-200 rounded-3xl mb-20 p-9">
      <p class="text-2xl mb-5">Select the office most convenient to your location:</p>
      <label class="text-lg">Province</label>
      <input
        type="text"
        placeholder="Province"
        className="input w-full bg-gray-100 border-black mb-9"
        required
      />

      <label class="text-lg">Office</label>
      <input
        type="text"
        placeholder="Office"
        className="input w-full bg-gray-100 border-black mb-9"
        required
      />

      <div class="bg-red-200 shadow-lg p-5 rounded-xl">
        <p class="mb-4">Location Details:</p>
        <p>Office 1</p>
        <p>Address: Lorem ipsum Lorem Ipsum</p>
        <p>Email</p>
        <p>Address: Lorem ipsum Lorem Ipsum</p>
      </div>
    </div>
    <div class="col-start-5 col-end-10 bg-gray-200 rounded-3xl mb-20 p-9"></div>
    <div class="relative col-start-10 col-end-12 bg-gray-200 rounded-3xl mb-20 p-6">
      <label class="text-lg">Select a Time Slot:</label>
      <select class="select border-black bg-gray-100 w-full max-full uppercase" required>
        <option value="" disabled selected>Select available time</option>
        <option value="AM">AM (8:00 AM - 12:00 NN)</option>
        <option value="PM">PM (1:00 PM - 4:00 PM)</option>
      </select>

      <div class="grid grid-cols-6 gap-2 w-full absolute bottom-6 right-0 left-0 px-2">
        <div class="w-full col-start-1 col-span-3">
          <button
            className="btn btn-outline w-full btn-default btn-xs sm:btn-sm md:btn-md lg:btn-md"
            @click="previousStep"
          >Previous</button>
        </div>
        <div class="w-full col-start-4 col-span-3">
          <button
            type="submit"
            @click="nextStep"
            className="btn w-full btn-primary hover:text-white btn-xs sm:btn-sm md:btn-md lg:btn-md "
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
