import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/actions";

const TodoItem = ({ task }) => {
  const [isUpdate, setIsupdate] = useState(false);
  const dispatch = useDispatch();
  const textRef = useRef(null);

  const editItemToState = (e) => {
    e.preventDefault();
    dispatch(updateTodo({ message: textRef.current.value, id: task.id }));
    setIsupdate(false);
    textRef.current = null;
  };

  const renderForm = () => {
    return (
      <form onSubmit={editItemToState}>
        <input
          ref={textRef}
          type="text"
          defaultValue={task.task}
          className="form__input"
        />
        <button type="submit" className="form__button">
          Edit Todo
        </button>
      </form>
    );
  };

  const renderItem = () => {
    return (
      <li className="singleTodo">
        <span className="todoText">{task.task}</span>
        <button
          className="list__button"
          onClick={() => dispatch(deleteTodo(task.id))}
        >
          Delete
        </button>
        <button className="list__button" onClick={() => setIsupdate(true)}>
          Edit
        </button>
      </li>
    );
  };

  return (
    <>
      <div>{isUpdate ? renderForm() : renderItem()}</div>
    </>
  );
};

export default TodoItem;
