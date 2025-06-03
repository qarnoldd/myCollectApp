import { useState } from "react";
import itemsArray from "../../data/testdata";
import "../../App.css";
import CollectionItem from "./CollectionItem";
interface CollectionProps {
  search: String;
}

const listItems = itemsArray.map((item) => {
  const title = item?.title?.length ? item.title : "no title";
  const description = item?.description?.length
    ? item.description
    : "no description";
  const image = item?.images?.length
    ? item.images[0]
    : "https://placehold.co/600x400";

  return (
    <CollectionItem
      title={title}
      description={description}
      image={image}
      func={console.log("Edit Pressed")}
    />
  );
});

function Collection({ search }: CollectionProps) {
  return <div className="Collection">{listItems}</div>;
}

export default Collection;
