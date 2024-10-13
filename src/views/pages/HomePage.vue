<template>
  <div
    class="bg-gradient-to-b from-[#f2d1b3] via-[#87b4b0] to-[#f2d1b3] space-y-24 md:space-y-28 pb-16"
  >
    <section
      class="flex flex-col items-center justify-center pt-16 mx-8 space-y-10 md:mx-0 md:pt-28"
    >
      <h1
        class="text-5xl text-white md:text-9xl text-outline-thick"
        style="font-family: 'Knewave', cursive"
        data-aos="fade-down"
      >
        Genep Belas
      </h1>
      <p
        class="text-lg italic font-bold text-center text-white md:text-2xl"
        data-aos="fade-up"
      >
        Masih Bisnis Rumahan Namun Rasa yang Khas Menjadi Kelebihan Tersendiri
      </p>
    </section>

    <div
      class="flex flex-col items-center justify-center space-y-10 md:flex-row md:space-x-28 md:space-y-0"
    >
      <img
        src="@/assets/images/image-home1.png"
        alt="image-home1"
        width="270"
        height="270"
        data-aos="zoom-in-right"
      />

      <img
        src="@/assets/images/image-home2.png"
        alt="image-home2"
        width="270"
        height="270"
        data-aos="zoom-in-up"
      />

      <img
        src="@/assets/images/image-home3.png"
        alt="image-home3"
        width="270"
        height="270"
        data-aos="zoom-in-left"
      />
    </div>

    <div
      class="flex flex-col items-center justify-center mx-6 space-y-10 md:mx-8"
    >
      <div class="text-4xl italic font-bold text-white custom-shadow">
        <span ref="typedElement"></span>
      </div>

      <p class="text-2xl text-justify text-white md:text-center">
        Dimsum dan Pangsit dengan rasa dan isisan yang Lezat, adalah hidangan
        yang tidak hanya lezat tetapi disetiap gigitan dimsum dan Pangsit
        memberikan sensai YUMMY YUMM. yang rasanya nikmat pedas segar hingga
        memikat lidah dan menyenangkan perut
      </p>
    </div>

    <div class="flex flex-col items-center justify-center space-y-8">
      <h1 class="text-xl font-semibold text-center text-white md:text-2xl">
        What They Say About Product Us?
      </h1>

      <div class="bottom-0 flex items-center w-full overflow-hidden">
        <div class="flex animation slider shrink-0">
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

      <a href="https://g.co/kgs/s2ofksZ">
        <div class="flex items-center space-x-1 text-slate-50">
          <span class="text-lg"> Berikan ulasan anda </span>
          <ArrowRight />
        </div>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { ArrowRight } from '@/components/icons'
import { userTesti } from '@/data/testimonials'

import AOS from 'aos'
import TestimonialCard from '@/components/TestimonialCard.vue'

import Typed from 'typed.js'

const typedElement = ref<HTMLElement | null>(null)

onMounted(() => {
  AOS.init()

  const options = {
    strings: ['Welcome!', 'Selamat Datang!'],
    typeSpeed: 100,
    backSpeed: 100,
    showCursor: true,
    loop: true,
  }

  if (typedElement.value) {
    new Typed(typedElement.value, options)
  }
})
</script>

<style scoped>
.text-outline-thick {
  text-shadow:
    3px 3px 0 #a27f6b,
    -3px 3px 0 #a27f6b,
    3px -3px 0 #a27f6b,
    -3px -3px 0 #a27f6b,
    2px 2px 0 #a27f6b,
    -2px 2px 0 #a27f6b,
    2px -2px 0 #a27f6b,
    -2px -2px 0 #a27f6b;
}

.custom-shadow {
  text-shadow: 4px 4px 0px rgba(0, 0, 0, 0.8);
}

.animation {
  animation: slide 30s linear infinite;
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
