<template>
    <div v-if="loading" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div class="relative">
        <!-- Outer circle -->
        <div class="w-16 h-16 border-4 border-blue-500 border-opacity-30 rounded-full"></div>
        
        <!-- Inner circle (spinning part) -->
        <div class="absolute top-0 left-0 w-16 h-16 border-4 border-t-blue-500 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
        
        <!-- Optional text -->
        <p v-if="text" class="mt-4 text-center text-white font-medium">{{ text }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      loading: {
        type: Boolean,
        required: true
      },
      text: {
        type: String,
        default: ''
      }
    }
  }
  </script>