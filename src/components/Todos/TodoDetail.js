import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const TodoDetail = () => {
  const [data, setData] = useState();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => {
        setData(res.data);
      });
  }, []);

  const { id: todoId, userId, title, completed } = data || {};

  return (
    <div>
      {data && (
        <div>
          <h3>{`Todo ID: ${todoId}`}</h3>
          <h3>{`UserID: ${userId}`}</h3>
          <h3>{`Title: ${title}`}</h3>
          <h3>{`Complete: ${completed}`}</h3>
        </div>
      )}
    </div>
  );
};

export default TodoDetail;
