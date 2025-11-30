import dashboardController from "./controllers/auth/dashboardController";
import loginController from "./controllers/auth/loginController";
import cloneRepoController from "./controllers/deploy/cloneRepoController";
import { Route } from "./types";
const routes:Route[] = [
    {
        path: "/health",
        method: "GET",
        handler: () => {
            return { 
                status: "OK",
                timestamp: new Date().toISOString(),
                message: "Backend Service for Zero-Stack is healthy."
             };
        },
        isProtected: false
    },
    {
        path: "/dashboard",
        method: "GET",
        handler:dashboardController,
        isProtected: true
    },
    {
        path:"/login",
        method:"POST",
        handler:loginController,
        isProtected: false
    },
    {
        path: "/clone-repo",
        method: "POST",
        handler: cloneRepoController,
        isProtected: false
    }
];

export default routes;