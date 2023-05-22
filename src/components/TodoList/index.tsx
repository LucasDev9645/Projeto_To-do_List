import Task from "../Task";

import { Container } from "./styles";

const TodoList = () => {
  return (
    <Container>
      <p>2 tarefas marcadas como : "categoria" e "termo"</p>
      <ul>
        <li>
          <Task />
        </li>
        <li>
          <Task />
        </li>
        <li>
          <Task />
        </li>
        <li>
          <Task />
        </li>
        <li>
          <Task />
        </li>
      </ul>
    </Container>
  );
};

export default TodoList;
