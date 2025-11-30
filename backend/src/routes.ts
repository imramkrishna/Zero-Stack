import dashboardController from "./controllers/auth/dashboardController";
import loginController from "./controllers/auth/loginController";
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
    }
];

export default routes;