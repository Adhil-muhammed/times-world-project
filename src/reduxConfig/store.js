import { configureStore } from "@reduxjs/toolkit";
import { userReducer, countryReducer } from "./slices";

export const store = configureStore({
  reducer: {
    user: userReducer,
    countries: countryReducer,
  },
});
