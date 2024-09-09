import React from "react";

import "./App.css";
import CreatePersonnage from "./interface-adapter/Components/CreatePersonnage";
import PersonnageList from "./interface-adapter/Components/PersonnageList";
import Personnages from "./interface-adapter/Pages/Personnages";

function App() {
  return (
    <div className="App">
      <Personnages />
    </div>
  );
}

export default App;
