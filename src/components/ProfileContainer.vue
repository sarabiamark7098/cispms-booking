<script setup>
import { onMounted, ref } from 'vue'
import { useFormStore } from '@/stores/storeform'
const phoneNumber = ref('+639') // Default to +639 for Philippine numbers
const phoneNumberError = ref(false)
const formStore = useFormStore()

// Method to format and validate phone number input
const formatPhoneNumber = () => {
  // Remove all non-digit characters except '+'
  let cleaned = phoneNumber.value.replace(/[^0-9+]/g, '')

  // If the number starts with +639, keep it and allow the rest to be a 10-digit number
  if (cleaned.startsWith('+639')) {
    // Allow only 13 characters (+639 + 10 digits)
    if (cleaned.length > 13) {
      cleaned = cleaned.slice(0, 13)
    }
  } else {
    // If the phone number doesn't start with +639, automatically prepend it
    if (!cleaned.startsWith('+639')) {
      cleaned = '+639' + cleaned.slice(4)
    }
  }

  // Update the model with the cleaned number
  phoneNumber.value = cleaned.slice(0, 13)

  // Validate phone number (ensure it starts with +639 and is 13 characters long)
  phoneNumberError.value = !/^(\+639)\d{9}$/.test(phoneNumber.value)
}

onMounted(() => {
  if (localStorage.getItem('form')) {
    formStore.clientForm = JSON.parse(localStorage.getItem('form'))
  }
})

defineEmits(['open-modal'])
</script>

<template>
  <form @submit.prevent="$emit('open-modal')">
    <div class="grid grid-cols-6 w-full pt-40">
      <div class="col-start-2 col-end-6 bg-gray-100 rounded-3xl mb-12 px-24 py-9">
        <div class="text-center font-extrabold text-3xl mb-9">Personal and Contact Details</div>
        <div class="grid grid-cols-6 gap-9 w-full">
          <div class="w-full col-start-1 col-span-4">
            <label>Apelyido (Last Name)<span class="text-red-600">*</span></label>
            <input
              type="text"
              placeholder="Last Name"
              className="input w-full bg-gray-100 border-black uppercase"
              v-model="formStore.clientForm.last_name"
              required
            />
          </div>
          <div class="w-full col-start-5 col-span-2">
            <label>Gitnang Pangalan (Middle Name)</label>
            <input
              type="text"
              placeholder="Middle Name"
              className="input w-full bg-gray-100 border-black uppercase"
            />
          </div>
          <div class="w-full col-start-1 col-span-4">
            <label>Unang Pangalan (First Name)<span class="text-red-600">*</span></label>
            <input
              type="text"
              placeholder="First Name"
              className="input w-full bg-gray-100 border-black uppercase"
              required
            />
          </div>
          <div class="w-full col-start-5 col-span-2">
            <label>Ext. (e.g. JR. SR.)</label>
            <select class="select border-black bg-gray-100 w-full uppercase">
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
          <div class="w-full col-start-1 col-span-3">
            <label>Contact Number (+63)<span class="text-red-600">*</span></label>
            <input
              id="phoneNumber"
              v-model="phoneNumber"
              type="tel"
              maxlength="13"
              placeholder="Enter your phone number"
              class="input w-full bg-gray-100 border-black"
              :class="{ 'border-red-600': phoneNumberError }"
              @input="formatPhoneNumber"
              required
            />
            <p v-if="phoneNumberError" class="text-red-600 text-sm mt-1">
              Invalid phone number. Must be +639 followed by 9 digits.
            </p>
            <!-- <input
              type="text"
              placeholder="Contact Number"
              className="input w-full bg-gray-100 border-black"
              required
            /> -->
          </div>
          <div class="w-full col-start-4 col-span-3">
            <label>Email Address<span class="text-red-600">*</span></label>
            <input
              type="email"
              placeholder="Email"
              className="input w-full bg-gray-100 border-black"
              required
            />
          </div>

          <div class="w-full col-start-1 col-span-3">
            <button
              className="btn btn-outline w-full btn-default btn-xs sm:btn-sm md:btn-md lg:btn-lg"
              @click="$router.push('/')"
            >
              Cancel
            </button>
          </div>
          <div class="w-full col-start-4 col-span-3">
            <button
              type="submit"
              className="btn w-full btn-primary hover:text-white btn-xs sm:btn-sm md:btn-md lg:btn-lg"
              :disabled="phoneNumberError"
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
