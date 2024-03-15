import Logo from "./components/Logo";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <div className="container">
        <Logo />
        <TodoInput />
        <TodoList />
      </div>
    </>
  );
}

export default App;
