import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "../App.css";

interface SearchProps {
  func: () => void;
}

function SearchBar({ func }: SearchProps) {
  return <div className="SearchBar"></div>;
}

export default SearchBar;
