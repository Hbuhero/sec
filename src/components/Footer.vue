<template>
    <footer class="bg-gray-50 border-t border-gray-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                <div class="footer-brand space-y-4">
                    <h1 class="text-2xl font-bold text-gray-900">Tanzania CertChain</h1>
                    <p class="text-gray-600 text-sm leading-relaxed max-w-sm">
                        Securing academic credentials with blockchain technology. Providing transparent, immutable, and verifiable certificates for Tanzania's educational institutions.
                    </p>
                </div>
                
                <div class="footer-links">
                    <h3 class="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
                    <ul class="space-y-3">
                        <li>
                            <router-link to="/verify" class="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                                Verify Certificate
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/admin" class="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                                Admin Panel
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/docs" class="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                                Documentation
                            </router-link>
                        </li>
                    </ul>
                </div>
                
                <div class="footer-contact">
                    <h3 class="text-lg font-semibold text-gray-900 mb-4">Contact</h3>
                    <ul class="space-y-3">
                        <li class="flex items-center space-x-2 text-gray-600">
                            <v-icon size="small">mdi-email-outline</v-icon>
                            <span>support@certchain.tz</span>
                        </li>
                        <li class="flex items-center space-x-2 text-gray-600">
                            <v-icon size="small">mdi-phone-outline</v-icon>
                            <span>+255 123 456 789</span>
                        </li>
                        <li class="flex items-center space-x-2 text-gray-600">
                            <v-icon size="small">mdi-map-marker-outline</v-icon>
                            <span>Dar es Salaam, Tanzania</span>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div class="border-t border-gray-200 pt-8">
                <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <p class="text-sm text-gray-600">
                        &copy; {{ new Date().getFullYear() }} Tanzania CertChain. All rights reserved.
                    </p>
                    <div class="flex space-x-6">
                        <a href="#" class="text-gray-400 hover:text-blue-600 transition-colors duration-200">
                            <v-icon>mdi-twitter</v-icon>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-blue-600 transition-colors duration-200">
                            <v-icon>mdi-linkedin</v-icon>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-blue-600 transition-colors duration-200">
                            <v-icon>mdi-github</v-icon>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
// Using script setup syntax for composition API
</script>
<!-- 
<style scoped>
.router-link-active {
    @apply text-blue-600;
}
</style> -->