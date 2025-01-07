<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import DataPrivacy from '@/components/DataPrivacy.vue'
import RequestOTP from './RequestOTP.vue'

const formData = ''

const { show } = defineProps({
  show: {
    type: Boolean,
    required: true,
  },
})
defineEmits(['close'])

// Backdrop visibility computed property
const showBackdrop = computed(() => show)

const route = useRoute()

const isDataPrivacyRoute = computed(() => route.path === '/')
const isOTPRoute = computed(() => route.path === '/profile')
</script>
<template>
  <div>
    <div v-if="showBackdrop" class="backdrop" @click="$emit('close')"></div>

    <!-- Modal -->
    <dialog v-if="show" class="modal modal-middle custom-modal" open>
      <div v-if="isDataPrivacyRoute" class="modal-box max-w-2xl">
        <DataPrivacy />

        <div class="modal-action">
          <form action="/profile">
            <div class="grid grid-cols-5 gap-4 h-12">
              <div class="col-start-1 col-end-3 place-content-center ">
                <input
                  type="checkbox"
                  class="h-6 w-6 checkbox inline-block align-middle border-orange-400 [--chkbg:theme(colors.indigo.600)] checked:border-indigo-800 mr-2"
                  required
                />
                <span class="inline-block align-middle">I have read and understood</span>
              </div>
              <div class="col-start-4 col-span-2">
                <button class="btn w-full text-white bg-blue-600" type="submit">I Agree</button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div v-else-if="isOTPRoute" class="modal-box max-w-xl">
        <RequestOTP />
      </div>
    </dialog>
  </div>
</template>

<style scoped>
/* Backdrop styles */
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  z-index: 1040;
  transition: opacity 0.3s ease-in-out; /* Optional fade effect */
}

/* Modal positioning override to ensure it's above the backdrop */
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1050; /* Higher than the backdrop */
}
.custom-modal {
  max-width: 90%; /* Ensure responsiveness on smaller screens */
}
.modal-box {
  padding: 1.5rem 3rem;
  border-radius: 8px;
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.2);
}
</style>
