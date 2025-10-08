<template>
  <footer class="bg-black text-white">
    <!-- Main Footer Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

      <!-- Top Section: Tagline + Quick Links -->
      <div class="flex flex-col lg:flex-row justify-between items-start mb-16">
        <!-- Left: Tagline and CTA -->
        <div class="lg:max-w-2xl mb-8 lg:mb-0">
          <p class="text-gray-300 text-lg font-sans leading-relaxed mb-6">
            join ambitious people and businesses optimising their lives with posterbox.
          </p>
          <button class="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
            GET STARTED
          </button>
        </div>

        <!-- Right: Quick Links Grid -->
        <div class="grid grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          <!-- Company -->
          <div class="space-y-4">
            <h4 class="text-white font-bold font-space-grotesk text-sm uppercase tracking-wider">COMPANY</h4>
            <ul class="space-y-3 font-sans text-sm">
              <li>
                <RouterLink to="/about" class="text-gray-400 hover:text-white transition-colors">Story</RouterLink>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white transition-colors">Career</a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white transition-colors">Blog</a>
              </li>
              <li>
                <RouterLink to="/terms" class="text-gray-400 hover:text-white transition-colors">Terms Of Use
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/privacy" class="text-gray-400 hover:text-white transition-colors">Privacy Policy
                </RouterLink>
              </li>
            </ul>
          </div>

          <!-- Explore -->
          <div class="space-y-4">
            <h4 class="text-white font-bold font-space-grotesk text-sm uppercase tracking-wider">EXPLORE</h4>
            <ul class="space-y-3 font-sans text-sm">
              <li>
                <RouterLink to="/services" class="text-gray-400 hover:text-white transition-colors">Send Package
                </RouterLink>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white transition-colors">Become Traveler</a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white transition-colors">Track Package</a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white transition-colors">Insurance</a>
              </li>
            </ul>
          </div>

          <!-- Contact Support -->
          <div class="space-y-4">
            <h4 class="text-white font-bold font-space-grotesk text-sm uppercase tracking-wider">CONTACT SUPPORT</h4>
            <div class="space-y-3 font-sans text-sm">
              <div>
                <a href="tel:+2347067837269" class="text-gray-400 hover:text-white transition-colors">+2347067837269</a>
              </div>
              <div>
                <a href="tel:+2347060755327" class="text-gray-400 hover:text-white transition-colors">+2347060755327</a>
              </div>
              <div>
                <a href="mailto:hello@posterbox.ng"
                  class="text-gray-400 hover:text-white transition-colors">hello@posterbox.ng</a>
              </div>
            </div>

            <!-- Social Media Icons -->
            <div class="flex space-x-3 pt-3">
              <a href="https://www.facebook.com/Posterbox.ng?mibextid=LQQJ4d" target="_blank"
                class="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                <i class="pi pi-facebook text-xs"></i>
              </a>
              <a href="http://Twitter.com/myposterboxapp" target="_blank"
                class="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                <i class="pi pi-twitter text-xs"></i>
              </a>
              <a href="https://www.instagram.com/myposterbox?igsh=MXBvZ250d21oa3NnaQ%3D%3D&utm_source=qr"
                target="_blank"
                class="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                <i class="pi pi-instagram text-xs"></i>
              </a>
              <a href="https://www.linkedin.com/company/myposterbox/" target="_blank"
                class="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                <i class="pi pi-linkedin text-xs"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Section with Bold Company Name -->
    <div class="border-t border-gray-800 py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <!-- Bold Company Name -->
          <div>
            <h1 class="text-5xl md:text-6xl lg:text-7xl font-black font-space-grotesk text-white tracking-tight">
              posterbox
            </h1>
          </div>

          <!-- Copyright -->
          <div class="text-gray-400 text-sm font-sans">
            © 2025 PosterBox. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Modern footer component with consistent styling
</script>
