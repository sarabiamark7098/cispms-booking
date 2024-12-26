import { defineStore } from "pinia";

export const useFormStore = defineStore('form', {
    state: () => ({
      form: {
        firstname: '',
        middlename: '',
        lastname: '',
        middlename: '',
      },
    }),
    actions: {
      updateForm(data) {
        this.form = { ...this.form, ...data };
      },
    },
  });