import { API, handleApiError } from "./util";

export const getUserUsage = async (apiToken, controller) => {
  try {
    const { data } = await API.get(`/api/usage/matrix`, {
      headers: {
        Authorization: `Bearer ${apiToken}`,
      },
      signal: controller.signal,
    });

    return { error: null, data };
  } catch (error) {
    return handleApiError(error);
  }
};


