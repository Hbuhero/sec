<template>
    <div class="bg-gray-50 min-h-screen py-12">
        <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <header class="text-center mb-12">
                <h1 class="text-4xl font-bold text-gray-900 mb-4">Issue Certificate</h1>
                <p class="text-lg text-gray-600 max-w-2xl mx-auto">Issue new certificates securely on the blockchain with instant verification capabilities.</p>
            </header>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                <v-card class="mx-auto w-full max-w-md" elevation="1">
                    <v-card-title class="pb-6 flex items-center gap-2">
                        <v-icon size="24" color="blue-600">mdi-certificate</v-icon>
                        <span class="text-xl font-semibold text-gray-900">Issue Certificate</span>
                    </v-card-title>

                    <div class="px-6 pb-6 space-y-6">
                        <div class="space-y-2">
                            <label class="text-sm font-medium text-gray-700">Student Name</label>
                            <v-text-field
                                name="name"
                                placeholder="Enter student's full name"
                                v-model="name"
                                variant="outlined"
                                density="compact"
                                color="blue"
                                class="bg-white"
                            ></v-text-field>
                        </div>

                        <div class="space-y-2">
                            <label class="text-sm font-medium text-gray-700">Certificate Type</label>
                            <v-select 
                                :items="items" 
                                v-model="type" 
                                variant="outlined" 
                                density="compact"
                                color="blue"
                                class="bg-white"
                                placeholder="Select certificate type"
                            ></v-select>
                        </div>

                        <div class="space-y-2">
                            <label class="text-sm font-medium text-gray-700">Upload Certificate (PDF)</label>
                            <v-file-input 
                                accept=".pdf" 
                                variant="outlined" 
                                density="compact"
                                color="blue"
                                class="bg-white"
                                placeholder="Choose a PDF file"
                                v-model="file"
                                :rules="[v => !v || v.size < 5000000 || 'File size should be less than 5MB']"
                            ></v-file-input>
                        </div>

                        <v-btn 
                            block
                            color="blue"
                            :loading="loading"
                            :disabled="!file || !type || !name"
                            @click="issueCertificate"
                        >
                            Issue Certificate
                        </v-btn>
                    </div>
                </v-card>

                <v-card class="mx-auto w-full max-w-md" elevation="1">
                    <v-card-title class="pb-6">
                        <span class="text-xl font-semibold text-gray-900">Issuance Status</span>
                    </v-card-title>

                    <v-skeleton-loader type="card" :loading="loading">
                        <div v-if="issueStatus === 'idle'" class="px-6 pb-6">
                            <div class="text-center">
                                <div v-if="!file" class="py-12">
                                    <div class="rounded-full bg-gray-100 p-4 w-16 h-16 mx-auto mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-full h-full text-gray-400">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                                        </svg>
                                    </div>
                                    <p class="text-gray-500">Upload a certificate to begin the issuance process</p>
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
                                    <p class="text-sm text-gray-500">Fill in all details and click issue</p>
                                </div>
                            </div>
                        </div>

                        <div v-if="issueStatus === 'success'" class="px-6 pb-6">
                            <div class="text-center mb-8">
                                <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-green-50 p-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full text-green-600" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 class="text-xl font-semibold text-green-600">Certificate Issued Successfully</h3>
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
                                    <span class="w-2/3 text-sm font-medium text-green-600">Issued</span>
                                </div>
                                <div class="flex">
                                    <span class="w-1/3 text-sm text-gray-500">Hash:</span>
                                    <span class="w-2/3 font-mono text-xs text-gray-900 break-all">{{ data[0] }}</span>
                                </div>
                            </div>
                        </div>

                        <div v-if="issueStatus === 'error'" class="px-6 pb-6">
                            <div class="text-center mb-8">
                                <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-red-50 p-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full text-red-600" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </div>
                                <h3 class="text-xl font-semibold text-red-600">Issuance Failed</h3>
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
                                        Failed to issue the certificate. Please check your connection and try again. If the problem persists, contact support.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </v-skeleton-loader>
                </v-card>
            </div>
        </main>
    </div>
</template>

<script setup>
import { ethers } from 'ethers';
import  {contractService}  from '../contract/service';
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { contractAddress, contractAbi, CertType } from '../contract/constants';
import Loader from './Loader.vue';
import {useAuthStore} from '../contract/store'
import { useRouter } from 'vue-router';

const store = useAuthStore()
const router = useRouter()

const items = [
    'Degree', 'Diploma', 'Transcript', 'Others'
]
const type = ref(null)
const name = ref(null)
const file = ref(null)
const issueStatus = ref('idle')
const jwt = import.meta.env.VITE_PINATA_JWT
const data = ref({})
const loading = ref(false)

const issueCertificate = async () => {
    try {
        if (!file.value) return
        console.log(file.value.name);

        loading.value = true
        
    const ipfsFormData = new FormData()
    ipfsFormData.append("file", file.value);
    ipfsFormData.append('name', file.value.name)
    ipfsFormData.append("network", "public");
    
    const request = await fetch("https://uploads.pinata.cloud/v3/files", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
      body: ipfsFormData,
    });
    const ipfsresponse = await request.json();
    

   const certHash = await hashFile(file.value)
   const certType = CertType[(type.value).toUpperCase()]
   console.log(ipfsresponse.data.cid);
   
   const ipfsCID = ipfsresponse.data.cid

   const contract = await contractService.getContract();
      const res = await contract.issueCertificate(certHash, ipfsCID, certType)
      store.isOngoingTransaction = true
      res.wait()
      store.isOngoingTransaction = false

    const response = await contractService.getCertificate(certHash)

    data.value = response
    loading.value = false
    issueStatus.value = 'success'

    
	} catch (error) {
		console.log(error);
        loading.value = false
        issueStatus.value = 'error'
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

onMounted(() => {
    console.log(loading.value);
    
})
</script>

<style lang="scss" scoped></style>