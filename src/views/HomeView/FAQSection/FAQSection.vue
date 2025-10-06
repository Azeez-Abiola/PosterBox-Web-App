<template>
  <section class="font-['Inter'] text-[var(--text-black)] pb-[88px]">
    <h1 class="text-[30px] font-semibold text-center">
      Frequently Asked Questions
    </h1>
    <p class="mt-4 mb-8 text-[var(--text-grey)] text-center">
      Questions that are frequently asked by our User
    </p>
    <div class="space-y-2 max-w-[1440px] mx-auto">
      <section
        v-for="(item, i) in FAQList"
        :key="item.title + i"
        class="min-h-[96px] cursor-pointer bg-white pt-4 mx-2.5 sm:mx-[72.5px]"
        @click="handleFAQ(item.title)"
      >
        <div
          class="flex justify-between px-2"
          :class="
            currentFAQ == item.title && showCurrentFAQ ? '' : 'items-center'
          "
        >
          <h1 class="font-medium text-xl md:text-2xl max-w-[70%] text-wrap">
            {{ item.title }}
          </h1>
          <BoxDropdownIconComp
            v-if="currentFAQ == item.title && showCurrentFAQ"
          />
          <BoxPlusIconComp v-else />
        </div>
        <ol
          v-if="currentFAQ == item.title && showCurrentFAQ"
          class="mt-[13px] max-w-[70%] pl-2 pb-2"
        >
          <li
            v-for="(list, i) in item.steps"
            class="mt-2.5 list-inside list-decimal text-base sm:text-xl"
          >
            {{ list }}
          </li>
        </ol>
      </section>
    </div>
  </section>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { BoxPlusIconComp, BoxDropdownIconComp } from "@/components/icons";

const currentFAQ = ref<string | null>(null);
const showCurrentFAQ = ref<boolean>(false);

const handleFAQ = (FAQ: string) => {
  if (FAQ === currentFAQ.value) {
    showCurrentFAQ.value = !showCurrentFAQ.value;
  } else {
    currentFAQ.value = FAQ;
    showCurrentFAQ.value = true;
  }
};

const FAQList: {
  title: string;
  steps: string[];
}[] = [
  {
    title: "How do I get started",
    steps: [
      "Download the app from Google store or Play store.",
      "Create an account.",
      "Select either to request for shipping or to do a delivery.",
      "Input the necessary details required which is based on the former selection",
    ],
  },
  {
    title: "How does shipping work",
    steps: [
      "Shipping is done by a a registered person on our app, who  has decided to do a delivery while traveling.",
    ],
  },
  {
    title: "Where can I ship to ?",
    steps: ["To Any State in Nigeria."],
  },
  {
    title: "What type of items can be shipped via Posterbox?",
    steps: ["Items less than 10kg."],
  },
  {
    title: "What will I be charged for?",
    steps: [
      "Item delivery to. N/B it is calculated based on the weight of the item to be delivered and the location it is to be delivered to.",
      "⁠Service Fee.",
    ],
  },
];
</script>
