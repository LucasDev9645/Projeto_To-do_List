import { configureStore } from "@reduxjs/toolkit";

import reduceTasks from "./reducers/tasks";

const store = configureStore({
  reducer: {
    tasks: reduceTasks,
  },
});

export type RootReducer = ReturnType<typeof store.getState>;

export default store;
