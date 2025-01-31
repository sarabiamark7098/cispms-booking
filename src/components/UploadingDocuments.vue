<script setup>
import { ref } from 'vue'

const uploadedFiles = ref([])

const handleFileUpload = (event) => {
  const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg']
  const newFiles = Array.from(event.target.files)
    .filter((file) => allowedTypes.includes(file.type))
    .map((file) => {
      return {
        name: file.name,
        preview: URL.createObjectURL(file),
      }
    })
  uploadedFiles.value = [...uploadedFiles.value, ...newFiles]
}

defineProps({
  currentStep: {
    type: Number,
    required: true,
  },
})
// Emit events for navigation
const emit = defineEmits(['previousStep'])

const handlePrevious = () => {
  emit('previousStep')
}

const nextRecord = () => {
  if (currentRecord.value < 3) {
    currentRecord.value++
  }
}
</script>
<template>
  <div class="grid grid-cols-1 md:grid-cols-6 w-full pt-10 px-4 sm:px-8">
    <div
      class="col-start-1 md:col-start-2 md:col-end-6 bg-gray-100 rounded-3xl mb-12 px-6 sm:px-16 py-8 md:py-12"
    >
      <div class="relative">
        <div class="static w-full">
          <div class="flex flex-wrap justify-center">
            <!-- Card Items -->
            <div
              v-for="item in items"
              :key="item.name"
              class="relative inline-flex items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2"
            >
              <div
                class="bg-[#B8C1EC] border-4 border-[#B8C1EC] w-full rounded-xl aspect-square px-2 py-5 flex flex-col items-center hover:bg-[#F6F6F6] hover:border-4 hover:border-[#F2A800] cursor-pointer"
                @click="openModal(item)"
              >
                <div class="h-[70px]">
                  <p class="font-bold text-lg mb-5 text-center">{{ item.name }}</p>
                </div>
                <img :src="item.image" :alt="item.name" class="max-h-[120px] mb-7" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- File Upload Section -->
      <div class="mt-6">
        <label class="block text-lg font-medium text-gray-700">Upload Required Documents</label>
        <input
          type="file"
          @change="handleFileUpload"
          multiple
          accept=".png, .jpg, .jpeg"
          class="mt-2 p-2 border border-gray-300 rounded-lg w-full"
        />
        <div
          v-if="uploadedFiles.length"
          class="mt-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
        >
          <div
            v-for="(file, index) in uploadedFiles"
            :key="index"
            class="text-sm text-gray-600 text-center"
          >
            <img
              :src="file.preview"
              class="w-full h-24 object-cover rounded-lg border border-gray-300"
            />
            <p class="mt-1 truncate">{{ file.name }}</p>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-5 mt-6">
        <!-- Buttons -->
        <div class="w-full">
          <button class="btn btn-outline w-full btn-default btn-sm md:btn-md lg:btn-lg" @click="handlePrevious">
            Previous
          </button>
        </div>
        <div class="w-full">
          <button
            type="submit"
            class="btn w-full btn-primary hover:text-white btn-sm md:btn-md lg:btn-lg"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 640px) {
  .grid-cols-6 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  .w-full.sm\:w-1\/2.md\:w-1\/3.lg\:w-1\/4.px-2 {
    width: 100%;
  }
}
@media (min-width: 640px) and (max-width: 1024px) {
  .grid-cols-6 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .w-full.sm\:w-1\/2.md\:w-1\/3.lg\:w-1\/4.px-2 {
    width: 50%;
  }
}
@media (min-width: 1024px) {
  .w-full.sm\:w-1\/2.md\:w-1\/3.lg\:w-1\/4.px-2 {
    width: 33.33%;
  }
}
</style>
