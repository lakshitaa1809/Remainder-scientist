import React, { useState } from "react";
import "./App.css";
import List from "./components/list";
import data from "./data";
const App = () => {
  const [list, setList] = useState(data);
  const deleteitem = function (id) {
    const newlist = list.filter((element) => element.id !== id);
    setList(newlist);
  };
  return (
    <main>
      <div className="container">
        <List list={list} deleteitem={deleteitem} />
        <button className="clear_btn" onClick={() => setList([])}>
          CLEAR ALL
        </button>
      </div>
    </main>
  );
};

export default App;
