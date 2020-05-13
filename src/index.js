import React, { useState } from "react";
import ReactDOM from "react-dom";

import data from "./data";

import "./styles.css";

const App = () => {
  const [items, setItems] = useState(data);

  return (
    <div className="App">
      <nav>
        <h1 className="store-header">Dan's Trinkets</h1>
        <div className="nav-links" />
      </nav>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
