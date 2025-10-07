<template>
  <section class="relative overflow-hidden bg-gradient-to-br from-[var(--primary-red)] to-red-600 min-h-screen">
    <!-- Background decorative elements -->
    <img alt="circle-1" src="./circle.svg" class="absolute top-16 left-0 opacity-20" />
    <img alt="circle-2" src="./circle-2.svg" class="absolute bottom-5 right-0 opacity-20" />
    <img src="./dot.svg" class="absolute top-32 left-16 hidden md:block opacity-30" />
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="flex flex-col lg:flex-row items-center gap-12 min-h-[80vh] scroll-animate">
        
        <!-- Content Section -->
        <div class="lg:w-1/2 text-white space-y-8">
          <div class="space-y-6">
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight font-inter">
              Send packages anywhere in the country — 
              <span class="text-yellow-300">
                <span class="switching-text" ref="switchingText">fast</span>
              </span>
            </h1>
            <p class="text-xl sm:text-2xl text-red-100 leading-relaxed font-opensans">
              A community-powered delivery app where senders save and travelers earn.
            </p>
          </div>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4">
            <button class="bg-white text-[var(--primary-red)] px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg font-inter">
              Get the App
            </button>
            <button class="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-[var(--primary-red)] transition-all duration-300 font-opensans">
              Make a Request
            </button>
          </div>

          <!-- Microcopy -->
          <div class="flex flex-wrap gap-4 text-red-100 text-sm">
            <span class="flex items-center gap-2">
              <i class="pi pi-check-circle text-yellow-300"></i>
              Real-time tracking
            </span>
            <span class="flex items-center gap-2">
              <i class="pi pi-check-circle text-yellow-300"></i>
              Insurance options
            </span>
            <span class="flex items-center gap-2">
              <i class="pi pi-check-circle text-yellow-300"></i>
              24/7 support
            </span>
          </div>

          <!-- Download Buttons -->
          <div class="pt-8">
            <p class="text-red-100 mb-4">Download the app:</p>
            <div class="flex flex-col sm:flex-row gap-4">
              <button class="flex items-center gap-3 bg-black bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 rounded-lg px-4 py-3 hover:bg-opacity-30 transition-all duration-300">
                <img alt="Google Play" src="./playStore.svg" class="w-8 h-8" />
                <div class="text-left">
                  <div class="text-xs text-red-100">GET IT ON</div>
                  <div class="text-sm font-semibold">Google Play</div>
                </div>
              </button>
              <button class="flex items-center gap-3 bg-black bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 rounded-lg px-4 py-3 hover:bg-opacity-30 transition-all duration-300">
                <img alt="App Store" src="./appStore.svg" class="w-8 h-8" />
                <div class="text-left">
                  <div class="text-xs text-red-100">Download on the</div>
                  <div class="text-sm font-semibold">App Store</div>
                </div>
              </button>
            </div>
          </div>
        </div>

        <!-- Phone Mockup Section -->
        <div class="lg:w-1/2 flex justify-center">
          <div class="relative hero-image-container">
            <img 
              src="./iPhone-13.png" 
              alt="PosterBox App Screenshot" 
              class="w-80 lg:w-96 h-auto drop-shadow-2xl hero-image" 
              @mouseenter="startImageAnimation"
              @mouseleave="stopImageAnimation"
            />
            <!-- Floating elements for visual appeal -->
            <div class="absolute -top-4 -left-4 w-8 h-8 bg-yellow-300 rounded-full opacity-80 animate-pulse"></div>
            <div class="absolute -bottom-4 -right-4 w-12 h-12 bg-white bg-opacity-20 rounded-full opacity-60 animate-bounce"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Social Links -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2">
      <div class="flex gap-6 items-center">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/company/myposterbox/"
          class="text-white hover:text-yellow-300 transition-colors duration-300"
        >
          <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.5 0H3.5C2.4 0 1.5 0.9 1.5 2V22C1.5 23.1 2.4 24 3.5 24H21.5C22.6 24 23.5 23.1 23.5 22V2C23.5 0.9 22.6 0 21.5 0ZM8.5 20H5.5V9H8.5V20ZM7 7.5C6.2 7.5 5.5 6.8 5.5 6S6.2 4.5 7 4.5S8.5 5.2 8.5 6S7.8 7.5 7 7.5ZM20.5 20H17.5V14.5C17.5 13.4 16.6 12.5 15.5 12.5S13.5 13.4 13.5 14.5V20H10.5V9H13.5V10.5C14.1 9.6 15.2 9 16.5 9C18.4 9 20.5 10.6 20.5 13V20Z" fill="currentColor"/>
          </svg>
        </a>
        <span class="text-white text-sm font-opensans">Follow us for updates</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const switchingText = ref<HTMLElement>()
let textInterval: ReturnType<typeof setInterval>

const words = ['fast', 'safe', 'affordable']
let currentIndex = 0

// Text switching animation
const switchText = () => {
  if (switchingText.value) {
    switchingText.value.style.opacity = '0'
    setTimeout(() => {
      if (switchingText.value) {
        currentIndex = (currentIndex + 1) % words.length
        switchingText.value.textContent = words[currentIndex]
        switchingText.value.style.opacity = '1'
      }
    }, 200)
  }
}

// Image hover animations
const startImageAnimation = () => {
  const image = document.querySelector('.hero-image') as HTMLElement
  if (image) {
    image.style.animation = 'heroHover 2s ease-in-out infinite'
  }
}

const stopImageAnimation = () => {
  const image = document.querySelector('.hero-image') as HTMLElement
  if (image) {
    image.style.animation = 'none'
  }
}

onMounted(() => {
  // Start text switching
  textInterval = setInterval(switchText, 2000)
  
  // Setup repetitive scroll animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Remove existing animation classes first
        entry.target.classList.remove('animate-slide-in', 'animate-rise')
        // Trigger reflow
        ;(entry.target as HTMLElement).offsetHeight
        // Add animation class again
        if (entry.target.classList.contains('scroll-animate-left') || entry.target.classList.contains('scroll-animate-right')) {
          entry.target.classList.add('animate-slide-in')
        } else {
          entry.target.classList.add('animate-rise')
        }
      } else {
        // Reset animation when out of view
        entry.target.classList.remove('animate-slide-in', 'animate-rise')
      }
    })
  }, { threshold: 0.1 })
  
  // Observe all scroll animation elements
  document.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-up').forEach((el) => {
    observer.observe(el)
  })
})

onUnmounted(() => {
  if (textInterval) {
    clearInterval(textInterval)
  }
})
</script>

<style scoped>
/* Font families */
.font-inter {
  font-family: 'Inter', sans-serif;
}

.font-opensans {
  font-family: 'Open Sans', sans-serif;
}

/* Text switching animation */
.switching-text {
  transition: opacity 0.3s ease-in-out;
  display: inline-block;
  min-width: 120px;
}

/* Hero image hover animation */
.hero-image {
  transition: transform 0.3s ease;
  cursor: pointer;
}

.hero-image-container:hover .hero-image {
  transform: scale(1.05) rotate(2deg);
}

@keyframes heroHover {
  0%, 100% { 
    transform: scale(1.05) rotate(2deg) translateY(0px); 
  }
  25% { 
    transform: scale(1.05) rotate(2deg) translateY(-10px) translateX(5px); 
  }
  50% { 
    transform: scale(1.05) rotate(2deg) translateY(-5px) translateX(-5px); 
  }
  75% { 
    transform: scale(1.05) rotate(2deg) translateY(-15px) translateX(3px); 
  }
}

/* Scroll animations */
.scroll-animate {
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s ease-out;
}

.animate-rise {
  opacity: 1 !important;
  transform: translateY(0) !important;
}
</style>
