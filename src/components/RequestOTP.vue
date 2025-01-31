<script setup>
import { ref, computed } from 'vue'

const otpArray = ref(Array(6).fill('')) // 6-digit OTP

const isLoading = ref(false)

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
  try {
    window.location.href = '/request'
  } catch (error) {
    console.error('Error verifying OTP:', error)
    alert('An error occurred. Please try again.')
  } finally {
    isLoading.value = false
  }
}

const resendOtp = () => {
  console.log('Resending OTP...')
  // Implement resend OTP logic
}

const { show } = defineProps({
  show: {
    type: Boolean,
    required: true,
  },
})

defineEmits(['close'])
</script>

<template>
  <div class="flex flex-col items-center justify-center p-5 space-y-6">
    <h1 class="text-2xl md:text-3xl font-bold text-gray-700 text-center">OTP Verification</h1>
    <p class="text-gray-500 text-sm md:text-md text-center max-w-lg">
      Please enter the OTP (One-Time Password) sent to your registered email/phone number to
      complete your verification.
    </p>

    <!-- OTP Input Fields -->
    <div class="flex space-x-2">
      <input
        v-for="(digit, index) in otpArray"
        :key="index"
        ref="otpFields"
        type="text"
        maxlength="1"
        class="input input-bordered text-center w-12 h-12 md:w-16 md:h-20 text-lg md:text-xl"
        @input="handleInput(index, $event)"
        @keydown.backspace="handleBackspace(index, $event)"
      />
    </div>

    <!-- Resend OTP Section -->
    <div class="flex flex-col md:flex-row items-center justify-between w-full max-w-lg text-sm text-gray-500">
      <p>Remaining Time:</p>
      <p>
        Didn’t receive an OTP?
        <a @click="resendOtp" class="link text-blue-600 hover:text-blue-800 cursor-pointer">Resend OTP</a>
      </p>
    </div>

    <!-- Buttons Section -->
    <div class="flex flex-col md:flex-row items-center justify-between w-full max-w-lg space-y-3 md:space-y-0 md:space-x-4">
      <button
        class="btn text-white bg-gray-500 w-full md:w-auto px-8 py-2"
        @click="$emit('close')"
      >
        Cancel
      </button>
      <button
        class="btn btn-primary w-full md:w-auto px-8 py-2"
        :disabled="!isOtpComplete"
        @click="submitOtp"
      >
        {{ isLoading ? 'Verifying...' : 'Verify' }}
      </button>
    </div>
  </div>
</template>

<style scoped>
/* Focus Transition for Input Fields */
input:focus {
  outline: 2px solid #3b82f6; /* Tailwind Blue */
  transition: outline 0.2s ease-in-out;
}
</style>
