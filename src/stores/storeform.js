import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useFormStoreClient = defineStore('client', () => {
  // Default state
  const clientForm = ref({
    address: '',
    phoneNumber: '09', // Default starting value
  })

  // Load from localStorage on initialization
  const storedClient = localStorage.getItem('client')
  if (storedClient) {
    clientForm.value = JSON.parse(storedClient)
  }

  // Watch for changes and sync to localStorage
  watch(
    clientForm,
    (value) => {
      localStorage.setItem('client', JSON.stringify(value))
    },
    { deep: true },
  )

  // Utility methods
  const resetClientForm = () => {
    clientForm.value = {
      address: '',
      phoneNumber: '09',
    }
  }

  return {
    clientForm,
    resetClientForm,
  }
})

export const useFormStoreAssistance = defineStore('assistance', () => {
  // Default state
  const AssistanceForm = ref({
    TypeOfAssistance: '',
  })

  // Load from localStorage on initialization
  const storedAssistance = localStorage.getItem('assistance')
  if (storedAssistance) {
    AssistanceForm.value = JSON.parse(storedAssistance)
  }

  // Watch for changes and sync to localStorage
  watch(
    AssistanceForm,
    (value) => {
      localStorage.setItem('assistance', JSON.stringify(value))
    },
    { deep: true },
  )

  // Utility methods
  const resetAssistanceForm = () => {
    AssistanceForm.value = {
      TypeOfAssistance: '',
    }
  }

  const updateTypeOfAssistance = (type) => {
    AssistanceForm.value.TypeOfAssistance = type
  }

  return {
    AssistanceForm,
    resetAssistanceForm,
    updateTypeOfAssistance,
  }
})

export const useFormStoreRequestor = defineStore('requestor', () => {
  // Default state
  const requestorForm = ref({
    Requestor: '',
  })

  // Load from localStorage on initialization
  const storedRequestor = localStorage.getItem('requestor')
  if (storedRequestor) {
    requestorForm.value = JSON.parse(storedRequestor)
  }

  // Watch for changes and sync to localStorage
  watch(
    requestorForm,
    (value) => {
      localStorage.setItem('requestor', JSON.stringify(value))
    },
    { deep: true },
  )

  // Utility methods
  const resetRequestorForm = () => {
    requestorForm.value = {
      Requestor: '',
    }
  }

  const updateRequestor = (type) => {
    requestorForm.value.Requestor = type
  }

  return {
    requestorForm,
    resetRequestorForm,
    updateRequestor,
  }
})
