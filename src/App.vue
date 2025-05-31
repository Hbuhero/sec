<template>
  <Header />
  <RouterView />

  <Footer />
</template>

<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import axios from 'axios'
const jwt = import.meta.env.VITE_PINATA_JWT


const cid = ref(null)

async function handleUpload(event) {
  const file = event.target.files[0]
  if (!file) return

  const formData = new FormData()
  formData.append('file', file)

const hash = await hashFile(file);
console.log(hash);

}

async function hashFile(file) {
  const buffer = await file.arrayBuffer();
  const hashBuffer = await crypto.subtle.digest('SHA-256', buffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex;
}


function openFile() {
  if (!cid.value) return
  const url = `https://gateway.pinata.cloud/ipfs/${cid.value}`
  window.open(url, '_blank')
}
</script>

<!-- Okay I want you to create a prompt for a tool that designs frontend. the prototype should have
- a landing page with a header which include a button to login. The login uses metamask account address which handle onchain logic
- a page to issue certificate by admins, with a download button to download a file. But also a revoke button to revoke a cert
- a page to verify certificate of a student.  -->
