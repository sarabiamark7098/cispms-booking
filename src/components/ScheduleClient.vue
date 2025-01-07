<script setup>
import { ref, defineProps, defineEmits } from 'vue'
import Calendar from "@/components/Calendar.vue"
defineProps({
  currentStep: {
    type: Number,
    required: true,
  },
})

// const maxcapacity = 50
// const bookings = {
//   '2025-01-01': 0,
//   '2025-01-02': 50,
//   '2025-01-03': 40,
//   '2025-01-06': 10,
//   '2025-01-07': 50,
//   '2025-01-08': 50,
//   '2025-01-09': 50,
//   '2025-01-10': 50,
// }
// const processBookings = (bookings) => {
//   const availableDates = []
//   const fullyBookedDates = []

//   for (const [date, count] of Object.entries(bookings)) {
//     const parsedDate = new Date(date) // Convert string to Date object
//     if (count >= maxcapacity) {
//       fullyBookedDates.push(parsedDate)
//     } else {
//       availableDates.push(parsedDate)
//     }
//   }

//   return { availableDates, fullyBookedDates }
// }
// const { availableDates, fullyBookedDates } = processBookings(bookings)

// const date = ref(new Date())
// const attributes = ref([
//   {
//     key: 'today',
//   },
//   {
//     highlight: 'green',
//     dates: availableDates,
//   },
//   {
//     highlight: 'red',
//     isDisabled: true,
//     dates: fullyBookedDates,
//   },
// ])
// const disabledDates = ref([
//   {
//     key: 'weekends',
//     isDisabled: true,
//     repeat: {
//       weekdays: [1, 7],
//     },
//   },
// ])

const emit = defineEmits(['nextStep', 'previousStep'])
const handleNext = () => {
  emit('nextStep')
}

const handlePrevious = () => {
  emit('previousStep')
}
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
    <div id="calendar_vue" class="col-start-5 col-end-10 bg-gray-200 rounded-3xl mb-20 p-9">
      <!-- <VCalendar
        title-position="left"
        expanded
        :attributes="attributes"
        v-model="date"
        :disabled-dates="disabledDates"
      /> -->
      <Calendar />
    </div>
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
            @click="handlePrevious"
          >
            Previous
          </button>
        </div>
        <div class="w-full col-start-4 col-span-3">
          <button
            type="submit"
            @click="handleNext"
            className="btn w-full btn-primary hover:text-white btn-xs sm:btn-sm md:btn-md lg:btn-md "
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
  font-size: 16px;
}

#calendar_vue ul {
  margin: 0;
  padding: 0 0 0 1.5em;
}

#calendar_vue li {
  margin: 1.5em 0;
  padding: 0;
}

#calendar_vue b {
  /* used for event dates/times */
  margin-right: 3px;
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

.demo-app-sidebar {
  width: 300px;
  line-height: 1.5;
  background: #eaf9ff;
  border-right: 1px solid #d3e2e8;
}

.demo-app-sidebar-section {
  padding: 2em;
}

.demo-app-main {
  flex-grow: 1;
  padding: 3em;
}

.fc {
  /* the calendar root */
  max-width: 1100px;
  margin: 0 auto;
}
</style>
