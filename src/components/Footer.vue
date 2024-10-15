<template>
  <footer
    class="flex flex-col space-y-5 justify-center items-center bg-[#A27F6B] py-16 h-full"
  >
    <p class="text-lg font-medium text-white">
      <span ref="typedElement"></span>
    </p>

    <div class="flex items-center justify-center space-x-6">
      <a href="https://wa.me/6282219535693">
        <Whatsapp />
      </a>
      <a
        href="https://www.instagram.com/genepbelas.est23?igsh=MWJjbno2cm52ZXpx"
      >
        <Instagram />
      </a>
      <a
        href="https://www.google.com/maps/place/6%C2%B050'39.9%22S+107%C2%B056'08.8%22E/@-6.8444183,107.9331908,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-6.8444183!4d107.9357657?hl=id-SG&entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D"
      >
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
    backDelay: 5000,
    loop: true,
  }

  if (typedElement.value) {
    new Typed(typedElement.value, options)
  }
})
</script>
