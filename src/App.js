import React from 'react';
import MainMap from "./components/main.jsx";

import './App.css';
import "./css/map.scss";

function App() {
  return (
    <div className="App">
      <header className = "main-header">
        Military potential
      </header>
      <MainMap/>
      <section className="adding-space">
      </section>
    </div>
  );
}

export default App;
