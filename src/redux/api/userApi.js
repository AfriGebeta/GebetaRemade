import { API , handleApiError } from "./util";


import { createAsyncThunk } from '@reduxjs/toolkit';

export const userLogin = createAsyncThunk(
 'user/login',
 async (formData, thunkAPI) => {
   try {
     const data = await API.post(`/api/v1/users/login`, formData, {
       headers: {
         "Content-Type": "application/json",
       },
     });
     return data.data;
   } catch (error) {
     return handleApiError(error);
   }
 }
);


export const userEmailConfirm = createAsyncThunk(
  'user/confirmEmail',
  async (token, thunkAPI) => {
    try {
      const data = await API.get(`/api/v1/users/confirm?token=`+token);
      return data.data;
    } catch (error) {
      return handleApiError(error);
    }
  }
 );

 
//http://localhost:8080/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRlIjoiMjAyMy0xMi0xMSAxODoxNjoyMC4yODAiLCJlbWFpbCI6ImFiZW5lemVyLnNlaWZ1LmtpbmZ1QGdtYWlsLmNvbSJ9.4dMfcdjUb3o6BtqNrX7AAWBIulSNXL5hg5p7W_Mj8eA



export const userLogoutEndPointCaller = async (formData) => {
    try{
        const { data } = await API.post(`/api/v1/users/signup` , formData , {
            headers : {
                "Content-Type": "application/json",  
            }
        })
        return { error: null, data };
    }catch (error) {
    
        return handleApiError(error);
    }
}


export const setToken = createAsyncThunk(
  'user/settoken',
  async(formData) => {
    try{
        const  data  = await API.put(`/api/v1/users/setToken` , formData , {
            headers : {
                "Content-Type": "application/json",  
            }
        });
        return data.data;
    }catch (error) {
        return handleApiError(error);
    }
}
)

// https://mapapi.gebeta.app/api/v1/users/updateprofile
export const updateprofile =  createAsyncThunk(
  'user/updateprofile',
  async (formData) => {
    try{
      const  data  = await API.put(`/api/v1/users/updateprofile` , formData , {
          headers : {
              "Content-Type": "application/json",  
          }
      });
      return  data.data;
  }catch (error) {
      return handleApiError(error);
  }
  }
)








