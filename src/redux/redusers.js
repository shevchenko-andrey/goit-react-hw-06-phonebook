import { combineReducers } from "@reduxjs/toolkit";

import { persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";

import { itemSlice } from "./contactsSlice";

import { filterSlice } from "./filterSlice";

export const rootReducer = combineReducers({
  items: itemSlice.reducer,
  filter: filterSlice.reducer,
});

const persistConfig = {
  key: "contacts",
  storage,
  blacklist: ["filter"],
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);
