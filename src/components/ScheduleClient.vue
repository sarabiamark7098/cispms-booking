<script setup>
import { ref } from 'vue'
import Calendar from '@/components/Calendar.vue'

defineProps({
  currentStep: {
    type: Number,
    required: true,
  },
})

const emit = defineEmits(['nextStep', 'previousStep'])

const handleNext = () => {
  emit('nextStep')
}

const handlePrevious = () => {
  emit('previousStep')
}
</script>

<template>
  <div class="grid grid-cols-1 lg:grid-cols-12 w-full gap-6 lg:gap-9 px-4 sm:px-6 lg:px-9">
    <!-- Office Selection -->
    <div
      class="col-span-1 lg:col-start-2 lg:col-end-5 bg-gray-200 rounded-3xl mb-10 lg:mb-20 p-6 sm:p-9"
    >
      <p class="text-xl lg:text-2xl mb-5">Select the office most convenient to your location:</p>

      <label class="text-base lg:text-lg">Province</label>
      <input
        type="text"
        placeholder="Province"
        class="input w-full bg-gray-100 border border-black mb-5 lg:mb-9"
        required
      />

      <label class="text-base lg:text-lg">Office</label>
      <input
        type="text"
        placeholder="Office"
        class="input w-full bg-gray-100 border border-black mb-5 lg:mb-9"
        required
      />

      <div class="bg-red-200 shadow-lg p-4 sm:p-5 rounded-xl">
        <p class="mb-4 font-medium">Location Details:</p>
        <p>Office 1</p>
        <p>Address: Lorem ipsum Lorem Ipsum</p>
        <p>Email</p>
        <p>Address: Lorem ipsum Lorem Ipsum</p>
      </div>
    </div>

    <!-- Calendar -->
    <div
      id="calendar_vue"
      class="col-span-1 lg:col-start-5 lg:col-end-10 bg-gray-200 rounded-3xl mb-10 lg:mb-20 p-6 sm:p-9"
    >
      <Calendar />
    </div>

    <!-- Time Slot Selection -->
    <div
      class="relative col-span-1 lg:col-start-10 lg:col-end-12 bg-gray-200 rounded-3xl mb-10 lg:mb-20 p-6 lg:py-12"
    >
      <label class="text-base lg:text-lg">Select a Time Slot:</label>
      <div class="grid gap-6 py-6 pb-16">
        <button class="btn btn-success w-full h-14 lg:h-16 text-base lg:text-lg text-white">
          AM
        </button>
        <button class="btn btn-success w-full h-14 lg:h-16 text-base lg:text-lg text-white">
          PM
        </button>
      </div>
      <div
        class="grid grid-cols-2 gap-3 lg:gap-2 w-full absolute bottom-6 right-0 left-0 px-2 "
      >
        <div>
          <button
            class="btn btn-outline w-full btn-default text-sm sm:text-base lg:btn-md"
            @click="handlePrevious"
          >
            Previous
          </button>
        </div>
        <div>
          <button
            type="submit"
            class="btn btn-primary w-full hover:text-white text-sm sm:text-base lg:btn-md"
            @click="handleNext"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#calendar_vue h2 {
  margin: 0;
  font-size: 14px;
}

#calendar_vue ul {
  margin: 0;
  padding: 0 0 0 1.5em;
}

#calendar_vue li {
  margin: 1em 0;
  padding: 0;
}

.demo-app {
  display: flex;
  min-height: 100%;
  font-family:
    Arial,
    Helvetica Neue,
    Helvetica,
    sans-serif;
  font-size: 14px;
}

.fc {
  max-width: 1100px;
  margin: 0 auto;
}
</style>
