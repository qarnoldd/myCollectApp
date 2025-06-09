import { useState, useEffect } from "react";
import "../App.css";
import AddButton from "../components/AddNew";
import SearchBar from "../components/SearchBar";
import Group from "../components/group/Group";
import { Link } from "react-router-dom";
import axios from "axios";
import { Item } from "aws-sdk/clients/simpledb";
import NewCollection from "../components/NewCollection";
import { useLocation } from "react-router-dom";

interface Collection {
  collection_id: number;
  collection_name: string;
  num_items?: number;
}

function HomePage() {
  const location = useLocation();
  const user_id = sessionStorage.getItem("id");
  const [collections, setCollections] = useState<Collection[]>([]);
  const [modalOpen, setModal] = useState(false);
  console.log(user_id);
  function HandleButton() {
    setModal(true);
  }

  const fetchAPI = async () => {
    const collection = await axios.get(
      "http://localhost:8080/collections/" + user_id
    );
    setCollections(collection.data);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  const listCollections = collections.map((item) => {
    const id = item.collection_id;
    const title = item.collection_name;
    return (
      <Group title={title} id={id} func={() => console.log("Group Function")} />
    );
  });

  return (
    <div className="HomePage">
      <div className="TopBar">
        <h2>Collections</h2>
        <div className="RightSide">
          <AddButton func={HandleButton} />
          {modalOpen && <NewCollection func={() => setModal(!modalOpen)} />}
        </div>
      </div>
      {listCollections}
    </div>
  );
}

export default HomePage;
