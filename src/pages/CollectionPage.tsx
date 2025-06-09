import { useState, useEffect } from "react";
import "../App.css";
import SearchBar from "../components/SearchBar";
import AddButton from "../components/AddNew";
import NewItem from "../components/NewItem";
import { useLocation } from "react-router-dom";
import axios from "axios";
import CollectionItem from "../components/collection/CollectionItem";

interface CollectionProps {
  search: String;
}
interface Items {
  item_id: number;
  collection_id: number;
  ean: string;
  item_name: string;
  item_desc: string;
  item_image: string;
}

function CollectionPage() {
  const location = useLocation();
  const [modalOpen, setOpen] = useState(false);

  const [items, setItems] = useState<Items[]>([]);
  const [reload, setReload] = useState(false);
  const [filter, setFilter] = useState("");

  function searchFunction(search: any) {
    return search.item_name.toLowerCase().includes(filter.toLowerCase());
  }

  useEffect(() => {
    const fetchAPI = async () => {
      const collection = await axios.get(
        "http://localhost:8080/items/" + location.state.id
      );
      setItems(collection.data);
    };
    fetchAPI();
  }, [reload]);

  const listItems = items.filter(searchFunction).map((item) => {
    var id = item.item_id;
    var title = item.item_name;
    var description = item.item_desc;
    var image = item?.item_image?.length
      ? item.item_image
      : "https://placehold.co/600x400";

    return (
      <CollectionItem
        id={id}
        title={title}
        description={description}
        image={image}
        func={() => window.location.reload()}
      />
    );
  });
  return (
    <div className="CollectionPage">
      <div className="TopBar">
        <h2>Title</h2>
        <div className="RightSide">
          <AddButton func={() => setOpen(!modalOpen)} />
          <input
            className="SearchBar"
            name="searchInput"
            placeholder="Search..."
            onChange={(e) => {
              setFilter(e.target.value);
            }}
          />
        </div>
      </div>
      {modalOpen && (
        <NewItem
          collectionid={location.state.id}
          func={() => window.location.reload()}
        />
      )}
      <div className="Collection">{listItems}</div>
    </div>
  );
}

export default CollectionPage;
