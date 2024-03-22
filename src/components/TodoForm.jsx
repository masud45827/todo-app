import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/TodoSlice";

const TodoForm = () => {
  const [value, setValue] = useState('');
  const [Id,setId] = useState(0);
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    setId(Id+1); 
    dispatch(
      addTodo({id:Id,title: value})
    );
    setValue('');
  };

  return (
    <form onSubmit={onSubmit} >
      <input
        type="text"
        placeholder="write task name"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      ></input>

      <button type="submit">
        ADD
      </button>
    </form>
  );
};

export default TodoForm;
