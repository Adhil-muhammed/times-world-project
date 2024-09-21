import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  password: "",
  emailOrUsername: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    onChangeUserCredentials: (state, action) => {
      const { name, value } = action?.payload;

      state[name] = value;
    },
  },
});

export const { onChangeUserCredentials } = userSlice?.actions;
export const userReducer = userSlice.reducer;
