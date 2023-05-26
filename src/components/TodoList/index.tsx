import { useSelector } from "react-redux";

import Task from "../Task";
import { RootReducer } from "../../Store";

import { Container } from "./styles";

const TodoList = () => {
  const { itens } = useSelector((state: RootReducer) => state.tasks);
  const { term, criterion, value } = useSelector(
    (state: RootReducer) => state.filter
  );

  const taskFilter = () => {
    let filteredTasks = itens;

    if (term !== undefined) {
      filteredTasks = filteredTasks.filter(
        (item) => item.title.toLowerCase().search(term.toLowerCase()) >= 0
      );

      if (criterion === "priority") {
        filteredTasks = filteredTasks.filter((item) => item.priority === value);
      } else if (criterion === "status") {
        filteredTasks = filteredTasks.filter((item) => item.status === value);
      }
      return filteredTasks;
    } else {
      return itens;
    }
  };

  return (
    <Container>
      <p>2 tarefas marcadas como : "categoria" e "{term}"</p>
      <ul>
        <li>{term}</li>
        <li>{criterion}</li>
        <li>{value}</li>
      </ul>
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
