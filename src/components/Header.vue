<template>
    <header class="bg-white shadow-sm">
      <div class="container mx-auto px-4 py-2 flex flex-col md:flex-row justify-between items-center">
        <!-- Logo and Brand -->
        <div class="flex items-center ">
          <div class="text-blue-600 font-bold text-2xl mr-2">
            <!-- Replace with your logo or icon if available -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <div>
            <h1 class="text-xl font-bold text-gray-800">Tanzania CertChain</h1>
            
          </div>
        </div>
  
        <!-- Navigation Links -->
        <nav class="flex items-center space-x-1 sm:space-x-4 gap-4">
          <v-btn variant="text"  class="text-none"><router-link to="/">Home</router-link></v-btn>
          <v-btn variant="text"  class="text-none"><router-link to="/verify">Verify Certificate</router-link></v-btn>
          <v-btn v-if="store.isAdmin" variant="text"  class="text-none"><router-link to="/issue">Issue Certificate</router-link></v-btn>
          <v-btn v-if="!connected" variant="flat"  color="deep-orange accent-3" class="text-none text-white overflow-hidden" @click="connect">Connect Metamask</v-btn>
          <div v-if="connected" class="border rounded-full bg-green-100 text-green-700 text-xs !p-1 w-[10vw] truncate">
            {{ address }}
          </div>
          <v-btn v-if="connected"  variant="text"  class="text-none border border-gray-300" @click="logout">Disconnect</v-btn>
          
        </nav>
      </div>
    </header>
  </template>
  
  <script setup>
import { ref } from 'vue';
import  {contractService}  from '../contract/service';
import { useAuthStore } from '../contract/store';
import { useRouter } from 'vue-router';

  const connected = ref(false)
  const address = ref(null)
  const store = useAuthStore()
  const router = useRouter()

const connect = async () => {
 address.value =  await contractService.connectWallet();

 if (address.value == null) {return}
  connected.value = true

  console.log('okay');
  

store.isAdmin = await contractService.isAdmin()

}

const logout = () => {
  localStorage.clear()
  router.push('/')
}

  </script>