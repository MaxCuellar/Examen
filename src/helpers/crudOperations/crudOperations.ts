import { Post } from "@/components/DataTable/columns";
import axios from "axios";

const url = `https://67bb8b11ed4861e07b37aba9.mockapi.io/Crud`

export async function getData(): Promise<Post[]> {
    try {
        const response = await axios.get(url);

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
export async function postData(title: string, body: string, fetchData: () => void) {
    try {
        await axios.post(`${url}/`, { title, body });
        fetchData(); // 🔄 Actualizar la data después de crear
    } catch (error) {
        console.error(error);
    }
}

export async function putData(id: string, title: string, body: string, fetchData: () => void) {
    try {
        await axios.put(`${url}/${id}`, { title, body });
        fetchData(); // 🔄 Actualizar la data después de editar
    } catch (error) {
        console.error(error);
    }
}

export async function deleteData(id: string, fetchData: () => void) {
    try {
        await axios.delete(`${url}/${id}`);
        fetchData(); // 🔄 Actualizar la data después de eliminar
    } catch (error) {
        console.error(error);
    }
}
