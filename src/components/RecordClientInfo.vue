<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { useFormStoreRequestor } from '@/stores/storeform'
import BeneficiaryInfo from '@/components/BeneficiaryInfo.vue'
import ClientInfo from '@/components/ClientInfo.vue'
import FamilyComposition from '@/components/familyComposition.vue'

const formStore = useFormStoreRequestor()
const requestor = ref('') // Define requestor as a reactive reference
const family = ref(false)
// Sync data with localStorage on mount
onMounted(() => {
  const storedRequestor = localStorage.getItem('requestor')
  if (storedRequestor) {
    const parsedData = JSON.parse(storedRequestor)
    formStore.requestorForm = parsedData // Update the store
    requestor.value = parsedData.requestor // Sync local ref
  }
})

// Watch for changes in requestor and sync them
watch(requestor, (newValue) => {
  formStore.requestorForm.requestor = newValue // Update the store
  localStorage.setItem('requestor', JSON.stringify(formStore.requestorForm)) // Persist to localStorage
})

// Computed properties
const isClientRequestor = computed(() => requestor.value === 'Client')
const isBeneficiaryRequestor = computed(() => requestor.value === 'Beneficiary')

// Props for current step
defineProps({
  currentStep: {
    type: Number,
    required: true,
  },
})
const currentRecord = ref(1)
// Emit events for navigation
const emit = defineEmits(['nextStep', 'previousStep'])

const handleNext = () => {
  emit('nextStep')
}
const handlePrevious = () => {
  emit('previousStep')
}

const nextRecord = () => {
  if (currentRecord.value < 3) {
    currentRecord.value++
  }
}

const previousRecord = () => {
  if (currentRecord.value > 1) {
    currentRecord.value--
  }
}
</script>

<template>
  <div class="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 px-4 lg:px-8">
    <!-- Requesting Type Section -->
    <div class="lg:col-start-2 lg:col-end-4 bg-gray-200 rounded-3xl mb-8 lg:mb-20 p-6 sm:p-8">
      <p class="font-semibold mb-3">Requesting as:</p>
      <select
        v-model="requestor"
        class="input w-full bg-gray-100 border-black mb-8 lg:mb-9"
        required
      >
        <option value="" disabled selected>Request Type</option>
        <option value="Beneficiary">Beneficiary (Yourself)</option>
        <option value="Client">Client</option>
      </select>
    </div>

    <!-- Client Information Section -->
    <div class="lg:col-start-4 lg:col-end-12 bg-gray-200 rounded-3xl mb-8 lg:mb-20 p-6 sm:p-8">
      <!-- Beneficiary Information -->
      <div v-if="isBeneficiaryRequestor">
        <div v-if="currentRecord == 1">
          <div class="flex justify-between mb-6">
            <div class="w-[90%]">
              <p class="text-md font-bold">
                IMPORMASYON NG Benepisyaryo <span>(Beneficiary's Identifying Information)</span>
              </p>
            </div>
            <div class="w-[10%] text-md text-right">1/2</div>
          </div>

          <BeneficiaryInfo />
        </div>
        <div v-if="currentRecord == 2">
          <div class="flex justify-between mb-6">
            <div class="w-[90%]">
              <p class="text-md font-bold">
                KOMPOSISYON NG PAMILYA <span>(Family Composition)</span>
              </p>
            </div>
            <div class="w-[10%] text-md text-right">2/2</div>
          </div>
          <FamilyComposition />
        </div>
      </div>

      <!-- Client Information -->
      <div v-if="isClientRequestor">
        <div v-if="currentRecord == 1">
          <div class="flex justify-between mb-6">
            <div class="w-[90%]">
              <p class="text-md font-bold">To be filled out by Client</p>
              <p class="text-md font-bold">
                IMPORMASYON NG KINATAWAN <span>(Client's Identifying Information)</span>
              </p>
            </div>
            <div class="w-[10%] text-md text-right">1/3</div>
          </div>
          <ClientInfo />
        </div>
        <div v-if="currentRecord == 2">
          <div class="flex justify-between mb-6">
            <div class="w-[90%]">
              <p class="text-md font-bold">
                IMPORMASYON NG Benepisyaryo <span>(Beneficiary's Identifying Information)</span>
              </p>
            </div>
            <div class="w-[10%] text-md text-right">2/3</div>
          </div>
          <BeneficiaryInfo />
        </div>
        <div v-if="currentRecord == 3">
          <div class="flex justify-between mb-6">
            <div class="w-[90%]">
              <p class="text-md font-bold">
                KOMPOSISYON NG PAMILYA <span>(Family Composition)</span>
              </p>
            </div>
            <div class="w-[10%] text-md text-right">3/3</div>
          </div>
          <FamilyComposition />
        </div>
      </div>
      <!-- Navigation Buttons -->
      <div class="grid grid-cols-2 gap-4 sm:gap-6 w-full mt-8">
        <div v-if="currentRecord >= 2">
          <button @click="previousRecord" class="btn btn-outline w-full btn-default">
            Previous
          </button>
        </div>
        <div v-if="currentRecord == 1">
          <button @click="handlePrevious" class="btn btn-outline w-full btn-default">
            Previous
          </button>
        </div>
        <div
          v-if="
            (currentRecord <= 1 && isBeneficiaryRequestor) ||
            (currentRecord <= 2 && isClientRequestor)
          "
        >
          <button @click="nextRecord" type="button" class="btn btn-primary w-full">Next</button>
        </div>

        <div
          v-if="
            (currentRecord == 2 && isBeneficiaryRequestor) ||
            (currentRecord == 3 && isClientRequestor)
          "
        >
          <button @click="handleNext" type="button" class="btn btn-primary w-full">Next</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
label {
  font-weight: 600;
  color: #374151;
}
.input {
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  padding: 0.5rem;
}
</style>
