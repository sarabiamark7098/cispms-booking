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
        <ul class="w-full steps steps-horizontal text-white font-extrabold">
          <li class="step" :class="{ 'step-warning': currentStep >= 1 }">
            <span>Select Assistance</span>
          </li>
          <li class="step" :class="{ 'step-warning': currentStep >= 2 }"><span>Schedule</span></li>
          <li class="step" :class="{ 'step-warning': currentStep >= 3 }"><span>Form</span></li>
          <li class="step" :class="{ 'step-warning': currentStep >= 4 }">
            <span>Upload File</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- Step Content -->
    <div v-if="currentStep === 1" class="w-full flex justify-center p-6 lg:px-64">
      <div class="col-start-2 col-end-7 bg-gray-200 rounded-3xl mb-20 p-6 sm:p-9">
        <RequestAssistance />
        <!-- Button Container -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mt-9">
          <!-- Cancel Button -->
          <button
            class="btn btn-outline w-full btn-default btn-sm sm:btn-md lg:btn-lg"
            @click="$router.push('/profile')"
          >
            Cancel
          </button>

          <!-- Next Button -->
          <button
            type="submit"
            @click="nextStep"
            class="btn w-full btn-primary hover:text-white btn-sm sm:btn-md lg:btn-lg"
          >
            Next
          </button>
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
