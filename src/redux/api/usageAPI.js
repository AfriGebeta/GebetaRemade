import { API } from "./util";

export const getUserUsage = async (apiToken) => {
    const { data } = await API.get(`/api/usage/matrix`, {
      headers: {
        Authorization: `Bearer ${apiToken}`,
      },
    });

    return data.data
};


