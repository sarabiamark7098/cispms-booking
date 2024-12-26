<!-- <script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'

import RecordClientInfo from '@/components/RecordClientInfo.vue'
import RequestAssistance from '@/components/RequestAssistance.vue'
import ScheduleClient from '@/components/ScheduleClient.vue'

const route = useRoute()

const isAssistance = computed(() => route.path === '/request/assistance')
const isSchedule = computed(() => route.path === '/request/schedule')
const isClient = computed(() => route.path === '/request/client')
// const isUpload = computed(() => route.path === '/request/upload')
</script>

<template>
  <div>
    <div class="grid grid-cols-6 h-full w-full">
      <div class="col-start-2 col-end-6 rounded-3xl h-20 mt-32 mb-12">
        <ul className="w-full steps steps-vertical lg:steps-horizontal text-white font-extrabold">
          <li className="step">Select Assistance</li>
          <li className="step">Schedule</li>
          <li className="step">Form</li>
          <li className="step">Upload File</li>
        </ul>
      </div>
    </div>
    <div class="grid grid-cols-6 w-full">
      <div class="col-start-2 col-end-6 bg-gray-200 rounded-3xl mb-20 p-9">
        <RequestAssistance v-if="isAssistance" />
        <ScheduleClient v-if="isSchedule" />
        <RecordClientInfo v-if="isClient" />
      </div>
    </div>
  </div>
</template> -->
<script setup>
import { ref } from 'vue'
import RecordClientInfo from '@/components/RecordClientInfo.vue'
import RequestAssistance from '@/components/RequestAssistance.vue'
import ScheduleClient from '@/components/ScheduleClient.vue'

const currentStep = ref(1)

const form = ref({
  name: '',
  address: '',
})

const nextStep = () => {
  if (currentStep.value < 4) {
    currentStep.value++
  }
}

const previousStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--
  }
}

const submitForm = () => {
  alert(`Form Submitted!\nName: ${form.value.name}\nAddress: ${form.value.address}`)
  // Handle form submission logic here (e.g., send data to an API)
}
</script>
<template>
  <div>
    <!-- Step Navigation -->
    <div class="grid grid-cols-6 h-full w-full">
      <div class="col-start-2 col-end-6 rounded-3xl h-20 mt-32 mb-12">
        <ul class="w-full steps steps-vertical lg:steps-horizontal text-white font-extrabold">
          <li class="step step-warning">Select Assistance</li>
          <li class="step step-warning">Schedule</li>
          <li class="step step-warning">Form</li>
          <li class="step step-warning">Upload File</li>
        </ul>
      </div>
    </div>

    <!-- Step Content -->
    <div v-if="currentStep === 1">
      <div class="grid grid-cols-6 w-full">
        <div class="col-start-2 col-end-6 bg-gray-200 rounded-3xl mb-20 p-9">
          <RequestAssistance />
          <div class="grid grid-cols-6 gap-9 w-full mt-9">
            <div class="w-full col-start-1 col-span-3">
              <button
                className="btn btn-outline w-full btn-default btn-xs sm:btn-sm md:btn-md lg:btn-lg"
                @click="$router.push('/profile')"
              >
                Cancel
              </button>
            </div>
            <div class="w-full col-start-4 col-span-3">
              <button
                type="submit"
                @click="nextStep"
                className="btn w-full btn-primary hover:text-white btn-xs sm:btn-sm md:btn-md lg:btn-lg "
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="currentStep === 2">
      <ScheduleClient />
    </div>
    <div v-if="currentStep === 3">
      <RecordClientInfo />
    </div>
  </div>
</template>
