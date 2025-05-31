<template>
    <div>
        <main class="!p-6 max-w-7xl mx-auto !py-6 sm:!px-6 lg:!px-8">
            <header>
                <h1>Certifcate Verification</h1>
                <p>Upload a certificate to verify its authenticity on the blockchain.</p>
            </header>

            <div class="flex gap-12">
                <v-card  width="400">
                    <v-card-title>
                        <v-icon size="small">mdi-magnify</v-icon>
                        Verify Certifcate
                    </v-card-title>

                    <div>
                        <p>Student Name</p>
                        <v-text-field
                            name="name"
                            label="Name"
                            v-model="name"
                            variant="outlined"
                            density="compact"
                        ></v-text-field>
                    </div>

                    <div>
                        <p>
                            Certificate Type
                        </p>
                        <v-select :items="items" v-model="type" variant="outlined" density="compact" label="Select certificate type"></v-select>
                    </div>

                    <div>
                        <p>Upload Certificate (PDF)</p>
                        <v-file-input  variant="outlined" density="compact" width="200" label="Choose file"
                            v-model="file">
                        </v-file-input>

                    </div>

                    <v-btn class="text-none" @click="issueCertificate">Issue Certificate</v-btn>
                </v-card>

                <v-card  width="400">
                    <v-card-title primary->
                        Verfication Results
                    </v-card-title>

                    <div v-if="!file" class="overflow-hidden p-6">
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
                    </div> 
                     <div v-if="condition" class=" overflow-hidden">
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
                    </div>

                    <div v-if="error" class="overflow-hidden">
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

                <div v-if="loading" class="h-full w-full flex items-center justify-center bg-white mx-auto">
            <Loader :color="'stroke-customBlue'"/>    
        </div>

            </div>

            
        </main>
    </div>
</template>



<script setup>
import { ethers } from 'ethers';
import  {contractService}  from '../contract/service';
import axios from 'axios';
import { ref } from 'vue';
import { contractAddress, contractAbi, CertType } from '../contract/constants';
import Loader from './Loader.vue';
import {useAuthStore} from '../contract/store'

const store = useAuthStore()


const items = [
    'Degree', 'Diploma', 'Transcript', 'Others'
]
const type = ref(null)
const name = ref(null)
const file = ref(null)
const jwt = import.meta.env.VITE_PINATA_JWT
const gateway = import.meta.env.VITE_PINATA_GATEWAY


// const pinata = new PinataSDK({
//   pinataJwt: jwt,
//   pinataGateway: gateway,
// });

const issueCertificate = async () => {
    try {
        if (!file.value) return
        console.log(file.value.name);
        
    // const ipfsFormData = new FormData()
    // ipfsFormData.append("file", file);
    // ipfsFormData.append('name', file.value.name)
    // ipfsFormData.append("network", "public");
    
    // const request = await fetch("https://uploads.pinata.cloud/v3/files", {
    //   method: "POST",
    //   headers: {
    //     Authorization: `Bearer ${jwt}`,
    //   },
    //   body: ipfsFormData,
    // });
    // const response = await request.json();
    // console.log(response);

   const certHash = await hashFile(file.value)
   const certType = CertType[(type.value).toUpperCase()]
   const ipfsCID = "null"

   const contract = await contractService.getContract();
      const res = await contract.issueCertificate(certHash, ipfsCID, certType)
      store.isOngoingTransaction = true
      res.wait()
      store.isOngoingTransaction = false

    const response = await contractService.getCertificate("certHash")
   console.log(response);
   
	} catch (error) {
		console.log(error);
	}
}

async function upload() {
  try {
    const formData = new FormData();

    const file = new File(["hello"], "Testing.txt", { type: "text/plain" });

    formData.append("file", file);

    formData.append("network", "public");

    const request = await fetch("https://uploads.pinata.cloud/v3/files", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
      body: formData,
    });
    const response = await request.json();
    console.log(response);
  } catch (error) {
    console.log(error);
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
</script>

<style lang="scss" scoped></style>