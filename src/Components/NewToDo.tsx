import React, { useRef } from "react";
import "./NewTodo.css";

type NewTodoProps = {
  onAddTodo: (todotext: string) => void;
};
const NewToDo: React.FC<NewTodoProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);
  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enterdText = textInputRef.current!.value;
    props.onAddTodo(enterdText);
  };
  return (
    <form onSubmit={todoSubmitHandler}>
      <div className="font-control">
        <label htmlFor="todo-text">Todoの内容</label>
        <input type="text" id="todotext" ref={textInputRef} />
      </div>
      <button type="submit">ToDoの追加</button>
    </form>
  );
};
export default NewToDo;
