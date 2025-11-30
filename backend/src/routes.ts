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
    }
];

export default routes;