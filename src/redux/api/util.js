import axios from "axios";

const BASE_URL = "https://mapapi.gebeta.app";
const ADMIN_URL = `${BASE_URL}/admin`;



export const API = axios.create({
  baseURL: BASE_URL,
});





export const handleApiError = async (error) => {
  try {
    const errorMessage =
      error.response?.data?.message || "An unexpected error occurred.";
    const data = null;
    return { error: errorMessage, data };
  } catch (err) {
    throw new Error("An unexpected error occurred.");
  }
};
