import { createRouter, createWebHistory } from 'vue-router';
import Home from "../components/Home.vue";
import Verify from '../components/Verify.vue';
import Issue from '../components/Issue.vue';

// Define your routes
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/verify',
        name: 'Verify',
        component: Verify
    },
    {
        path: "/issue",
        name: "Issue",
        component: Issue
    }
    
];

// Create the router instance
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URLL),
    routes,
});

export default router;