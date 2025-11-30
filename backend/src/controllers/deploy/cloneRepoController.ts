import { Context } from "elysia";
import { StatusCode } from "../../types";
import simpleGit from "simple-git";
import generateId from "../../utils/generateId";

const cloneRepoController = async ({ body, set }: Context) => {
    const req = body as { repoUrl: string };
    try {
        if (!req.repoUrl) {
            set.status = StatusCode.FORBIDDEN
            return {
                message: "Repository URL is required"
            }
        }
        const id = generateId();
        const isValidRepo=await simpleGit().listRemote([req.repoUrl]).then(() => true).catch(() => false);
        if(!isValidRepo){
            set.status = StatusCode.BAD_REQUEST
            return {
                message: "Invalid repository URL"
            }
        }
        await simpleGit().clone(req.repoUrl, `./cloned-repo/${id}`)
        return {
            message: "Repository cloned successfully",
            repoId: id
        }
    } catch (error) {
        console.error("Error in cloneRepoController:", error);
        set.status = StatusCode.INTERNAL_SERVER_ERROR
        return {
            message: "Error working with repository",
            error
        }
    }
}
export default cloneRepoController;