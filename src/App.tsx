import { useState } from "react";
import "./App.css";
import CollectionPage from "./pages/CollectionPage";
import HomePage from "./pages/HomePage";
import SideBar from "./components/sideBar/SideBar";

function App() {
  return (
    <div className="App">
      <SideBar />
      <div className="Page">
        <HomePage />
      </div>
    </div>
  );
}

export default App;
