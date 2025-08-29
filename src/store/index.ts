import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {},                      // no feature reducers in develop
  middleware: (gdm) => gdm(),       // default middleware only
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
