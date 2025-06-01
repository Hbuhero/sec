<template>
    <div class="bg-gray-50 min-h-screen py-12">
        <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <header class="text-center mb-12">
                <h1 class="text-4xl font-bold text-gray-900 mb-4">Certificate Verification</h1>
                <p class="text-lg text-gray-600 max-w-2xl mx-auto">Upload a certificate to verify its authenticity on the blockchain.</p>
            </header>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                <v-card class="mx-auto w-full max-w-md" elevation="1">
                    <v-card-title class="pb-6 flex items-center gap-2">
                        <v-icon size="24" color="blue-600">mdi-magnify</v-icon>
                        <span class="text-xl font-semibold text-gray-900">Verify Certificate</span>
                    </v-card-title>

                    <div class="px-6 pb-6 space-y-6">
                        <div class="space-y-2">
                            <label class="text-sm font-medium text-gray-700">Certificate Type</label>
                            <v-select :items="items" v-model="type" variant="outlined" density="compact" class="bg-white" color="blue"></v-select>
                        </div>

                        <div class="space-y-2">
                            <label class="text-sm font-medium text-gray-700">Upload Certificate (PDF)</label>
                            <v-file-input accept=".pdf" variant="outlined" density="compact" label="Choose file" v-model="file" color="blue" class="bg-white"></v-file-input>
                        </div>

                        <v-btn class="w-full" color="blue" @click="verify" :loading="loading" :disabled="!file || !type">Verify Certificate</v-btn>
                    </div>
                </v-card>

                <v-skeleton-loader  :loading="loading">
                <v-card class="mx-auto w-full max-w-md" elevation="1">
                    <v-card-title class="pb-6">
                        <span class="text-xl font-semibold text-gray-900">Verification Results</span>
                    </v-card-title>

                    
                        <div v-if="verificationStatus === 'idle'" class="px-6 pb-6">
                            <div class="text-center">
                                <div v-if="!file" class="py-12">
                                    <div class="rounded-full bg-gray-100 p-4 w-16 h-16 mx-auto mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-full h-full text-gray-400">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                                        </svg>
                                    </div>
                                    <p class="text-gray-500">Upload a certificate to verify its authenticity</p>
                                </div>

                                <div v-else class="py-8">
                                    <div class="mb-4 p-3 bg-blue-50 rounded-full w-16 h-16 mx-auto">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full text-blue-600" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p class="text-sm text-gray-500 mb-2">File Ready</p>
                                    <p class="font-medium text-gray-800 mb-4 break-all px-4">{{ file.name }}</p>
                                    <p class="text-sm text-gray-500">Click verify to check authenticity</p>
                                </div>
                            </div>
                        </div>

                        <div v-if="verificationStatus === 'success'" class="px-6 pb-6">
                            <div class="text-center mb-8">
                                <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-green-50 p-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full text-green-600" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 class="text-xl font-semibold text-green-600">Certificate Valid</h3>
                            </div>

                            <div class="space-y-4 mb-6 bg-gray-50 rounded-lg p-4">
                                <div class="flex">
                                    <span class="w-1/3 text-sm text-gray-500">Issuer:</span>
                                    <span class="w-2/3 text-sm font-medium text-gray-900">University of Dar es Salaam</span>
                                </div>
                                <div class="flex">
                                    <span class="w-1/3 text-sm text-gray-500">Issuer Address:</span>
                                    <span class="w-2/3 font-mono text-xs text-gray-900 break-all">{{ data[3] }}</span>
                                </div>
                                <div class="flex">
                                    <span class="w-1/3 text-sm text-gray-500">Issued Date:</span>
                                    <span class="w-2/3 text-sm font-medium text-gray-900">{{ convertTimestamp(data[4]) }}</span>
                                </div>
                                <div class="flex">
                                    <span class="w-1/3 text-sm text-gray-500">Status:</span>
                                    <span class="w-2/3 text-sm font-medium text-green-600">Valid</span>
                                </div>
                                <div class="flex">
                                    <span class="w-1/3 text-sm text-gray-500">Hash:</span>
                                    <span class="w-2/3 font-mono text-xs text-gray-900 break-all">{{ data[0] }}</span>
                                </div>
                                <div class="flex">
                                    <span class="w-1/3 text-sm text-gray-500">IPFS CID:</span>
                                    <span class="w-2/3 text-sm font-medium text-gray-900">{{ data[1] }}</span>
                                </div>
                            </div>

                            <v-btn block color="blue" @click="openFile" prepend-icon="mdi-file-document-outline">View Original Certificate</v-btn>
                        </div>

                        <div v-if="verificationStatus === 'error'" class="px-6 pb-6">
                            <div class="text-center mb-8">
                                <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-red-50 p-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full text-red-600" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </div>
                                <h3 class="text-xl font-semibold text-red-600">Certificate Invalid</h3>
                            </div>

                            <div class="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
                                <div class="flex items-start">
                                    <div class="flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-400"
                                            viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                    <p class="ml-3 text-sm text-red-700">
                                        This certificate was not found in our blockchain records. It may be invalid,
                                        tampered with, or not issued through our system.
                                    </p>
                                </div>
                            </div>
                        </div>
                </v-card>
            </v-skeleton-loader>
            </div>

            <section class="bg-white rounded-2xl shadow-sm !p-8 mb-12">
                <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">How Certificate Verification Works</h2>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="bg-gray-50 !p-6 rounded-xl hover:shadow-md transition-shadow">
                        <div class="flex items-center mb-4">
                            <div class="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-xl">
                                1
                            </div>
                            <h3 class="ml-4 text-lg font-semibold text-gray-900">Upload Certificate</h3>
                        </div>
                        <p class="text-gray-600 leading-relaxed">
                            Upload the PDF certificate you want to verify and select its type from the available options.
                        </p>
                    </div>

                    <div class="bg-gray-50 !p-6 rounded-xl hover:shadow-md transition-shadow">
                        <div class="flex items-center mb-4">
                            <div class="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-xl">
                                2
                            </div>
                            <h3 class="ml-4 text-lg font-semibold text-gray-900">Blockchain Verification</h3>
                        </div>
                        <p class="text-gray-600 leading-relaxed">
                            The system generates a unique hash of your file and checks it against secure blockchain records.
                        </p>
                    </div>

                    <div class="bg-gray-50 !p-6 rounded-xl hover:shadow-md transition-shadow">
                        <div class="flex items-center mb-4">
                            <div class="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-xl">
                                3
                            </div>
                            <h3 class="ml-4 text-lg font-semibold text-gray-900">Instant Results</h3>
                        </div>
                        <p class="text-gray-600 leading-relaxed">
                            Receive immediate verification results with complete issuer details and authenticity status.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    </div>
</template>

<script setup >
import { ref } from 'vue';
import { ethers } from 'ethers';
import  {contractService}  from '../contract/service';

const items = [
    'Degree', 'Diploma', 'Master', 'Others'
]
const type = ref(null)
const file = ref(null)
const verificationStatus = ref('idle')  
const loading = ref(false)
const cid = ref(null)
const data = ref({})

const verify = async () => {
    try {

        loading.value = true
        if (!file.value) return

        const certHash = await hashFile(file.value)
        const verified = await contractService.verifyCertificate(certHash)
        console.log(verified);
        
        if (!verified){
            loading.value = false
            verificationStatus.value = 'error'
            return
        }

        const response = await contractService.getCertificate(certHash)
        data.value = response
        cid.value = response[1]
        verificationStatus.value = 'success'
        loading.value = false
        console.log(response);
        
    
    
    } catch (error) {
        console.log(error);
        loading.value = false
        verificationStatus.value = 'error'
    }
}

function convertTimestamp(timestamp) {
    const timestampStr = typeof timestamp === 'bigint' 
    ? timestamp.toString() 
    : String(timestamp).endsWith('n') 
      ? String(timestamp).slice(0, -1) 
      : String(timestamp);
  
  // Convert to number and then to milliseconds
  return new Date(Number(timestampStr) * 1000).toLocaleString();
  
}

const openFile = () => {
    
  if (!cid.value) return
  console.log('in ');
  
  const url = `https://gateway.pinata.cloud/ipfs/${cid.value}`
  window.open(url, '_blank')
}

// function convertBytesToString(byte) {
//   try {
//     stringOutput.value = ethers.toUtf8String(byte);
//   } catch (error) {
//     stringOutput.value = `Error: ${error.message}`;
//   }
// }

async function hashFile(file) {
    // 1. Read file as ArrayBuffer
    const buffer = await file.arrayBuffer();
    const uint8Array = new Uint8Array(buffer);
  
    // 2. Convert to hex string
    const hexString = Array.from(uint8Array)
      .map(byte => byte.toString(16).padStart(2, '0'))
      .join('');
  
    // 3. Hash with keccak256 (returns 32-byte hash)
    return ethers.keccak256('0x' + hexString);
  
  }


</script >

<style lang="scss" scoped></style>