<template>
  <div class="fixed top-0 z-10 w-full shadow-md">
    <div class="flex items-center justify-between px-8 py-4">
      <div class="flex items-center justify-center space-x-4">
        <img
          src="@/assets/images/Logo.png"
          alt="Logo"
          width="60"
          height="60"
          class="rounded-full"
        />
        <h1
          class="text-3xl text-primary-400"
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
