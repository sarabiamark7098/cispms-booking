<script setup>
import { ref } from 'vue'
import RecordClientInfo from '@/components/RecordClientInfo.vue'
import RequestAssistance from '@/components/RequestAssistance.vue'
import ScheduleClient from '@/components/ScheduleClient.vue'
import UploadingDocuments from '@/components/UploadingDocuments.vue'

const currentStep = ref(1)

const RequestAssistanceForm = localStorage.getItem('assistance')
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
</script>
<template>
  <div>
    <!-- Step Navigation -->
    <div class="grid grid-cols-6 h-full w-full">
      <div class="col-start-2 col-end-6 rounded-3xl h-20 mt-32 mb-12">
        <ul class="w-full steps steps-vertical lg:steps-horizontal text-white font-extrabold">
          <li class="step" :class="{ 'step-warning': currentStep >= 1 }">Select Assistance</li>
          <li class="step" :class="{ 'step-warning': currentStep >= 2 }">Schedule</li>
          <li class="step" :class="{ 'step-warning': currentStep >= 3 }">Form</li>
          <li class="step" :class="{ 'step-warning': currentStep >= 4 }">Upload File</li>
        </ul>
      </div>
    </div>

    <!-- Step Content -->
    <div v-if="currentStep === 1">
      <div class="grid grid-cols-7 gap-4 sm:gap-9">
        <div class="col-start-2 col-end-7 bg-gray-200 rounded-3xl mb-20 p-6 sm:p-9">
          <RequestAssistance />
          <div class="grid grid-cols-6 gap-4 sm:gap-9 w-full mt-9">
            <div class="w-full col-start-1 col-span-1 sm:col-start-1 sm:col-span-3">
              <button
                class="btn btn-outline w-full btn-default btn-xs sm:btn-sm md:btn-md lg:btn-lg"
                @click="$router.push('/profile')"
              >
                Cancel
              </button>
            </div>
            <div class="w-full col-start-1 col-span-1 sm:col-start-4 sm:col-span-3">
              <button
                type="submit"
                @click="nextStep"
                class="btn w-full btn-primary hover:text-white btn-xs sm:btn-sm md:btn-md lg:btn-lg"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="currentStep === 2">
      <ScheduleClient
        :currentStep="currentStep"
        @nextStep="nextStep"
        @previousStep="previousStep"
      />
    </div>
    <div v-if="currentStep === 3">
      <RecordClientInfo
        :currentStep="currentStep"
        @nextStep="nextStep"
        @previousStep="previousStep"
      />
    </div>

    <div v-if="currentStep === 4">
      <UploadingDocuments :currentStep="currentStep" @previousStep="previousStep" />
    </div>
  </div>
</template>

<style scoped></style>
