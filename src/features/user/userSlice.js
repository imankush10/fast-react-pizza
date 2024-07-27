import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
};

const userslice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateName(state, action) {
      state.username = action.payload;
    },
  },
});

export default userslice.reducer;
export const {updateName} = userslice.actions;