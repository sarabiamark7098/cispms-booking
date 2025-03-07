<script setup>
import { onMounted, ref } from 'vue'
import { useFormStoreClient } from '@/stores/storeform'
import { vMaska } from 'maska/vue'

const formClientStore = useFormStoreClient()

onMounted(() => {
  if (localStorage.getItem('client')) {
    formClientStore.clientForm = JSON.parse(localStorage.getItem('client'))
  }
})

defineProps({
  show: {
    type: Boolean,
    required: true,
  },
})

defineEmits(['open-modal'])
</script>

<template>
  <form @submit.prevent="$emit('open-modal')" method="POST">
    <div class="grid grid-cols-1 md:grid-cols-6 w-full pt-10 md:pt-40 px-4 sm:px-8">
      <div
        class="col-start-1 md:col-start-2 md:col-end-6 bg-gray-100 rounded-3xl mb-12 px-6 sm:px-16 py-8 md:py-12"
      >
        <div class="text-center font-extrabold text-2xl sm:text-3xl mb-6 sm:mb-9">
          Personal and Contact Details
        </div>

        <div class="grid grid-cols-1 md:grid-cols-6 gap-6 sm:gap-9 w-full">
          <!-- Last Name -->
          <div class="w-full md:col-span-4">
            <label>Apelyido (Last Name)<span class="text-red-600">*</span></label>
            <input
              type="text"
              placeholder="Last Name"
              class="input w-full bg-gray-100 border-black uppercase"
              v-model="formClientStore.clientForm.lastName"
              required
            />
          </div>

          <!-- Middle Name -->
          <div class="w-full md:col-span-2">
            <label>Gitnang Pangalan (Middle Name)</label>
            <input
              type="text"
              placeholder="Middle Name"
              v-model="formClientStore.clientForm.middleName"
              class="input w-full bg-gray-100 border-black uppercase"
            />
          </div>

          <!-- First Name -->
          <div class="w-full md:col-span-4">
            <label>Unang Pangalan (First Name)<span class="text-red-600">*</span></label>
            <input
              type="text"
              placeholder="First Name"
              v-model="formClientStore.clientForm.firstName"
              class="input w-full bg-gray-100 border-black uppercase"
              required
            />
          </div>

          <!-- Extension -->
          <div class="w-full md:col-span-2">
            <label>Ext. (e.g. JR. SR.)</label>
            <select
              class="select border-black bg-gray-100 w-full uppercase"
              v-model="formClientStore.clientForm.extensionName"
            >
              <option disabled selected>Extension Name</option>
              <option>JR.</option>
              <option>SR.</option>
              <option>I</option>
              <option>II</option>
              <option>III</option>
              <option>IV</option>
              <option>V</option>
              <option>VI</option>
              <option>VII</option>
              <option>VIII</option>
              <option>IX</option>
              <option>X</option>
              <option>XI</option>
              <option>XII</option>
            </select>
          </div>

          <!-- Contact Number -->
          <div class="w-full md:col-span-3">
            <label>Contact Number<span class="text-red-600">*</span></label>
            <input
              id="contactNumber"
              v-model="formClientStore.clientForm.contactNumber"
              type="text"
              maxlength="13"
              placeholder="09## #### ###"
              class="input maska w-full bg-gray-100 border-black"
              v-maska="'09## #### ###'"
              required
            />
          </div>

          <!-- Email -->
          <div class="w-full md:col-span-3">
            <label>Email Address<span class="text-red-600">*</span></label>
            <input
              type="email"
              placeholder="Email"
              v-model="formClientStore.clientForm.email"
              class="input w-full bg-gray-100 border-black"
              required
            />
          </div>

          <!-- Buttons -->
          <div class="w-full md:col-span-3">
            <button
              class="btn btn-outline w-full btn-default btn-sm md:btn-md lg:btn-lg"
              @click="$router.push('/'), formClientStore.resetClientForm()"
            >
              Cancel
            </button>
          </div>
          <div class="w-full md:col-span-3">
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
  </form>
</template>

<style scoped></style>
