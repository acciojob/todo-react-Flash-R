import React,{useState} from "react";
import CreateTodo from "./CreateTodo"
import ShowList from "./ShowList"
import './../styles/App.css';

const App = () => {
  const [TodoList, setTodoList] = useState([]);

  return (
    <div>
        <CreateTodo 
        TodoList={TodoList}
        setTodoList={setTodoList}
        />
        <ShowList 
        TodoList={TodoList}
        setTodoList={setTodoList}
        />
    </div>
  )
}

export default App
