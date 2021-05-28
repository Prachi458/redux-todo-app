import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./todoItem";

const TodoList = () => {
  const taskobj = useSelector((state) => state.todos.data);
  const taskItems = taskobj.map((task) => {
    return (
      <div className="App-header">
        <ul className="allTodos">
          <TodoItem task={task} key={task.id} />
        </ul>
      </div>
    );
  });
  return <div>{taskItems}</div>;
};

export default TodoList;
