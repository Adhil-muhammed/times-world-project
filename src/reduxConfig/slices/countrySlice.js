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
    },

    setIsMobile: (state, action) => {
      const { isMobile } = action?.payload;

      state.isMobile = isMobile;
      state.visibleItemsCount = 8;
    },

    setFilterKey: (state, action) => {
      state.filterKey = action?.payload?.filterKey;
      const { isMobile } = state;

      state.visibleItemsCount = isMobile ? 8 : 12;
    },
  },
  extraReducers: (builder) => {},
});

export const { setCountryData, setFilterKey, showMore, setIsMobile } =
  countrySlice?.actions;

export const countryReducer = countrySlice?.reducer;
