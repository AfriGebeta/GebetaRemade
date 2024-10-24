import {API, handleApiError} from "./util";

export const getAllBilling = async (apiToken, page, limit) => {
  try {
    const response = await API.get("/api/sales/get-all", {
      params: {
        page:page,
        limit:limit,
      },
      headers: {
        Authorization: `Bearer ${apiToken}`,
      },
    });
    return {billing: response.data.data.places || [], count: response.data.data.count};
  } catch (error) {
    return handleApiError(error);
  }
};

