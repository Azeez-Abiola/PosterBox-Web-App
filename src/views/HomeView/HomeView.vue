<template>
  <main class="bg-[var(--primary-white)]">
    <HeroSection />
    <HowItWorksSections />
    <div
      class="bg-[var(--primary-red)] h-[256px] text-white font-['Inter'] pt-[56px]"
    >
      <h1 class="text-center font-bold text-2xl">Earn While Traveling</h1>
      <p class="my-4 font-medium text-lg max-w-[514px] text-center mx-auto">
        You can make some extra money while on a journey to any part of the
        country
      </p>
      <button
        class="bg-white text-[var(--primary-red)] h-[56px] w-[160px] rounded-lg mx-auto gap-x-2 flex items-center justify-center"
      >
        <p>Get Started</p>
        <i class="pi pi-arrow-right"></i>
      </button>
    </div>
    <WhyChooseUs />
    <FAQSection />
  </main>
</template>
<script setup lang="ts">
import FAQSection from "./FAQSection/FAQSection.vue";
import HeroSection from "./HeroSection/HeroSection.vue";
import HowItWorksSections from "./HowItWorksSection/HowItWorksSection.vue";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs.vue";
</script>
