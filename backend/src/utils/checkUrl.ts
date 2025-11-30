import simpleGit from "simple-git"

const checkUrl = async(repoUrl:string):Promise<boolean | void>=>{
    await simpleGit().listRemote([repoUrl])
    .then(() => true)
    .catch(() => false)
}
export default checkUrl;