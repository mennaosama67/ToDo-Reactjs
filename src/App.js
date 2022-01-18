import "./styles.css";
import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";

import ToDoList from "./components/ToDoList";
export default function App() {
  const [input, setInput] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  return (
    <div className="container">
      <div className="app-wrapper">
        <Header />
        <div className="content-wrapper">
          <Form
            input={input}
            setInput={setInput}
            toDoList={toDoList}
            setToDoList={setToDoList}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          />
          <ToDoList
            toDoList={toDoList}
            setToDoList={setToDoList}
            setEditTodo={setEditTodo}
          />
        </div>
      </div>
    </div>
  );
}
