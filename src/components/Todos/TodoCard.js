import React from "react";
import { useHistory } from "react-router-dom";

const TodoCard = (props) => {
  const { id, title, completed } = props;
  let history = useHistory();

  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: "gray",
        margin: "10px",
        padding: "15px",
        width: "250px",
      }}
      onClick={() => history.push(`/todo/${id}`)}
    >
      <h3>{`Title: ${title} Status: ${completed}`}</h3>
    </div>
  );
};

export default TodoCard;
