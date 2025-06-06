import { useState, useEffect } from "react";
import itemsArray from "../../data/testdata";
import "../../App.css";
import CollectionItem from "./CollectionItem";
import { useLocation } from "react-router-dom";
import axios from "axios";

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

function Collection({ search }: CollectionProps) {
  const [items, setItems] = useState<Items[]>([]);
  const [reload, setReload] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const fetchAPI = async () => {
      const collection = await axios.get(
        "http://localhost:8080/items/" + location.state.id
      );
      setItems(collection.data);
    };
    fetchAPI();
  }, [reload]);

  console.log(items);
  const listItems = items.map((item) => {
    const id = item.item_id;
    const title = item.item_name;
    const description = item.item_desc;
    const image = item?.item_image?.length
      ? item.item_image
      : "https://placehold.co/600x400";

    return (
      <CollectionItem
        id={id}
        title={title}
        description={description}
        image={image}
        func={() => setReload(!reload)}
      />
    );
  });

  return <div className="Collection">{listItems}</div>;
}

export default Collection;
