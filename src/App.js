import logo from "./logo.svg";
import Form from "./Form";
import List from "./List";
import "./App.css";
import { useState } from "react";

function App() {
  const [list, setList] = useState([]);

  const getItem = (item) => {
    setList([...list, item]);
  };

  //create .filter function to delete items in list
  const handleDelete = (itemId) => {
    const newItems = list.filter((itm) => itm.id !== itemId);
    setList(newItems);
  };
  return (
    <div className="App">
      <Form getItem={getItem} />
      <List items={list} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
