import { useSelector } from "react-redux";

import Task from "../Task";
import { RootReducer } from "../../Store";

import { Container } from "./styles";

const TodoList = () => {
  const tasks = useSelector((state: RootReducer) => state.tasks);

  return (
    <Container>
      <p>2 tarefas marcadas como : "categoria" e "termo"</p>
      <ul>
        {tasks.map((task) => (
          <li key={task.title}>
            <Task
              title={task.title}
              description={task.description}
              priority={task.priority}
              status={task.status}
            />
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default TodoList;
