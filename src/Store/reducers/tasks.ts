import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import Task from "../../models/Task";
import * as enums from "../../utils/enums/Tasks";

const sliceTasks = createSlice({
  name: "tasks",
  initialState: [
    new Task(
      1,
      "Estudar TypeScript",
      enums.Priority.URGENTE,
      enums.Status.PENDENTE,
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    ),
    new Task(
      2,
      "Estudar ReactJs",
      enums.Priority.IMPORTANTE,
      enums.Status.CONCLUIDA,
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    ),
    new Task(
      3,
      "Estudar Sass",
      enums.Priority.URGENTE,
      enums.Status.PENDENTE,
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    ),
    new Task(
      4,
      "Estudar Styled Components",
      enums.Priority.NORMAL,
      enums.Status.CONCLUIDA,
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    ),
  ],
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state = state.filter((task) => task.id !== action.payload);
    },
  },
});

export const { remove } = sliceTasks.actions;

export default sliceTasks.reducer;
