import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/auth",
        redirect: "/login",
        component: () => import("@/views/Layouts/Authlayout.vue"),
        children: [
            {
                path: "/login",
                name: "login",
                component: () => import("@/views/auth/login.vue"),
            },

        ]
    },

    {
        path: "/dashboard",
        redirect: "/home",
        component: () => import("@/views/Layouts/Layout.vue"),
        children: [
            {
                path: "/home",
                name: "home",
                component: () => import("@/views/home/Home.vue"),
            },
            {
                path: "/users",
                name: "users",
                component: () => import("@/views/users/Users.vue"),
            },

        ]
    },




];

const router = createRouter({
    history: createWebHistory(),
    routes,
});



export default router;