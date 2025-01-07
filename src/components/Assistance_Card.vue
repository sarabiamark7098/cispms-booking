<script setup>
const items = [
  {
    name: 'Medical Assistance for Hospital Bill',
    image: '../src/components/icons/HospitalBill.png',
  },
  {
    name: 'Medical Assistance for Medicine / Assistive Device',
    image: '../src/components/icons/Medicine.png',
  },
  {
    name: 'Medical Assistance for Laboratory Requests',
    image: '../src/components/icons/Laboratory.png',
  },
  {
    name: 'Burial Assistance or Transfer of Cadaver',
    image: '../src/components/icons/Funeral.png',
  },
  {
    name: 'Educational Assistance',
    image: '../src/components/icons/Educational.png',
  },
  {
    name: 'Food Assistance',
    image: '../src/components/icons/Food.png',
  },
  {
    name: 'Cash Assistance for Other Support Services',
    image: '../src/components/icons/Cash.png',
  },
]
</script>

<template>
  <div class="relative">
    <div class="static w-full">
      <div class="flex flex-wrap justify-center">
        <div class="" v-for="item in items" :key="item.name" @click="console.log('hello')">
          <div
            class="bg-white w-[260px] h-58 rounded-xl aspect-square px-2 py-5 mx-3 mb-5 flex flex-col items-center hover:bg-blue-200"
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
</template>

<style scoped></style>
