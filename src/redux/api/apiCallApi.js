import {API, handleApiError} from "./util";

export const getUserUsageForGraph = async (
  selected,
  startDate = "2017-02-20",
  endDate = "2024-02-16",
  apiToken
) => {
  try {
    const data = await API.get(
      `/api/usage/graph?type=${selected}&startDate=${startDate}&endDate=${endDate}`,
      {
        headers: {
          Authorization: `Bearer ${apiToken}`,
        },
      }
    );
    return { error: null, data };
  } catch (error) {
    return handleApiError(error);
  }
};