import { configureStore } from "@reduxjs/toolkit";
import countryReducer from "../Redux/countrySlice.js";

export const store = configureStore({
  reducer: { country: countryReducer },
}); 