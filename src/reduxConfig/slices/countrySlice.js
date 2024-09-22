import { createSlice } from "@reduxjs/toolkit";
import { fetchCountryList } from "./api.slice";

const initialState = {
  data: [],
  error: null,
  filterKey: "",
  isLoading: true,
  visibleItemsCount: 12,
};

const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    setCountryData: (state, action) => {
      const { data, isLoading } = action?.payload;

      state.data = data;
      state.isLoading = isLoading;
    },
    showMore: (state) => {
      state.visibleItemsCount = state?.data?.length;
    },
    setFilterKey: (state, action) => {
      state.filterKey = action?.payload?.filterKey;
      state.visibleItemsCount = 12;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountryList.pending, (state, action) => {
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

export const { setCountryData, setFilterKey, showMore } = countrySlice?.actions;

export const countryReducer = countrySlice?.reducer;
