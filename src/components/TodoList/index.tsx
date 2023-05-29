import { useSelector } from "react-redux";

import Task from "../Task";
import { RootReducer } from "../../Store";

import { MainContainer, Title } from "../../styles/styles";

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

  const ShowFilteringResult = (amount: number) => {
    let message = "";
    const complementation =
      term !== undefined && term?.length > 0 ? `e "${term}" ` : "";

    if (criterion === "all") {
      message = `${amount} tarefa(s) encontrada(s) como: " todas " ${complementation}`;
    } else {
      message = `${amount} tarefa(s) encontrada(s) como: " ${`${value}`} " ${complementation}`;
    }
    return message;
  };

  const tasks = taskFilter();
  const message = ShowFilteringResult(tasks.length);

  return (
    <MainContainer>
      <Title as={"p"}>{message}</Title>
      <ul>
        {tasks.map((task) => (
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
    </MainContainer>
  );
};

export default TodoList;
