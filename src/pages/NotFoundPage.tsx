import { useState } from "react";
import "../App.css";
import AddButton from "../components/AddNew";
import SearchBar from "../components/SearchBar";
import Group from "../components/group/Group";
import { Link } from "react-router-dom";

function HandleButton() {
  console.log("NEW COLLECTION PRESSED");
}

function NotFoundPage() {
  return (
    <div className="NotFoundPage">
      <h2>Page not found</h2>
    </div>
  );
}

export default NotFoundPage;
