<template>
  <MobileNavComp @change-visibilty="() => (showMobileNav = !showMobileNav)" v-if="showMobileNav" />
  <header class="sticky z-50 top-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
    <nav
      class="h-[60px] mx-auto max-w-[1440px] pl-[20px] pr-[10px] sm:px-[70px] lg:h-[100px] w-[full] flex justify-between items-center overflow-hidden">
      <RouterLink to="/" class="group">
        <img alt="PosterBox logo" src="/images/logo-red.png"
          class="max-h-[70px] sm:pl-0 h-full items-center block transition-transform duration-300 group-hover:scale-105" />
      </RouterLink>

      <!-- Desktop Navigation -->
      <ul class="md:flex items-center gap-x-[60px] lg:gap-x-[80px] hidden">
        <li v-for="link in navlinks" :key="link.title" role="navigation" class="relative group">
          <RouterLink :to="link.route" :class="[
            'text-base lg:text-[18px] font-semibold cursor-pointer transition-all duration-300 relative py-2 px-4 rounded-lg',
            isRouteActive(link.route)
              ? 'text-red-600 bg-red-50'
              : 'text-gray-700 hover:text-red-600 hover:bg-gray-50'
          ]">
            {{ link.title }}

            <!-- Active indicator -->
            <div v-if="isRouteActive(link.route)"
              class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-red-600 rounded-full" />

            <!-- Hover indicator -->
            <div v-else
              class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-red-600 rounded-full transition-all duration-300 group-hover:w-6" />
          </RouterLink>
        </li>
      </ul>

      <!-- Right side actions -->
      <div class="flex gap-x-4 items-center text-base lg:text-lg">
        <button @click="$router.push('/contact')"
          class="group relative overflow-hidden w-[100px] h-[36px] lg:w-[140px] rounded-lg lg:h-[48px] bg-red-600 text-white font-semibold transition-all duration-300 hover:bg-red-700 hover:shadow-lg hover:scale-105">
          <span class="relative z-10">Contact Us</span>
          <div
            class="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left">
          </div>
        </button>

        <!-- Mobile menu toggle -->
        <div class="md:hidden">
          <button @click="showMobileNav = !showMobileNav"
            class="relative p-3 rounded-xl bg-red-600 hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            :class="showMobileNav ? 'bg-red-700 scale-105' : ''">
            <i v-if="!showMobileNav" class="pi pi-bars text-xl text-white"></i>
            <i v-else class="pi pi-times text-xl text-white"></i>

            <!-- Visual indicator dot -->
            <div class="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { navlinks, MobileNavComp } from ".";
import { useRoute } from "vue-router";

const route = useRoute();
const showMobileNav = ref<boolean>(false);

const isRouteActive = (path: any) => {
  return computed(() => {
    if (route.path === path) {
      return route.path === path;
    }
    if (route.path + "/" === path) {
      return route.path + "/" === path;
    }
    return route.path === path;
  }).value;
};
</script>
