// src/stores/contacts.ts
import { defineStore } from 'pinia'
import { db } from '@/firebaseConfig'
import { collection, addDoc } from 'firebase/firestore'

export const useFormStore = defineStore('form', {
  state: () => ({
    name: '',
    email: '',
    phone: '',
    message: '',
  }),
  actions: {
    async submitForm() {
      try {
        const docRef = await addDoc(collection(db, 'contacts'), {
          name: this.name,
          email: this.email,
          phone: this.phone,
          message: this.message,
          createdAt: new Date(),
        })

        console.log('Document written with ID: ', docRef.id)
      } catch (e) {
        console.error('Error adding document: ', e)
      }
    },
  },
})
