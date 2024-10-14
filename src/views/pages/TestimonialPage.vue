<template>
  <div
    class="flex justify-center items-center flex-col space-y-10 py-10 bg-[#D4BB9D]"
  >
    <div class="text-5xl italic font-bold">
      <span ref="typedElement"></span>
    </div>
    <ImageSlider />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

import ImageSlider from '@/components/ImageSlider.vue'

import Typed from 'typed.js'

const typedElement = ref<HTMLElement | null>(null)

onMounted(() => {
  const options = {
    strings: ['Testimonial'],
    typeSpeed: 80,
    showCursor: false,
  }

  if (typedElement.value) {
    new Typed(typedElement.value, options)
  }
})
</script>
