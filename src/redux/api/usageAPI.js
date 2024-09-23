import { API, handleApiError } from "./util";

export const getUserUsage = async (apiToken) => {
  try {
    const { data } = await API.get(`/api/usage/matrix`, {
      headers: {
        Authorization: `Bearer ${apiToken}`,
      },
    });

    return data.data;
  } catch (error) {
    return handleApiError(error);
  }
};


