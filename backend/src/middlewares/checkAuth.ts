import Elysia from "elysia";
import { verifyAccessToken } from "../utils/token";
import { StatusCode } from "../types";
const checkAuthToken=new Elysia().derive(async({headers,set})=>{
    const authHeader=headers['authorization'];
    if(!authHeader){
        set.status=StatusCode.FORBIDDEN;
        return{
            message:"FORBIDDEN"
        }
    }
    const token=authHeader.split(' ')[1];
    const verifyToken=await verifyAccessToken(token);
    if(!verifyToken.status){
        set.status=StatusCode.FORBIDDEN;
        return{
            message:"FORBIDDEN"
        }
    }
    return{
        user:verifyToken.user
    }; 
}).as("scoped")
const checkAuthPlugin=new Elysia()
.use(checkAuthToken)
.guard({
    beforeHandle:({user,set}:any)=>{
        if(!user){
            set.status=StatusCode.FORBIDDEN;
            return{
                message:"FORBIDDEN"
            }
        } 
    }
}).as("scoped")
export default checkAuthPlugin;