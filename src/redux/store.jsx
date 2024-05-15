import { combineReducers, configureStore } from "@reduxjs/toolkit";

import authReducer from "./slice/auth/auth";
import sequenceReducer from "./slice/sequence";

const rootReducer = combineReducers({
  auth: authReducer,
  sequence: sequenceReducer
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

export { store };
