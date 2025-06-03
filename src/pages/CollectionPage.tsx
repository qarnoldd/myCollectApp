import { useState } from "react";
import "../App.css";
import CollectionItem from "../components/collection/CollectionItem";
import SearchBar from "../components/SearchBar";
import Collection from "../components/collection/Collection";
import AddButton from "../components/AddNew";
import NewItem from "../components/NewItem";

function CollectionPage() {
  const [modalOpen, setOpen] = useState(false);

  function HandleButton() {
    setOpen(!modalOpen);
  }
  return (
    <div className="CollectionPage">
      <div className="TopBar">
        <h2>Title</h2>
        <div className="RightSide">
          <AddButton func={HandleButton} />
          <SearchBar />
        </div>
      </div>
      {modalOpen && <NewItem func={HandleButton} />}
      <Collection search="" />
    </div>
  );
}

export default CollectionPage;
