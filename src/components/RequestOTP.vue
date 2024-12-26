<script setup>
import { ref, computed } from 'vue'

const otpArray = ref(Array(6).fill('')) // 6-digit OTP

const isLoading = ref(false)
const phone = '0917xxxxxxx' // Example phone number

const maskedPhone = computed(() => {
  // Mask the phone number
  return `${phone.slice(0, 4)}****${phone.slice(-3)}`
})

const isOtpComplete = computed(() => otpArray.value.every((digit) => digit.trim().length > 0))

const handleInput = (index, event) => {
  const value = event.target.value
  if (/^\d$/.test(value)) {
    otpArray.value[index] = value // Only accept single digit
    const nextField = event.target.nextElementSibling
    if (nextField) nextField.focus() // Move to the next input
  } else {
    event.target.value = '' // Clear invalid input
  }
}

const handleBackspace = (index, event) => {
  if (event.target.value === '' && index > 0) {
    const prevField = event.target.previousElementSibling
    if (prevField) prevField.focus() // Move to the previous input
  }
}

const submitOtp = async () => {
  if (!isOtpComplete.value) return

  isLoading.value = true
  const otp = otpArray.value.join('') // Combine OTP digits
  console.log(`Submitting OTP: ${otp}`) // Debugging
  try {
    window.location.href = '/request'
    // const response = await fetch('/api/verify-otp', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ otp }),
    // })
    // const result = await response.json()
    // if (result.success) {
    //   alert('OTP Verified Successfully!')
    // } else {
    //   alert('Invalid OTP. Please try again.')
    //   otpArray.value = Array(6).fill('') // Reset OTP
    //   focusFirstField()
    // }
  } catch (error) {
    // console.error('Error verifying OTP:', error)
    // alert('An error occurred. Please try again.')
  } finally {
    isLoading.value = false
  }
}

const focusFirstField = () => {
  const fields = document.querySelectorAll('.otp-container input')
  if (fields.length > 0) fields[0].focus()
}

const resendOtp = () => {
  console.log('Resending OTP...')
  // Implement resend OTP logic
}
</script>

<template>
  <div class="flex flex-col items-center justify-center p-5">
    <h1 class="text-3xl font-bold text-gray-700 mb-4">OTP Verification</h1>
    <p class="text-gray-500 mb-6 text-md text-justify">
      Please enter the OTP (One-Time Password) sent to your registered email/phone number to
      complete your verification.
    </p>

    <!-- OTP Input Fields -->
    <div class="flex space-x-2 mb-3">
      <input
        v-for="(digit, index) in otpArray"
        :key="index"
        ref="otpFields"
        type="text"
        maxlength="1"
        class="input input-bordered text-center w-16 h-20 text-xl"
        @input="handleInput(index, $event)"
        @keydown.backspace="handleBackspace(index, $event)"
      />
    </div>

    <!-- Resend OTP -->

    <div class="grid grid-cols-9 h-12 my-3">
      <div class="col-start-1 col-span-4">
        <p class="text-sm text-gray-500">Remaining Seconds</p>
      </div>
      <div class="col-start-5 col-span-5">
        <p class="text-sm text-gray-500">
          Didn’t receive an OTP? <a @click="resendOtp" class="link">Resend OTP</a>
        </p>
      </div>
    </div>

    <!-- Submit Button -->
    <div class="grid grid-cols-9 h-12">
      <div class="col-start-1 col-span-4">
        <button class="btn w-full text-white bg-gray-500" @click="$emit('close')">Cancel</button>
      </div>
      <div class="col-start-6 col-span-5">
        <button class="btn btn-primary w-full" :disabled="!isOtpComplete" @click="submitOtp">
          {{ isLoading ? 'Verifying...' : 'Submit OTP' }}
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped>
/* Add transitions for better UX */
input:focus {
  outline: 2px solid #3b82f6; /* Tailwind Blue */
  transition: outline 0.2s ease-in-out;
}
</style>
