import AddButton from "../../components/AddButton";
import SideBar from "../../components/SideBar";
import TodoList from "../../components/TodoList";

const Home = () => {
  return (
    <>
      <SideBar showFilters={true} />
      <TodoList />
      <AddButton />
    </>
  );
};

export default Home;
