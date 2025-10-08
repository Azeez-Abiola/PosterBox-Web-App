<template>
  <main class="bg-white relative overflow-hidden">
    <!-- Background decorative elements -->
    <img src="./circle-7.svg" alt="circle" class="absolute left-0 top-12 opacity-60" />
    <img
      src="./circle-8.svg"
      alt="circle"
      class="absolute right-0 top-[541px] opacity-60"
    />
    
    <!-- Hero Section -->
    <section class="relative z-10 py-20 bg-gradient-to-br from-red-50 to-white scroll-animate-left">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8">
          <h1 class="text-4xl md:text-5xl font-bold text-black mb-6 font-space-grotesk">
            Our <span class="text-red-600">Services</span>
          </h1>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-sans">
            Comprehensive delivery solutions designed to meet all your shipping needs
          </p>
        </div>
      </div>
    </section>

    <!-- Main Services Section -->
    <section class="relative z-10 py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Package Sending Service - Image Left, Content Right -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <!-- Image -->
          <div class="scroll-animate-left">
            <div class="relative group">
              <img 
                src="/images/mock1.png" 
                alt="Package sending service" 
                class="w-full h-auto rounded-2xl shadow-xl transform group-hover:scale-105 transition-transform duration-300"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-red-600/20 to-transparent rounded-2xl"></div>
              <!-- Overlay Badge -->
              <div class="absolute top-6 left-6 bg-red-600 text-white px-4 py-2 rounded-xl font-semibold text-sm">
                📦 Package Sending
              </div>
            </div>
          </div>
          
          <!-- Content -->
          <div class="scroll-animate-right">
            <div class="space-y-6">
              <div class="inline-block">
                <span class="text-red-600 text-sm font-semibold uppercase tracking-wider border border-red-200 px-3 py-1 rounded-full font-space-grotesk">
                  For Senders
                </span>
              </div>
              
              <h2 class="text-4xl font-bold text-black font-space-grotesk">
                Send Packages <span class="text-red-600">Anywhere</span>
              </h2>
              
              <p class="text-xl text-gray-600 leading-relaxed font-sans">
                Send your packages anywhere across Nigeria with our network of verified travelers. 
                Fast, secure, and affordable delivery for items up to 10kg.
              </p>
              
              <!-- Features List -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="flex items-center space-x-3 p-4 bg-red-50 rounded-xl">
                  <div class="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                    <i class="pi pi-map-marker text-white text-sm"></i>
                  </div>
                  <span class="font-medium text-gray-800 font-sans">Real-time GPS tracking</span>
                </div>
                
                <div class="flex items-center space-x-3 p-4 bg-red-50 rounded-xl">
                  <div class="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                    <i class="pi pi-shield text-white text-sm"></i>
                  </div>
                  <span class="font-medium text-gray-800 font-sans">Full insurance coverage</span>
                </div>
                
                <div class="flex items-center space-x-3 p-4 bg-red-50 rounded-xl">
                  <div class="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                    <i class="pi pi-clock text-white text-sm"></i>
                  </div>
                  <span class="font-medium text-gray-800 font-sans">Same-day delivery</span>
                </div>
                
                <div class="flex items-center space-x-3 p-4 bg-red-50 rounded-xl">
                  <div class="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                    <i class="pi pi-dollar text-white text-sm"></i>
                  </div>
                  <span class="font-medium text-gray-800 font-sans">Affordable pricing</span>
                </div>
              </div>
              
              <!-- CTA Button -->
              <div class="pt-4">
                <button class="bg-red-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-red-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-space-grotesk">
                  Send a Package Now
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Divider -->
        <div class="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-20"></div>
        
        <!-- Traveler Service - Content Left, Image Right -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <!-- Content -->
          <div class="order-2 lg:order-1 scroll-animate-left">
            <div class="space-y-6">
              <div class="inline-block">
                <span class="text-yellow-600 text-sm font-semibold uppercase tracking-wider border border-yellow-200 px-3 py-1 rounded-full font-space-grotesk">
                  For Travelers
                </span>
              </div>
              
              <h2 class="text-4xl font-bold text-black font-space-grotesk">
                Become a <span class="text-yellow-600">Traveler</span>
              </h2>
              
              <p class="text-xl text-gray-600 leading-relaxed font-sans">
                Earn money while traveling! Join our network of trusted travelers and help 
                deliver packages along your route. Flexible schedule, competitive earnings.
              </p>
              
              <!-- Features List -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="flex items-center space-x-3 p-4 bg-yellow-50 rounded-xl">
                  <div class="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center">
                    <i class="pi pi-calendar text-black text-sm"></i>
                  </div>
                  <span class="font-medium text-gray-800 font-sans">Flexible schedule</span>
                </div>
                
                <div class="flex items-center space-x-3 p-4 bg-yellow-50 rounded-xl">
                  <div class="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center">
                    <i class="pi pi-money-bill text-black text-sm"></i>
                  </div>
                  <span class="font-medium text-gray-800 font-sans">Earn ₦50-200 per delivery</span>
                </div>
                
                <div class="flex items-center space-x-3 p-4 bg-yellow-50 rounded-xl">
                  <div class="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center">
                    <i class="pi pi-wallet text-black text-sm"></i>
                  </div>
                  <span class="font-medium text-gray-800 font-sans">Weekly payments</span>
                </div>
                
                <div class="flex items-center space-x-3 p-4 bg-yellow-50 rounded-xl">
                  <div class="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center">
                    <i class="pi pi-users text-black text-sm"></i>
                  </div>
                  <span class="font-medium text-gray-800 font-sans">Trusted community</span>
                </div>
              </div>
              
              <!-- CTA Button -->
              <div class="pt-4">
                <button class="bg-yellow-500 text-black px-8 py-4 rounded-xl font-semibold text-lg hover:bg-yellow-600 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-space-grotesk">
                  Start Earning Today
                </button>
              </div>
            </div>
          </div>
          
          <!-- Image -->
          <div class="order-1 lg:order-2 scroll-animate-right">
            <div class="relative group">
              <img 
                src="/images/mock2.png" 
                alt="Become a traveler service" 
                class="w-full h-auto rounded-2xl shadow-xl transform group-hover:scale-105 transition-transform duration-300"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-yellow-500/20 to-transparent rounded-2xl"></div>
              <!-- Overlay Badge -->
              <div class="absolute top-6 right-6 bg-yellow-500 text-black px-4 py-2 rounded-xl font-semibold text-sm">
                💰 Earn While Traveling
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Service Features -->
    <section class="relative z-10 py-16 bg-gradient-to-r from-blue-50 via-white to-green-50 scroll-animate-left">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-black mb-6 font-space-grotesk">
            What Makes Us Different
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto font-sans">
            Experience the PosterBox advantage with our comprehensive service features
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="text-center p-6 bg-white rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300 group">
            <div class="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <div class="w-6 h-6 bg-red-600 rounded-lg flex items-center justify-center">
                <div class="w-3 h-1 bg-white rounded-full"></div>
              </div>
            </div>
            <h3 class="text-lg font-bold text-black mb-2">Fast Delivery</h3>
            <p class="text-gray-600 text-sm">Same-day and next-day delivery options available</p>
          </div>
          
          <div class="text-center p-6 bg-white rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300 group">
            <div class="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <div class="w-6 h-6 bg-yellow-500 rounded-lg flex items-center justify-center">
                <div class="w-3 h-3 bg-black rounded-sm"></div>
              </div>
            </div>
            <h3 class="text-lg font-bold text-black mb-2">Secure & Safe</h3>
            <p class="text-gray-600 text-sm">Full insurance and verified travelers for peace of mind</p>
          </div>
          
          <div class="text-center p-6 bg-white rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300 group">
            <div class="w-14 h-14 bg-black rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center">
                <div class="w-3 h-3 bg-black rounded-sm"></div>
              </div>
            </div>
            <h3 class="text-lg font-bold text-black mb-2">Best Prices</h3>
            <p class="text-gray-600 text-sm">Save up to 70% compared to traditional shipping</p>
          </div>
          
          <div class="text-center p-6 bg-white rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300 group">
            <div class="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <div class="w-6 h-6 bg-gray-600 rounded-lg flex items-center justify-center">
                <div class="w-3 h-3 bg-white rounded-sm"></div>
              </div>
            </div>
            <h3 class="text-lg font-bold text-black mb-2">24/7 Support</h3>
            <p class="text-gray-600 text-sm">Round-the-clock customer service and assistance</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Service Areas -->
    <section class="relative z-10 py-16 bg-gradient-to-br from-gray-50 to-white scroll-animate-right">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-black mb-6 font-space-grotesk">
            Service Coverage
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto font-sans">
            We currently serve major cities across Nigeria with plans to expand nationwide
          </p>
        </div>
        
        <!-- Mock Images Grid -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div class="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 group">
            <img 
              src="/images/mock1.png" 
              alt="Service illustration 1" 
              class="w-full h-32 object-cover rounded-lg mb-3 group-hover:scale-105 transition-transform duration-300"
            />
            <p class="text-sm text-gray-600 text-center">Fast Delivery</p>
          </div>
          
          <div class="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 group">
            <img 
              src="/images/mock2.png" 
              alt="Service illustration 2" 
              class="w-full h-32 object-cover rounded-lg mb-3 group-hover:scale-105 transition-transform duration-300"
            />
            <p class="text-sm text-gray-600 text-center">Package Tracking</p>
          </div>
          
          <div class="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 group">
            <img 
              src="/images/mock3.png" 
              alt="Service illustration 3" 
              class="w-full h-32 object-cover rounded-lg mb-3 group-hover:scale-105 transition-transform duration-300"
            />
            <p class="text-sm text-gray-600 text-center">Secure Handling</p>
          </div>
          
          <div class="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 group">
            <img 
              src="/images/mock4.png" 
              alt="Service illustration 4" 
              class="w-full h-32 object-cover rounded-lg mb-3 group-hover:scale-105 transition-transform duration-300"
            />
            <p class="text-sm text-gray-600 text-center">Customer Support</p>
          </div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center p-8 bg-red-50 rounded-2xl">
            <h3 class="text-xl font-bold text-black mb-4">Lagos State</h3>
            <p class="text-gray-600 mb-4">Victoria Island, Lekki, Ikeja, Surulere, and surrounding areas</p>
            <div class="text-2xl font-bold text-red-600">1-2 Hours</div>
            <div class="text-sm text-gray-500">Average delivery time</div>
          </div>
          
          <div class="text-center p-8 bg-yellow-50 rounded-2xl">
            <h3 class="text-xl font-bold text-black mb-4">Abuja (FCT)</h3>
            <p class="text-gray-600 mb-4">Wuse, Garki, Maitama, Gwarinpa, and central areas</p>
            <div class="text-2xl font-bold text-yellow-600">2-4 Hours</div>
            <div class="text-sm text-gray-500">Average delivery time</div>
          </div>
          
          <div class="text-center p-8 bg-gray-50 rounded-2xl">
            <h3 class="text-xl font-bold text-black mb-4">Other States</h3>
            <p class="text-gray-600 mb-4">Port Harcourt, Kano, Ibadan, and other major cities</p>
            <div class="text-2xl font-bold text-black">1-2 Days</div>
            <div class="text-sm text-gray-500">Average delivery time</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="relative z-10 py-16 bg-gradient-to-r from-black via-gray-900 to-black scroll-animate-left">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6 font-space-grotesk">
          Ready to Get Started?
        </h2>
        <p class="text-lg text-gray-300 mb-8 max-w-2xl mx-auto font-sans">
          Join thousands of satisfied customers who trust PosterBox for their delivery needs
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button class="bg-red-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-red-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-space-grotesk">
            Send a Package
          </button>
          <button class="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300 font-sans">
            Become a Traveler
          </button>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
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
</script>
<script setup lang="ts"></script>
