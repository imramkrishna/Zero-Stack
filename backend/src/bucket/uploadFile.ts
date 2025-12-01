import s3 from "./s3";
import path from "path";
import fs from "fs";

const uploadFile = async (filePath: string) => {
    if (!fs.existsSync(filePath)) {
        throw new Error("Repository not found");
    }

    const dirArray = filePath.split("/");
    const repoId = dirArray[dirArray.length - 2];

    // Recursive function to upload files
    const uploadDirectory = async (currentPath: string, prefix: string = "") => {
        const items = fs.readdirSync(currentPath);

        for (const item of items) {
            const fullPath = path.join(currentPath, item);
            const stat = fs.statSync(fullPath);

            if (stat.isDirectory()) {
                // Recursively upload subdirectory
                await uploadDirectory(fullPath, `${prefix}${item}/`);
            } else {
                // Upload file
                const fileStream = fs.createReadStream(fullPath);
                const uploadParams = {
                    Bucket: process.env.BUCKET_NAME || "",
                    Key: `${repoId}/${prefix}${item}`,
                    Body: fileStream
                };
                await s3.putObject(uploadParams);
            }
        }
    };

    await uploadDirectory(filePath);
    return true;
};
export default uploadFile;