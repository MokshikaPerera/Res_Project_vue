import Home from './components/Home.vue';
import SignUp from './components/SignUp.vue';
import { createRouter, createWebHistory } from 'vue-router';
import Login from './components/Login.vue'
import Add from './components/Add.vue'
import Update from './components/Update.vue'
import Dashboard from './components/Dashboard.vue'

const routes = [
    {
        name: "Home",
        component: Home,
        path: "/",
    },
    {
        name: "SignUp",
        component: SignUp,
        path: "/sign-up",
    },
    {
        name: "Login",
        component: Login,
        path: "/login",
    },
    {
        name: "Add",
        component: Add,
        path: "/add",
    },
    {
        name: "Update",
        component: Update,
        path: "/update",
    },
    {
        name: "Dashboard",
        component: Dashboard,
        path: "/dashboard",
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;