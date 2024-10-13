<template>
  <!-- Burger Menu Button on Mobile -->
  <button class="block md:hidden focus:outline-none" @click="toggleMenu">
    <div class="relative w-6 h-6">
      <span
        :class="[
          'block absolute h-0.5 w-full bg-black transition-all duration-300',
          isMenuOpen ? 'rotate-45 top-3' : 'top-0',
        ]"
      ></span>
      <span
        :class="[
          'block absolute h-0.5 w-full bg-black transition-all duration-300',
          isMenuOpen ? 'opacity-0' : 'top-2',
        ]"
      ></span>
      <span
        :class="[
          'block absolute h-0.5 w-full bg-black transition-all duration-300',
          isMenuOpen ? '-rotate-45 top-3' : 'top-4',
        ]"
      ></span>
    </div>
  </button>

  <!-- Navigation Menu -->
  <nav
    class="items-center justify-center hidden space-x-4 font-semibold md:flex"
  >
    <RouterLink
      v-for="menu in mainPage.filter(i => i.path != '/:pathMatch(.*)*')"
      :key="menu.path"
      :to="menu.path"
    >
      <div
        :class="[
          'px-4 py-2 md:px-6 md:py-3 rounded-lg transition-all duration-200',
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

  <!-- Mobile Menu (toggle on burger button click) -->
  <nav
    v-if="isMenuOpen"
    class="absolute left-0 w-full bg-white shadow-md mt-7 top-16 md:hidden"
  >
    <div class="flex flex-col items-start p-4 space-y-2">
      <RouterLink
        v-for="menu in mainPage.filter(i => i.path != '/:pathMatch(.*)*')"
        :key="menu.path"
        :to="menu.path"
        @click="closeMenu"
      >
        <div
          :class="[
            'px-4 py-2 w-full text-left transition-all duration-200',
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
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useNavigationStore } from '@/stores/navigation'
import { mainPage } from '@/router'
import { ref } from 'vue'

const navigation = useNavigationStore()
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>
