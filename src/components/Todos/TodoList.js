import React, { useState, useEffect } from "react";
import axios from "axios";

import TodoCard from "./TodoCard";

const TodoList = () => {
  const [todoList, setTodoList] = useState();

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/todos`).then((res) => {
      setTodoList(res.data);
    });
  }, []);

  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {todoList &&
          todoList.map((todo) => <TodoCard key={todo.id} {...todo} />)}
      </div>
    </div>
  );
};

export default TodoList;
