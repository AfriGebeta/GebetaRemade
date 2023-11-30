import { createSlice } from '@reduxjs/toolkit'
import { userLogin } from '../api/userApi'
import { setToken } from '../api/userApi'
import {updateprofile} from '../api/userApi'
const initialState = {
   data : {},
  
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: async (state , action) => {
            state.data = action.payload 
    },
    unSetUserData : async (state , action) => {
        state.data = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.loading = false;
        
        state.data = action.payload.data;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(setToken.pending, (state) => {
        state.loading = true;
      })
      .addCase(setToken.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action.payload.data)
        state.data = action.payload.data;
      })
      .addCase(setToken.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(updateprofile.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateprofile.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action.payload.data)
        state.data = action.payload.data;
      })
      .addCase(updateprofile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      
  },    
  
})


export const { setUserData} = userSlice.actions

export default userSlice.reducer
