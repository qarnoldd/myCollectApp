import { useState, useEffect } from "react";
import "../App.css";
import AddButton from "../components/AddNew";
import SearchBar from "../components/SearchBar";
import Group from "../components/group/Group";
import { Link } from "react-router-dom";
import axios from "axios";
import { Item } from "aws-sdk/clients/simpledb";

function HandleButton() {
  console.log("NEW COLLECTION PRESSED");
}

interface Collection {
  collection_id: number;
  collection_name: string;
  num_items?: number;
}

interface Items {
  item_id: number;
  collection_id: number;
  ean: string;
  item_name: string;
  item_desc: string;
  item_image: string;
}

function HomePage() {
  const [collections, setCollections] = useState<Collection[]>([]);
  const [items, setItems] = useState<Items[]>([]);

  const fetchAPI = async () => {
    const collection = await axios.get("http://localhost:8080/collections/1");
    setCollections(collection.data);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  const listCollections = collections.map((item) => {
    const id = item.collection_id;
    const title = item.collection_name;
    return <Group title={title} id={id} />;
  });

  return (
    <div className="HomePage">
      <div className="TopBar">
        <h2>Collections</h2>
        <div className="RightSide">
          <AddButton func={HandleButton} />
          <SearchBar />
        </div>
      </div>
      {listCollections}
    </div>
  );
}

export default HomePage;
