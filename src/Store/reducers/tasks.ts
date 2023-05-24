import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import Task from "../../models/Task";
import * as enums from "../../utils/enums/Tasks";

type StateTasks = {
  itens: Task[];
};

const initialState: StateTasks = {
  itens: [
    {
      id: 1,
      description: "Estudar TypeScript rever exercício do módulo 30",
      priority: enums.Priority.NORMAL,
      status: enums.Status.CONCLUIDA,
      title: "Estudar TypeScript",
    },
    {
      id: 2,
      description: "Estudar Sass rever exercício do módulo 14",
      priority: enums.Priority.IMPORTANTE,
      status: enums.Status.PENDENTE,
      title: "Estudar Sass",
    },
    {
      id: 3,
      description: "Estudar React rever exercício do módulo 31",
      priority: enums.Priority.URGENTE,
      status: enums.Status.CONCLUIDA,
      title: "Estudar ReactTs",
    },
    {
      id: 4,
      description: "Estudar JavaScript rever exercício do módulo 07",
      priority: enums.Priority.URGENTE,
      status: enums.Status.CONCLUIDA,
      title: "Estudar JavaScript",
    },
  ],
};

const sliceTasks = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((task) => task.id !== action.payload);
    },
  },
});

export const { remove } = sliceTasks.actions;

export default sliceTasks.reducer;
