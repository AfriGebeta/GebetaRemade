import { API, handleApiError } from "./util";

export const getAllBilling = async (apiToken) => {
  try {
    const response = await API.get("/api/sales/get-all", {
      params: {
        page: 1,
        limit: 10,
      },
      headers: {
        Authorization: `Bearer ${apiToken}`,
      },
    });
    return response.data.data.places || [];
  } catch (error) {
    return handleApiError(error);
  }
};
