import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
};

const userslice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUserName(state, action) {
      state.username = action.payload;
    },
  },
});

export default userslice.reducer;
export const { updateUserName } = userslice.actions;
