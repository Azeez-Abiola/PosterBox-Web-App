<template>
  <MobileNavComp
    @change-visibilty="() => (showMobileNav = !showMobileNav)"
    v-if="showMobileNav"
  />
  <header class="sticky z-50 top-0 bg-white">
    <nav
      class="h-[60px] mx-auto max-w-[1440px] pl-[20px] pr-[10px] sm:px-[70px] lg:h-[100px] w-[full] flex justify-between items-center overflow-hidden"
    >
      <RouterLink to="/">
        <img
          alt="logo"
          src="@/assets/logo2.svg"
          class="max-h-[58px] sm:pl-0 h-full items-center block"
        />
      </RouterLink>
      <ul class="md:flex items-center gap-x-[99px] hidden">
        <li
          v-for="link in navlinks"
          :key="link.title"
          role="navigation"
          :class="
            isRouteActive(link.route)
              ? 'text-[var(--primary-red)]'
              : 'text-[var(--text-black)]'
          "
          class="text-base lg:text-[20px] font-semibold cursor-pointer hover:text-[var(--primary-red)]"
          @click="$router.push(link.route)"
        >
          {{ link.title }}
        </li>
      </ul>
      <div class="flex gap-x-5 items-center text-base lg:text-lg">
        <button
          @click="$router.push('/contact')"
          class="w-[100px] h-[36px] lg:w-[160px] rounded lg:h-[56px] bg-[var(--primary-red)] text-white font-medium"
        >
          Contact Us
        </button>
        <div class="md:hidden">
          <i
            v-if="!showMobileNav"
            @click="showMobileNav = true"
            class="pi pi-align-justify md:hidden cursor-pointer"
          ></i>
          <i
            v-else
            @click="showMobileNav = false"
            class="pi pi-times cursor-pointer"
          ></i>
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
