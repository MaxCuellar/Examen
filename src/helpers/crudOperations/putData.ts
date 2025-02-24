import axios from "axios";

export function putData(id: string, title: string, body: string) {
  try {
      axios.put(`https://67bb8b11ed4861e07b37aba9.mockapi.io/Crud/${id}`, {
      title,
      body,
    });
  } catch (error) {
    console.error(error);
  }
}
