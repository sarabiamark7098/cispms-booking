<script setup>
import { ref, reactive } from 'vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

// Reactive state for maximum clients per day
const maxClients = reactive({
  '2025-01-01': 50,
  '2025-01-02': 50,
  '2025-01-03': 60,
  '2025-01-04': 50,
  '2025-01-05': 50,
  '2025-01-06': 60,
  '2025-01-07': 60,
})

// Reactive state for current bookings per day
const bookings = reactive({
  '2025-01-01': 12,
  '2025-01-02': 50,
  '2025-01-03': 60,
  '2025-01-04': 12,
  '2025-01-05': 12,
  '2025-01-06': 60,
  '2025-01-07': 60,
})

const selectedDate = ref(null)

// Function to get day color based on bookings and maxClients
const getDayColor = (date) => {
  const bookingsForDate = bookings[date] || 0
  const maxForDate = maxClients[date] || 50 // Default max clients if not specified
  if (bookingsForDate < maxForDate) return 'green' // Available
  if (bookingsForDate >= maxForDate) return 'red' // Fully booked
  return 'gray' // No data
}

// FullCalendar options
const calendarOptions = ref({
  plugins: [dayGridPlugin, interactionPlugin],
  headerToolbar: {
    left: '',
    center: 'title',
    right: 'prev,next',
  },
  initialView: 'dayGridMonth',
  editable: false,
  showNonCurrentDates: false,
  selectable: true,
  weekends: true,
  events: (info, successCallback) => {
    const events = []
    const startDate = new Date(info.startStr)
    const endDate = new Date(info.endStr)

    let currentDate = startDate
    while (currentDate <= endDate) {
      const dateStr = currentDate.toISOString().split('T')[0]
      if (bookings[dateStr] !== undefined || maxClients[dateStr] !== undefined) {
        events.push({
          start: dateStr,
          display: 'background',
          backgroundColor: getDayColor(dateStr),
          borderColor: 'white',
        })
      }
      currentDate.setDate(currentDate.getDate() + 1)
    }

    successCallback(events)
  },
  selectAllow: (selectInfo) => {
    const startDate = new Date(selectInfo.startStr)
    const endDate = new Date(selectInfo.endStr)
    const diffDays = (endDate - startDate) / (1000 * 3600 * 24)
    return diffDays === 1 // Allow selection of a single day
  },
  select: (selectInfo) => {
    const selectedDay = selectInfo.startStr
    const maxForDay = maxClients[selectedDay] || 50 // Default max clients
    if ((bookings[selectedDay] || 0) < maxForDay) {
      bookings[selectedDay] = (bookings[selectedDay] || 0) + 1
    }
    selectedDate.value = selectedDay
  },
})
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4 px-4 md:px-6 lg:px-10">
    <!-- Date Selection and Legends -->
    <div>
      <h3 class="text-lg font-semibold">Please Select a Date:</h3>
      <span v-if="selectedDate" class="block mt-2 text-base font-medium text-black">
        Selected Date: <strong>{{ selectedDate }}</strong>
      </span>
    </div>
    <div class="border-2 border-gray-400 rounded-lg p-4 bg-gray-50">
      <h4 class="text-lg font-semibold">Legends:</h4>
      <div class="flex flex-wrap gap-3 mt-4">
        <span class="bg-green-600 px-3 py-1 text-white rounded-md">Available</span>
        <span class="bg-red-400 px-3 py-1 text-white rounded-md">Fully Booked</span>
        <span class="bg-gray-200 px-3 py-1 text-gray-700 rounded-md">No Data</span>
      </div>
    </div>
  </div>
  <div class="calendar-container px-4 md:px-6 lg:px-10">
    <main class="calendar-main">
      <FullCalendar class="calendar" :options="calendarOptions" />
    </main>
  </div>
</template>

<style scoped>
/* Responsive Styles */
.calendar-container {
  width: 100%;
  font-family: Roboto, Arial, Helvetica, sans-serif;
  font-size: 14px;
}

.calendar-main {
  width: 100%;
}

.calendar {
  margin: 0 auto;
}

@media (max-width: 768px) {
  .calendar-main {
    font-size: 12px;
  }
}
</style>
