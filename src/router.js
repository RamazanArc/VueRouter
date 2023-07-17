import {createRouter, createWebHashHistory} from "vue-router";
// import Home from "@/views/HomeA"
const routes = [
    {
        name : "HomePage",
        path : "/",
        // component : Home
        component : () => import("@/views/HomeA")
    },
    {
        name : "AboutPage",
        path : "/hakkimda",
        // component : About
        component : () => import("@/views/AboutA")
    },
    {
        name : "DetailPage",
        path : "/detay/:userID",
        // component : About
        component : () => import("@/views/DetailsA")
    }
]

const router = createRouter({
    routes,
    // history : createWebHistory()
    history : createWebHashHistory()
});

export default router;