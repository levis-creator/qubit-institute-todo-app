import { useState } from "react";
import Logo from "./components/Logo";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebaseconfig";

function App() {
  const [data, setData] = useState([]);
  function handleUserData(todoItem: string, deadline: string) {
    const currentDate = new Date().toDateString();
    const todoData = {
      todoItem: todoItem,
      deadline: deadline,
      created: currentDate,
    };
    setData((prevData: any[]) => [...prevData, todoData]);

    console.log(data);
  }
  async function fetchData() {
    const data = await getDocs(collection(db, "todoapp"));
    data.forEach((doc) => console.log(doc.data()));
  }
  fetchData();
  return (
    <>
      <div className="container">
        <Logo />
        <TodoInput userData={handleUserData} />
        <TodoList data={data} />
      </div>
    </>
  );
}

export default App;
