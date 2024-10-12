<template>
  <footer
    class="flex flex-col space-y-5 justify-center items-center bg-[#A27F6B] py-16"
  >
    <p class="text-lg font-medium text-white">
      <span ref="typedElement"></span>
    </p>

    <div class="flex items-center justify-center space-x-6">
      <a href="#">
        <Whatsapp />
      </a>
      <a href="#">
        <Instagram />
      </a>
      <a href="#">
        <Navigasi />
      </a>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Instagram, Navigasi, Whatsapp } from '@/components/icons'
import { ref, onMounted } from 'vue'

import Typed from 'typed.js'

const typedElement = ref<HTMLElement | null>(null)

onMounted(() => {
  const options = {
    strings: ['where to find us?'],
    typeSpeed: 50,
    backSpeed: 25,
    showCursor: true,
    loop: true,
  }

  if (typedElement.value) {
    new Typed(typedElement.value, options)
  }
})
</script>
