import {
  configureStore,
  combineReducers,
  // getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { itemSlice } from "../redux/itemSlice";
import { filterSlice } from "../redux/filterSlice";
// import { filterSlice, itemSlice, persistContactReducer } from "../redux";
export const rootReducer = combineReducers({
  items: itemSlice.reducer,
  filter: filterSlice.reducer,
});
export const store = configureStore({
  reducer: rootReducer,
});
// phonebook: persistContactReducer,
// middleware: getDefaultMiddleware({
//   serializableCheck: {
//     ignoredActions: ["persist/PERSIST"],
//   },
// }),
