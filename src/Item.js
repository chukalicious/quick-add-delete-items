import React from "react";

const Item = (props) => {
  console.log("props in Item component: ", props);

  return (
    <div>
      {props.item.text}
      <button onClick={() => props.handleDelete(props.item.id)}>Delete</button>
    </div>
  );
};

export default Item;
