<template>
  <div>
    <section
      class="bg-[url('@/assets/images/bg-product.png')] bg-cover bg-center h-[373px] z-0"
    ></section>

    <div class="bg-[#D4BB9D]">
      <div class="flex flex-col pt-20 pb-16 mx-8 space-y-20">
        <h1 class="text-5xl italic font-bold">Our Product</h1>

        <div class="flex items-center justify-between space-x-12">
          <img
            data-aos="zoom-in-right"
            src="@/assets/images/mie-pangsit.png"
            alt="pangsit"
          />
          <div
            data-aos="zoom-in-left"
            class="flex flex-col space-y-2 text-left"
          >
            <h1 class="text-3xl italic font-bold">MIE PANGSIT</h1>
            <p
              class="text-2xl text-justify"
              style="font-family: 'Kotta One', serif"
            >
              Mie Pangsit merupakan hidangan mie dengan mie wangi daun seledri
              ditambah toping tahu dan pangsit full isi ayam. Dengan rasa
              campuran antara saus cabe, saus tomat dan kecap sehingga cocok
              untuk menemani dikala lapar dan dijadikan menu kenyang dalam versi
              yang pas
            </p>
          </div>
        </div>

        <div class="flex items-center justify-between space-x-12">
          <img
            data-aos="zoom-in-right"
            src="@/assets/images/pangsit-ayam.png"
            alt="pangsit"
          />
          <div
            data-aos="zoom-in-left"
            class="flex flex-col space-y-2 text-left"
          >
            <h1 class="text-3xl italic font-bold">
              PANGSIT AYAM KUAH CHILI OIL
            </h1>
            <p
              class="text-2xl text-justify"
              style="font-family: 'Kotta One', serif"
            >
              Pangsit Ayam Kuah Chili Oil merupakan menu makanan favorit para
              pecinta pedas. Dibuat dengan rasa kuah yang khas, setiap suapan
              adalah perjalanan rasa yang menggugah selera. Kenikmatan pedasnya
              akan membuat lidah Anda ingin menari-nari
            </p>
          </div>
        </div>

        <div class="flex items-center justify-between space-x-12">
          <img
            data-aos="zoom-in-right"
            src="@/assets/images/dimsum.png"
            alt="pangsit"
          />
          <div
            data-aos="zoom-in-left"
            class="flex flex-col space-y-2 text-left"
          >
            <h1 class="text-3xl italic font-bold">DIMSUM</h1>
            <p
              class="text-2xl text-justify"
              style="font-family: 'Kotta One', serif"
            >
              Dimsum Ayam lezat berkualitas tinggi dibuat dengan cinta yang
              dikukus hingga sempurna, menghasilkan tekstur yang kenyal diluar
              dan lembut didalam. Dengan rasa indah dan tambahan yang menggoda
              diseriap gigitannya dijamin akan membuat mood Anda kembali stabil
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

import AOS from 'aos'

onMounted(() => {
  AOS.init()
})
</script>
