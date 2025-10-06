<template>
  <main
    class="bg-[var(--primary-white)] pb-[86px] relative text-[var(--text-black)]"
  >
    <img
      class="absolute top-[42px] left-0 z-0"
      src="./circle-5.svg"
      alt="circle-5"
    />
    <img
      src="./circle-6.svg"
      class="absolute top-[541px] right-0 z-0"
      alt="circle-6"
    />
    <section
      class="min-h-[904px] mx-auto relative z-10 max-w-[1440px] text-[var(--text-black)] flex items-center justify-start xl:justify-between flex-col gap-y-8 xl:flex-row px-2.5 sm:px-0"
    >
      <img
        src="./truck.png"
        class="max-w-full w-[730px] xl:h-full"
        alt="truck image"
      />
      <div class="max-w-[586px] w-full">
        <h1 class="font-extrabold text-xl text-[var(--primary-red)]">
          Our Mission
        </h1>
        <p
          class="text-[30px] sm:text-[40px] font-medium xl:text-[50px] mt-[34px]"
        >
          To transform the way people send & receive their packages, providing
          customer driving service.
        </p>
      </div>
    </section>
    <section
      class="mt-[10px] lg:mt-[108px] mx-auto max-w-[1440px] min-h-[460px] flex items-center justify-start xl:justify-between flex-col-reverse gap-y-8 xl:flex-row px-2.5 sm:px-0"
    >
      <div class="max-w-[550px] w-full">
        <h1 class="font-semibold text-[30px] sm:text-[40px] mb-[45px]">
          Our Story
        </h1>
        <p class="text-[24px] mb-[45px]">
          Welcome to Posterbox your peer to peer logistics founded in 2023
        </p>
        <p class="text-[24px] mb-[45px]">
          Posterbox was born out desire to make sending and receiving all types
          of packages stress free.
        </p>
        <p class="text-[24px] mb-[45px]">
          Having noticed the way we send packages we intended to bring a
          customer focus solution backed with technology to the market. 
        </p>
      </div>
      <img class="w-[663px] xl:h-full" src="./delivery.png" />
    </section>
  </main>
</template>

<script setup lang="ts"></script>

<style></style>
