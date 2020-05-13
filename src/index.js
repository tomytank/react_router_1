import React, { useState } from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./components/Home";
import ItemsList from "./components/ItemsList";

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
      <Route path="/" component={Home} />
      <Route path="/items" component={ItemsList} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  rootElement
);
