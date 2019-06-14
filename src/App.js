import React from "react";
import Accordion from "./components/Accordion";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Accordion>
        <div label="fa fa-venus" />
        <div label="fa fa-tablets" />
        <div label="fa fa-tint" />
      </Accordion>
    </div>
  );
}

export default App;
