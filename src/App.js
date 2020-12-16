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
  const editedItem = (newText) => {
    console.log("new Text", newText);
    // const edited = list.find((itm) => itm.id == newText.id ? )
  };

  //create .filter function to delete items in list
  const handleDelete = (itemId) => {
    const newItems = list.filter((itm) => itm.id !== itemId);
    setList(newItems);
  };
  return (
    <div className="App">
      <Form getItem={getItem} />
      <List items={list} handleDelete={handleDelete} editedItem={editedItem} />
    </div>
  );
}

export default App;
