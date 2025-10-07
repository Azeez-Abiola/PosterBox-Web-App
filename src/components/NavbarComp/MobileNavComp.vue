<template>
  <!-- Backdrop overlay -->
  <div 
    class="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300"
    :class="isVisible ? 'opacity-100' : 'opacity-0'"
    @click="handleBackdropClick"
  ></div>
  
  <!-- Mobile menu panel -->
  <div
    class="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-out"
    :class="isVisible ? 'translate-x-0' : 'translate-x-full'"
  >
    <!-- Menu header -->
    <div class="flex items-center justify-between p-6 border-b border-gray-100">
      <div class="flex items-center space-x-3">
                  alt="PosterBox logo"
        />
        <!-- Brand Name -->
        <span class="font-bold text-lg text-black">PosterBox</span>
      </div>
      
      <button
        @click="handleClose"
        class="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
      >
        <i class="pi pi-times text-xl text-gray-600"></i>
      </button>
    </div>
    
    <!-- Navigation content -->
    <div class="flex flex-col h-full">
      <!-- Navigation links -->
      <nav class="flex-1 px-6 py-6">
        <ul class="space-y-2">
          <li
            v-for="(link, index) in navlinks"
            :key="link.title"
            class="transform transition-all duration-300"
            :style="{ transitionDelay: `${isVisible ? index * 100 + 150 : 0}ms` }"
            :class="isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'"
          >
            <RouterLink 
              :to="link.route"
              @click="handleNavClick(link.route)"
              :class="[
                'group flex items-center justify-between w-full px-4 py-4 rounded-xl font-semibold text-lg transition-all duration-200',
                isRouteActive(link.route)
                  ? 'text-red-600 bg-red-50 shadow-sm'
                  : 'text-gray-700 hover:text-red-600 hover:bg-gray-50'
              ]"
            >
              <span class="flex items-center space-x-3">
                <div 
                  :class="[
                    'w-2 h-2 rounded-full transition-all duration-200',
                    isRouteActive(link.route) 
                      ? 'bg-red-600' 
                      : 'bg-gray-300 group-hover:bg-red-400'
                  ]"
                ></div>
                <span>{{ link.title }}</span>
              </span>
              
              <i 
                class="pi pi-angle-right text-gray-400 group-hover:text-red-600 transition-colors duration-200 transform group-hover:translate-x-1"
                :class="isRouteActive(link.route) ? 'text-red-600' : ''"
              ></i>
            </RouterLink>
          </li>
        </ul>
      </nav>
      
      <!-- Bottom section -->
      <div class="px-6 pb-6 border-t border-gray-100">
        <!-- Contact button -->
        <div 
          class="pt-6 transform transition-all duration-300"
          :style="{ transitionDelay: `${isVisible ? '400ms' : '0ms'}` }"
          :class="isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'"
        >
          <button
            @click="handleContactClick"
            class="w-full bg-red-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:bg-red-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <span class="flex items-center justify-center space-x-2">
              <i class="pi pi-phone"></i>
              <span>Contact Us</span>
            </span>
          </button>
        </div>
        
        <!-- Info text -->
        <div 
          class="mt-4 text-center transform transition-all duration-300"
          :style="{ transitionDelay: `${isVisible ? '500ms' : '0ms'}` }"
          :class="isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'"
        >
          <p class="text-sm text-gray-500">
            Fast, secure package delivery
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, ref, onMounted, watch } from 'vue';
import { useRouter, useRoute } from "vue-router";
import { navlinks } from ".";

const emit = defineEmits<{
  (event: "changeVisibilty"): void;
}>();

const router = useRouter();
const route = useRoute();
const isVisible = ref(false);

// Animation control
onMounted(() => {
  // Small delay to trigger enter animation
  setTimeout(() => {
    isVisible.value = true;
  }, 50);
});

const isRouteActive = (path: string) => {
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

const handleClose = () => {
  isVisible.value = false;
  // Wait for animation to complete before emitting
  setTimeout(() => {
    emit("changeVisibilty");
  }, 300);
};

const handleBackdropClick = () => {
  handleClose();
};

const handleNavClick = (routePath: string) => {
  isVisible.value = false;
  // Wait for animation to complete before navigating
  setTimeout(() => {
    router.push(routePath);
    emit("changeVisibilty");
  }, 300);
};

const handleContactClick = () => {
  isVisible.value = false;
  setTimeout(() => {
    router.push('/contact');
    emit("changeVisibilty");
  }, 300);
};
</script>
