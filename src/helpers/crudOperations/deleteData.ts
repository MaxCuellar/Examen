import axios from "axios";

export const deleteData = (id:string) =>{
  axios.delete(`https://67bb8b11ed4861e07b37aba9.mockapi.io/Crud/${id}`)
}
