import axios from "axios";

export const api = axios.create({
  baseURL: "https://rocketnotes-api-ime6.onrender.com"
})