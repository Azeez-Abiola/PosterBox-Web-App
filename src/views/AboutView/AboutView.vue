<template>
  <main class="bg-white relative overflow-hidden">
    <!-- Background decorative elements -->
    <img
      class="absolute top-[42px] left-0 z-0 opacity-60"
      src="./circle-5.svg"
      alt="circle-5"
    />
    <img
      src="./circle-6.svg"
      class="absolute top-[541px] right-0 z-0 opacity-60"
      alt="circle-6"
    />
    
    <!-- Hero Section -->
    <section class="relative z-10 py-20 scroll-animate-left">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8">
          <h1 class="text-4xl md:text-5xl font-bold text-black mb-6 font-space-grotesk">
            About <span class="text-red-600">PosterBox</span>
          </h1>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-sans">
            Revolutionizing package delivery through community-powered logistics
          </p>
        </div>
      </div>
    </section>

    <!-- Mission Section -->
    <section class="relative z-10 py-16 scroll-animate-right">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
          <!-- Image -->
          <div class="order-2 xl:order-1 scroll-animate-left">
            <div class="relative group">
              <img
                src="./truck.png"
                class="w-full h-auto rounded-2xl shadow-lg transform group-hover:scale-105 transition-transform duration-300"
                alt="Delivery truck illustration"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl"></div>
            </div>
          </div>
          
          <!-- Content -->
          <div class="order-1 xl:order-2 scroll-animate-right">
            <div class="inline-block mb-6">
              <span class="text-red-600 text-sm font-semibold uppercase tracking-wider border border-red-200 px-3 py-1 rounded-full font-space-grotesk">
                Our Mission
              </span>
            </div>
            
            <h2 class="text-3xl md:text-4xl font-bold text-black mb-6 leading-tight font-space-grotesk">
              Transforming Package Delivery
            </h2>
            
            <p class="text-lg text-gray-600 mb-8 leading-relaxed font-sans">
              To transform the way people send and receive their packages by providing 
              customer-driven service that connects travelers with people who need reliable, 
              affordable delivery solutions.
            </p>
            
            <div class="grid grid-cols-2 gap-6">
              <div class="text-center p-4 bg-red-50 rounded-xl">
                <div class="text-2xl font-bold text-red-600 mb-2 font-space-grotesk">100K+</div>
                <div class="text-sm text-gray-600 font-sans">Packages Delivered</div>
              </div>
              <div class="text-center p-4 bg-gray-50 rounded-xl">
                <div class="text-2xl font-bold text-black mb-2 font-space-grotesk">50K+</div>
                <div class="text-sm text-gray-600 font-sans">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Story Section -->
    <section class="relative z-10 py-16 bg-gray-50 scroll-animate-left">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
          <!-- Content -->
          <div class="scroll-animate-left">
            <div class="inline-block mb-6">
              <span class="text-black text-sm font-semibold uppercase tracking-wider border border-gray-300 px-3 py-1 rounded-full font-space-grotesk">
                Our Story
              </span>
            </div>
            
            <h2 class="text-3xl md:text-4xl font-bold text-black mb-8 font-space-grotesk">
              Founded on Innovation
            </h2>
            
            <div class="space-y-6">
              <div class="flex items-start space-x-4">
                <div class="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div class="w-3 h-3 bg-white rounded-sm"></div>
                </div>
                <div>
                  <h3 class="font-semibold text-lg text-black mb-2">Founded in 2023</h3>
                  <p class="text-gray-600">PosterBox was born out of a desire to make sending and receiving packages stress-free for everyone.</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4">
                <div class="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div class="w-3 h-3 bg-black rounded-sm"></div>
                </div>
                <div>
                  <h3 class="font-semibold text-lg text-black mb-2">Innovation-Driven</h3>
                  <p class="text-gray-600">Having noticed inefficiencies in traditional package delivery, we intended to bring a customer-focused solution backed with technology to the market.</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4">
                <div class="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div class="w-3 h-3 bg-white rounded-sm"></div>
                </div>
                <div>
                  <h3 class="font-semibold text-lg text-black mb-2">Community-Powered</h3>
                  <p class="text-gray-600">We believe in the power of community and trust, connecting people who travel with those who need reliable delivery services.</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Image -->
          <div class="scroll-animate-right">
            <div class="relative group">
              <img 
                class="w-full h-auto rounded-2xl shadow-lg transform group-hover:scale-105 transition-transform duration-300" 
                src="./delivery.png" 
                alt="Delivery service illustration"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="relative z-10 py-16 scroll-animate-right">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-black mb-6 font-space-grotesk">
            Our Core Values
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto font-sans">
            The principles that guide everything we do
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center p-6 bg-white rounded-xl border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <div class="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <div class="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <div class="w-3 h-3 bg-red-600 rounded-full"></div>
              </div>
            </div>
            <h3 class="text-xl font-bold text-black mb-3">Trust & Safety</h3>
            <p class="text-gray-600">Every traveler is verified and every package is insured for complete peace of mind.</p>
          </div>
          
          <div class="text-center p-6 bg-white rounded-xl border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <div class="w-16 h-16 bg-yellow-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <div class="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <div class="w-4 h-1 bg-yellow-500 rounded-full transform rotate-12"></div>
              </div>
            </div>
            <h3 class="text-xl font-bold text-black mb-3">Speed & Reliability</h3>
            <p class="text-gray-600">Fast delivery times with real-time tracking and reliable service you can count on.</p>
          </div>
          
          <div class="text-center p-6 bg-white rounded-xl border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <div class="w-16 h-16 bg-black rounded-xl flex items-center justify-center mx-auto mb-4">
              <div class="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <div class="w-3 h-3 bg-red-600 rounded-full"></div>
              </div>
            </div>
            <h3 class="text-xl font-bold text-black mb-3">Customer First</h3>
            <p class="text-gray-600">Your satisfaction is our priority. We're here to support you every step of the way.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Visual Showcase Section -->
    <section class="relative z-10 py-16 bg-gray-50 scroll-animate-left">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-black mb-6 font-space-grotesk">
            Experience PosterBox
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto font-sans">
            See how we're transforming package delivery across Nigeria
          </p>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
            <img 
              src="/images/mock1.png" 
              alt="PosterBox experience 1" 
              class="w-full h-32 object-cover rounded-xl mb-4 group-hover:scale-105 transition-transform duration-300"
            />
            <h3 class="font-semibold text-black mb-2">Easy Booking</h3>
            <p class="text-sm text-gray-600">Simple and intuitive package booking process</p>
          </div>
          
          <div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
            <img 
              src="/images/mock2.png" 
              alt="PosterBox experience 2" 
              class="w-full h-32 object-cover rounded-xl mb-4 group-hover:scale-105 transition-transform duration-300"
            />
            <h3 class="font-semibold text-black mb-2">Real-time Tracking</h3>
            <p class="text-sm text-gray-600">Follow your package every step of the way</p>
          </div>
          
          <div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
            <img 
              src="/images/mock3.png" 
              alt="PosterBox experience 3" 
              class="w-full h-32 object-cover rounded-xl mb-4 group-hover:scale-105 transition-transform duration-300"
            />
            <h3 class="font-semibold text-black mb-2">Verified Travelers</h3>
            <p class="text-sm text-gray-600">Trusted network of verified delivery partners</p>
          </div>
          
          <div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
            <img 
              src="/images/mock4.png" 
              alt="PosterBox experience 4" 
              class="w-full h-32 object-cover rounded-xl mb-4 group-hover:scale-105 transition-transform duration-300"
            />
            <h3 class="font-semibold text-black mb-2">Safe Delivery</h3>
            <p class="text-sm text-gray-600">Secure and insured package handling</p>
          </div>
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
</script><script setup lang="ts"></script>

<style></style>
