import { Context } from "elysia";
import { StatusCode } from "../../types";
import { generateAccessToken } from "../../utils/token";

const loginController=async({set,body}:Context)=>{
    const {email,password}=body as {email:string,password:string};
    if(email==="admin@email.com" && password==="admin"){
        set.status=StatusCode.OK;
        const accessToken=await generateAccessToken({id:"1",name:"Admin User",email:"admin@email.com"});
        set.status=StatusCode.OK
        return {
            message:"Login successful",
            accessToken
        };
    }
    set.status=StatusCode.UNAUTHORIZED;
    return {
        message:"Invalid email or password"
    };
}
export default loginController;