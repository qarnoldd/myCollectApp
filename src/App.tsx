import { useState } from "react";
import "./App.css";
import CollectionPage from "./pages/CollectionPage";
import HomePage from "./pages/HomePage";
import SideBar from "./components/sideBar/SideBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <SideBar />
      <Outlet />
    </div>
  );
}

export default App;
