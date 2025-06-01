<template>
    <div>
        <main class="!p-6 max-w-7xl mx-auto !py-6 sm:!px-6 lg:!px-8">
            <div class="place-self-center">
                <div class="flex flex-col justify-center items-center">
                    <h1 class="text-5xl text-black font-bold">Secure Certificate</h1>
                    <h1 class="text-5xl text-blue-500 font-semibold">Verification System</h1>
                </div>
                <p class="text-center">Leveraging blockchain technology to ensure the authenticity and integrity of academic certificates. Trusted, transparent, and tamper-proof.</p>
                <div class="flex gap-4 justify-center">
                    <v-btn prepend-icon="mdi-magnify" variant="outlined"><router-link to="/verify">Verify Certificate</router-link></v-btn>
                    <v-btn prepend-icon="mdi-tray-arrow-up" variant="outlined"><router-link to="/issue">Issue Certificate</router-link></v-btn>
                </div>

            </div>

            <v-container fluid="" class="flex gap-4">
                <v-card
    class="mx-auto"
    prepend-icon="mdi-shield-outline"
    
    width="400"
  >
    <template v-slot:title>
      <span class="font-weight-black">Blockchain Security</span>
    </template>
                    <v-card-text>
                        Certificates are secured using blockchain technology, ensuring immutable and tamper-proof records.
                    </v-card-text>
                </v-card>

                <v-card
    class="mx-auto"
    prepend-icon="mdi-check-circle-outline"
    
    width="400"
  >
    <template v-slot:title>
      <span class="font-weight-black">Instant Verification</span>
    </template>
                    <v-card-text>
                        Verify the authenticity of any certificate instantly by uploading the document to our platform.
                    </v-card-text>
                </v-card>

                <v-card
    class="mx-auto"
    prepend-icon="mdi-tray-arrow-up"
    
    width="400"
    height="200"
  >
    <template v-slot:title>
      <span class="font-weight-black">Easy Issuance</span>
    </template>
                    <v-card-text>
                        Authorized institutions can issue certificates securely with our streamlined admin interface.
                    </v-card-text>
                </v-card>
              </v-container>
        </main>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>