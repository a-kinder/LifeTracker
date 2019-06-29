import React from "react";
import Accordion from "./components/Accordion";

import "./App.css";

const starting_state = [
  {
    name: "medications",
    items: [
      {
        icon: "fa fa-pills",
        name: "tranexamic acid"
      },
      {
        icon: "fa fa-pills",
        name: "naproxen"
      },
      {
        icon: "fa fa-pills",
        name: "iron"
      }
    ]
  },
  {
    name: "symptoms",
    items: [
      {
        icon: "fa fa-pills",
        name: "cramps"
      },
      {
        icon: "fa fa-pills",
        name: "bloating"
      }
    ]
  },
  { name: "mood", items: [] },
  { name: "menstrual cycle", items: [] },
  { name: "energy", items: [] }
];

function App() {
  return (
    <div className="app">
      <div className="app-header">
        <div id="nav">
          <i className="fas fa-bars" />
        </div>
        LifeTracker
      </div>
      {starting_state.map(header => (
        <div class="header">
          {header.name}
          <Accordion>
            {header.items.map(item => (
              <div label={item.icon} />
            ))}
          </Accordion>
        </div>
      ))}
    </div>
  );
}

export default App;
