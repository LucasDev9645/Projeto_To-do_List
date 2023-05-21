import SideBar from "./components/SideBar";
import TodoList from "./components/TodoList";

import GlobalStyle, { Container } from "./styles/styles";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <SideBar />
        <TodoList />
      </Container>
    </>
  );
};

export default App;
