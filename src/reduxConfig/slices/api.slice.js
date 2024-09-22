import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCountryList = createAsyncThunk(
  "fetchCountryList",
  async () => {
    const res = await fetch(
      "https://restcountries.com/v2/all?fields=name,region,flag"
    );
    return res.json();
  }
);
