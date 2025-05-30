import { useState } from "react";
import "../App.css";
import CollectionItem from "../components/collection/CollectionItem";
import SearchBar from "../components/SearchBar";
import Collection from "../components/collection/Collection";
import AddButton from "../components/AddNew";

interface CollectionPageProps {
  title: String;
}

function CollectionPage({ title }: CollectionPageProps) {
  return (
    <div className="CollectionPage">
      <div className="TopBar">
        <h2>{title}</h2>
        <div className="RightSide">
          <AddButton />
          <SearchBar />
        </div>
      </div>
      <Collection search="" />
    </div>
  );
}

export default CollectionPage;
