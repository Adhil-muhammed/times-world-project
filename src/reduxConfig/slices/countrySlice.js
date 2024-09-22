import { createSlice } from "@reduxjs/toolkit";
import { fetchCountryList } from "./api.slice";

const initialState = {
  data: [],
  error: null,
  isMobile: false,
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
    showMore: (state, action) => {
      const { data, isMobile, visibleItemsCount } = state;

      state.visibleItemsCount = isMobile
        ? visibleItemsCount !== 8
          ? 8
          : data?.length
        : visibleItemsCount !== 12
        ? 12
        : data?.length;
      // state.visibleItemsCount = count;
    },
    setIsMobile: (state, action) => {
      const { isMobile } = action?.payload;

      state.isMobile = isMobile;
      state.visibleItemsCount = 8;
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

export const { setCountryData, setFilterKey, showMore, setIsMobile } =
  countrySlice?.actions;

export const countryReducer = countrySlice?.reducer;
