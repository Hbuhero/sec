<template>
    <div class="bg-gray-50 min-h-screen">
        <main class="px-4 sm:px-6 lg:px-8 py-12 max-w-7xl mx-auto">
            <div class="place-self-center mb-16">
                <div class="flex flex-col justify-center items-center space-y-4 mb-8">
                    <h1 class="text-4xl sm:text-5xl text-gray-900 font-bold text-center">Secure Certificate</h1>
                    <h1 class="text-4xl sm:text-5xl text-blue-600 font-semibold text-center">Verification System</h1>
                </div>
                <p class="text-center text-gray-600 text-lg max-w-2xl mx-auto mb-10">Leveraging blockchain technology to ensure the authenticity and integrity of academic certificates. Trusted, transparent, and tamper-proof.</p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <v-btn 
                        prepend-icon="mdi-magnify" 
                        variant="outlined" 
                        color="blue-600" 
                        class="hover:bg-blue-50 transition-colors"
                    >
                        <router-link to="/verify" class="text-decoration-none">Verify Certificate</router-link>
                    </v-btn>
                    <v-btn 
                        prepend-icon="mdi-tray-arrow-up" 
                        variant="outlined"
                        color="blue-600"
                        class="hover:bg-blue-50 transition-colors"
                    >
                        <router-link to="/issue" class="text-decoration-none">Issue Certificate</router-link>
                    </v-btn>
                </div>
            </div>

            <v-container fluid class="px-0">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <v-card
                        class="transition-shadow hover:shadow-lg"
                        prepend-icon="mdi-shield-outline"
                        elevation="1"
                    >
                        <template v-slot:title>
                            <span class="font-weight-black text-gray-900">Blockchain Security</span>
                        </template>
                        <v-card-text class="text-gray-600">
                            Certificates are secured using blockchain technology, ensuring immutable and tamper-proof records.
                        </v-card-text>
                    </v-card>

                    <v-card
                        class="transition-shadow hover:shadow-lg"
                        prepend-icon="mdi-check-circle-outline"
                        elevation="1"
                    >
                        <template v-slot:title>
                            <span class="font-weight-black text-gray-900">Instant Verification</span>
                        </template>
                        <v-card-text class="text-gray-600">
                            Verify the authenticity of any certificate instantly by uploading the document to our platform.
                        </v-card-text>
                    </v-card>

                    <v-card
                        class="transition-shadow hover:shadow-lg"
                        prepend-icon="mdi-tray-arrow-up"
                        elevation="1"
                    >
                        <template v-slot:title>
                            <span class="font-weight-black text-gray-900">Easy Issuance</span>
                        </template>
                        <v-card-text class="text-gray-600">
                            Authorized institutions can issue certificates securely with our streamlined admin interface.
                        </v-card-text>
                    </v-card>
                </div>
            </v-container>
        </main>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
:deep(.v-card) {
    padding: 1.5rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    
    .v-card-title {
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }
    
    .v-card-text {
        flex-grow: 1;
        font-size: 1.1rem;
        line-height: 1.6;
    }
}

.router-link-active {
    color: inherit;
}
</style>