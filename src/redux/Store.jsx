import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./RootReducer";
import thunk from "redux-thunk";

// Create a Redux store using Redux Toolkit with thunk middleware and combined reducers
const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
