import React from "react";
import Accordion from "./components/Accordion";

import "./App.css";

const starting_state = [
  {
    name: "medications",
    slug: "medications",
    items: [
      {
        icon: "fa fa-pills",
        name: "tranexamic acid",
        slug: "tranexamic-acid",
        selected: false
      },
      {
        icon: "fa fa-pills",
        name: "naproxen",
        slug: "naproxen",
        selected: false
      },
      {
        icon: "fa fa-pills",
        name: "iron",
        slug: "iron",
        selected: false
      }
    ]
  },
  {
    name: "symptoms",
    slug: "symptoms",
    items: [
      {
        icon: "fa fa-pills",
        name: "cramps",
        slug: "cramps",
        selected: false
      },
      {
        icon: "fa fa-pills",
        name: "bloating",
        slug: "bloating",
        selected: false
      }
    ]
  },
  { slug: "mood", name: "mood", items: [] },
  { slug: "menstrual cycle", name: "menstrual cycle", items: [] },
  { slug: "energy", name: "energy", items: [] }
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
      <Accordion>{starting_state}</Accordion>
    </div>
  );
}

export default App;
