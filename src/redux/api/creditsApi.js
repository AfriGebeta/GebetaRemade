import { API, handleApiError } from "./util";

export const getAllCredits = async ({ page, limit }) => {
  try {
    const data = await API.get(
      `/api/credit-bundle/getAll?page=${page}&limit=${limit}`,
    );
    return data.data.data;
  } catch (error) {
    return handleApiError(error);
  }
};
