import React from "react";
import "./App.css"
import NavBar from "./Components/Navbar/NavBar";
import Banner from "./Components/Hero/Banner";
import Card from "./Components/RowPost/Card";
import { action,orginals,Horror,Comedy } from "./urls";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Card url={orginals} title ="Netflix Orginals" />
      <Card url={action} title ="Action" isSmall/>
      <Card url={Horror} title ="Horror" isSmall />
      <Card url={Comedy} title ="Comedy" isSmall/>
    </div>
  );
}

export default App;
