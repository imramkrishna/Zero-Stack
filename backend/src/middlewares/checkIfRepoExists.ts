import Elysia, { Context } from "elysia";
import { StatusCode } from "../types";
import checkRepoId from "../utils/checkRepoId";

const checkIfRepoExists = new Elysia().derive(async ({body,set}:Context)=>{
    const req=body as {repoId:string}
    if(!req.repoId){
        set.status=StatusCode.FORBIDDEN
        return {
            repo:false,
            message: "Repository ID is required"
        }
    }
    const repoExists = await checkRepoId(req.repoId);
    if(!repoExists){
        set.status=StatusCode.BAD_REQUEST
        return {
            repo:false,
            message: "Invalid Repository ID"
        }
    }
    return{
        repo:true,
        message:"Repository exists"
    }
}).as("scoped")

const checkIfRepoExistsPlugin=new Elysia()
.use(checkIfRepoExists)
.guard({
    beforeHandle:({repo,set}:any)=>{
        if(!repo){
            set.status=StatusCode.BAD_REQUEST
            return {
                message: "Invalid Repository ID"
            }
        }
    }
}).as("scoped")

export default checkIfRepoExistsPlugin;
