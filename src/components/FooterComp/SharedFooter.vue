<template>
    <footer class="bg-gray-900 text-white py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Main Footer Content -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

                <!-- Company Info -->
                <div class="lg:col-span-2">
                    <div class="mb-6">
                        <h3 class="text-2xl font-bold text-red-600 mb-4 font-space-grotesk">PosterBox</h3>
                        <p class="text-gray-300 text-lg leading-relaxed font-sans mb-6">
                            Revolutionizing package delivery through community-powered logistics.
                            Connect senders with travelers for fast, affordable, and secure deliveries across Nigeria.
                        </p>
                    </div>

                    <!-- Contact Info -->
                    <div class="space-y-3">
                        <div class="flex items-center space-x-3">
                            <i class="pi pi-envelope text-red-600"></i>
                            <span class="text-gray-300 font-sans">contact@posterbox.com.ng</span>
                        </div>
                        <div class="flex items-center space-x-3">
                            <i class="pi pi-phone text-red-600"></i>
                            <span class="text-gray-300 font-sans">0700-POSTERBOX (0700-767-8372)</span>
                        </div>
                        <div class="flex items-center space-x-3">
                            <i class="pi pi-map-marker text-red-600"></i>
                            <span class="text-gray-300 font-sans">Lagos, Nigeria</span>
                        </div>
                    </div>
                </div>

                <!-- Quick Links -->
                <div>
                    <h4 class="text-lg font-semibold mb-6 font-space-grotesk">Quick Links</h4>
                    <ul class="space-y-4">
                        <li>
                            <RouterLink to="/"
                                class="text-gray-300 hover:text-red-400 transition-colors font-sans flex items-center">
                                <i class="pi pi-home mr-2 text-red-600 text-sm"></i>
                                Home
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/about"
                                class="text-gray-300 hover:text-red-400 transition-colors font-sans flex items-center">
                                <i class="pi pi-info-circle mr-2 text-red-600 text-sm"></i>
                                About Us
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/services"
                                class="text-gray-300 hover:text-red-400 transition-colors font-sans flex items-center">
                                <i class="pi pi-cog mr-2 text-red-600 text-sm"></i>
                                Services
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/contact"
                                class="text-gray-300 hover:text-red-400 transition-colors font-sans flex items-center">
                                <i class="pi pi-phone mr-2 text-red-600 text-sm"></i>
                                Contact Us
                            </RouterLink>
                        </li>
                    </ul>
                </div>

                <!-- Legal & Social -->
                <div>
                    <h4 class="text-lg font-semibold mb-6 font-space-grotesk">Legal & Social</h4>
                    <ul class="space-y-4 mb-6">
                        <li>
                            <RouterLink to="/privacy"
                                class="text-gray-300 hover:text-red-400 transition-colors font-sans flex items-center">
                                <i class="pi pi-shield mr-2 text-red-600 text-sm"></i>
                                Privacy Policy
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/terms"
                                class="text-gray-300 hover:text-red-400 transition-colors font-sans flex items-center">
                                <i class="pi pi-file-edit mr-2 text-red-600 text-sm"></i>
                                Terms of Service
                            </RouterLink>
                        </li>
                    </ul>

                    <!-- Social Links -->
                    <div>
                        <h5 class="font-medium mb-4 font-space-grotesk">Follow Us</h5>
                        <div class="flex space-x-3">
                            <a href="#"
                                class="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center text-white hover:bg-red-700 transition-colors">
                                <i class="pi pi-facebook text-sm"></i>
                            </a>
                            <a href="#"
                                class="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center text-white hover:bg-red-700 transition-colors">
                                <i class="pi pi-twitter text-sm"></i>
                            </a>
                            <a href="#"
                                class="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center text-white hover:bg-red-700 transition-colors">
                                <i class="pi pi-instagram text-sm"></i>
                            </a>
                            <a href="https://www.linkedin.com/company/myposterbox/" target="_blank"
                                class="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center text-white hover:bg-red-700 transition-colors">
                                <i class="pi pi-linkedin text-sm"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- App Download Section -->
            <div class="border-t border-gray-700 pt-8 mb-8">
                <div class="text-center">
                    <h4 class="text-lg font-semibold mb-4 font-space-grotesk">Download the PosterBox App</h4>
                    <p class="text-gray-400 mb-6 font-sans">Available on Android & iOS</p>
                    <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                        <img src="/src/views/HomeView/HeroSection/playStore.svg" alt="Google Play"
                            class="h-12 sm:h-14 cursor-pointer hover:opacity-80 transition-opacity" />
                        <img src="/src/views/HomeView/HeroSection/appStore.svg" alt="App Store"
                            class="h-12 sm:h-14 cursor-pointer hover:opacity-80 transition-opacity" />
                    </div>
                </div>
            </div>

            <!-- Bottom Section -->
            <div class="border-t border-gray-700 pt-8">
                <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div class="text-center md:text-left text-gray-400 text-sm font-sans">
                        © 2025 PosterBox. All rights reserved.
                    </div>
                    <div class="flex items-center space-x-6 text-sm text-gray-400">
                        <span class="font-sans">Made in Nigeria 🇳🇬</span>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
// Component for consistent footer across all pages
</script>
