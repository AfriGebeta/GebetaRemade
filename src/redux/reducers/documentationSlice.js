import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  current: 'intro',
  
}

export const documentationSlice = createSlice({
  name: 'documentation',
  initialState,
  reducers: {
    changeTopic: (state, action) => {
      state.current = action.payload
    },
  },
})


export const { changeTopic} = documentationSlice.actions

export default documentationSlice.reducer