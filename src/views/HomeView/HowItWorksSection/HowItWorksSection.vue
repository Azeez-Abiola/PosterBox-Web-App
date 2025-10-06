<template>
  <section class="py-[64px] overflow-hidden relative text-[var(--text-black)]">
    <div class="max-w-[1440px] mx-auto">
      <h1 class="font-semibold text-[40px] text-center">How it works</h1>
      <div
        class="mt-[36px] flex flex-col items-center gap-y-[20px] lg:flex-row lg:justify-between cards-con"
      >
        <section
          v-for="(item, i) in howItWork"
          :key="item.title + i"
          class="lg:w-[320px] relative z-30 bg-white min-[1440px]:w-[421px] w-[80%] h-[320px] lg:h-[300px] min-[1440px]:h-[320px] rounded-lg border-[0.25px] border-[#F58634] shadow-lg flex flex-col items-center pt-[54px]"
        >
          <h1 class="text-[var(--primary-red)] text-2xl font-semibold">
            {{ item.title }}
          </h1>
          <p class="mt-[70px] w-[290px] text-center text-xl">{{ item.text }}</p>
        </section>
      </div>
    </div>
    <img
      alt="circle-3"
      src="./circle-3.svg"
      class="absolute bottom-[-86px] left-0"
    />
  </section>
</template>
<script setup lang="ts">
const howItWork: { title: string; text: string }[] = [
  {
    title: "Requests",
    text: "Make a Request for Delivery at an appointed date",
  },
  {
    title: "Do Deliveries",
    text: "Do deliveries for people whenever you travel.",
  },
  {
    title: "Earn",
    text: "Earn extra money when you do deliveries for people.",
  },
];
</script>
<style scoped>
* {
  font-family: "Inter";
}
</style>
