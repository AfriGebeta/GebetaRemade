import { API, handleApiError } from "./util";

export const buyCredit = async (apiToken, id) => {
  try {
    const response = await API.post(`/api/credit`, {
      credit_bundle_id: id,
      currency: "ETB",
    }, {
      headers: {
        Authorization: `Bearer ${apiToken}`,
        "Content-Type": "application/json",
      },
    });
    return { data: response.data };
  } catch (error) {
    return handleApiError(error);
  }
};