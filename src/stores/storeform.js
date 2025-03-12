import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import axios from 'axios'

export const useFormStoreDataPrivacy = defineStore('dataPrivacy', () => {
  // State: Holds the form data
  const dataPrivacyForm = ref({
    token: '',
  })

  // Load from LocalStorage when initializing the store
  const storedDataPrivacy = localStorage.getItem('dataPrivacy')
  if (storedDataPrivacy) {
    dataPrivacyForm.value = JSON.parse(storedDataPrivacy)
  }

  // Watch for changes and update LocalStorage
  watch(
    dataPrivacyForm,
    (newValue) => {
      localStorage.setItem('dataPrivacy', JSON.stringify(newValue))
    },
    { deep: true },
  )

  // Generate and save a new token
  const generateToken = () => Math.random().toString(36).substr(2, 60)

  // Submit Form: Generates a token and saves it
  const submitDataPrivacyForm = () => {
    dataPrivacyForm.value.token = generateToken()
    console.log('Data Privacy Token:', dataPrivacyForm.value.token)
  }

  // Reset Form: Clears data and removes it from LocalStorage
  const resetDataPrivacyForm = () => {
    dataPrivacyForm.value = { token: '' }
    localStorage.removeItem('dataPrivacy')
  }

  return {
    dataPrivacyForm,
    submitDataPrivacyForm,
    resetDataPrivacyForm,
  }
})

export const useFormStoreClient = defineStore('client', () => {
  // Default state
  const clientForm = ref({
    lastName: '',
    firstName: '',
    middleName: '',
    extensionName: '',
    contactNumber: '09', // Default starting value
    email: '',
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
      if (value.lastName) value.lastName = value.lastName.toUpperCase();
      if (value.firstName) value.firstName = value.firstName.toUpperCase();
      if (value.middleName) value.middleName = value.middleName.toUpperCase();
      if (value.extensionName) value.extensionName = value.extensionName.toUpperCase();
      localStorage.setItem('client', JSON.stringify(value))
    },
    { deep: true },
  )

  // Utility methods
  const resetClientForm = () => {
    clientForm.value = {
      lastName: '',
      firstName: '',
      middleName: '',
      extensionName: '',
      address: '',
      contactNumber: '09',
      email: '',
    }
    localStorage.removeItem('client') // Remove from localStorage
  }

  // Submit Form to Backend
  const submitClientForm = async () => {
    try {
      const response = await axios.post('/api/client/preliminary', clientForm.value)
      console.log('Success:', response.data)
      // resetClientForm()
    } catch (error) {
      console.error('Error submitting form:', error.response?.data || error.message)
    }
  }

  return {
    clientForm,
    resetClientForm,
    submitClientForm,
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
