<template>
  <nav class="flex items-center justify-center font-semibold">
    <RouterLink
      v-for="menu in mainPage.filter(i => i.path != '/:pathMatch(.*)*')"
      :key="menu.path"
      :to="menu.path"
    >
      <div
        :class="[
          'px-6 py-3 rounded-lg transition-all duration-200',
          menu.path === navigation.pathSelected
            ? 'text-orange-600 bg-slate-100'
            : 'hover:text-orange-600',
        ]"
      >
        <span v-if="menu.path === '/home'">Home</span>
        <span v-if="menu.path === '/product'">Product</span>
        <span v-if="menu.path === '/about'">About Us</span>
        <span v-if="menu.path === '/testimonial'">Testimonial</span>
        <span v-if="menu.path === '/contact'">Contact Us</span>
      </div>
    </RouterLink>
  </nav>
</template>

<script setup lang="ts">
import { useNavigationStore } from '@/stores/navigation'
import { mainPage } from '@/router'

const navigation = useNavigationStore()
</script>
