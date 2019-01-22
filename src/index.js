import React from "react";
import ReactDOM from "react-dom";
import Hover from "./components/Hover";
import Info from "./components/Info";
import Title from "./components/Title";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Hover render={hovering => <Info hovering={hovering} />} />
      <Hover render={hovering => <Title hovering={hovering} />} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
