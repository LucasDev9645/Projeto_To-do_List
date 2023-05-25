import { useSelector } from "react-redux";

import Task from "../Task";
import { RootReducer } from "../../Store";

import { Container } from "./styles";

const TodoList = () => {
  const { itens } = useSelector((state: RootReducer) => state.tasks);
  const { term } = useSelector((state: RootReducer) => state.filter);

  const taskFilter = () => {
    return itens.filter(
      (item) => item.title.toLowerCase().search(term.toLowerCase()) >= 0
    );
  };

  return (
    <Container>
      <p>2 tarefas marcadas como : "categoria" e "{term}"</p>
      <ul>
        {taskFilter().map((task) => (
          <li key={task.title}>
            <Task
              id={task.id}
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
