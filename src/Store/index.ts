import { configureStore } from "@reduxjs/toolkit";

import reduceTasks from "./reducers/tasks";
import reduceFilter from "./reducers/filter";

const store = configureStore({
  reducer: {
    tasks: reduceTasks,
    filter: reduceFilter,
  },
});

export type RootReducer = ReturnType<typeof store.getState>;

export default store;
