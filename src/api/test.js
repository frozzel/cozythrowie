import client from "./client";

export const testApi = async () => {
  try {
    const response = await client.get("/test/test");
    console.log("IN Api", response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
}
