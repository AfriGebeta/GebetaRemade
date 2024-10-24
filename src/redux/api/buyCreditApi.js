import { API, handleApiError } from "./util";

export const buyCredit = async (apiToken, id) => {
  try {
    const response = await API.post(`/api/payment/credit`, {
      credit_bundle_id: id,
      payment_for:"credit",
      payment_method:"CHAPA"
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