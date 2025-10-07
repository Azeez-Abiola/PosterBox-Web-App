<template>
  <footer class="bg-gray-900 text-white py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        
        <!-- Company Info -->
        <div class="space-y-4">
          <RouterLink to="/" class="group flex items-center space-x-2">
            <img
              alt="PosterBox logo"
              src="@/assets/logo2.svg"
              class="max-h-[40px] h-full transition-transform duration-300 group-hover:scale-105"
            />
          </RouterLink>
          <p class="text-gray-400 font-opensans leading-relaxed">
            Revolutionizing package delivery through community-powered logistics. 
            Fast, affordable, and secure.
          </p>
          <div class="flex space-x-4">
            <a href="https://www.facebook.com/Posterbox.ng?mibextid=LQQJ4d" target="_blank" class="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors">
              <i class="pi pi-facebook text-sm"></i>
            </a>
            <a href="http://Twitter.com/myposterboxapp" target="_blank" class="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors">
              <i class="pi pi-twitter text-sm"></i>
            </a>
            <a href="https://www.instagram.com/myposterbox?igsh=MXBvZ250d21oa3NnaQ%3D%3D&utm_source=qr" target="_blank" class="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors">
              <i class="pi pi-instagram text-sm"></i>
            </a>
            <a href="https://www.linkedin.com/company/myposterbox/" target="_blank" class="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors">
              <i class="pi pi-linkedin text-sm"></i>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="space-y-4">
          <h4 class="text-lg font-semibold font-inter">Quick Links</h4>
          <ul class="space-y-3 font-opensans">
            <li>
              <RouterLink to="/about" class="text-gray-400 hover:text-white transition-colors">About Us</RouterLink>
            </li>
            <li>
              <RouterLink to="/services" class="text-gray-400 hover:text-white transition-colors">Our Services</RouterLink>
            </li>
            <li>
              <RouterLink to="/contact" class="text-gray-400 hover:text-white transition-colors">Contact Us</RouterLink>
            </li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
          </ul>
        </div>

        <!-- Services -->
        <div class="space-y-4">
          <h4 class="text-lg font-semibold font-inter">Services</h4>
          <ul class="space-y-3 font-opensans">
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Send Package</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Become Traveler</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Track Package</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Insurance</a></li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div class="space-y-4">
          <h4 class="text-lg font-semibold font-inter">Get In Touch</h4>
          <div class="space-y-3 font-opensans">
            <div class="flex items-center space-x-3">
              <i class="pi pi-envelope text-red-600"></i>
              <a href="mailto:contact@posterbox.com.ng" class="text-gray-400 hover:text-white transition-colors">contact@posterbox.com.ng</a>
            </div>
            <div class="flex items-center space-x-3">
              <i class="pi pi-phone text-red-600"></i>
              <a href="tel:0700767837269" class="text-gray-400 hover:text-white transition-colors">0700767837269</a>
            </div>
            <div class="flex items-center space-x-3">
              <i class="pi pi-map-marker text-red-600"></i>
              <span class="text-gray-400">Lagos, Nigeria</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Section -->
      <div class="border-t border-gray-800 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div class="text-gray-400 text-sm font-opensans">
            © 2025 PosterBox. All rights reserved.
          </div>
          <div class="flex space-x-6 text-sm font-opensans">
            <RouterLink to="/privacy" class="text-gray-400 hover:text-white transition-colors">Privacy Policy</RouterLink>
            <RouterLink to="/terms" class="text-gray-400 hover:text-white transition-colors">Terms of Service</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Modern footer component with consistent styling
</script>
