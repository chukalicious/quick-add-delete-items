import React from "react";
import Item from "./Item";

const List = (props) => {
  console.log("Props in the List component: ", props.items);
  return (
    <div>
      items go here
      {props.items.map((itm) => (
        <Item key={itm.id} item={itm} handleDelete={props.handleDelete} />
      ))}
    </div>
  );
};

export default List;
