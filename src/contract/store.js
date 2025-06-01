// stores/useAuthStore.js
import { defineStore } from 'pinia'
import { contractService } from './service'


export const useAuthStore = defineStore('auth', {
    state: () => ({
        isOngoingTransaction: false,
        isLoggedIn: false,
        admin: {},
        isAdmin: false
    }),
    actions:  {
        isAuthenticated() {
            return this.isLoggedIn = localStorage.getItem('jwt') ? true : false      
        },
        async fetchUserProfile() {
            if (this.admin) return this.admin
           
            try {
                // Replace with your actual API call 
                const response = await contractService.getAdmin()
                this.admin = response

                return this.admin
            } catch (err) {
                console.error('Failed to fetch user profile:', err)
            } finally {
                
            }
        },

        async checkAdmin () {
            if (this.isAdmin) return this.admin
        }
    }
    
})
