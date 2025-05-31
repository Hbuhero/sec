// stores/useAuthStore.js
import { defineStore } from 'pinia'


export const useAuthStore = defineStore('auth', {
    state: () => ({
        isOngoingTransaction: false,
    }),
    
})
