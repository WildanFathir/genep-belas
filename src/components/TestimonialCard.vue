<template>
  <div
    class="w-full max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow-md min-h-[250px] flex flex-col"
  >
    <!-- Header -->
    <div class="flex items-center mb-4">
      <div
        class="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full"
      >
        <User class="w-8 h-8 text-gray-500" />
        <!-- Icon with size and color -->
      </div>
      <div class="ml-4">
        <h3 class="text-lg font-bold text-blue-600">{{ user.name }}</h3>
        <p class="text-sm text-gray-500">{{ user.username }}</p>
      </div>
    </div>

    <!-- Rating -->
    <div class="flex items-center mb-3">
      <!-- Menampilkan jumlah bintang sesuai rating -->
      <Star v-for="n in user.rating" :key="n" class="w-6 h-6 text-yellow-500" />
    </div>

    <!-- Testimonial Text -->
    <p class="flex-grow text-gray-600">
      {{ user.review }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { Star, User } from '@/components/icons'

import type { Testimonial } from '@/types/user'

defineProps({
  user: {
    type: Object as () => Testimonial,
    required: true,
  },
})
</script>
