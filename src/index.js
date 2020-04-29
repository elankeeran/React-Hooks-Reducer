import React from "react";
import ReactDOM from "react-dom";
import Reducer from "./Reducer";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Reducer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
