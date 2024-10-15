<template>
  <div class="bg-gradient-to-b from-[#f2d1b3] via-[#87b4b0] to-[#f2d1b3]">
    <div
      class="flex flex-col items-center justify-center py-10 mx-8 space-y-20"
    >
      <div
        class="flex flex-col-reverse items-center justify-center gap-10 md:gap-0 md:space-x-20 md:space-y-0 md:flex-row"
      >
        <img
          src="@/assets/images/image-about.png"
          alt="about-image"
          class="md:w-[400px] md:h-[400px] w-[300px] h-[300px]"
          data-aos="zoom-in-right"
        />

        <div
          class="flex flex-col items-center justify-center space-y-2 text-center md:space-y-4"
          data-aos="zoom-in-left"
        >
          <div class="relative">
            <div class="text-5xl italic font-bold md:text-6xl min-h-[60px]">
              <span ref="typedElement"></span>
            </div>
          </div>

          <p
            class="text-xl md:text-2xl"
            style="font-family: 'Kotta One', serif"
          >
            Get to know about us, stores, environment, and people behind it!
          </p>
        </div>
      </div>

      <div
        class="flex flex-col items-center justify-center space-y-6 text-center"
      >
        <h1 class="text-2xl italic font-bold md:text-4xl" data-aos="zoom-in">
          ABOUT OUR PRODUCTS
        </h1>
        <p
          class="text-lg text-justify md:text-xl md:text-center"
          style="font-family: 'Kotta One', serif"
          data-aos="zoom-in"
        >
          Dimsum, hidangan Tiongkok yang populer di seluruh dunia, semakin
          dihargai oleh masyarakat yang memperhatikan kehalalan produk. Untuk
          memenuhi kebutuhan konsumen yang ingin memastikan kehalalan dimsum,
          penting untuk mencari produk yang telah tersertifikasi halah oleh
          kementrian Agama. Sertifikasi halal oleh Kementrian Agama menjamin
          bahwa dimsum tersebut diproduksi sesuai dengan prinsip-prinsip islam
          dan bebas dari bahan-bahan yang di haramkan,sehingga dapat dinikmati
          dengan keyakinan oleh semua kalangan
        </p>
      </div>

      <div
        class="flex flex-col items-center justify-center space-y-8 md:space-y-10"
      >
        <h1 class="text-3xl italic font-bold md:text-4xl" data-aos="zoom-out">
          OUR STORY
        </h1>
        <img
          src="@/assets/images/logo-about.png"
          alt="logo-about"
          class="md:w-[300px] md:h-[300px] w-[250px] h-[250px]"
          data-aos="zoom-out"
        />
        <p
          class="text-lg text-justify md:text-xl md:text-center"
          style="font-family: 'Kotta One', serif"
        >
          Nama “Genep Belas” diambil dari tanggal “Enam Belas” dimana tanggal
          tersebut merupakan tanggal spesial bagi dua orang yang menjalin
          hubungan. Genep Belas dirintis sejak 2023. Genap Belas merupakan
          bisnis rumahan yang masih menggunakan sistem Pre-Order dalam
          penjulannya. Namun hingga saat ini Genep Belas terus memproduksi untuk
          mengembangkan bisnisnya
        </p>
      </div>

      <div class="w-full space-y-6">
        <div
          class="flex flex-col items-center justify-center md:items-start md:justify-start"
        >
          <div
            class="flex flex-col p-8 space-y-6 text-center text-white rounded-lg bg-primary-500"
            data-aos="zoom-in-right"
          >
            <h1 class="text-3xl italic font-bold md:text-4xl">VISI</h1>
            <p
              class="text-lg text-justify md:text-xl md:text-center"
              style="font-family: 'Kotta One', serif"
            >
              “Menjadi incaran konsumen dengan kualitas rasa dan konsistensi
              dalam penyajian”
            </p>
          </div>
        </div>

        <div
          class="flex flex-col items-center justify-center md:items-end md:justify-end"
        >
          <div
            class="flex flex-col p-8 space-y-6 text-center text-white rounded-lg bg-primary-500"
            data-aos="zoom-in-left"
          >
            <h1 class="text-3xl italic font-bold md:text-4xl">MISI</h1>
            <p
              class="text-lg text-justify md:text-xl md:text-center"
              style="font-family: 'Kotta One', serif"
            >
              - Menyediakan produk terbaik dengan harga terjangkau.<br />
              - Melayani konsumen dengan sepenuh hati dan memastikan kepuasan
              konsumen.<br />
              - memperbanyak promosi dan memperlual relasi
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

import AOS from 'aos'

import Typed from 'typed.js'

const typedElement = ref<HTMLElement | null>(null)

onMounted(() => {
  AOS.init()

  const options = {
    strings: ['ABOUT US'],
    typeSpeed: 70,
    showCursor: false,
  }

  if (typedElement.value) {
    new Typed(typedElement.value, options)
  }
})
</script>
