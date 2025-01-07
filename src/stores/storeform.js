import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useFormStore = defineStore('form', () => {
  const clientForm = ref({})

  watch(
    clientForm,
    (value) => {
      localStorage.setItem('form', JSON.stringify(value))
    },
    { deep: true },
  )

  return {
    clientForm,
  }
})
