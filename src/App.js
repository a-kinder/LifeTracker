import React from "react";
import Accordion from "./components/Accordion";

import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="app-header">
        <div id="nav">
          <i className="fas fa-bars" />
        </div>
        LifeTracker
      </div>
      <Accordion>
        <div label="fa fa-venus" />
        <div label="fa fa-pills" />
        <div label="fa fa-tint" />
        <div label="far fa-smile" />
        <div label="fa fa-battery-half" />
        <div label="fa fa-apple-alt" />
        <div label="fa fa-dumbbell" />
      </Accordion>
    </div>
  );
}

export default App;
