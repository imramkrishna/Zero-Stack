import { Context } from "elysia";

const uploadController=async({body,set}:Context)=>{
    const req=body as {repoId:string,outputDir:string,startCommand:string};
    
}