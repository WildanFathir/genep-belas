<template>
  <div
    class="bottom-0 flex items-center w-full p-8 overflow-hidden bg-primary-500"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <div class="flex animation slider shrink-0" :class="{ paused: isHovered }">
      <div
        class="flex gap-[50px] items-center"
        style="width: 200%; animation: slide 30s linear infinite"
      >
        <div v-for="n in 2" :key="n" class="flex gap-[50px]">
          <TestimonialCard
            v-for="(testimonial, index) in userTesti"
            :key="index"
            :user="testimonial"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { userTesti } from '@/data/testimonials'
import TestimonialCard from '@/components/TestimonialCard.vue'

const isHovered = ref(false)
</script>

<style scoped>
.animation {
  animation: slide 30s linear infinite;
}

.paused {
  animation-play-state: paused; /* Menambahkan efek berhenti saat hover */
}

@keyframes slide {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
