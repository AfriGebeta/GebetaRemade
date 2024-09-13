import { API, handleApiError } from "./util";

export const getAllCredits = async ({ page, limit }, controller) => {
  try {
    const data = await API.get(
      `/api/credit-bundle/getAll?page=${page}&limit=${limit}`,
      {
        signal: controller.signal,
      }
    );
    return { data };
  } catch (error) {
    return handleApiError(error);
  }
};
