<template>
  <div class="fixed top-0 z-10 w-full bg-white shadow">
    <div class="flex items-center justify-between px-4 py-2 md:px-8">
      <div class="flex items-center space-x-4">
        <img
          src="@/assets/images/Logo.png"
          alt="Logo"
          width="60"
          height="60"
          class="rounded-full"
        />
        <h1
          class="text-2xl md:text-3xl text-primary-400"
          style="font-family: 'Knewave', cursive"
        >
          GenepBelas
        </h1>
      </div>

      <Navigasi />
    </div>
  </div>
</template>

<script setup lang="ts">
import Navigasi from '@/components/Navigasi.vue'
</script>
