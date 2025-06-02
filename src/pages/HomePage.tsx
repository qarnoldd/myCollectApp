import { useState } from "react";
import "../App.css";
import AddButton from "../components/AddNew";
import SearchBar from "../components/SearchBar";
import Group from "../components/group/Group";

function HomePage() {
  return (
    <div className="HomePage">
      <div className="TopBar">
        <h2>Collections</h2>
        <div className="RightSide">
          <AddButton />
          <SearchBar />
        </div>
      </div>
      <Group
        icon="https://placehold.co/600x400"
        title="Figures"
        numItems={10}
      />
      <Group
        icon="https://placehold.co/600x400"
        title="Figures"
        numItems={10}
      />
      <Group
        icon="https://placehold.co/600x400"
        title="Figures"
        numItems={10}
      />
    </div>
  );
}

export default HomePage;
