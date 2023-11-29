import { API , handleApiError } from "./util";
import { createAsyncThunk } from '@reduxjs/toolkit';





export const getUserUsage = async (userid) => {
    try{
        const { data } = await API.get(`api/v2/route/apicalls/getMonthlyMatrix?userid=`+userid)
        return { error: null, data };
    }catch (error) {
        return handleApiError(error);
      }
}



export const getUserUsageForGraph = async (userid) => {
    try{
        const { data } = await API.get(`api/v2/route/apicalls/getMonthlyApiCallForGraph?userid=`+userid)
        return { error: null, data };
    }catch (error) {
        return handleApiError(error);
      }
}