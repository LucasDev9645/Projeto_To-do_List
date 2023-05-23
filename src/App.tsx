import { Provider } from "react-redux";
import SideBar from "./components/SideBar";
import TodoList from "./components/TodoList";

import store from "./Store";

import GlobalStyle, { Container } from "./styles/styles";

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <SideBar />
        <TodoList />
      </Container>
    </Provider>
  );
};

export default App;
