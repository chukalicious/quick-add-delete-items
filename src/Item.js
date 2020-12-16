import React, { useState } from "react";

const Item = (props) => {
  console.log("props in Item component: ", props);

  const [editing, setEditing] = useState(false);

  const handleEdit = () => {
    setEditing(!editing);
  };

  return (
    <div>
      {editing ? (
        <div>
          {" "}
          <input /> <button onClick={handleEdit}>Save</button>{" "}
        </div>
      ) : (
        <div>
          {props.item.text}
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => props.handleDelete(props.item.id)}>
            Delete
          </button>{" "}
        </div>
      )}
    </div>
  );
};

export default Item;
