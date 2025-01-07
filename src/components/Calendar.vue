<script setup>
import { ref, reactive } from 'vue'
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

// Maximum number of clients per day
const MAX_CLIENTS = 50
// Reactive state
const selectedDate = ref(null)
// Booking data structure to track bookings per day
const bookings = reactive({
  '2025-01-01': 12, // 12 clients booked for January 1
  '2025-01-04': 12, // 12 clients booked for January 4
  '2025-01-05': 12, // 12 clients booked for January 5
  '2025-01-02': MAX_CLIENTS, // Fully booked for January 2
  '2025-01-03': MAX_CLIENTS, // Fully booked for January 3
  '2025-01-06': MAX_CLIENTS, // Fully booked for January 6
})

const getDayColor = (date) => {
  const bookingsForDate = bookings[date]
  if (bookingsForDate < MAX_CLIENTS) return 'green' // Not yet available
  if (bookingsForDate >= MAX_CLIENTS) return 'red' // Fully booked
  return 'gray' // Available
}

const calendarOptions = ref({
  plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
  headerToolbar: {
    left: '',
    center: 'title',
    right: 'prev,next',
  },
  initialView: 'dayGridMonth',
  editable: false,
  showNonCurrentDates: false,
  selectable: true,
  selectMirror: true,
  weekends: true,
  events: (info, successCallback) => {
    const events = []

    // Loop through all the dates in the current view
    const startDate = info.startStr
    const endDate = info.endStr
    let currentDate = new Date(startDate)
    const endDateObj = new Date(endDate)

    // Add events for each day in the current view
    while (currentDate <= endDateObj) {
      const dateStr = currentDate.toISOString().split('T')[0]
      events.push({
        title: '',
        start: dateStr,
        backgroundColor: getDayColor(dateStr), // Apply background color
        borderColor: getDayColor(dateStr), // Apply border color
        textColor: 'White', // Optional: for better visibility of text
        extendedProps: {
          bookingsText: `Bookings: ${bookings[dateStr] || 0}/${MAX_CLIENTS}`, // Custom prop for bookings text
          date: dateStr // Include the date in the extended properties
        }
      })
      currentDate.setDate(currentDate.getDate() + 1)
    }

    // Return all the events to FullCalendar
    successCallback(events)
  },
  selectAllow: (selectInfo) => {
    // Allow only 2-day selection (difference between start and end must be 1 day)
    const startDate = selectInfo.start
    const endDate = selectInfo.end
    const diffDays = (endDate - startDate) / (1000 * 3600 * 24) // Difference in days
    return diffDays === 1 // Allow only 2-day selection
  },
  select: (selectInfo) => {
    selectedDate.value = `${selectInfo.startStr} to ${selectInfo.endStr}` // Update selected date range
    // Simulate adding a booking for the selected day (we'll add 1 client per selection)
    const selectedDay = selectInfo.startStr
    if (bookings[selectedDay] < MAX_CLIENTS) {
      bookings[selectedDay] = (bookings[selectedDay] || 0) + 1
    }
  },
  eventContent: (arg) => {
    const { bookingsText } = arg.event.extendedProps
    return {
      html: `<div style=" display:absolute border: solid 1px black; font-size: 12px; color: white; text-align:center;">
        ${bookingsText}
      </div>`,
    }
  },
})
</script>

<template>
  <div class="text-lg">Please Select a Date:</div>
  <p v-if="selectedDate" class="selected-date">
    Selected Date: <strong>{{ selectedDate }}</strong>
  </p>
  <div class="calendar-container">
    <main class="calendar-main">
      <FullCalendar class="calendar" :options="calendarOptions" />
    </main>
  </div>
</template>

<style scoped>
/* General Styles */
.calendar-container {
  display: flex;
  height: 100%;
  width: 100%;
  font-family: Roboto, Arial, Helvetica, sans-serif;
  font-size: 14px;
}

.selected-date {
  margin: 10px 0;
  font-size: 16px;
  font-weight: 500;
  color: #e60909;
}

/* Calendar Styles */
.calendar-main {
  width: 100%;
  height: 100%;
}

.calendar {
  margin: 0 auto;
}

/* Custom event content wrapper */
.fc-booking-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-end; /* Align text at the bottom */
  height: 100%;
  cursor: pointer;
}

/* Style the clickable bookings text */
.fc-bookings-text {
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  color: white;
  padding: 5px;
  font-size: 12px;
  border-radius: 3px;
  text-align: center;
  margin-top: auto; /* Push the text to the bottom */
  width: 100%;
}

/* Hover effect */
.fc-booking-wrapper:hover .fc-bookings-text {
  text-decoration: underline;
}
</style>
