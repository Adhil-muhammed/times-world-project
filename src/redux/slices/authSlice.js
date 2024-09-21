import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  password: "",
};

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    onChangeUserCredentials: (state, action) => {
      const { name, value } = action?.payload;

      state[name] = value;
    },
  },
});

export const { onChangeUserCredentials } = authSlice?.actions;

export default authSlice?.reducer;
