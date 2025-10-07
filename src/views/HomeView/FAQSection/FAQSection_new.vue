<template>
  <section class="py-20 bg-gradient-to-br from-white via-gray-50 to-blue-50 relative overflow-hidden">
    <!-- Background decorations -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-20 left-10 w-28 h-28 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-50 animate-float-slow"></div>
      <div class="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full opacity-60 animate-float-reverse"></div>
      <div class="absolute top-1/3 right-1/3 w-16 h-16 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full opacity-40 animate-float-slow" style="animation-delay: 1s"></div>
    </div>

    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <!-- Header Section -->
      <div class="text-center mb-16 animate-fade-in-up">
        <div class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-6">
          <i class="pi pi-question-circle text-blue-600 mr-2"></i>
          <span class="text-sm font-semibold text-blue-700">FAQ</span>
        </div>
        
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Frequently Asked 
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Questions</span>
        </h1>
        
        <p class="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Find answers to common questions about our delivery platform and services
        </p>
      </div>

      <!-- FAQ Items -->
      <div class="space-y-4">
        <div
          v-for="(item, i) in FAQList"
          :key="item.title + i"
          class="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-blue-200 animate-fade-in-up"
          :style="`animation-delay: ${i * 0.1}s`"
          @click="handleFAQ(item.title)"
        >
          <!-- Question Header -->
          <div class="cursor-pointer p-6 transition-all duration-300"
               :class="currentFAQ == item.title && showCurrentFAQ ? 'bg-gradient-to-r from-blue-50 to-purple-50' : 'hover:bg-gray-50'">
            <div class="flex items-center justify-between">
              <h3 class="text-lg md:text-xl font-semibold text-gray-900 pr-4 group-hover:text-blue-600 transition-colors duration-300">
                {{ item.title }}
              </h3>
              
              <!-- Animated Icon -->
              <div class="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                   :class="currentFAQ == item.title && showCurrentFAQ 
                     ? 'bg-gradient-to-br from-blue-500 to-purple-500 text-white rotate-45' 
                     : 'bg-gray-100 text-gray-600 group-hover:bg-blue-100 group-hover:text-blue-600'">
                <BoxDropdownIconComp
                  v-if="currentFAQ == item.title && showCurrentFAQ"
                  class="transform rotate-180 transition-transform duration-300"
                />
                <BoxPlusIconComp 
                  v-else 
                  class="transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </div>
          </div>

          <!-- Answer Content -->
          <div 
            v-if="currentFAQ == item.title && showCurrentFAQ"
            class="px-6 pb-6 animate-fade-in-up"
          >
            <div class="border-t border-gray-100 pt-4">
              <ol class="space-y-3">
                <li
                  v-for="(step, stepIndex) in item.steps"
                  :key="stepIndex"
                  class="flex items-start space-x-3 text-gray-600 leading-relaxed animate-fade-in-up"
                  :style="`animation-delay: ${stepIndex * 0.1}s`"
                >
                  <div class="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span class="text-white text-sm font-bold">{{ stepIndex + 1 }}</span>
                  </div>
                  <span class="text-base md:text-lg">{{ step }}</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <!-- Contact CTA -->
      <div class="text-center mt-12 animate-fade-in-up" style="animation-delay: 0.8s">
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <h3 class="text-2xl font-bold mb-4">Still have questions?</h3>
          <p class="text-blue-100 mb-6">Our support team is here to help you 24/7</p>
          <button class="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            Contact Support
          </button>
        </div>
      </div>
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
    title: "How do I get started?",
    steps: [
      "Download the app from Google Store or Play Store",
      "Create an account with your email or phone number",
      "Select either to request shipping or to do a delivery",
      "Input the necessary details based on your selection",
    ],
  },
  {
    title: "How does shipping work?",
    steps: [
      "Shipping is done by registered travelers on our platform who have decided to deliver packages while traveling to your destination",
    ],
  },
  {
    title: "Where can I ship to?",
    steps: ["To any state in Nigeria with expanding coverage nationwide"],
  },
  {
    title: "What type of items can be shipped via PosterBox?",
    steps: ["Items less than 10kg that comply with our safety guidelines"],
  },
  {
    title: "What will I be charged for?",
    steps: [
      "Item delivery fee calculated based on weight and destination distance",
      "Service fee for platform usage and insurance coverage",
    ],
  },
];
</script>