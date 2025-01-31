<script setup>
import { ref, onMounted } from 'vue'
import { useFormStoreAssistance } from '@/stores/storeform'

const formStore = useFormStoreAssistance()
const inputValue = ref('') // Binds to the input field
const isModalOpen = ref(false) // Controls modal visibility
const selectedItem = ref(null) // Holds the details of the selected item
const isLoading = ref(false) // Tracks loading state for modal content

onMounted(() => {
  if (localStorage.getItem('assistance')) {
    formStore.AssistanceForm = JSON.parse(localStorage.getItem('assistance'))
    inputValue.value = formStore.AssistanceForm.TypeOfAssistance // Sync input value with store state
  }
})

// Items array
const items = [
  {
    name: 'Medical Assistance for Hospital Bill',
    image: '../src/components/icons/HospitalBill.png',
    requirements: [
      {
        brgy: ['Barangay Certificate', '../src/components/icons/Certificates_as.png'],
        med: ['Medical Certificate', '../src/components/icons/Certificates_as.png'],
        bill: ['Latest Final Hospital Bill', '../src/components/icons/Laboratory_as.png'],
        id: ['Valid ID', '../src/components/icons/validID_as.png'],
        letter: ['Authorization Letter (Optional)', '../src/components/icons/Laboratory_as.png'],
        case: ['Social Case Study Report (Optional)', '../src/components/icons/Letter_as.png'],
      },
    ],
  },
  {
    name: 'Medical Assistance for Medicine / Assistive Device',
    image: '../src/components/icons/Medicine.png',
    requirements: [
      {
        brgy: ['Barangay Certificate', '../src/components/icons/Certificates_as.png'],
        med: ['Medical Certificate', '../src/components/icons/Certificates_as.png'],
        bill: ['Prescription', '../src/components/icons/Laboratory_as.png'],
        id: ['Valid ID', '../src/components/icons/validID_as.png'],
        letter: ['Authorization Letter (Optional)', '../src/components/icons/Laboratory_as.png'],
        case: ['Social Case Study Report (Optional)', '../src/components/icons/Letter_as.png'],
      },
    ],
  },
  {
    name: 'Medical Assistance for Laboratory Requests',
    image: '../src/components/icons/Laboratory.png',
    requirements: [
      {
        brgy: ['Barangay Certificate', '../src/components/icons/Certificates_as.png'],
        med: ['Medical Certificate', '../src/components/icons/Certificates_as.png'],
        bill: ['Prescription', '../src/components/icons/Laboratory_as.png'],
        id: ['Valid ID', '../src/components/icons/validID_as.png'],
        letter: ['Authorization Letter (Optional)', '../src/components/icons/Laboratory_as.png'],
        case: ['Social Case Study Report (Optional)', '../src/components/icons/Letter_as.png'],
      },
    ],
  },
  {
    name: 'Burial Assistance or Transfer of Cadaver',
    image: '../src/components/icons/Funeral.png',
    requirements: [
      {
        brgy: ['Barangay Certificate', '../src/components/icons/Certificates_as.png'],
        med: ['Death Certificate', '../src/components/icons/Certificates_as.png'],
        bill: ['Funeral Contract', '../src/components/icons/Laboratory_as.png'],
        id: ['Valid ID', '../src/components/icons/validID_as.png'],
        letter: ['Authorization Letter (Optional)', '../src/components/icons/Laboratory_as.png'],
        case: ['Social Case Study Report (Optional)', '../src/components/icons/Letter_as.png'],
      },
    ],
  },
  {
    name: 'Educational Assistance',
    image: '../src/components/icons/Educational.png',
    requirements: [
      {
        brgy: ['Barangay Certificate', '../src/components/icons/Certificates_as.png'],
        med: ['Enrollment Form', '../src/components/icons/Laboratory_as.png'],
        id_student: ['Student ID', '../src/components/icons/validID_as.png'],
        id: ['Valid ID (Guardian)', '../src/components/icons/validID_as.png'],
        letter: ['Authorization Letter (Optional)', '../src/components/icons/Laboratory_as.png'],
        case: ['Social Case Study Report (Optional)', '../src/components/icons/Letter_as.png'],
      },
    ],
  },
  {
    name: 'Food Assistance',
    image: '../src/components/icons/Food.png',
    requirements: [
      {
        brgy: ['Barangay Certificate', '../src/components/icons/Certificates_as.png'],
        id: ['Valid ID', '../src/components/icons/validID_as.png'],
      },
    ],
  },
  {
    name: 'Cash Assistance for Other Support Services',
    image: '../src/components/icons/Cash.png',
    requirements: [
      {
        brgy: ['Barangay Certificate', '../src/components/icons/Certificates_as.png'],
        letter: ['Request Letter', '../src/components/icons/Letter_as.png'],
        id: ['Valid ID', '../src/components/icons/validID_as.png'],
        case: ['Social Case Study Report (Optional)', '../src/components/icons/Letter_as.png'],
      },
    ],
  },
]

const selectItem = async (item) => {
  formStore.updateTypeOfAssistance(item.name) // Update store state using helper method
  inputValue.value = item.name // Reflect selection in input field
  isModalOpen.value = false // Close modal
}

const openModal = async (item) => {
  isLoading.value = true // Set loading to true
  selectedItem.value = null // Reset selected item

  // Simulate an async operation (e.g., fetching data)
  await new Promise((resolve) => setTimeout(resolve, 300))

  selectedItem.value = item // Set the selected item after loading
  isLoading.value = false // Loading complete
  isModalOpen.value = true // Open modal
}

const closeModal = () => {
  isModalOpen.value = false // Close modal
}
</script>

<template>
  <!-- Modal -->
  <div class="modal modal-open" v-if="isModalOpen">
    <div class="modal-box custom-modal-xl">
      <h3 class="font-bold text-3xl text-center">I HAVE THE FOLLOWING DOCUMENTS WITH ME</h3>
      <h3 class="font-bold text-2xl text-center mb-5">
        (Anaa kanako ang mosunod nga mga dokumento.)
      </h3>
      <div class="flex flex-wrap justify-center">
        <div
          v-for="(value, key, index) in selectedItem.requirements[0]"
          :key="key"
          class="w-[40%] mb-8 place-content-center place-item-center px-6"
        >
          <div class="grid grid-cols-4 gap-24">
            <div class="col-span-1">
              <div
                class="bg-blue-700 border-blue-700 h-24 w-24 rounded-xl place-content-center place-items-center"
              >
                <img :src="value[1]" :alt="value[0]" class="h-12 object-contain" />
              </div>
            </div>
            <div class="col-span-3">
              <div class="text-xl text-gray-500 h-full place-content-center">
                (1) {{ value[0] }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex">
        <div class="w-full">
          <button @click="closeModal" class="btn w-[40%] ml-[5%] mr-[10%]">Close</button>
          <button @click="selectItem(selectedItem)" class="btn btn-primary w-[40%] mr-[5%]">
            Proceed
          </button>
        </div>
      </div>
    </div>
  </div>

  <div class="relative">
    <div class="static w-full">
      <div class="flex flex-wrap justify-center">
        <!-- Card Items -->
        <div v-for="item in items" type="button" class="relative inline-flex items-center">
          <div
            class="bg-[#B8C1EC] border-4 border-[#B8C1EC] w-[260px] h-58 rounded-xl aspect-square px-2 py-5 mx-3 mb-5 flex flex-col items-center hover:bg-[#F6F6F6] hover:border-4 hover:border-[#F2A800] cursor-pointer"
            @click="openModal(item)"
          >
            <div class="h-[70px]">
              <p class="font-bold text-lg mb-5 text-center">{{ item.name }}</p>
            </div>
            <img :src="item.image" :alt="item.name" class="max-h-[120px] mb-7" />
          </div>

          <div
            v-if="item.name == inputValue"
            class="absolute inline-flex items-center justify-center w-12 h-12 bg-[#229720] rounded-full -top-4 -end-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 21">
              <path
                d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
                fill="#FFFFFF"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.custom-modal-xl {
  width: 90% !important; /* Force width to 90% of the viewport */
  max-width: 1000px !important; /* Limit maximum width */
  height: auto !important; /* Adjust height dynamically */
  max-height: 90vh !important; /* Prevent overflow beyond viewport */
  overflow-y: auto !important; /* Enable scrolling for overflow content */
}

/* Use >>> or /deep/ to ensure scoped styles apply */
:deep(.modal-box) {
  width: 90% !important; /* Ensure modal width adjustment works */
  max-width: 1000px !important;
}
</style>
