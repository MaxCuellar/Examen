import { Post } from "@/components/DataTable/columns";
import axios from "axios";

export async function getData(): Promise<Post[]> {
  try {
    const response = await axios.get(`https://67bb8b11ed4861e07b37aba9.mockapi.io/Crud`);
    
    return response.data.map((post: Post) => ({
      id: post.id,
      title: post.title,
      body: post.body,
    }));
  } catch (error) {
    console.error(error);
    return [];
  }
}
