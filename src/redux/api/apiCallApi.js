import { API , handleApiError } from "./util";


import { createAsyncThunk } from '@reduxjs/toolkit';


export const getUserUsageForGraph = async (apiKey , startingDate , endingDate ) => {
    try{  
      
      const data = await API.get(`/api/report/getUsage?apiKey=${apiKey}&startingDate=${startingDate}&endingDate=${endingDate}`)
      return { error: null, data };
    }
    catch (error) {
      return handleApiError(error);
    }
}


export const getSpecifcUserUsageForGraph = async (apiKey , startingDate , endingDate , callType ) => {
  try{  
    
    const data = await API.get(`/api/report/getSpecificUsage?apiKey=${apiKey}&startingDate=${startingDate}&endingDate=${endingDate}&callType=${callType}`)
    return { error: null, data };
  }
  catch (error) {
    return handleApiError(error);
  }
}



