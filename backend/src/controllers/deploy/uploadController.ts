import { Context } from "elysia";
import path from "path";
import uploadFile from "../../bucket/uploadFile";

const uploadController=async({body,set}:Context)=>{
    const req=body as {repoId:string,outputDir:string,startCommand:string};
    const repoPath=path.join(__dirname, `../../cloned-repo/${req.repoId}`);
    try{
        // Upload files to S3
        await uploadFile(path.join(repoPath, req.outputDir));
        return {
            message: "Files uploaded successfully to bucket",
            repoId: req.repoId,
            startCommand: req.startCommand
        }
    }catch(error){
        console.error("Error in uploadController:", error);
        set.status=500;
        return {
            message: "Error uploading files to bucket",
            error
        }
    }
}