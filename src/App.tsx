import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import store from "./Store";
import Home from "./pages/Home";
import Register from "./pages/Register";

import GlobalStyle, { Container } from "./styles/styles";

const rotas = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Home />
      </>
    ),
  },
  {
    path: "/novo",
    element: <Register />,
  },
]);

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <RouterProvider router={rotas} />
      </Container>
    </Provider>
  );
};

export default App;
