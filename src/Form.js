import React, { useState } from "react";

const Form = (props) => {
  console.log("props in the Form component:", props);
  const [item, setItem] = useState({
    text: "",
    id: "",
  });

  const handleChange = (e) => {
    setItem({
      ...item,
      [e.target.name]: e.target.value,
      id: Date.now(),
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.getItem(item);
    setItem({
      text: "",
      id: Date.now(),
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Item"
          name="text"
          value={item.text}
          onChange={handleChange}
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default Form;
