<template>
    <div>
        <main class="!p-6 max-w-7xl mx-auto !py-6 sm:!px-6 lg:!px-8">
            <header>
                <h1>Certifcate Verification</h1>
                <p>Upload a certificate to verify its authenticity on the blockchain.</p>
            </header>

            <div class="grid grid-cols-2">
                <v-card class="mx-auto" width="400">
                    <v-card-title>
                        <v-icon size="small">mdi-magnify</v-icon>
                        Verify Certifcate
                    </v-card-title>

                    <div>
                        <p>
                            Certificate Type
                        </p>
                        <v-select :items="items" v-model="type" variant="outlined" density="compact"></v-select>
                    </div>

                    <div>
                        <p>Upload Certificate (PDF)</p>
                        <v-file-input variant="outlined" density="compact" width="200" label="Choose file"
                            v-model="file">
                        </v-file-input>

                    </div>

                    <v-btn class="text-none">Verify Certificate</v-btn>
                </v-card>

                <v-card class="my-auto" width="400">
                    <v-card-title primary->
                        Verfication Results
                    </v-card-title>

                    <!-- <div class="overflow-hidden p-6">
                        <div class="text-center">
                            
                            <div v-if="!file" class="flex flex-col items-center py-8">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="size-16 text-gray-400 mb-3">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                                </svg>

                                <p class="text-gray-500">Upload a certificate to verify its authenticity</p>
                            </div>

                            
                            <div v-else class="flex flex-col items-center">
                                <div class="mb-4 p-3 bg-green-100 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-green-600" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p class="text-sm text-gray-500 mb-1">File Ready</p>
                                <p class="font-medium text-gray-800 mb-4">{{ file.name }}</p>
                                <p class="text-sm text-gray-500">Click verify to check authenticity</p>
                            </div>
                        </div>
                    </div> -->
                    <!-- <div class=" overflow-hidden">
                        <div class="p-6">
                            <h2 class="text-xl font-semibold text-gray-800 mb-4 text-center">Verification Result</h2>

                            
                            <div class="flex flex-col items-center mb-6">
                                <div class="p-3 bg-green-100 rounded-full mb-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-green-600" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 class="text-lg font-medium text-green-600">Certificate Valid</h3>
                            </div>

                            
                            <div class="space-y-4 mb-6">
                                <div class="flex">
                                    <span class="w-1/3 text-gray-500">Issuer:</span>
                                    <span class="w-2/3 font-medium">University of Dar es Salaam</span>
                                </div>
                                <div class="flex">
                                    <span class="w-1/3 text-gray-500">Issuer Address:</span>
                                    <span
                                        class="w-2/3 font-mono text-sm break-all">0x742d35Cc6634C0532925a3b8D496cE5e2fe6D3e6</span>
                                </div>
                                <div class="flex">
                                    <span class="w-1/3 text-gray-500">Issued Date:</span>
                                    <span class="w-2/3 font-medium">15/05/2024</span>
                                </div>
                                <div class="flex">
                                    <span class="w-1/3 text-gray-500">Status:</span>
                                    <span class="w-2/3 font-medium text-green-600">Valid</span>
                                </div>
                                <div class="flex">
                                    <span class="w-1/3 text-gray-500">Hash:</span>
                                    <span class="w-2/3 font-mono text-sm break-all">0x701e4af073a6d8</span>
                                </div>
                            </div>

                            
                            <button
                                class="w-full py-2 px-4 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 transition-colors">
                                View Original Certificate
                            </button>
                        </div>
                    </div> -->

                    <div class=" overflow-hidden">
                        <div class="p-6">

                            
                            <div class="flex flex-col items-center mb-6">
                                <div class="p-3 bg-red-100 rounded-full mb-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-red-600" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </div>
                                <h3 class="text-lg font-medium text-red-600">Certificate Invalid</h3>
                            </div>

                            
                            <div class="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
                                <div class="flex">
                                    <div class="flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-400"
                                            viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                    <div class="ml-3">
                                        <p class="text-sm text-red-700">
                                            This certificate was not found in our blockchain records. It may be invalid,
                                            tampered with, or not issued through our system.
                                        </p>
                                    </div>
                                </div>
                            </div>

                           
                        </div>
                    </div>
                </v-card>

            </div>

            <section class="py-12 bg-gray-50">
                <div class="container mx-auto px-4">
                    <h2 class="text-3xl font-bold text-center text-gray-800 mb-12">How Certificate Verification Works
                    </h2>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <!-- Step 1 -->
                        <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <div class="flex items-center mb-4">
                                <div
                                    class="flex items-center justify-center w-12 h-12 rounded-full bg-orange-500 text-white font-bold text-xl mr-4">
                                    1</div>
                            </div>
                            <p class="text-gray-600">
                                Upload the PDF certificate you want to verify and select its type.
                            </p>
                            <div class="mt-4 flex justify-center">
                                <div class="p-3 bg-orange-100 rounded-lg inline-block">

                                </div>
                            </div>
                        </div>

                        <!-- Step 2 -->
                        <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <div class="flex items-center mb-4">
                                <div
                                    class="flex items-center justify-center w-12 h-12 rounded-full bg-orange-500 text-white font-bold text-xl mr-4">
                                    2</div>
                            </div>
                            <p class="text-gray-600">
                                The system generates a hash of your file and checks it against blockchain records.
                            </p>
                            <div class="mt-4 flex justify-center">
                                <div class="p-3 bg-orange-100 rounded-lg inline-block">

                                </div>
                            </div>
                        </div>

                        <!-- Step 3 -->
                        <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <div class="flex items-center mb-4">
                                <div
                                    class="flex items-center justify-center w-12 h-12 rounded-full bg-orange-500 text-white font-bold text-xl mr-4">
                                    3</div>
                            </div>
                            <p class="text-gray-600">
                                Receive instant verification results with issuer details and authenticity status.
                            </p>
                            <div class="mt-4 flex justify-center">
                                <div class="p-3 bg-orange-100 rounded-lg inline-block">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </div>
</template>



<script setup>
import { ref } from 'vue';
import { ethers } from 'ethers';
import  {contractService}  from '../contract/service';

const file = ref(null)
const verify = async () => {
    try {
        if (!file.value) return

        const certHash = await hashFile(file.value)
        const verified = await contractService.verifyCertificate(certHash)

        if (!verified){}
    } catch (err) {

    }
}



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

const items = [
    'Degree', 'Diploma', 'Master', 'Others'
]
const type = ref(null)
</script >

<style lang="scss" scoped></style>