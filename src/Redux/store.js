import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Reducers/registerReducer.js";

const store = configureStore({
  reducer: { register: userReducer },
});

export default store;
