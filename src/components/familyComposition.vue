<script setup>
import { ref } from 'vue'

// Reactive array to store family members
const familyMembers = ref([{ id: 1, name: '', relationship: '', age: '', job: '', salary: '' }])

// Function to add a new member input field
const addMember = () => {
  familyMembers.value.push({
    id: Date.now(),
    name: '',
    relationship: '',
    age: '',
    job: '',
    salary: '',
  })
}

// Function to remove a specific member
const removeMember = (id) => {
  familyMembers.value = familyMembers.value.filter((member) => member.id !== id)
}
</script>

<template>
  <div class="p-4">
    <h2 class="text-xl font-bold mb-4">Family Members</h2>

    <!-- Table Headers -->
    <div class="hidden sm:grid grid-cols-5 gap-2 font-bold mb-2 text-sm text-center">
      <div class="flex items-center justify-center">
        <div><b>Buong Pangalan</b> <span>(Complete Name)</span></div>
      </div>
      <div class="flex items-center justify-center">
        <div><b>Relasyon sa Benepisyaryo</b> <span>(Relationship to Beneficiary)</span></div>
      </div>
      <div class="flex items-center justify-center">
        <div><b>Edad</b> <span>(Age)</span></div>
      </div>
      <div class="flex items-center justify-center">
        <div><b>Trabaho</b> <span>(Occupation)</span></div>
      </div>
      <div class="flex items-center justify-center">
        <div><b>Buwanang Kita</b> <span>(Monthly Salary)</span></div>
      </div>
    </div>

    <!-- Family Member Inputs -->
    <div class="flex flex-col gap-4">
      <div
        v-for="(member, index) in familyMembers"
        :key="member.id"
        class="grid sm:grid-cols-5 gap-2 items-center"
      >
        <!-- Input Fields -->
        <input
          v-model="member.name"
          type="text"
          placeholder="Pangalan"
          class="border p-2 rounded w-full"
        />
        <input
          v-model="member.relationship"
          type="text"
          placeholder="Relasyon"
          class="border p-2 rounded w-full"
        />
        <input
          v-model="member.age"
          type="number"
          placeholder="Edad"
          class="border p-2 rounded w-full"
        />
        <input
          v-model="member.job"
          type="text"
          placeholder="Trabaho"
          class="border p-2 rounded w-full"
        />
        <input
          v-model="member.salary"
          type="number"
          placeholder="Buwanang Kita"
          class="border p-2 rounded w-full"
        />
        <!-- Remove Button -->
        <button
          v-if="familyMembers.length > 1"
          @click="removeMember(member.id)"
          class="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Remove
        </button>
      </div>
    </div>

    <!-- Add Member Button -->
    <button
      @click="addMember"
      class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center gap-2"
    >
      <span>+</span> Add Member
    </button>
  </div>
</template>
