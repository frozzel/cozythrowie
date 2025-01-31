import client from "./client";

export const getBlogs = async () => {
    try {
        const response = await client.get("cozythrowie/blog");
        // console.log("Get Blogs", response.data);
        return response.data;
    } catch (error) {
        throw error;
    }
    }