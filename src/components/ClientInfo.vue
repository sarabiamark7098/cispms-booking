<script setup>
import { ref } from 'vue'
</script>
<template>
  <div>
    <!-- Input Fields -->
    <div class="flex flex-wrap gap-4 sm:gap-6 text-sm">
      <div class="w-full sm:w-[48%] lg:w-[25%]">
        <label for="lastname" class="block mb-1">Apelyido <span>(Last Name)</span></label>
        <input type="text" id="lastname" placeholder="" class="input w-full" />
      </div>
      <div class="w-full sm:w-[48%] lg:w-[25%]">
        <label for="firstname" class="block mb-1">Unang Pangalan <span>(First Name)</span></label>
        <input type="text" id="firstname" placeholder="" class="input w-full" />
      </div>
      <div class="w-full sm:w-[48%] lg:w-[25%]">
        <label for="middlename" class="block mb-1"
          >Gitnang Pangalan <span>(Middle Name)</span></label
        >
        <input type="text" id="middlename" placeholder="" class="input w-full" />
      </div>
      <div class="w-[48%] lg:w-[10%]">
        <label for="extname" class="block mb-1">Ext. <span>(Sr. Jr.)</span></label>
        <input type="text" id="extname" placeholder="" class="input w-full" />
      </div>
      <div class="w-full sm:w-[48%] lg:w-[30%]">
        <label for="house" class="block mb-1">House No./Street/Purok <span>(Purok 12)</span></label>
        <input type="text" id="house" placeholder="" class="input w-full" />
      </div>
      <div class="w-full sm:w-[48%] lg:w-[20%]">
        <label for="barangay" class="block mb-1">Barangay <span>(e.g 23-C)</span></label>
        <input type="text" id="barangay" placeholder="" class="input w-full" />
      </div>
      <div class="w-full sm:w-[48%] lg:w-[20%]">
        <label for="municipality" class="block mb-1"
          >Municipality <span>(e.g Davao City)</span></label
        >
        <input type="text" id="municipality" placeholder="" class="input w-full" />
      </div>
      <div class="w-full sm:w-[48%] lg:w-[15%]">
        <label for="province" class="block mb-1">Province/District</label>
        <input type="text" id="province" placeholder="" class="input w-full" />
      </div>
      <div class="w-[48%] lg:w-[11%]">
        <label for="region" class="block mb-1">Region <span>(e.g XI)</span></label>
        <input type="text" id="region" placeholder="" class="input w-full" />
      </div>
      <div class="w-full sm:w-[48%] lg:w-[25%]">
        <label for="phoneNumber" class="block mb-1"
          >Numero ng Telepono <span>(Phone Number)</span></label
        >
        <input type="text" id="phoneNumber" placeholder="" class="input w-full" />
      </div>
      <div class="w-full sm:w-[48%] lg:w-[17%]">
        <label for="birthday" class="block mb-1">Kapanganakan <span>(Birthdate)</span></label>
        <input type="date" id="birthday" placeholder="" class="input w-full" />
      </div>
      <div class="w-[48%] lg:w-[7%]">
        <label for="age" class="block mb-1">Edad</label>
        <input type="text" id="age" placeholder="" class="input w-full" />
      </div>
      <div class="w-[48%] lg:w-[7%]">
        <label for="Sex" class="block mb-1">Kasarian</label>
        <input type="text" id="Sex" placeholder="" class="input w-full" />
      </div>
      <div class="w-full sm:w-[48%] lg:w-[10%]">
        <label for="civilStatus" class="block mb-1">Civil Status</label>
        <input type="text" id="civilStatus" placeholder="" class="input w-full" />
      </div>
      <div class="w-full sm:w-[48%] lg:w-[16%]">
        <label for="work" class="block mb-1">Trabaho</label>
        <input type="text" id="work" placeholder="" class="input w-full" />
      </div>
      <div class="w-full sm:w-[48%] lg:w-[12%]">
        <label for="salary" class="block mb-1">Buwanang Kita</label>
        <input type="text" id="salary" placeholder="" class="input w-full" />
      </div>

      <div class="w-full sm:w-[100%] lg:w-[50%]">
        <label for="salary" class="block mb-1"
          >Relasyon sa Benepisyaryo <span>(Relationship to the Beneficiary)</span></label
        >
        <input type="text" id="salary" placeholder="" class="input w-full" />
      </div>
    </div>
  </div>
</template>
