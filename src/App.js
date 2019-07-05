import React from "react";
import Accordion from "./components/Accordion";
import { Provider } from "react-redux";
import configureStore from "./store";
import default_store from "./default_store";
import "./App.css";
const reduxStore = configureStore(default_store);

function App() {
  return (
    <Provider store={reduxStore}>
      <div className="app">
        <div className="app-header">
          <div id="nav">
            <i className="fas fa-bars" />
          </div>
          LifeTracker
        </div>
        <Accordion />
      </div>
    </Provider>
  );
}
export default App;
