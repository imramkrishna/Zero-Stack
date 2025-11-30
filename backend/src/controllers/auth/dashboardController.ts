import { Context } from "elysia";
import { StatusCode } from "../../types";
const dashboardController = async({set}: Context)=>{
    return {
        message: "Welcome to the Dashboard API"
    }
}
export default dashboardController;