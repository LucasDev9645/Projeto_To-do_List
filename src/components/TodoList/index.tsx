import Task from "../Task";
import * as enums from "../../utils/enums/Tasks";

import { Container } from "./styles";

const task = [
  {
    title: "Estudar React",
    description: "Ver aula do modulo 30 Ebac",
    priority: enums.Priority.URGENTE,
    status: enums.Status.PENDENTE,
  },
  {
    title: "Estudar JavaScript",
    description: "Ver aula do modulo 30 Ebac",
    priority: enums.Priority.IMPORTANTE,
    status: enums.Status.CONCLUIDA,
  },
  {
    title: "Sass",
    description: "Ver aula do modulo 30 Ebac",
    priority: enums.Priority.URGENTE,
    status: enums.Status.PENDENTE,
  },
];

const TodoList = () => {
  return (
    <Container>
      <p>2 tarefas marcadas como : "categoria" e "termo"</p>
      <ul>
        {task.map((tasks) => (
          <li key={tasks.title}>
            <Task
              title={tasks.title}
              description={tasks.description}
              priority={tasks.priority}
              status={tasks.status}
            />
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default TodoList;
