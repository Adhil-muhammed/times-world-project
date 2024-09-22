import { createSlice } from "@reduxjs/toolkit";
import { fetchCountryList } from "..";

const initialStater = {
  data: [],
  isLoading: false,
  error: null,
};

const countrySlice = createSlice({
  name: "country",
  initialStater,
  reducers: {
    countryWiseFilter: (state, action) => {
      console.log("action: ", action);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountryList.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCountryList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchCountryList.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const { countryWiseFilter } = countrySlice?.actions;
export const countryReducer = countrySlice?.reducer;
