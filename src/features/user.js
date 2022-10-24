import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  username: null,
  email: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.email = action.payload.email;
    },
    resetUser: (state) => {
      return (state = {
        id: null,
        username: null,
        email: null,
      });
    },
  },
});

export const {
  setUser,
  resetUser,
} = userSlice.actions;
export default userSlice.reducer;
