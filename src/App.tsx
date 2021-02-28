import React, { useState } from "react";
import ToDoList from "./Components/ToDoList";
import NewToDo from "./Components/NewToDo";
import { todo } from "./todomodel";

const App: React.FC = () => {
  const [todos, settodos] = useState<todo[]>([]);
  const todoAddHandler = (text: string) => {
    settodos((prevtodo) => [
      ...prevtodo,
      { id: Math.random().toString(), text: text },
    ]);
  };

  const todoDeleteHandler = (todoId: string) => {
    settodos((prevtodo) => prevtodo.filter((todo) => todo.id !== todoId));
  };
  return (
    <div className="App">
      <NewToDo onAddTodo={todoAddHandler} />
      <ToDoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
};
export default App;
