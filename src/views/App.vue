<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
</script>

<template>
  <Header />
  <div class="page-content">
    <RouterView />
  </div>
</template>
