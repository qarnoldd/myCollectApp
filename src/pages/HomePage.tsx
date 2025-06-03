import { useState } from "react";
import "../App.css";
import AddButton from "../components/AddNew";
import SearchBar from "../components/SearchBar";
import Group from "../components/group/Group";
import { Link } from "react-router-dom";

function HandleButton() {
  console.log("NEW COLLECTION PRESSED");
}

function HomePage() {
  return (
    <div className="HomePage">
      <div className="TopBar">
        <h2>Collections</h2>
        <div className="RightSide">
          <AddButton func={HandleButton} />
          <SearchBar />
        </div>
      </div>
      <Link to={"collection"}>
        <Group
          icon="https://placehold.co/600x400"
          title="Figures"
          numItems={10}
        />
      </Link>
    </div>
  );
}

export default HomePage;
