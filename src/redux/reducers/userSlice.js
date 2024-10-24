import {createSlice} from '@reduxjs/toolkit'
import {fireBaseLogin, userEmailConfirm, userLogin} from '../api/userApi'

const initialState = {
   data: {},
   loading: false,
   error: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.data = action.payload
    },
    unSetUserData: (state) => {
      state.data = {}
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(userEmailConfirm.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userEmailConfirm.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data;
      })
      .addCase(userEmailConfirm.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fireBaseLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fireBaseLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data;
      })
      .addCase(fireBaseLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
  },    
})

export const { setUserData, unSetUserData } = userSlice.actions

export default userSlice.reducer