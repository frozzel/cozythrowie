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

export const getSingleBlog = async (_id) => {
    try {
        const response = await client.get(`cozythrowie/blog/${_id}`);
        // console.log("Get Single Blog", response.data);
        return response.data;
    } catch (error) {
        throw error;
    }
}