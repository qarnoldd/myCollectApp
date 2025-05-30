import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "../App.css";

function SearchBar() {
  return (
    <div className="SearchBar">
      <input name="searchInput" placeholder="Search..." />
    </div>
  );
}

export default SearchBar;
