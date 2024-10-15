<template>
  <div
    class="bg-gradient-to-b from-[#f2d1b3] via-[#87b4b0] to-[#f2d1b3] p-8 md:p-20 flex flex-col items-center justify-center w-full min-h-screen"
  >
    <div class="text-center">
      <div
        class="text-2xl font-bold text-center md:text-4xl min-h-[70px] md:min-h-0"
      >
        <span ref="typedElement"></span>
      </div>
    </div>
    <div
      class="w-full max-w-2xl p-10 bg-transparent rounded-lg shadow-lg md:max-w-4xl"
    >
      <form @submit.prevent="submitForm" class="space-y-5">
        <div class="mb-4">
          <label for="name" class="block text-sm font-medium">Name</label>
          <input
            type="text"
            id="name"
            v-model="data.name"
            class="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-slate-300 focus:border-teal-500"
            placeholder="Masukan nama anda"
            required
          />
        </div>
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium">Email</label>
          <input
            type="email"
            id="email"
            v-model="data.email"
            class="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-slate-300 focus:border-teal-500"
            placeholder="Masukan email anda"
            required
          />
        </div>
        <div class="mb-4">
          <label for="phone" class="block text-sm font-medium"
            >No. Telepon</label
          >
          <input
            type="tel"
            id="phone"
            v-model="data.phone"
            class="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-slate-300 focus:border-teal-500"
            placeholder="Masukan nomor telepon anda"
            required
          />
        </div>
        <div class="mb-4">
          <label for="message" class="block text-sm font-medium">Message</label>
          <textarea
            id="message"
            rows="4"
            v-model="data.message"
            class="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-slate-300 focus:border-teal-500"
            placeholder="Masukan pesan anda"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          :disabled="isLoading"
          class="w-full px-4 py-2 text-white rounded-md shadow-md bg-slate-500 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-300"
        >
          <span v-if="!isLoading">Send</span>
          <span v-else class="flex items-center justify-center">
            <LoaderIcon class="w-5 h-5 mr-2 animate-spin" /> Sending...
          </span>
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useFormStore } from '@/stores/contacts'
import { showSuccessAlert, showErrorAlert } from '@/utils/dialogs'
import { LoaderIcon } from '@/components/icons'

import Typed from 'typed.js'

const typedElement = ref<HTMLElement | null>(null)
const data = useFormStore()
const isLoading = ref(false)

const resetForm = () => {
  data.name = ''
  data.email = ''
  data.phone = ''
  data.message = ''
}

const submitForm = async () => {
  isLoading.value = true
  try {
    await data.submitForm()
    showSuccessAlert('Pesan anda telah terkirim')
    resetForm()
  } catch (error) {
    showErrorAlert('Pesan anda gagal terkirim.')
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  const options = {
    strings: ['Any question or remarks?', 'Just write us a message!'],
    typeSpeed: 60,
    backSpeed: 20,
    backDelay: 3000,
    loop: true,
  }

  if (typedElement.value) {
    new Typed(typedElement.value, options)
  }
})
</script>
