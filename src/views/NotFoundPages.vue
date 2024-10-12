<template>
  <div
    class="flex items-center justify-center min-h-screen bg-center bg-no-repeat bg-cover"
    style="
      background-image: url('https://source.unsplash.com/random/1920x1080?nature');
    "
  >
    <div
      class="max-w-md p-8 mx-auto text-center bg-white rounded-lg shadow-lg bg-opacity-90"
    >
      <div class="mb-4 font-bold text-indigo-600 text-9xl">404</div>
      <h1 class="mb-6 text-4xl font-bold text-gray-800">
        Oops! Page Not Found
      </h1>
      <p class="mb-8 text-lg text-gray-600">
        The page you're looking for seems to have gone on a little adventure.
        Don't worry, we'll help you find your way back home.
      </p>
      <RouterLink
        to="/home"
        class="inline-block px-6 py-3 font-semibold text-white transition-colors duration-300 bg-indigo-600 rounded-md hover:bg-indigo-700"
      >
        Go Back Home
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
