import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";
import cuid from "cuid";

const AddTodo = () => {
  const [tasks, setTasks] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setTasks(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo({ task: tasks, id: cuid() }));
    e.target.userInput.value = "";
  };

  return (
    <div className="App">
      <div className="App-header">
        <h2> Todo List </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="userInput"
            placeholder="Enter a Todo"
            className="form__input"
            onChange={(e) => handleInputChange(e)}
          />
          <button type="submit" className="form__button">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};
export default AddTodo;
