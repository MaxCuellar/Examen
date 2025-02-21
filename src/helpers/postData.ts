import axios from "axios";
import { Post } from "../posts/columns";

export async function getData(): Promise<Post[]> {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    
    return response.data.map((post: Post) => ({
      id: post.id,
      userId: post.userId,
      title: post.title,
      body: post.body,
    }));
  } catch (error) {
    console.error(error);
    return [];
  }
}
