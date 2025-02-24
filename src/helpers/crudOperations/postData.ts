import axios from "axios";

export function postData(title: string, body: string) {
  try {
      axios.post(`https://67bb8b11ed4861e07b37aba9.mockapi.io/Crud/`, {
      title,
      body,
    });
  } catch (error) {
    console.error(error);
  }
}
