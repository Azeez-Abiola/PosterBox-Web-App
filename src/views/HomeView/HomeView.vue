<template>
  <main class="bg-[var(--primary-white)] text-[var(--text-black)] overflow-x-hidden">
    <!-- Enhanced Hero Section -->
    <HeroSection />

    <!-- Cursive Wave Divider -->
    <div class="relative">
      <svg class="w-full h-16 sm:h-20 md:h-24" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none">
        <path d="M0,0 C480,80 960,80 1440,0 L1440,120 L0,120 Z" fill="currentColor" class="text-gray-50" />
      </svg>
    </div>

    <!-- Key Stats Section -->
    <section class="relative py-16 bg-gradient-to-br from-gray-50 to-white scroll-animate-left overflow-hidden">
      <!-- Subtle background -->
      <div class="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white"></div>

      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <!-- Section Header -->
        <div class="text-center mb-12">
          <h2 class="text-2xl md:text-3xl font-bold text-black mb-4 font-space-grotesk">
            Trusted by Thousands Nationwide
          </h2>
          <p class="text-gray-600 max-w-2xl mx-auto font-sans">
            Join our growing community of satisfied customers and reliable travelers
          </p>
        </div>

        <!-- Stats Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Deliveries Card -->
          <div
            class="group relative bg-white rounded-xl border-2 border-gray-100 p-8 text-center hover:border-red-200 transition-all duration-300 hover:shadow-lg">
            <div
              class="absolute top-4 right-4 w-3 h-3 bg-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
            </div>
            <div class="mb-4">
              <div
                class="w-16 h-16 bg-red-50 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-red-100 transition-colors">
                <i class="pi pi-box text-2xl text-red-600"></i>
              </div>
              <div class="text-4xl font-bold text-black mb-2 font-space-grotesk">5,000+</div>
              <div class="text-gray-600 font-medium font-sans">Deliveries Completed</div>
            </div>
            <div class="text-sm text-gray-500 font-sans">Packages delivered safely across Nigeria</div>
          </div>

          <!-- Users Card -->
          <div
            class="group relative bg-white rounded-xl border-2 border-gray-100 p-8 text-center hover:border-yellow-300 transition-all duration-300 hover:shadow-lg">
            <div
              class="absolute top-4 right-4 w-3 h-3 bg-yellow-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
            </div>
            <div class="mb-4">
              <div
                class="w-16 h-16 bg-yellow-50 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-100 transition-colors">
                <i class="pi pi-users text-2xl text-yellow-600"></i>
              </div>
              <div class="text-4xl font-bold text-black mb-2 font-space-grotesk">2,500+</div>
              <div class="text-gray-600 font-medium font-sans">Active Users</div>
            </div>
            <div class="text-sm text-gray-500 font-sans">Senders and travelers using our platform</div>
          </div>

          <!-- Satisfaction Card -->
          <div
            class="group relative bg-white rounded-xl border-2 border-gray-100 p-8 text-center hover:border-gray-300 transition-all duration-300 hover:shadow-lg">
            <div
              class="absolute top-4 right-4 w-3 h-3 bg-black rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
            </div>
            <div class="mb-4">
              <div
                class="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-100 transition-colors">
                <i class="pi pi-star-fill text-2xl text-black"></i>
              </div>
              <div class="text-4xl font-bold text-black mb-2">4.7/5</div>
              <div class="text-gray-600 font-medium">Customer Satisfaction</div>
            </div>
            <div class="text-sm text-gray-500">Based on verified customer reviews</div>
          </div>
        </div>

        <!-- Trust Indicators -->
        <div class="mt-12 text-center">
          <div class="inline-flex items-center space-x-6 text-sm text-gray-500">
            <div class="flex items-center space-x-2">
              <i class="pi pi-shield text-green-600"></i>
              <span>Secure Payments</span>
            </div>
            <div class="flex items-center space-x-2">
              <i class="pi pi-verified text-blue-600"></i>
              <span>Verified Travelers</span>
            </div>
            <div class="flex items-center space-x-2">
              <i class="pi pi-clock text-purple-600"></i>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Cursive Wave Divider -->
    <div class="relative bg-gray-50">
      <svg class="w-full h-16 sm:h-20 md:h-24" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none">
        <path d="M0,0 C480,80 960,80 1440,0 L1440,120 L0,120 Z" fill="currentColor" class="text-black" />
      </svg>
    </div>

    <!-- Earn While Traveling Section -->
    <section class="py-20 bg-black relative overflow-hidden">
      <!-- Animated Background Elements -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <!-- Simple Pattern -->
        <div class="absolute inset-0 bg-white/5"></div>

        <!-- Floating Elements -->
        <div class="absolute top-20 left-10 w-24 h-24 bg-red-600/20 rounded-full animate-float-slow"></div>
        <div class="absolute bottom-20 right-10 w-32 h-32 bg-yellow-500/20 rounded-full animate-float-reverse"></div>
        <div class="absolute top-1/2 left-1/3 w-16 h-16 bg-white/10 rounded-full animate-float-slow"
          style="animation-delay: 1s"></div>
        <div class="absolute top-1/4 right-1/4 w-20 h-20 bg-gray-500/20 rounded-full animate-float-reverse"
          style="animation-delay: 2s"></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <!-- Content Side -->
          <div class="text-white space-y-8 scroll-animate-left">
            <div class="space-y-6">
              <div
                class="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <i class="pi pi-star-fill text-yellow-500 mr-2"></i>
                <span class="text-sm font-medium font-sans">Earn Extra Income</span>
              </div>

              <h2 class="text-4xl md:text-5xl font-bold leading-tight font-space-grotesk">
                Turn Your Journey Into
                <span class="text-red-600">
                  Profit
                </span>
              </h2>

              <p class="text-xl text-gray-300 leading-relaxed font-sans">
                Transform your travel plans into earning opportunities. Deliver packages along your route and make money
                while exploring the world.
              </p>
            </div>

            <!-- Features List -->
            <div class="space-y-4">
              <div class="flex items-center space-x-4 group">
                <div
                  class="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <i class="pi pi-check text-white text-lg"></i>
                </div>
                <div>
                  <h4 class="text-lg font-semibold text-white">Flexible Schedule</h4>
                  <p class="text-gray-400">Travel on your own terms and timeline</p>
                </div>
              </div>

              <div class="flex items-center space-x-4 group">
                <div
                  class="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <i class="pi pi-money-bill text-black text-lg"></i>
                </div>
                <div>
                  <h4 class="text-lg font-semibold text-white">Competitive Earnings</h4>
                  <p class="text-gray-400">Earn ₦5,000-20,000 per delivery based on distance</p>
                </div>
              </div>

              <div class="flex items-center space-x-4 group">
                <div
                  class="w-12 h-12 bg-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <i class="pi pi-shield text-black text-lg"></i>
                </div>
                <div>
                  <h4 class="text-lg font-semibold text-white">Insured Deliveries</h4>
                  <p class="text-gray-400">Full insurance coverage for all packages</p>
                </div>
              </div>
            </div>

            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-4">
              <button
                class="group relative overflow-hidden bg-yellow-500 text-black px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/25 hover:scale-105">
                <span class="relative z-10">Start Earning Today</span>
                <div
                  class="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left">
                </div>
              </button>

              <button
                class="group relative border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:bg-white/10 hover:border-white/50 backdrop-blur-sm">
                <span class="flex items-center justify-center">
                  <i class="pi pi-play-circle mr-2"></i>
                  Watch How It Works
                </span>
              </button>
            </div>
          </div>

          <!-- Image Side -->
          <div class="relative scroll-animate-right">
            <div class="relative group">
              <!-- Main Image Container -->
              <div class="relative overflow-hidden rounded-3xl shadow-2xl">
                <img src="/images/mock1.png" alt="Earn while traveling" class="w-full h-auto object-cover" />

                <!-- Overlay Elements -->
                <div class="absolute top-6 left-6 z-20">
                  <div class="bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg">
                    <div class="flex items-center space-x-2">
                      <div class="w-3 h-3 bg-red-600 rounded-full animate-pulse"></div>
                      <span class="text-sm font-semibold text-gray-800">Active Delivery</span>
                    </div>
                  </div>
                </div>

                <div class="absolute bottom-6 right-6 z-20">
                  <div class="bg-yellow-500 text-black rounded-xl p-3 shadow-lg">
                    <div class="text-center">
                      <div class="text-2xl font-bold">₦15,000</div>
                      <div class="text-xs font-medium">Earned Today</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Cursive Wave Divider -->
    <div class="relative">
      <svg class="w-full h-16 sm:h-20 md:h-24" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none">
        <path d="M0,0 C360,60 720,30 1080,90 C1200,105 1320,75 1440,0 L1440,120 L0,120 Z" fill="currentColor"
          class="text-red-50" />
      </svg>
    </div>

    <!-- Features Section -->
    <section
      class="py-20 bg-gradient-to-r from-red-50 via-white to-yellow-50 relative overflow-hidden scroll-animate-right">
      <!-- Background decorations -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-10 right-10 w-40 h-40 bg-red-100 rounded-full opacity-30 animate-float-slow"></div>
        <div class="absolute bottom-10 left-10 w-32 h-32 bg-yellow-100 rounded-full opacity-40 animate-float-reverse">
        </div>
        <div class="absolute top-1/3 left-1/4 w-20 h-20 bg-gray-200 rounded-full opacity-30 animate-float-slow"
          style="animation-delay: 2s"></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="text-center mb-16 animate-fade-in-up">
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 font-space-grotesk">
            Why Choose <span class="text-red-600">PosterBox</span>?
          </h2>
          <p class="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-sans">
            Experience the convenience of our comprehensive delivery platform designed for modern travelers
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Feature 1 - Real-Time Tracking -->
          <div
            class="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-red-200 feature-card animate-fade-in-up"
            style="animation-delay: 0.1s">
            <div class="relative">
              <div
                class="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <i class="pi pi-clock text-2xl text-white"></i>
              </div>
              <div
                class="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse">
              </div>
            </div>
            <h3 class="text-2xl font-bold text-black mb-4 group-hover:text-red-600 transition-colors">Real-Time Tracking
            </h3>
            <p class="text-gray-700 leading-relaxed group-hover:text-black transition-colors">Track your packages in
              real-time with GPS technology and receive instant notifications at every step.</p>
          </div>

          <!-- Feature 2 - Secure Delivery -->
          <div
            class="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-gray-300 feature-card animate-fade-in-up"
            style="animation-delay: 0.2s">
            <div class="relative">
              <div
                class="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <i class="pi pi-shield text-2xl text-white"></i>
              </div>
              <div
                class="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse">
              </div>
            </div>
            <h3 class="text-2xl font-bold text-black mb-4 group-hover:text-red-600 transition-colors">Secure Delivery
            </h3>
            <p class="text-gray-700 leading-relaxed group-hover:text-black transition-colors">Your packages are insured
              and handled with the highest security standards throughout the journey.</p>
          </div>

          <!-- Feature 3 - Global Network -->
          <div
            class="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-red-200 feature-card animate-fade-in-up"
            style="animation-delay: 0.3s">
            <div class="relative">
              <div
                class="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <i class="pi pi-users text-2xl text-white"></i>
              </div>
              <div
                class="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse">
              </div>
            </div>
            <h3 class="text-2xl font-bold text-black mb-4 group-hover:text-red-600 transition-colors">Global Network
            </h3>
            <p class="text-gray-700 leading-relaxed group-hover:text-black transition-colors">Connect with verified
              travelers worldwide for reliable and cost-effective delivery solutions.</p>
          </div>

          <!-- Feature 4 - Best Prices -->
          <div
            class="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-yellow-300 feature-card animate-fade-in-up"
            style="animation-delay: 0.4s">
            <div class="relative">
              <div
                class="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <i class="pi pi-money-bill text-2xl text-black"></i>
              </div>
              <div
                class="absolute -top-2 -right-2 w-8 h-8 bg-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse">
              </div>
            </div>
            <h3 class="text-2xl font-bold text-black mb-4 group-hover:text-red-600 transition-colors">Best Prices</h3>
            <p class="text-gray-700 leading-relaxed group-hover:text-black transition-colors">Save up to 40% compared to
              traditional shipping methods while maintaining quality service.</p>
          </div>

          <!-- Feature 5 - Easy to Use -->
          <div
            class="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-gray-300 feature-card animate-fade-in-up"
            style="animation-delay: 0.5s">
            <div class="relative">
              <div
                class="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <i class="pi pi-mobile text-2xl text-white"></i>
              </div>
              <div
                class="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse">
              </div>
            </div>
            <h3 class="text-2xl font-bold text-black mb-4 group-hover:text-red-600 transition-colors">Easy to Use</h3>
            <p class="text-gray-700 leading-relaxed group-hover:text-black transition-colors">Intuitive mobile app
              design makes booking and tracking deliveries simple and hassle-free.</p>
          </div>

          <!-- Feature 6 - 24/7 Support -->
          <div
            class="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-red-200 feature-card animate-fade-in-up"
            style="animation-delay: 0.6s">
            <div class="relative">
              <div
                class="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <i class="pi pi-heart text-2xl text-white"></i>
              </div>
              <div
                class="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse">
              </div>
            </div>
            <h3 class="text-2xl font-bold text-black mb-4 group-hover:text-red-600 transition-colors">24/7 Support</h3>
            <p class="text-gray-700 leading-relaxed group-hover:text-black transition-colors">Round-the-clock customer
              support to assist you with any questions or concerns.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Creative Wave Divider -->
    <div class="relative">
      <svg class="w-full h-20 sm:h-24 md:h-28" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none">
        <path d="M0,60 Q360,0 720,60 T1440,60 L1440,120 L0,120 Z" fill="currentColor" class="text-red-600" />
      </svg>
    </div>

    <!-- App Showcase Section -->
    <section class="relative py-20 bg-gradient-to-r from-red-600 to-red-700 overflow-hidden">
      <!-- Background Decorations -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full opacity-50 animate-float-slow"></div>
        <div class="absolute bottom-20 right-10 w-24 h-24 bg-white/10 rounded-full opacity-60 animate-float-reverse">
        </div>
        <div class="absolute top-1/3 right-1/4 w-16 h-16 bg-white/10 rounded-full opacity-40 animate-float-slow"
          style="animation-delay: 1s"></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <!-- Section Header -->
        <div class="text-center mb-16 animate-fade-in-up">
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-6 font-space-grotesk">
            PosterBox Has You <span class="text-yellow-300">Covered</span>
          </h2>
          <p class="text-xl text-red-100 max-w-3xl mx-auto leading-relaxed font-sans">
            Experience seamless package delivery with our intuitive mobile app. From sending to tracking, everything you
            need is at your fingertips.
          </p>
        </div>

        <!-- Scrolling iPhone Mockups -->
        <div class="relative overflow-hidden w-full">
          <div class="flex gap-8 animate-scroll-left" style="width: calc(200% + 2rem);">
            <!-- iPhone Mockup 1 -->
            <div class="flex-shrink-0">
              <div class="relative w-64 h-auto">
                <!-- iPhone Frame -->
                <div class="relative bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                  <!-- Screen bezel -->
                  <div class="bg-black rounded-[2.5rem] p-1">
                    <!-- Screen -->
                    <div class="bg-white rounded-[2rem] overflow-hidden relative">
                      <!-- Notch -->
                      <div
                        class="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10">
                      </div>
                      <!-- App Screenshot -->
                      <img src="/images/app-sample/app1.png" alt="PosterBox App - Send Package"
                        class="w-full h-auto object-cover">
                    </div>
                  </div>
                  <!-- Home indicator -->
                  <div class="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-600 rounded-full">
                  </div>
                </div>
              </div>
            </div>

            <!-- iPhone Mockup 2 -->
            <div class="flex-shrink-0">
              <div class="relative w-64 h-auto">
                <div class="relative bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                  <div class="bg-black rounded-[2.5rem] p-1">
                    <div class="bg-white rounded-[2rem] overflow-hidden relative">
                      <div
                        class="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10">
                      </div>
                      <img src="/images/app-sample/app2.png" alt="PosterBox App - Track Delivery"
                        class="w-full h-auto object-cover">
                    </div>
                  </div>
                  <div class="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-600 rounded-full">
                  </div>
                </div>
              </div>
            </div>

            <!-- iPhone Mockup 3 -->
            <div class="flex-shrink-0">
              <div class="relative w-64 h-auto">
                <div class="relative bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                  <div class="bg-black rounded-[2.5rem] p-1">
                    <div class="bg-white rounded-[2rem] overflow-hidden relative">
                      <div
                        class="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10">
                      </div>
                      <img src="/images/app-sample/app3.png" alt="PosterBox App - Traveler Dashboard"
                        class="w-full h-auto object-cover">
                    </div>
                  </div>
                  <div class="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-600 rounded-full">
                  </div>
                </div>
              </div>
            </div>

            <!-- iPhone Mockup 4 -->
            <div class="flex-shrink-0">
              <div class="relative w-64 h-auto">
                <div class="relative bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                  <div class="bg-black rounded-[2.5rem] p-1">
                    <div class="bg-white rounded-[2rem] overflow-hidden relative">
                      <div
                        class="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10">
                      </div>
                      <img src="/images/app-sample/app4.png" alt="PosterBox App - Payment"
                        class="w-full h-auto object-cover">
                    </div>
                  </div>
                  <div class="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-600 rounded-full">
                  </div>
                </div>
              </div>
            </div>

            <!-- Duplicate set for seamless infinite scrolling -->
            <div class="flex-shrink-0">
              <div class="relative w-64 h-auto">
                <div class="relative bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                  <div class="bg-black rounded-[2.5rem] p-1">
                    <div class="bg-white rounded-[2rem] overflow-hidden relative">
                      <div
                        class="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10">
                      </div>
                      <img src="/images/app-sample/app1.png" alt="PosterBox App - Send Package"
                        class="w-full h-auto object-cover">
                    </div>
                  </div>
                  <div class="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-600 rounded-full">
                  </div>
                </div>
              </div>
            </div>

            <div class="flex-shrink-0">
              <div class="relative w-64 h-auto">
                <div class="relative bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                  <div class="bg-black rounded-[2.5rem] p-1">
                    <div class="bg-white rounded-[2rem] overflow-hidden relative">
                      <div
                        class="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10">
                      </div>
                      <img src="/images/app-sample/app2.png" alt="PosterBox App - Track Delivery"
                        class="w-full h-auto object-cover">
                    </div>
                  </div>
                  <div class="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-600 rounded-full">
                  </div>
                </div>
              </div>
            </div>

            <div class="flex-shrink-0">
              <div class="relative w-64 h-auto">
                <div class="relative bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                  <div class="bg-black rounded-[2.5rem] p-1">
                    <div class="bg-white rounded-[2rem] overflow-hidden relative">
                      <div
                        class="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10">
                      </div>
                      <img src="/images/app-sample/app3.png" alt="PosterBox App - Traveler Dashboard"
                        class="w-full h-auto object-cover">
                    </div>
                  </div>
                  <div class="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-600 rounded-full">
                  </div>
                </div>
              </div>
            </div>

            <div class="flex-shrink-0">
              <div class="relative w-64 h-auto">
                <div class="relative bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                  <div class="bg-black rounded-[2.5rem] p-1">
                    <div class="bg-white rounded-[2rem] overflow-hidden relative">
                      <div
                        class="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10">
                      </div>
                      <img src="/images/app-sample/app4.png" alt="PosterBox App - Payment"
                        class="w-full h-auto object-cover">
                    </div>
                  </div>
                  <div class="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-600 rounded-full">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Feature Highlights -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div class="text-center group">
            <div
              class="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <i class="pi pi-mobile text-2xl text-white"></i>
            </div>
            <h3 class="text-xl font-bold text-white mb-2 font-space-grotesk">Intuitive Design</h3>
            <p class="text-red-100 font-sans">Simple and user-friendly interface for all users</p>
          </div>

          <div class="text-center group">
            <div
              class="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <i class="pi pi-bolt text-2xl text-white"></i>
            </div>
            <h3 class="text-xl font-bold text-white mb-2 font-space-grotesk">Lightning Fast</h3>
            <p class="text-red-100 font-sans">Quick package booking and instant notifications</p>
          </div>

          <div class="text-center group">
            <div
              class="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <i class="pi pi-shield text-2xl text-white"></i>
            </div>
            <h3 class="text-xl font-bold text-white mb-2 font-space-grotesk">Secure & Reliable</h3>
            <p class="text-red-100 font-sans">End-to-end security with real-time tracking</p>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
    <section class="relative z-10 py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-black mb-6 font-space-grotesk">
            How It <span class="text-blue-600">Works</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-sans">
            Simple, secure, and fast delivery in just a few easy steps
          </p>
        </div>

        <!-- Package Sending Process - Image Left, Content Right -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <!-- Image -->
          <div class="scroll-animate-left">
            <div class="relative group">
              <img src="/images/mock1.png" alt="Package sending process"
                class="w-full h-auto rounded-2xl shadow-xl transform group-hover:scale-105 transition-transform duration-300" />
              <div class="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-2xl"></div>
              <!-- Overlay Badge -->
              <div class="absolute top-6 left-6 bg-blue-600 text-white px-4 py-2 rounded-xl font-semibold text-sm">
                📦 For Senders
              </div>
            </div>
          </div>

          <!-- Content -->
          <div class="scroll-animate-right">
            <div class="space-y-6">
              <div class="inline-block">
                <span
                  class="text-blue-600 text-sm font-semibold uppercase tracking-wider border border-blue-200 px-3 py-1 rounded-full font-space-grotesk">
                  Step by Step
                </span>
              </div>

              <h3 class="text-4xl font-bold text-black font-space-grotesk">
                Send Your <span class="text-blue-600">Package</span>
              </h3>

              <p class="text-xl text-gray-600 leading-relaxed font-sans">
                Connect with trusted travelers and send your packages anywhere across Nigeria.
                Fast, secure, and affordable delivery made simple.
              </p>

              <!-- Steps List -->
              <div class="space-y-4">
                <div class="flex items-start space-x-4 p-4 bg-blue-50 rounded-xl">
                  <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span class="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-800 font-space-grotesk">Post Your Request</h4>
                    <p class="text-gray-600 font-sans">Describe your package and destination details</p>
                  </div>
                </div>

                <div class="flex items-start space-x-4 p-4 bg-blue-50 rounded-xl">
                  <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span class="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-800 font-space-grotesk">Choose a Traveler</h4>
                    <p class="text-gray-600 font-sans">Select from verified travelers going your route</p>
                  </div>
                </div>

                <div class="flex items-start space-x-4 p-4 bg-blue-50 rounded-xl">
                  <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span class="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-800 font-space-grotesk">Track & Receive</h4>
                    <p class="text-gray-600 font-sans">Monitor delivery progress and receive your package</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Divider -->
        <div class="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-20"></div>

        <!-- Traveler Process - Content Left, Image Right -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <!-- Content -->
          <div class="order-2 lg:order-1 scroll-animate-left">
            <div class="space-y-6">
              <div class="inline-block">
                <span
                  class="text-green-600 text-sm font-semibold uppercase tracking-wider border border-green-200 px-3 py-1 rounded-full font-space-grotesk">
                  Earn Money
                </span>
              </div>

              <h3 class="text-4xl font-bold text-black font-space-grotesk">
                Become a <span class="text-green-600">Traveler</span>
              </h3>

              <p class="text-xl text-gray-600 leading-relaxed font-sans">
                Turn your travels into income! Join our network of trusted travelers and earn
                money while helping deliver packages along your route.
              </p>

              <!-- Steps List -->
              <div class="space-y-4">
                <div class="flex items-start space-x-4 p-4 bg-green-50 rounded-xl">
                  <div class="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span class="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-800 font-space-grotesk">Share Your Trip</h4>
                    <p class="text-gray-600 font-sans">Post your travel route and available space</p>
                  </div>
                </div>

                <div class="flex items-start space-x-4 p-4 bg-green-50 rounded-xl">
                  <div class="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span class="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-800 font-space-grotesk">Accept Requests</h4>
                    <p class="text-gray-600 font-sans">Choose packages that fit your schedule</p>
                  </div>
                </div>

                <div class="flex items-start space-x-4 p-4 bg-green-50 rounded-xl">
                  <div class="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span class="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-800 font-space-grotesk">Deliver & Earn</h4>
                    <p class="text-gray-600 font-sans">Complete delivery and get paid instantly</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Image -->
          <div class="order-1 lg:order-2 scroll-animate-right">
            <div class="relative group">
              <img src="/images/mock2.png" alt="Become a traveler process"
                class="w-full h-auto rounded-2xl shadow-xl transform group-hover:scale-105 transition-transform duration-300" />
              <div class="absolute inset-0 bg-gradient-to-t from-green-600/20 to-transparent rounded-2xl"></div>
              <!-- Overlay Badge -->
              <div class="absolute top-6 right-6 bg-green-600 text-white px-4 py-2 rounded-xl font-semibold text-sm">
                💰 For Travelers
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Preview -->
    <FAQSection />

    <!-- Download App Section -->
    <section class="bg-gradient-to-r from-gray-100 to-gray-50 py-16 scroll-animate-left">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-3xl font-bold mb-4 font-space-grotesk">Download the PosterBox App</h2>
          <p class="text-gray-600 mb-8 font-sans">Available on Android & iOS</p>
          <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <img src="/src/views/HomeView/HeroSection/playStore.svg" alt="Google Play"
              class="h-12 sm:h-14 cursor-pointer hover:opacity-80 transition-opacity" />
            <img src="/src/views/HomeView/HeroSection/appStore.svg" alt="App Store"
              class="h-12 sm:h-14 cursor-pointer hover:opacity-80 transition-opacity" />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import FAQSection from "./FAQSection/FAQSection.vue";
import HeroSection from "./HeroSection/HeroSection.vue";

onMounted(() => {
  // Setup repetitive scroll animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Remove existing animation classes first
        entry.target.classList.remove('animate-slide-in', 'animate-rise')
          // Trigger reflow
          ; (entry.target as HTMLElement).offsetHeight
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
</script>

<style scoped>
@keyframes scroll-left {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
}

.animate-scroll-left {
  animation: scroll-left 15s linear infinite;
}

.animate-scroll-left:hover {
  animation-play-state: paused;
}
</style>
