<template>
  <div
    class="fixed h-[calc(100vh-60px)] lg:h-[calc(100vh-100px)] w-screen top-[60px] md:hidden pt-[60px] px-[10px] bg-white z-50"
  >
    <ul class="list-none space-y-[18px]">
      <li
        v-for="link in navlinks"
        :key="link.title"
        role="navigation"
        class="text-[28px] h-[53px] w-full hover:bg-[#f3f4f6] text-[var(--text-black)] cursor-pointer"
        @click="handleClick(link.route)"
      >
        {{ link.title }}
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
import { navlinks } from ".";

const emit = defineEmits<{
  (event: "changeVisibilty"): void;
}>();
const router = useRouter();

const handleClick = (route: string) => {
  router.push(route);
  emit("changeVisibilty");
};
</script>
