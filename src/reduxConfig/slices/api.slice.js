import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCountryList = createAsyncThunk(
  "fetchCountryList",
  async () => {
    const res = await axios.get(
      "https://restcountries.com/v2/all?fields=name,region,flag"
    );
    return res.data;
  }
);
