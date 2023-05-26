import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as enums from "../../utils/enums/Tasks";

type FilterStatus = {
  term?: string;
  criterion: "priority" | "status" | "all";
  value?: enums.Priority | enums.Status;
};

const initialState: FilterStatus = {
  term: "",
  criterion: "all",
};

const sliceFilter = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeTerm: (state, action: PayloadAction<string>) => {
      state.term = action.payload;
    },
    changeFilter: (state, action: PayloadAction<FilterStatus>) => {
      state.criterion = action.payload.criterion;
      state.value = action.payload.value;
    },
  },
});

export const { changeTerm, changeFilter } = sliceFilter.actions;

export default sliceFilter.reducer;
