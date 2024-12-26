<script setup>
import { defineProps, defineEmits, computed } from 'vue'

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
</script>
<template>
    <h3 class="font-extrabold text-2xl text-center">DATA PRIVACY</h3>
    <p class="pt-4 text-[14px] indent-8 text-justify leading-relaxed">
      The Department of Social Welfare and Development – Field Office 11 is committed to protecting
      your privacy. We will collect your personal information, such as your name, contact details,
      and other relevant information required to deliver our services effectively. We may also share
      your information with trusted third-party service providers that assist us in delivering our
      services. In compliance with the Data Privacy Act of 2012 (R.A. 10173), we will treat your
      data with utmost confidentiality and employ appropriate security measures to prevent
      unauthorized access, disclosure, or misuse.
    </p>
    <p class="pt-3 text-[14px] indent-8 text-justify leading-relaxed">
      By agreeing to this statement, you have read and understood the DSWD Field Office XI’s Data
      Privacy Statement and express your consent. You hereby provide my right to be informed,
      access, rectify, erasure, object, and file a complaint if any privacy rights have been
      violated pursuant to the provisions of Republic Act No. 10173, also known as the Data Privacy
      Act of 2012. To learn more about the Privacy Notice of the DSWD Field Office 11, you may refer
      to this
      <a
        href="http://"
        target="_blank"
        rel="noopener noreferrer"
        class="underline underline-offset-4 text-blue-600 font-semibold"
        >link</a
      >.
    </p>
    <p class="pt-3 text-[14px] indent-8 text-justify leading-relaxed">
      If you have concerns or inquiries, you can contact us via email at
      <b>cop.fo11@dswd.gov.ph</b>, or call the Field Office Trunkline: <b>(082) 227-1964</b>.
    </p>
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
